declare global {
  interface Window {
    gtag?: (
      command: string,
      ...args: any[]
    ) => void;
    dataLayer?: any[];
    initGoogleMaps?: () => void;
  }
}

export {};