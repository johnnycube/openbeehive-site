<script lang="ts">
  // Client-side navigation errors (e.g. an unknown route reached via the
  // SvelteKit router). Direct hits on unknown URLs are handled by Apache
  // serving the prerendered /404.html instead.
  import NotFound from '$lib/components/NotFound.svelte';
</script>

<svelte:head>
  <title>Page not found · Openbeehive</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<NotFound />
