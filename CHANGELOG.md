# Changelog

All notable changes to the Openbeehive website are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.2] - 2026-09-15

### Changed

- Locale files trimmed to the strings the site uses; the phone mock is now
  fully translated.
- Footer names the AGPL-3.0 licence instead of "All rights reserved".
- Disclaimer no longer states a version number.
- SECURITY.md rewritten for a static site.
- Landing page: a sixth feature card, "Scripts and sensors", for the
  Connect-RPC API and per-device keys (all five languages).

## [0.1.1] - 2026-07-19

### Added

- "Try the demo" call-to-action linking to the live demo at
  `demo.openbeehive.org` (hero and final CTA).

## [0.1.0] - 2026-07-17

First public release. 🐝

### Added

- Landing page showcasing Openbeehive, with a hero, feature highlights and a
  self-hosting section.
- Cross-links to the app (`app.openbeehive.org`) and docs (`docs.openbeehive.org`).
- Legal pages: About, Imprint and Privacy.
- Shared brand identity with the app (honey/cream palette, Fraunces + Hanken
  Grotesk, hexagon mark).
- Multi-language: English, German, French, Spanish, Italian.
- Fully static build via `@sveltejs/adapter-static` — deployable to any CDN.

[Unreleased]: https://github.com/johnnycube/openbeehive-site/compare/v0.1.1...HEAD
[0.1.2]: https://github.com/johnnycube/openbeehive-site/releases/tag/v0.1.2
[0.1.1]: https://github.com/johnnycube/openbeehive-site/releases/tag/v0.1.1
[0.1.0]: https://github.com/johnnycube/openbeehive-site/releases/tag/v0.1.0
