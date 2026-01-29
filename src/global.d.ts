// Global type declarations for Google Analytics / Google Tag Manager
export {};

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }

  var dataLayer: any[] | undefined;
  function gtag(...args: any[]): void;
}
