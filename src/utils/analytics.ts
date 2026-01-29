/**
 * Utility functions for Google Analytics event tracking
 */

/**
 * Send a custom event to Google Analytics
 * @param eventName - The name of the event
 * @param eventParams - Additional parameters for the event
 */
export function trackEvent(eventName: string, eventParams: Record<string, any> = {}) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    console.log('📊 GA Event:', eventName, eventParams);
    (window as any).gtag('event', eventName, eventParams);
  } else {
    console.warn('⚠️ gtag not available. Event not sent:', eventName, eventParams);
  }
}

/**
 * Track contact button clicks
 * @param contactType - Type of contact (whatsapp, phone, email)
 * @param destination - The contact destination (phone number, email, etc.)
 */
export function trackContactClick(contactType: 'whatsapp' | 'phone' | 'email', destination: string) {
  trackEvent('contact_click', {
    contact_type: contactType,
    contact_destination: destination,
    event_category: 'engagement',
    event_label: `${contactType}_contact`
  });
}
