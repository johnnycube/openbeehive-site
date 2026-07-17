<script lang="ts">
  // Branded 404 content, shared by the prerendered /404 page (served by Apache
  // via ErrorDocument) and the SvelteKit client-side error page.
  import { _ } from 'svelte-i18n';
  import Footer from '$lib/components/Footer.svelte';
</script>

<div class="wrap">
  <header class="bar">
    <a class="brand" href="/">
      <span class="mark">⬡</span>
      <strong>{$_('app.name')}</strong>
    </a>
  </header>

  <main class="body">
    <div class="hex" aria-hidden="true">⬡</div>
    <p class="code">404</p>
    <h1>{$_('pages.notfound_title')}</h1>
    <p class="text">{$_('pages.notfound_text')}</p>
    <a class="home" href="/">{$_('pages.notfound_home')}</a>
  </main>

  <Footer />
</div>

<style>
  .wrap { min-height: 100vh; display: flex; flex-direction: column; }
  .bar { display: flex; align-items: center; padding: 16px 22px; border-bottom: 1px solid var(--line); }
  .brand { display: flex; align-items: center; gap: 9px; text-decoration: none; color: var(--ink); }
  .brand .mark { font-size: 1.4rem; color: var(--honey); }
  .brand strong { font-family: 'Fraunces', serif; }
  .body { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
    text-align: center; padding: 60px 22px; }
  .hex { font-size: 3.4rem; color: var(--honey); opacity: .35; line-height: 1; }
  .code { font-family: 'Fraunces', serif; font-weight: 700; font-size: 1.1rem; color: var(--honey-d);
    letter-spacing: .2em; margin-top: 10px; }
  h1 { font-family: 'Fraunces', serif; font-size: clamp(1.8rem, 4vw, 2.6rem); margin: 8px 0 12px; }
  .text { color: var(--ink-soft); max-width: 44ch; line-height: 1.6; }
  .home { display: inline-block; margin-top: 26px; background: var(--honey); color: #fff;
    text-decoration: none; font-weight: 700; padding: 12px 22px; border-radius: 12px;
    box-shadow: 0 6px 18px rgba(199, 127, 34, .32); }
</style>
