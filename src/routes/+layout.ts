// Fully static marketing site: every page is prerendered to HTML at build time.
export const prerender = true;
export const trailingSlash = 'never';

import { waitLocale } from 'svelte-i18n';
import { setupI18n } from '$lib/i18n';

// Initialize svelte-i18n before the first render and wait until the initial
// locale's messages are loaded. During prerender this runs on the server, so
// the emitted HTML contains the full English page (title, hero, copy) instead
// of an empty <body> — essential for SEO and for crawlers that don't run JS.
export const load = async () => {
  setupI18n();
  await waitLocale();
};
