<script lang="ts">
  import { _ } from 'svelte-i18n';
  import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
  title="About · Openbeehive"
  description="What Openbeehive is and why it exists: an offline-first, open-source (AGPL-3.0) record-keeping app for beekeepers — hosted for free or self-hosted."
  path="/about"
/>

<h1>{$_('pages.about_title')}</h1>
<p class="lead">{$_('app.tagline')}</p>

<p>
  Openbeehive is an offline-first record-keeping app for hobby and professional
  beekeepers. Your apiaries, hives, queens, inspections, tasks and harvests are
  stored locally on your device and sync to the server when you are online — so
  the app stays fast and fully usable out in the bee yard, with or without signal.
</p>

<h2>What it does</h2>
<ul>
  <li>Per-hive stock cards (Stockkarte) with colony strength, brood, stores, varroa, behaviour and the activities done on each visit.</li>
  <li>Queen management with the international marking colour scheme and full reign history.</li>
  <li>Location history — follow each hive across apiaries and years.</li>
  <li>Honey harvests with batch, water content and best-before, feeding the season statistics.</li>
  <li>QR labels for every hive, scannable straight into its record.</li>
</ul>

<h2>Your data, your choice</h2>
<p>
  Use the hosted service or run the single self-host binary yourself —
  PostgreSQL + object storage, or just SQLite and the local filesystem.
</p>

<h2>Open source</h2>
<p>
  Openbeehive is free and open source, licensed under the
  <a href="https://www.gnu.org/licenses/agpl-3.0.html" rel="noopener" target="_blank">GNU AGPL-3.0</a>.
  The source lives on <a href="https://github.com/johnnycube/openbeehive-app" rel="noopener" target="_blank">GitHub</a>.
  It is built and maintained by Johannes Küber, a beekeeper — contributions,
  bug reports and translations from the community are very welcome.
</p>

<h2>Disclaimer</h2>
<p>
  Openbeehive is early software (v0.1.0). It is provided “as is”, without warranty
  of any kind, to the extent permitted by law. It is a record-keeping tool and is
  not a substitute for professional veterinary advice or for your obligations
  under local beekeeping, animal-health and food-safety law. Always keep your own
  backups of important records. The hosted service is offered free of charge for
  now, with no guarantee of availability.
</p>
