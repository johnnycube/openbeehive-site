<script lang="ts">
  // Prerendered to build/404.html; Apache serves it for unknown paths via
  // `ErrorDocument 404 /404.html` in .htaccess.
  import Seo from '$lib/components/Seo.svelte';
  import NotFound from '$lib/components/NotFound.svelte';
</script>

<Seo
  title="Page not found · Openbeehive"
  description="This page does not exist on openbeehive.org."
  path="/404"
  noindex
/>

<NotFound />
