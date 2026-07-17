<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
  title="Imprint · Openbeehive"
  description="Legal notice (Impressum) for openbeehive.org — operator identity and contact details for the Openbeehive project."
  path="/imprint"
/>

<h1>{$_('pages.imprint_title')}</h1>

<p class="lead">Information according to § 5 DDG (Germany).</p>

<h2>Operator</h2>
<p>
  Johannes Küber<br />
  Goethestr. 15<br />
  64390 Erzhausen<br />
  Germany
</p>

<h2>Contact</h2>
<p>
  Email: <a href="mailto:contact@openbeehive.org">contact@openbeehive.org</a>
</p>

<h2>Responsible for content</h2>
<p>Johannes Küber, address as above (§ 18 Abs. 2 MStV).</p>
