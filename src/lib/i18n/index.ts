// Internationalization. Language is taken from localStorage or the browser's
// Accept-Language. Add more languages simply by adding a locale file and
// registering it below.
import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';
import { browser } from '$app/environment';

export const SUPPORTED = ['en', 'de', 'fr', 'es', 'it'] as const;
export type Lang = (typeof SUPPORTED)[number];

// Human-readable language names, shown in language pickers (endonyms).
export const LANG_LABELS: Record<Lang, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  es: 'Español',
  it: 'Italiano'
};

const FALLBACK: Lang = 'en';

register('en', () => import('./locales/en.json'));
register('de', () => import('./locales/de.json'));
register('fr', () => import('./locales/fr.json'));
register('es', () => import('./locales/es.json'));
register('it', () => import('./locales/it.json'));

let initialized = false;

// Called from the root +layout.ts load so the locale is registered and loaded
// before the first render — this is what makes SSR/prerender emit real content
// instead of an empty shell (combined with `waitLocale()` in the load).
export function setupI18n() {
  if (initialized) return;
  initialized = true;
  let initial: string = FALLBACK;
  if (browser) {
    const saved = localStorage.getItem('lang');
    const nav = getLocaleFromNavigator()?.split('-')[0];
    initial = saved || (SUPPORTED.includes(nav as Lang) ? (nav as string) : FALLBACK);
  }
  init({ fallbackLocale: FALLBACK, initialLocale: initial });
}

export function changeLanguage(lang: Lang) {
  locale.set(lang);
  if (browser) localStorage.setItem('lang', lang);
}
