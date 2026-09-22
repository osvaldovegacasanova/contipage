/**
 * Envio de eventos a Google Analytics 4.
 *
 * `window.gtag` la define el fragmento inline de Layout.astro, en el `<head>` y
 * de forma sincrona, asi que ya existe cuando corre cualquier codigo de pagina.
 * Solo empuja a `dataLayer`: los eventos llamados antes de que descargue la
 * libreria se acumulan en la cola y se procesan despues, sin perderse.
 *
 * Hasta el 2026-09-22 este archivo esperaba a que `window.gtag` apareciera,
 * hasta un segundo, y descartaba el evento si no llegaba. Nunca llegaba, porque
 * el fragmento declaraba la funcion dentro de un callback y no la exponia. La
 * espera se elimino junto con esa causa; si `gtag` no esta, el evento se
 * descarta en silencio en vez de retrasar el clic del usuario.
 */

/** Solo en desarrollo: en produccion no se escribe nada en la consola. */
const enDesarrollo = () =>
  typeof location !== "undefined" &&
  (location.hostname === "localhost" || location.hostname === "127.0.0.1");

/**
 * Envia un evento personalizado a GA4. No hace nada en el servidor.
 */
export function trackEvent(eventName: string, eventParams: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag !== "function") {
    if (enDesarrollo()) console.warn("GA4: gtag no esta definido, evento descartado:", eventName);
    return;
  }

  if (enDesarrollo()) console.log("GA4:", eventName, eventParams);
  window.gtag("event", eventName, eventParams);
}

/** Canales de contacto que se miden como clic. */
export type CanalContacto = "whatsapp" | "phone" | "email";

/**
 * Clic en un canal de contacto directo.
 *
 * El clic casi siempre navega fuera del sitio, o abre otra aplicacion. GA4
 * envia con `sendBeacon` cuando puede, que sobrevive a la descarga de la
 * pagina, asi que no hace falta retrasar la navegacion para que el evento
 * salga.
 */
export function trackContactClick(contactType: CanalContacto, destination: string) {
  trackEvent("contact_click", {
    contact_type: contactType,
    contact_destination: destination,
    event_category: "engagement",
    event_label: `${contactType}_contact`,
  });
}

/**
 * Formulario de contacto enviado, confirmado por la pagina de gracias.
 *
 * `generate_lead` es un nombre recomendado por GA4, de modo que se puede marcar
 * como evento clave (conversion) en la interfaz sin definir nada a mano.
 */
export function trackLead(origen: string) {
  trackEvent("generate_lead", {
    form_origin: origen,
    event_category: "engagement",
    event_label: "contact_form",
  });
}
