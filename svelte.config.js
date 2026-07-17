import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// The marketing site is fully static (landing + legal pages). It is prerendered
// to plain HTML and can be served by any static host / CDN. Deploy target:
// openbeehive.org. The app itself lives in a separate repo and is reached at
// app.openbeehive.org.
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({ pages: 'build', assets: 'build', fallback: undefined, strict: true })
  }
};
