# TapiaM-CV — Interactive Vitae

## Project Overview

Interactive CV for **Manuel Tapia**, built as a scalable client template for the startup **Interactive Vitae**.

- **Stack:** HTML5, CSS3, vanilla JavaScript, Netlify Functions, Anthropic API
- **Deployment:** Netlify
- **Template model:** `cliente-data.js` is the only file that changes per client — all other files are reusable

## File Structure

```
TapiaM-CV/
├── index.html                  # Full UI — all sections, layout, and logic
├── cliente-data.js             # Client-specific data (only file that changes per client)
├── netlify.toml                # Netlify config (function routing, headers, redirects)
├── netlify/
│   └── functions/
│       └── chat.js             # Serverless function — chatbot via Anthropic API
└── assets/                     # Images (client photos, logos, etc.)
```

## Features

- **Dark / Light mode** toggle
- **Language switch** ES / EN
- **Floating chatbot bubble** — powered by Anthropic API via Netlify Function
- **Tour guide with blur effect** — onboarding walkthrough
- **Interactive Vitae logo** — links to [interactive-vitae.netlify.app](https://interactive-vitae.netlify.app)
- **References section**
- **Functional navigation**

## Environment Variables

Set in the Netlify dashboard (not committed to the repo):

| Variable            | Description                        |
|---------------------|------------------------------------|
| `ANTHROPIC_API_KEY` | API key for the chatbot function   |

## Favicons

Cada cliente tiene su propio favicon en `assets/`. El favicon personalizado de Manuel Tapia es `assets/favicon-mt.png`. Para todos los demás clientes usar `assets/favicon-all.png` (logo de Interactive Vitae sin fondo). Al crear un nuevo CV, copiar `favicon-all.png` a la carpeta `assets/` del nuevo cliente y referenciar en el `index.html`.

## Modelo de API Keys

**Decisión: Una API Key de Anthropic por cliente (Opción A).**

Cada cliente tiene su propia cuenta Anthropic con su propio crédito precargado.

**Proceso:**
1. Crear cuenta Anthropic con mail del cliente
2. Cargar crédito presupuestado
3. Generar API Key
4. Configurar en Netlify del cliente

Esto permite controlar el consumo individual y no mezclar costos entre clientes.

## Scalability Notes

To deploy this template for a new client:
1. Duplicate the project
2. Edit `cliente-data.js` with the new client's data
3. Replace assets in `assets/` (photo, etc.)
4. Set `ANTHROPIC_API_KEY` in the new Netlify site's environment variables
5. Deploy to Netlify

## ⚠️ Checklist al clonar para un nuevo cliente

Además de `cliente-data.js`, hay referencias al cliente anterior **hardcodeadas en `index.html`** que deben actualizarse manualmente:

| Ubicación en `index.html` | Qué cambiar |
|---|---|
| `<title>` (línea ~6) | Nombre del cliente |
| `src="assets/foto-*.jpg"` en `renderHero()` | Ruta de la foto |
| `href` y `download` en `<a id="cv-download-btn">` | Ruta y nombre del CV por defecto |
| `btn.href` y `btn.download` en `updateDownloadButton()` | Rutas de CV en ES y EN |
| Avatar inicial del chat (`id="chat-avatar"`) | Iniciales del cliente |
| `chat.header`, `chat.welcome`, `chat.faq.followup`, `chat.faq.thanks` (ES y EN) | Nombre del cliente en el chatbot |
| `tourSteps[0].title` (ES y EN) | "Hola, soy [nombre]" |

**Intereses personales (`aboutMe` en `cliente-data.js`):**
- Si el nuevo cliente no tiene intereses personales definidos, dejar `aboutMe: {}`.
- La columna derecha del "Sobre mí" se oculta automáticamente cuando `aboutMe` está vacío.
- Si el cliente sí tiene intereses, completar los campos `sports` y/o `automotive` con sus textos.

**Education (`cliente-data.js`):**
- Todos los registros de educación **deben tener el campo `achievements`** (puede ser `{ es: "", en: "" }` si no hay logros). El template accede a `edu.achievements[l]` sin null-check y rompe el renderizado si falta.
