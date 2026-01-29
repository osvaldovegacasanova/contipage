# Google Analytics Event Tracking Setup

## Overview

This document describes the Google Analytics 4 (GA4) event tracking implementation for contact button clicks on the Continental Andes website.

## Events Being Tracked

The following contact interactions are tracked:

1. **WhatsApp Button Click** - Floating button on bottom-right
2. **Phone Number Click** - In the "Contacto" card
3. **Email Click** - In the "Contacto" card

## Event Structure

All contact clicks send a custom event to GA4 with the following structure:

```javascript
{
  event: 'contact_click',
  contact_type: 'whatsapp' | 'phone' | 'email',
  contact_destination: '<phone_number_or_email>',
  event_category: 'engagement',
  event_label: '<type>_contact'
}
```

### Event Parameters

- **event**: `contact_click` (custom event name)
- **contact_type**: Type of contact method (`whatsapp`, `phone`, or `email`)
- **contact_destination**: The actual phone number or email address
- **event_category**: `engagement` (for grouping in GA4)
- **event_label**: Descriptive label (e.g., `whatsapp_contact`, `phone_contact`, `email_contact`)

## Implementation Details

### Files Modified/Created

1. **`src/utils/analytics.ts`** (NEW)
   - Utility functions for GA4 event tracking
   - `trackEvent()` - Generic event tracking function
   - `trackContactClick()` - Specific function for contact clicks

2. **`src/components/WhatsAppButton.astro`** (MODIFIED)
   - Added click event listener
   - Tracks WhatsApp button clicks with phone number

3. **`src/components/sections/cta/data.ts`** (MODIFIED)
   - Restructured contact data to include clickable links
   - Added separate phone and email entries with proper href attributes

4. **`src/components/sections/cta/components/InvolvementCard.astro`** (MODIFIED)
   - Added support for clickable contact links
   - Added icons for phone and email
   - Integrated GA4 tracking on link clicks

## Testing the Implementation

### 1. Local Testing

1. Build and run the site locally:
   ```bash
   npm run dev
   ```

2. Open browser console (F12)

3. Click on each contact button:
   - WhatsApp floating button
   - Phone number link
   - Email link

4. Check console for `gtag` calls (you can add `console.log` in `analytics.ts` for debugging)

### 2. Testing with GA4 DebugView

1. Install the **Google Analytics Debugger** Chrome extension
2. Enable debug mode
3. Navigate to your GA4 property → **Admin → DebugView**
4. Open your website
5. Click on contact buttons
6. View real-time events in DebugView

### 3. Production Testing

After deployment:

1. Go to GA4 property → **Reports → Realtime**
2. Click on contact buttons on the live site
3. Events should appear in real-time within seconds

## Viewing Events in Google Analytics 4

### Real-time Reports

1. Navigate to **Reports → Realtime**
2. Look for `contact_click` events
3. Click on event to see parameters

### Custom Report

Create a custom report to analyze contact clicks:

1. Go to **Explore** in GA4
2. Create a new exploration
3. Add dimensions:
   - Event name
   - Contact type (custom parameter)
   - Contact destination (custom parameter)
4. Add metrics:
   - Event count
   - Users
5. Filter by event name = `contact_click`

### Setting up Conversions (Optional)

To track contact clicks as conversions:

1. Go to **Admin → Events**
2. Find `contact_click` event
3. Toggle "Mark as conversion"

## Event Data Examples

### WhatsApp Button Click
```javascript
{
  event: 'contact_click',
  contact_type: 'whatsapp',
  contact_destination: '56927068834',
  event_category: 'engagement',
  event_label: 'whatsapp_contact'
}
```

### Phone Number Click
```javascript
{
  event: 'contact_click',
  contact_type: 'phone',
  contact_destination: '+56224619418',
  event_category: 'engagement',
  event_label: 'phone_contact'
}
```

### Email Click
```javascript
{
  event: 'contact_click',
  contact_type: 'email',
  contact_destination: 'cba@continentalandes.com',
  event_category: 'engagement',
  event_label: 'email_contact'
}
```

## Advanced Usage

### Adding More Tracked Elements

To track additional contact buttons:

1. Import the tracking function:
   ```javascript
   import { trackContactClick } from "../utils/analytics";
   ```

2. Add click handler:
   ```javascript
   element.addEventListener('click', () => {
     trackContactClick('phone', '+56224619418');
   });
   ```

### Custom Events

To track other events, use the generic `trackEvent` function:

```javascript
import { trackEvent } from "../utils/analytics";

trackEvent('custom_event_name', {
  parameter1: 'value1',
  parameter2: 'value2'
});
```

## Troubleshooting

### Events Not Appearing in GA4

1. **Check GA4 Measurement ID**: Verify `G-B91NRW3VKC` in Layout.astro is correct
2. **Check gtag is loaded**: Open console and type `window.gtag` - should be a function
3. **Ad blockers**: Disable ad blockers during testing
4. **Check DebugView**: Use GA4 DebugView for real-time validation
5. **Wait time**: Real-time reports may have 1-5 second delay

### Script Errors

If you see JavaScript errors:
- Clear browser cache
- Check that `src/utils/analytics.ts` is properly compiled
- Verify Astro is processing the scripts correctly

## Performance Considerations

- Events are sent asynchronously and don't block user interactions
- Failed tracking calls won't affect user experience
- Server-side rendering protection is included (checks for `window`)

## Privacy & GDPR

Consider adding:
1. Cookie consent banner before tracking
2. Privacy policy disclosure about analytics
3. Option to opt-out of tracking

## Support

For issues or questions about the analytics setup:
- Check GA4 documentation: https://support.google.com/analytics/answer/9267735
- Review implementation in `src/utils/analytics.ts`
