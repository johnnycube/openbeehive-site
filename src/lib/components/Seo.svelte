<script lang="ts">
  // Per-page head metadata: title, description, canonical URL, Open Graph and
  // Twitter cards. The site serves one URL per page (language switching is
  // client-side on the same URL), so there are no hreflang alternates.
  import { SITE_URL } from '$lib/config';

  let {
    title,
    description,
    path = '/',
    noindex = false
  }: { title: string; description: string; path?: string; noindex?: boolean } = $props();

  const canonical = $derived(path === '/' ? SITE_URL + '/' : SITE_URL + path);
  const ogImage = `${SITE_URL}/og.png`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  {#if noindex}
    <meta name="robots" content="noindex" />
  {:else}
    <link rel="canonical" href={canonical} />
  {/if}
  <meta property="og:site_name" content="Openbeehive" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
</svelte:head>
