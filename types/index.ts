export interface LeadFormData {
  address: string;
  phone: string;
  firstName: string;
  lastName: string;
  email: string;
  propertyCondition: string;
  timeframe: string;
  price: string;
  leadId: string;
  timestamp?: string;
  lastUpdated?: string;
  submissionType?: string;
  isPropertyListed?: boolean;
  consent?: boolean;
}

export interface BusinessFormData {
  businessType: string;
  annualRevenue: string;
  reasonForSelling: string;
  timeline: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  leadId: string;
  submissionType: string;
  timestamp: string;
  recaptchaToken?: string;
}