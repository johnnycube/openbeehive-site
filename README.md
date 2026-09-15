# openbeehive.org — marketing site

The public project page for **Openbeehive** (landing + legal pages). This is a
standalone SvelteKit app that builds to fully static HTML and is its own repo,
deployed separately from the application.

- **Deploy target:** `openbeehive.org`
- **The app** (PWA) lives in the `openbeehive-app` repo and is reached at
  `app.openbeehive.org`. Cross-links to it are configured in
  [`src/lib/config.ts`](src/lib/config.ts) (`APP_URL`).

## Develop

```bash
npm install
npm run dev        # Vite dev server on http://localhost:5174
```

## Build & deploy

```bash
npm run build      # static output in ./build
npm run preview    # serve the production build locally on :4174
```

The `build/` directory is plain static HTML/CSS/JS — host it on any static
host or CDN (Netlify, Cloudflare Pages, GitHub Pages, S3, nginx, …). Uses
`@sveltejs/adapter-static` with full prerendering (see `svelte.config.js`).

## Layout

```
src/routes/+page.svelte             landing
src/routes/(legal)/+layout.svelte   shared legal-page chrome
src/routes/(legal)/about            about
src/routes/(legal)/imprint          imprint
src/routes/(legal)/privacy          privacy
src/lib/components/Footer.svelte    shared footer
src/lib/i18n/                       en, de, fr, es, it translations (svelte-i18n)
src/lib/config.ts                   APP_URL (link target for the app domain)
```

## i18n

Five languages (en, de, fr, es, it) live in `src/lib/i18n/locales/`. The files
hold only the strings this site uses and are not shared with the app. Keys are
English; `en.json` is the fallback.

## License

Openbeehive Site is licensed under the **[GNU AGPL-3.0](LICENSE)**, like all
Openbeehive repositories.
