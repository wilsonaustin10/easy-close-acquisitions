export const WEBHOOK_CONFIG = {
  businessAcquisition: {
    url: 'https://api.monopolymoney.ca/api/webhooks/easy-close-business-acquisition',
    enabled: true,
    headers: {
      'Content-Type': 'application/json'
    }
  }
};

export async function sendToWebhook(data: any): Promise<{ success: boolean; error?: string }> {
  if (!WEBHOOK_CONFIG.businessAcquisition.enabled) {
    console.log('Webhook disabled');
    return { success: true };
  }

  try {
    const webhookData = {
      // Core business data
      businessType: data.businessType,
      annualRevenue: data.annualRevenue,
      reasonForSelling: data.reasonForSelling,
      timeline: data.timeline,
      
      // Contact information
      firstName: data.firstName,
      lastName: data.lastName,
      fullName: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
      phoneRaw: data.phone?.replace(/\D/g, ''),
      
      // Metadata
      leadId: data.leadId,
      submissionType: data.submissionType || 'business_acquisition',
      timestamp: data.timestamp || new Date().toISOString(),
      formattedTimestamp: new Date().toLocaleString(),
      source: 'Easy Close Acquisitions Website',
      leadType: 'Business Acquisition',
      
      // Include any additional data
      ...data
    };

    console.log('Sending to webhook:', WEBHOOK_CONFIG.businessAcquisition.url);
    
    const response = await fetch(WEBHOOK_CONFIG.businessAcquisition.url, {
      method: 'POST',
      headers: WEBHOOK_CONFIG.businessAcquisition.headers,
      body: JSON.stringify(webhookData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Webhook error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      return { 
        success: false, 
        error: `Webhook returned ${response.status}: ${errorText}` 
      };
    }

    const result = await response.json().catch(() => ({}));
    console.log('Webhook success:', result);
    return { success: true };

  } catch (error) {
    console.error('Error sending to webhook:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}