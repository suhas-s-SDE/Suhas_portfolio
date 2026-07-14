# Suhas S — Portfolio

Premium, recruiter-focused personal portfolio built with Angular 20 (standalone components + signals). Theme: *"Turning Data Into Decisions. Turning Ideas Into Products."*

## Development

```bash
npm install
npm start        # ng serve, http://localhost:4200
```

## Production build

```bash
npm run build     # outputs to dist/portfolio/browser
```

## Deployment

Config files for four targets are included — pick whichever host you use:

### Vercel
`vercel.json` is already configured (build command + SPA rewrite). Just import the repo in Vercel and deploy.

### Netlify
`netlify.toml` sets the build command, publish directory, and SPA redirect. Connect the repo in Netlify and deploy.

### GitHub Pages
`.github/workflows/gh-pages.yml` builds and deploys on every push to `main` using the repository name as the base href. Enable **Pages → GitHub Actions** as the source in the repo settings.

### Azure Static Web Apps
`staticwebapp.config.json` configures SPA fallback routing. Point your Azure SWA build to `dist/portfolio/browser`.

## Contact form (real email delivery)

The contact form sends real email via [EmailJS](https://www.emailjs.com) — no backend server needed. Until it's configured, submissions fall back to opening the visitor's email client instead.

To enable real delivery:
1. Create a free account at emailjs.com.
2. Add an Email Service (e.g. Gmail) and note its **Service ID**.
3. Create an Email Template with `{{from_name}}`, `{{from_email}}`, and `{{message}}` variables, and note its **Template ID**.
4. Copy your **Public Key** from Account → General.
5. Fill in `src/app/core/data/contact-config.ts` with those three values.

Once all three are set (no `YOUR_` placeholders left), the form sends directly to your inbox and shows a success/error state in place.

## Content

All resume-derived content lives in a single typed data file: `src/app/core/data/resume-data.ts`. Update that file to change profile info, experience, projects, publications, certifications, education, or skills — no template edits required.

Assets (resume PDF, headshot) live in `src/assets/`.
