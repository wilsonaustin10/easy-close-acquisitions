'use client';

import React, { createContext, useState, useContext } from 'react';

interface FormState {
  // Business fields
  businessType?: string;
  annualRevenue?: string;
  reasonForSelling?: string;
  timeline?: string;
  
  // Contact fields
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  
  // System fields
  leadId?: string;
  consent?: boolean;
  timestamp?: string;
  lastUpdated?: string;
  submissionType?: string;
  
  // Legacy property fields (kept for compatibility)
  address?: string;
  propertyCondition?: string;
  timeframe?: string;
  price?: string;
  isPropertyListed?: boolean;
}

interface FormContextType {
  formState: FormState;
  updateFormData: (data: Partial<FormState>) => void;
  resetForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [formState, setFormState] = useState<FormState>({});

  const updateFormData = (data: Partial<FormState>) => {
    setFormState(prev => ({ ...prev, ...data }));
  };

  const resetForm = () => {
    setFormState({});
  };

  return (
    <FormContext.Provider value={{ formState, updateFormData, resetForm }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}