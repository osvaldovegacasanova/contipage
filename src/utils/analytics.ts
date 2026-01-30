/**
 * Utility functions for Google Analytics event tracking
 */

/**
 * Wait for gtag to be available, with timeout
 */
function waitForGtag(maxAttempts = 10, interval = 100): Promise<boolean> {
  return new Promise((resolve) => {
    let attempts = 0;

    const check = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        resolve(true);
      } else if (attempts >= maxAttempts) {
        resolve(false);
      } else {
        attempts++;
        setTimeout(check, interval);
      }
    };

    check();
  });
}

/**
 * Send a custom event to Google Analytics
 * @param eventName - The name of the event
 * @param eventParams - Additional parameters for the event
 */
export async function trackEvent(eventName: string, eventParams: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;

  // If gtag is available, send immediately
  if ((window as any).gtag) {
    console.log('📊 GA Event:', eventName, eventParams);
    (window as any).gtag('event', eventName, eventParams);
    return;
  }

  // Otherwise, wait for it to load
  console.log('⏳ Waiting for gtag to load...');
  const gtagAvailable = await waitForGtag();

  if (gtagAvailable) {
    console.log('📊 GA Event (delayed):', eventName, eventParams);
    (window as any).gtag('event', eventName, eventParams);
  } else {
    console.warn('⚠️ gtag not available after waiting. Event not sent:', eventName, eventParams);
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
