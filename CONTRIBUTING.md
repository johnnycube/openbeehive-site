# Contributing to the Openbeehive website

Thanks for helping improve [openbeehive.org](https://openbeehive.org)! This
repository is the **marketing/landing site** (a static SvelteKit app). The
application and documentation live in
[`openbeehive`](https://github.com/johnnycube/openbeehive-app) and
[`openbeehive-docs`](https://github.com/johnnycube/openbeehive-docs).

## Development setup

You'll need **Node 24+**.

```bash
npm install
npm run dev        # http://localhost:5174
npm run build      # static output in ./build
npm run preview    # serve the production build on :4174
```

The site is fully prerendered with `@sveltejs/adapter-static` — the `build/`
output is plain static files for any CDN or static host.

## Conventions

- **Keep the shared brand.** Colours (honey `#c77f22`, cream `#fbf6ea`, ink
  `#2c2316`), fonts (Fraunces for headings, Hanken Grotesk for body) and the
  hexagon mark are shared with the app. Don't diverge.
- **All copy is translated.** User-facing text lives in
  `src/lib/i18n/locales/*.json`. Add new strings to every locale: `en`, `de`,
  `fr`, `es`, `it`. Keys are English.
- **Legal pages** (`about`, `imprint`, `privacy`) contain the operator's real
  contact details. If you fork and deploy this site, replace them with your own.

## Pull requests

1. Fork and branch from `main`.
2. Make sure it builds (`npm run build`).
3. Reference any related issue (`Closes #123`).

## License

By contributing, you agree that your contributions are licensed under the
project's [AGPL-3.0](LICENSE) license.
