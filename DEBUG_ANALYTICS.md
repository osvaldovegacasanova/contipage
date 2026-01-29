# Debug Analytics - Step by Step

## 1. Verify GA is Loaded

Open browser console on your deployed site and run:

```javascript
// Check if gtag exists
console.log('gtag available:', typeof window.gtag);
// Expected: "function"

// Check dataLayer
console.log('dataLayer:', window.dataLayer);
// Expected: Array with config data

// Fire a manual test event
gtag('event', 'manual_test', { source: 'console' });
// Check DebugView - should appear immediately
```

## 2. Check Event Listeners

Run this to see if contact buttons have event listeners:

```javascript
// Check WhatsApp button
const whatsappBtn = document.querySelector('[data-whatsapp-button]');
console.log('WhatsApp button found:', !!whatsappBtn);

// Check contact links
const contactLinks = document.querySelectorAll('[data-contact-type]');
console.log('Contact links found:', contactLinks.length);
// Expected: 2 (phone and email)

// Check their attributes
contactLinks.forEach(link => {
  console.log('Contact:', {
    type: link.getAttribute('data-contact-type'),
    value: link.getAttribute('data-contact-value'),
    href: link.getAttribute('href')
  });
});
```

## 3. Test Click Events Manually

```javascript
// Manually trigger tracking
if (window.trackContactClick) {
  window.trackContactClick('phone', '+56224619418');
  // Check console for "📊 GA Event:" message
} else {
  console.error('trackContactClick function not found');
}
```

## 4. Check Network Tab

1. Open DevTools → Network tab
2. Filter by "collect"
3. Click a contact button
4. You should see POST requests to `google-analytics.com/g/collect`

## 5. DebugView Setup

### Using Chrome Extension:
1. Install [GA Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna)
2. Click extension icon (should turn blue when active)
3. Refresh page
4. Click contact buttons
5. Check GA4 → Admin → DebugView

### Using Debug Mode in Code:
Debug mode is now enabled in Layout.astro (line 32-34).
After deploying this change:
1. Go to GA4 → Admin → DebugView
2. Click contact buttons on your site
3. Events should appear within seconds

## 6. Expected Console Output

When you click a contact button, you should see:

```
📊 GA Event: contact_click {
  contact_type: "phone",
  contact_destination: "+56224619418",
  event_category: "engagement",
  event_label: "phone_contact"
}
```

## Common Issues

### Issue: "gtag is not a function"
**Solution:** GA script hasn't loaded yet. Wait a few seconds or check if ad blockers are interfering.

### Issue: No console logs when clicking
**Solution:** Event listeners might not be attached. Check if scripts are running:
```javascript
// Should see these in console on page load
console.log('Scripts loaded:', {
  gtag: typeof window.gtag,
  trackContactClick: typeof window.trackContactClick
});
```

### Issue: Events not in DebugView but in Network tab
**Solution:**
- Make sure debug mode is enabled (`debug_mode: true` in config)
- Make sure you're looking at the correct property in GA4
- Wait up to 30 seconds for first event to appear

### Issue: Ad blocker blocking GA
**Solution:**
- Temporarily disable ad blockers
- Or whitelist your site
- Or use server-side GA (advanced)

## Production vs Debug

**IMPORTANT:** The `debug_mode: true` setting is currently enabled. For production:

1. Remove `debug_mode: true` from Layout.astro OR
2. Make it conditional:
```javascript
gtag('config', 'G-B91NRW3VKC', {
  'debug_mode': window.location.hostname === 'localhost'
});
```

## Alternative: Test in Real-time View

If DebugView still doesn't work, you can verify events in Real-time view:

1. Go to GA4 → Reports → Realtime
2. Click contact buttons on your site
3. Look for events in the "Event count by Event name" card
4. Should see `contact_click` appear

Note: Real-time may have 5-30 second delay, DebugView is instant.
