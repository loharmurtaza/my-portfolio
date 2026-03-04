# Ghulam Murtaza – Portfolio

A personal portfolio site built with React, featuring sections for skills, experience, projects, publications, achievements, and contact.

**Live:** [murtaza-ghulam.netlify.app](https://murtaza-ghulam.netlify.app/)

---

## Tech stack

- **React** 16
- **Sass** for styles
- **react-reveal** for scroll animations
- **lottie-react** for optional Lottie animations
- **react-headroom** for header behavior

---

## Quick start

```bash
# Install dependencies
npm install

# Run locally (fetches profile data then starts dev server)
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Command           | Description                      |
|-------------------|----------------------------------|
| `npm start`       | Fetch profile + start dev server |
| `npm run build`   | Fetch profile + production build |
| `npm test`        | Run tests                        |
| `npm run deploy`  | Build and deploy (e.g. gh-pages) |
| `npm run format`  | Prettier format                  |

---

## Customization

- **Content & config:** Edit `src/portfolio.js` for:
  - Greeting, social links, skills, experience, education
  - Projects, publications, achievements, contact info
  - Splash screen (on/off, duration)
  - Illustration mode: `illustration.animated` (Lottie) vs static SVGs

- **Colors & theme:** `src/_globalColor.scss` for palette and dark/light variables.

- **Static images when `animated: false`:**
  - Greeting: `src/assets/images/manOnTable.svg`
  - Skills: `src/assets/images/developerActivity.svg`
  - Contact: `src/assets/images/contactMailDark.svg`

- **Logo/splash font:** The `</> Name` branding uses **Fira Code** (loaded from Google Fonts in `public/index.html`). Header styles in `src/components/header/Header.scss`, splash in `src/containers/splashScreen/SplashScreen.css`.

---

## Project structure (main areas)

```
src/
├── portfolio.js          # Main content and feature flags
├── assets/               # Images, Lottie JSONs
├── components/           # Header, buttons, cards, etc.
├── containers/           # Page sections (Greeting, Skills, Contact, etc.)
├── contexts/             # e.g. StyleContext (dark/light)
└── _globalColor.scss     # Theme and color variables
public/
├── index.html            # HTML shell, fonts, analytics
└── profile.json          # Fetched for Open Source projects (see fetch.js)
```

---

## Deployment

The app is set up for deployment to Netlify (`homepage` in `package.json`). For GitHub Pages, use:

```bash
npm run deploy
```

Ensure `fetch.js` (or your data pipeline) has run so `profile.json` exists before building if the Open Source section is enabled.

---

## License

Private / personal use. Customize as needed for your own portfolio.
