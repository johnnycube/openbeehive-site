<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { APP_URL } from '$lib/config';
  import Footer from '$lib/components/Footer.svelte';
  let { children } = $props();
</script>

<div class="site">
  <header class="bar">
    <a class="brand" href="/">
      <span class="mark">⬡</span>
      <strong>{$_('app.name')}</strong>
    </a>
    <a class="cta" href="{APP_URL}/login">{$_('landing.cta_start')}</a>
  </header>

  <main class="content">
    {@render children()}
  </main>

  <Footer />
</div>

<style>
  .site { min-height: 100vh; display: flex; flex-direction: column; }
  .bar { display: flex; justify-content: space-between; align-items: center;
    padding: 16px 22px; border-bottom: 1px solid var(--line); }
  .brand { display: flex; align-items: center; gap: 9px; text-decoration: none; color: var(--ink); }
  .brand .mark { font-size: 1.4rem; color: var(--honey); }
  .brand strong { font-family: 'Fraunces', serif; }
  .cta { background: var(--honey); color: #fff; text-decoration: none; font-weight: 700;
    padding: 9px 16px; border-radius: 11px; font-size: .9rem; }
  .content { flex: 1; max-width: 760px; margin: 0 auto; width: 100%; padding: 40px 22px 60px; }
  .content :global(h1) { font-family: 'Fraunces', serif; font-size: 2rem; margin-bottom: 14px; }
  .content :global(h2) { font-family: 'Fraunces', serif; font-size: 1.3rem; margin: 26px 0 8px; }
  .content :global(p) { color: var(--ink); line-height: 1.65; margin-bottom: 12px; }
  .content :global(a) { color: var(--honey-d); }
  .content :global(ul) { margin: 0 0 12px 20px; line-height: 1.7; }
  .content :global(.lead) { color: var(--ink-soft); font-size: 1.05rem; margin-bottom: 20px; }
  .content :global(.note) { background: var(--cream2); border: 1px solid var(--line); border-radius: 12px;
    padding: 12px 14px; color: var(--ink-soft); font-size: .9rem; margin-top: 18px; }
</style>
