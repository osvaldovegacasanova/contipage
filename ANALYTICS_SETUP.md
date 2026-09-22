# Google Analytics 4 — seguimiento de eventos

## Qué se mide

Propiedad GA4: `G-B91NRW3VKC`, declarada en [`src/layouts/Layout.astro`](src/layouts/Layout.astro).

| Evento | Cuándo se dispara | Dónde vive el código |
|---|---|---|
| `page_view` | Automático, en las 21 páginas reales | Fragmento inline del `Layout` |
| `contact_click` | Clic en cualquier enlace `tel:`, `mailto:` o de WhatsApp | Listener delegado del `Layout` |
| `generate_lead` | Carga de `/contacto/gracias`, la confirmación de envío del formulario | [`src/pages/contacto/gracias.astro`](src/pages/contacto/gracias.astro) |

Las 5 páginas de redirección no llevan el fragmento, a propósito: no son contenido.

### `contact_click`

```javascript
{
  contact_type: 'whatsapp' | 'phone' | 'email',
  contact_destination: '<número o correo, sin el esquema>',
  event_category: 'engagement',
  event_label: '<tipo>_contact'
}
```

### `generate_lead`

```javascript
{
  form_origin: 'contacto',
  event_category: 'engagement',
  event_label: 'contact_form'
}
```

`generate_lead` es un nombre recomendado por GA4, así que se puede marcar como
evento clave desde la interfaz sin definir nada a mano. **Hay que marcarlo**:
Administrar → Eventos → marcar como evento clave. Mientras no se haga, se
registra pero no cuenta como conversión en los informes.

## Cómo está construido

**El fragmento del `Layout`** abre `window.dataLayer`, asigna `window.gtag` y
llama a `config` de forma síncrona en el `<head>`. La librería pesada se pide
aparte, en `DOMContentLoaded`. Los eventos que ocurran antes de que descargue se
acumulan en la cola y se procesan después, sin perderse.

**El listener de contacto va delegado en el documento**, no por elemento. Los
enlaces de teléfono y correo están repartidos entre el home, la página de
contacto y los datos de la sección CTA. Un listener por elemento obliga a
acordarse de cada sitio nuevo, y así fue como el teléfono y el correo estuvieron
sin medir mientras este documento afirmaba lo contrario.

**[`src/utils/analytics.ts`](src/utils/analytics.ts)** expone `trackEvent`,
`trackContactClick` y `trackLead`. Ninguna hace nada en el servidor, y si
`window.gtag` no existe descartan el evento en silencio en vez de retrasar el
clic.

## Dos fallos corregidos el 22 de septiembre de 2026

Vale la pena conocerlos, porque los dos son fáciles de reintroducir.

**`window.gtag` no existía.** El fragmento declaraba `function gtag()` dentro
del callback del evento `load`, de modo que quedaba en el ámbito de esa función
y nunca llegaba a ser global. Las visitas seguían llegando, porque `config`
empuja a `dataLayer` igual, pero `analytics.ts` comprobaba `window.gtag` antes
de enviar, esperaba un segundo y abandonaba. **Ningún evento personalizado se
registró desde la instalación hasta esa fecha.**

La librería de Google no define esa global por su cuenta: el fragmento oficial
declara la función en el nivel superior del script, y de ahí sale. Se comprobó
descargando el script real de esta propiedad, medio millón de caracteres, sin
una sola asignación a `window.gtag`.

**La cobertura era una fracción de lo documentado.** Este archivo afirmaba que
se medían WhatsApp, teléfono y correo. En el código solo existía WhatsApp, y el
formulario no tenía ningún evento, de modo que no había forma de contar
conversiones.

## Cómo verificar

1. `npm run dev` y abrir el sitio en `localhost`. El fragmento activa
   `debug_mode` solo en `localhost` y `127.0.0.1`.
2. En GA4: Administrar → DebugView. Los eventos aparecen en segundos.
3. En la consola del navegador, `typeof window.gtag` debe decir `"function"`.
   Si dice `"undefined"`, el fallo del ámbito volvió.
4. Hacer clic en un teléfono, un correo y el botón de WhatsApp. Deben aparecer
   tres `contact_click` con distinto `contact_type`.
5. Enviar el formulario de contacto. Al llegar a `/contacto/gracias` debe
   aparecer un `generate_lead`.

En desarrollo, `analytics.ts` escribe cada evento en la consola. En producción
no escribe nada.

## Consideración pendiente

No hay gestión de consentimiento ni banner de cookies. GA4 se carga para todo
visitante. Si el sitio pasa a recibir tráfico europeo de forma relevante,
habría que añadir el modo de consentimiento de Google.
