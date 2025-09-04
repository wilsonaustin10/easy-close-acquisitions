export const numverifyClient = {
  async validatePhoneWithCache(phone: string) {
    // Remove formatting for validation
    const cleanPhone = phone.replace(/[^\d]/g, '');
    
    if (cleanPhone.length !== 10) {
      return { 
        valid: false, 
        error: 'Please enter a valid 10-digit phone number' 
      };
    }

    // Format phone number
    const formatted = `(${cleanPhone.slice(0, 3)}) ${cleanPhone.slice(3, 6)}-${cleanPhone.slice(6, 10)}`;

    return { 
      valid: true, 
      formatted,
      error: null 
    };
  }
};