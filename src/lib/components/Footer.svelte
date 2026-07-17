<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { APP_URL, DOCS_URL, GITHUB_URL } from '$lib/config';
  // Prerendered with the build year; hydration updates it to the visitor's year.
  const year = new Date().getFullYear();
</script>

<footer class="site-footer">
  <div class="inner">
    <div class="brand">
      <span class="mark">⬡</span>
      <div>
        <strong>{$_('app.name')}</strong>
        <small>{$_('footer.tagline')}</small>
      </div>
    </div>
    <nav class="links">
      <a href="/about">{$_('footer.about')}</a>
      <a href="/imprint">{$_('footer.imprint')}</a>
      <a href="/privacy">{$_('footer.privacy')}</a>
      <a href={DOCS_URL}>{$_('nav.docs')}</a>
      <a href={GITHUB_URL} rel="noopener" target="_blank">{$_('nav.github')}</a>
      <a href="{APP_URL}/login">{$_('nav.dashboard')}</a>
    </nav>
  </div>
  <div class="legal">© {year} {$_('app.name')} · {$_('footer.rights')}</div>
</footer>

<style>
  .site-footer { border-top: 1px solid var(--line); background: var(--cream2);
    padding: 28px 22px 24px; }
  .inner { max-width: 1080px; margin: 0 auto; display: flex; justify-content: space-between;
    align-items: center; gap: 20px; flex-wrap: wrap; }
  .brand { display: flex; align-items: center; gap: 11px; }
  .brand .mark { font-size: 1.6rem; color: var(--honey); }
  .brand strong { font-family: 'Fraunces', serif; display: block; }
  .brand small { color: var(--ink-soft); font-size: .8rem; }
  .links { display: flex; gap: 20px; flex-wrap: wrap; }
  .links a { color: var(--ink-soft); text-decoration: none; font-weight: 600; font-size: .9rem; }
  .links a:hover { color: var(--honey-d); }
  .legal { max-width: 1080px; margin: 18px auto 0; color: var(--ink-soft); font-size: .8rem; }
</style>
