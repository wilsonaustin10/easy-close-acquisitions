import { google } from 'googleapis';

// Initialize Google Sheets client
let sheetsClient: any = null;

export function getGoogleSheetsClient() {
  if (sheetsClient) {
    return sheetsClient;
  }

  try {
    // Parse the service account key from environment variable
    const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_KEY 
      ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY)
      : null;

    if (!serviceAccountKey) {
      console.error('Google Service Account Key not found in environment variables');
      return null;
    }

    // Create JWT client
    const jwtClient = new google.auth.JWT(
      serviceAccountKey.client_email,
      undefined,
      serviceAccountKey.private_key,
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    // Initialize sheets client
    sheetsClient = google.sheets({ version: 'v4', auth: jwtClient });
    
    return sheetsClient;
  } catch (error) {
    console.error('Error initializing Google Sheets client:', error);
    return null;
  }
}

export async function appendToGoogleSheet(data: any): Promise<boolean> {
  try {
    const sheets = getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEETS_BUSINESS_ID;

    if (!sheets || !spreadsheetId) {
      console.error('Google Sheets not properly configured');
      return false;
    }

    // Format the data for the spreadsheet
    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });
    
    const values = [[
      timestamp,                          // Timestamp
      data.leadId || '',                 // Lead ID
      data.firstName || '',              // First Name
      data.lastName || '',               // Last Name
      data.email || '',                  // Email
      data.phone || '',                  // Phone
      data.businessType || '',           // Business Type
      data.annualRevenue || '',          // Annual Revenue
      data.reasonForSelling || '',       // Reason for Selling
      data.timeline || '',               // Timeline
      data.submissionType || 'business_acquisition', // Submission Type
      'Easy Close Acquisitions Website', // Source
      'ECBA',                            // Tag
      data.address || '',                // Address (if property form)
      data.propertyCondition || '',      // Property Condition (if property form)
      data.price || '',                  // Price (if property form)
      data.timeframe || ''               // Timeframe (if property form)
    ]];

    // Append the data to the spreadsheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:Q', // Updated to include Tag column
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values
      }
    });

    console.log('Successfully appended to Google Sheet:', response.data);
    return true;

  } catch (error) {
    console.error('Error appending to Google Sheet:', error);
    return false;
  }
}

// Initialize sheet headers if needed
export async function initializeGoogleSheet(): Promise<boolean> {
  try {
    const sheets = getGoogleSheetsClient();
    const spreadsheetId = process.env.GOOGLE_SHEETS_BUSINESS_ID;

    if (!sheets || !spreadsheetId) {
      console.error('Google Sheets not properly configured');
      return false;
    }

    // Check if headers exist
    const getResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!A1:Q1'
    });

    // If no headers, add them
    if (!getResponse.data.values || getResponse.data.values.length === 0) {
      const headers = [[
        'Timestamp',
        'Lead ID',
        'First Name',
        'Last Name',
        'Email',
        'Phone',
        'Business Type',
        'Annual Revenue',
        'Reason for Selling',
        'Timeline',
        'Submission Type',
        'Source',
        'Tag',
        'Address',
        'Property Condition',
        'Price',
        'Timeframe'
      ]];

      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: 'Sheet1!A1:Q1',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: headers
        }
      });

      console.log('Headers initialized in Google Sheet');
    }

    return true;

  } catch (error) {
    console.error('Error initializing Google Sheet:', error);
    return false;
  }
}