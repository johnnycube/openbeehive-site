<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
  title="Privacy policy · Openbeehive"
  description="Privacy policy for openbeehive.org — a static site with no cookies, no analytics and no third-party resources. GDPR information for the Openbeehive project."
  path="/privacy"
/>

<h1>{$_('pages.privacy_title')}</h1>

<h2>Controller</h2>
<p>
  Johannes Küber<br />
  Goethestr. 15<br />
  64390 Erzhausen<br />
  Germany<br />
  Email: <a href="mailto:contact@openbeehive.org">contact@openbeehive.org</a>
</p>

<h2>This website</h2>
<p>
  openbeehive.org is a static informational site. It loads no third-party
  resources (fonts, scripts and images are served from this domain), sets no
  cookies and uses no analytics or tracking of any kind.
</p>

<h2>Hosting</h2>
<p>
  The site is hosted by ALL-INKL.COM – Neue Medien Münnich, Germany. When you
  visit, the web server processes technical connection data (such as your IP
  address, the requested page, and the time of the request) in server logs.
  This processing is necessary to deliver the site and to ensure its stability
  and security, based on our legitimate interest under Art. 6(1)(f) GDPR.
</p>

<h2>Local-first by design</h2>
<p>
  Openbeehive stores your records in your browser (SQLite on OPFS) and only
  transmits changes to the server you sync with. In self-host mode, that server
  is one you operate, so your data never leaves your own infrastructure.
</p>

<h2>What the app processes</h2>
<ul>
  <li>Account identity from your login provider (when authentication is enabled).</li>
  <li>The beekeeping records you create (apiaries, hives, queens, inspections, tasks, harvests).</li>
  <li>Optional location coordinates you add to an apiary, and photos you attach.</li>
</ul>

<h2>Your rights</h2>
<p>
  Under the GDPR you have the right to access, rectify, delete and export your
  personal data, to restrict or object to its processing, and to lodge a
  complaint with a supervisory authority. You can export or delete your app
  data at any time; for anything else, contact the controller listed above.
</p>
