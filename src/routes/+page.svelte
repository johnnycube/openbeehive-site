<script lang="ts">
  import { _, locale } from 'svelte-i18n';
  import { changeLanguage, SUPPORTED, LANG_LABELS, type Lang } from '$lib/i18n';
  import { APP_URL, DEMO_URL, DOCS_URL, GITHUB_URL, SITE_URL } from '$lib/config';
  import Footer from '$lib/components/Footer.svelte';
  import Seo from '$lib/components/Seo.svelte';

  // Structured data for search engines and AI crawlers (English-only is fine).
  const jsonLd = JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: 'Openbeehive',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: APP_URL,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
      license: 'https://www.gnu.org/licenses/agpl-3.0.html',
      sameAs: [GITHUB_URL],
      description:
        'Offline-first, open-source beekeeping records: apiaries, hives, queens, inspections, treatments and harvests — hosted or self-hosted.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Openbeehive',
      url: SITE_URL,
      publisher: {
        '@type': 'Organization',
        name: 'Openbeehive',
        url: SITE_URL,
        sameAs: [GITHUB_URL]
      }
    }
  ]);

  const features = [
    { t: 'landing.feature_records_title', d: 'landing.feature_records_text' },
    { t: 'landing.feature_breeding_title', d: 'landing.feature_breeding_text' },
    { t: 'landing.feature_inventory_title', d: 'landing.feature_inventory_text' },
    { t: 'landing.feature_team_title', d: 'landing.feature_team_text' },
    { t: 'landing.feature_selfhost_title', d: 'landing.feature_selfhost_text' }
  ];

  const showcasePoints = [
    'landing.showcase_point_offline',
    'landing.showcase_point_sync',
    'landing.showcase_point_qr'
  ];
</script>

<Seo
  title="Openbeehive — free, open-source beekeeping records"
  description="Free, open-source beekeeping records. Offline-first hive management: inspections, queens, treatments and harvests — for hobby and professional beekeepers."
  path="/"
/>

<svelte:head>
  {@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<header class="bar">
  <a class="brand" href="/">
    <span class="mark">⬡</span>
    <div>
      <strong>{$_('app.name')}</strong>
      <small>{$_('app.tagline')}</small>
    </div>
  </a>
  <nav>
    <a class="navlink" href="#features">{$_('nav.features')}</a>
    <a class="navlink" href="#why">{$_('nav.why')}</a>
    <a class="navlink" href="#selfhost">{$_('nav.selfhost')}</a>
    <a class="navlink" href={DOCS_URL}>{$_('nav.docs')}</a>
    <a class="navlink" href={GITHUB_URL} rel="noopener" target="_blank">{$_('nav.github')}</a>
    <div class="lang" role="group" aria-label="Language">
      {#each SUPPORTED as l}
        <button
          class:on={$locale?.startsWith(l)}
          onclick={() => changeLanguage(l)}
          title={LANG_LABELS[l]}
          aria-label={LANG_LABELS[l]}>{l.toUpperCase()}</button>
      {/each}
    </div>
    <a class="btn-login" href="{APP_URL}/login">{$_('nav.login')}</a>
  </nav>
</header>

<main>
<section class="hero">
  <div class="hex-field" aria-hidden="true"></div>
  <span class="badge">🐝 {$_('landing.badge')}</span>
  <h1>{$_('landing.hero_title')}</h1>
  <p>{$_('landing.hero_sub')}</p>
  <div class="cta">
    <a class="btn primary" href="{APP_URL}/login">{$_('landing.cta_start')}</a>
    <a class="btn ghost" href={DEMO_URL}>{$_('landing.cta_demo')}</a>
    <a class="btn ghost" href={DOCS_URL}>{$_('landing.cta_docs')}</a>
  </div>
</section>

<!-- App showcase: stylized phone mock with sample records -->
<section class="showcase">
  <div class="showcase-copy">
    <h2>{$_('landing.showcase_title')}</h2>
    <p>{$_('landing.showcase_text')}</p>
    <ul class="checklist">
      {#each showcasePoints as p}
        <li><span class="check">✓</span>{$_(p)}</li>
      {/each}
    </ul>
  </div>

  <div class="phone" aria-hidden="true">
    <div class="phone-screen">
      <div class="m-head">
        <span class="m-mark">⬡</span>
        <strong>{$_('nav.dashboard')}</strong>
      </div>
      <div class="m-stats">
        <div class="m-stat"><b>3</b><small>{$_('nav.apiaries')}</small></div>
        <div class="m-stat"><b>24</b><small>{$_('nav.hives')}</small></div>
        <div class="m-stat"><b>21</b><small>{$_('app.name') ? 'Queens' : ''}</small></div>
      </div>
      <div class="m-card">
        <div class="m-row"><span class="dot moss"></span> Hive 7 · {$_('insp.queen_seen')}</div>
        <div class="m-row"><span class="dot honey"></span> Hive 12 · {$_('insp.queen_cells')}</div>
        <div class="m-row"><span class="dot moss"></span> Orchard · {$_('harvest.title')} 14 kg</div>
      </div>
      <div class="m-tabbar">
        <span class="on">⬡</span><span>▤</span><span>▣</span><span>☰</span><span>•</span>
      </div>
    </div>
  </div>
</section>

<section id="features" class="features">
  {#each features as f, i}
    <article class="card" style="--i:{i}">
      <span class="num">{String(i + 1).padStart(2, '0')}</span>
      <h3>{$_(f.t)}</h3>
      <p>{$_(f.d)}</p>
    </article>
  {/each}
</section>

<!-- Why: the motivation -->
<section id="why" class="why">
  <h2>{$_('landing.why_title')}</h2>
  <p class="lead">{$_('landing.why_lead')}</p>
  <div class="why-cols">
    <p>{$_('landing.why_p1')}</p>
    <p>{$_('landing.why_p2')}</p>
  </div>
</section>

<!-- Open source band -->
<section class="opensource">
  <div class="os-inner">
    <div>
      <h2>{$_('landing.opensource_title')}</h2>
      <p>{$_('landing.opensource_text')}</p>
    </div>
    <a class="btn ghost light" href={GITHUB_URL} rel="noopener" target="_blank"
      >{$_('landing.opensource_cta')} ↗</a>
  </div>
</section>

<!-- Self-hosting -->
<section id="selfhost" class="selfhost">
  <h2>{$_('landing.selfhost_title')}</h2>
  <p>{$_('landing.selfhost_text')}</p>
  <code>docker compose up -d &nbsp;·&nbsp; DEPLOYMENT_PROFILE=selfhost</code>
  <p class="docs-link"><a href={DOCS_URL}>{$_('nav.docs')} ↗</a></p>
</section>

<!-- Final CTA -->
<section class="cta-final">
  <h2>{$_('landing.cta_final_title')}</h2>
  <p>{$_('landing.cta_final_text')}</p>
  <div class="cta">
    <a class="btn primary" href="{APP_URL}/login">{$_('landing.cta_start')}</a>
    <a class="btn ghost" href={DEMO_URL}>{$_('landing.cta_demo')}</a>
  </div>
  <p class="disclaimer">{$_('landing.disclaimer')}</p>
</section>
</main>

<Footer />

<style>
  .bar { display:flex; align-items:center; justify-content:space-between; gap:16px;
    padding:16px 6vw; position:sticky; top:0; backdrop-filter:blur(8px);
    background:rgba(251,246,234,.82); border-bottom:1px solid var(--line); z-index:10; flex-wrap:wrap; }
  .brand { display:flex; align-items:center; gap:10px; text-decoration:none; color:var(--ink); }
  .mark { width:38px; height:38px; display:grid; place-items:center; border-radius:11px; color:#fff;
    background:linear-gradient(150deg,var(--honey-l),var(--honey-d)); font-size:20px; }
  .brand strong { font-family:'Fraunces',serif; font-size:1.2rem; display:block; line-height:1; }
  .brand small { color:var(--ink-soft); font-size:.7rem; letter-spacing:.14em; text-transform:uppercase; }
  nav { display:flex; align-items:center; gap:16px; flex-wrap:wrap; }
  .navlink { color:var(--ink-soft); text-decoration:none; font-weight:600; font-size:.92rem; }
  .navlink:hover { color:var(--honey-d); }
  .lang { display:flex; gap:3px; }
  .lang button { background:none; border:1px solid var(--line); border-radius:7px; padding:4px 6px;
    cursor:pointer; font-weight:700; font-size:.72rem; color:var(--ink-soft); }
  .lang button.on { background:var(--honey); color:#fff; border-color:var(--honey); }
  .btn-login { background:var(--ink); color:var(--cream2)!important; padding:9px 16px; border-radius:10px;
    text-decoration:none; font-weight:700; font-size:.9rem; }

  .hero { text-align:center; padding:80px 6vw 60px; position:relative; overflow:hidden; }
  .badge { display:inline-block; background:var(--cream2); border:1px solid var(--line); color:var(--ink-soft);
    font-weight:700; font-size:.8rem; padding:6px 14px; border-radius:999px; margin-bottom:22px; }
  .hero h1 { font-size:clamp(2.2rem,5vw,3.8rem); font-weight:600; max-width:14ch; margin:0 auto; line-height:1.05; }
  .hero p { color:var(--ink-soft); font-size:1.15rem; max-width:52ch; margin:18px auto 0; line-height:1.55; }
  .cta { display:flex; gap:12px; justify-content:center; margin-top:30px; flex-wrap:wrap; }
  .btn { padding:13px 24px; border-radius:12px; font-weight:700; text-decoration:none; }
  .btn.primary { background:var(--honey); color:#fff; box-shadow:0 6px 18px rgba(199,127,34,.32); }
  .btn.ghost { border:1px solid var(--line); color:var(--ink); }
  .btn.ghost.light { border-color:rgba(255,253,247,.4); color:var(--cream2); white-space:nowrap; }
  .hex-field { position:absolute; inset:0; opacity:.5; pointer-events:none;
    background-image:url("data:image/svg+xml,%3Csvg width='56' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28 0L56 16.7v33.3L28 66.6 0 50V16.7z' fill='none' stroke='%23c79a4a' stroke-opacity='0.10' stroke-width='1.5'/%3E%3C/svg%3E"); }

  /* Showcase */
  .showcase { display:grid; grid-template-columns:1.1fr .9fr; gap:40px; align-items:center;
    max-width:1080px; margin:0 auto; padding:40px 6vw 30px; }
  .showcase-copy h2 { font-size:clamp(1.6rem,3vw,2.2rem); }
  .showcase-copy p { color:var(--ink-soft); line-height:1.6; margin:12px 0 18px; max-width:46ch; }
  .checklist { list-style:none; display:flex; flex-direction:column; gap:10px; }
  .checklist li { display:flex; align-items:center; gap:10px; font-weight:600; }
  .check { display:grid; place-items:center; width:22px; height:22px; border-radius:50%;
    background:rgba(92,107,74,.16); color:var(--moss); font-size:.8rem; font-weight:800; }
  .phone { display:flex; justify-content:center; }
  .phone-screen { width:248px; background:var(--cream2); border:1px solid var(--line); border-radius:28px;
    padding:16px 14px; box-shadow:0 24px 60px rgba(44,35,22,.16); }
  .m-head { display:flex; align-items:center; gap:8px; font-family:'Fraunces',serif; font-weight:700;
    padding:4px 4px 12px; }
  .m-mark { color:var(--honey); font-size:1.2rem; }
  .m-stats { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-bottom:12px; }
  .m-stat { background:var(--cream); border:1px solid var(--line); border-radius:12px; padding:10px 6px; text-align:center; }
  .m-stat b { display:block; font-family:'Fraunces',serif; font-size:1.3rem; color:var(--honey-d); }
  .m-stat small { color:var(--ink-soft); font-size:.66rem; }
  .m-card { background:var(--cream); border:1px solid var(--line); border-radius:14px; padding:6px 4px; }
  .m-row { display:flex; align-items:center; gap:8px; padding:9px 8px; font-size:.78rem; color:var(--ink);
    border-bottom:1px solid var(--line); }
  .m-row:last-child { border-bottom:none; }
  .dot { width:8px; height:8px; border-radius:50%; flex-shrink:0; }
  .dot.moss { background:var(--moss); }
  .dot.honey { background:var(--honey); }
  .m-tabbar { display:flex; justify-content:space-between; padding:14px 16px 4px; color:var(--ink-soft); opacity:.6; }
  .m-tabbar .on { color:var(--honey); opacity:1; }

  .features { display:grid; gap:18px; grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    max-width:1100px; margin:0 auto; padding:30px 6vw 50px; }
  .card { background:var(--cream2); border:1px solid var(--line); border-radius:18px; padding:26px;
    animation:rise .5s ease both; animation-delay:calc(var(--i)*.07s); }
  .card .num { font-family:'Fraunces',serif; color:var(--honey); font-size:1.1rem; font-weight:700; }
  .card h3 { font-size:1.3rem; margin:8px 0 8px; }
  .card p { color:var(--ink-soft); line-height:1.55; }
  @keyframes rise { from{opacity:0; transform:translateY(14px)} to{opacity:1; transform:none} }

  .why { max-width:880px; margin:0 auto; padding:40px 6vw; text-align:center; }
  .why h2 { font-size:clamp(1.8rem,3.5vw,2.5rem); }
  .why .lead { color:var(--honey-d); font-size:1.2rem; font-weight:600; margin:12px auto 26px; max-width:40ch; }
  .why-cols { display:grid; grid-template-columns:1fr 1fr; gap:26px; text-align:left; }
  .why-cols p { color:var(--ink-soft); line-height:1.7; }

  .opensource { background:var(--ink); color:var(--cream2); margin:30px 0; }
  .os-inner { max-width:1000px; margin:0 auto; padding:40px 6vw; display:flex; align-items:center;
    justify-content:space-between; gap:28px; flex-wrap:wrap; }
  .os-inner h2 { font-size:1.7rem; color:var(--cream2); }
  .os-inner p { color:rgba(255,253,247,.72); line-height:1.6; margin-top:8px; max-width:52ch; }

  .selfhost { text-align:center; padding:40px 6vw; max-width:760px; margin:0 auto; }
  .selfhost h2 { font-size:clamp(1.6rem,3vw,2.2rem); }
  .selfhost p { color:var(--ink-soft); max-width:54ch; margin:12px auto 18px; line-height:1.6; }
  .selfhost code { background:var(--ink); color:var(--cream2); padding:10px 16px; border-radius:10px;
    font-size:.85rem; display:inline-block; }
  .docs-link { margin-top:16px; }
  .docs-link a { color:var(--honey-d); font-weight:700; text-decoration:none; }

  .cta-final { text-align:center; padding:50px 6vw 70px; border-top:1px solid var(--line); }
  .cta-final h2 { font-size:clamp(1.8rem,3.5vw,2.6rem); }
  .cta-final > p { color:var(--ink-soft); max-width:48ch; margin:14px auto 26px; line-height:1.6; }
  .cta-final .disclaimer { font-size:.82rem; color:var(--ink-soft); max-width:58ch; margin:28px auto 0;
    background:var(--cream2); border:1px solid var(--line); border-radius:12px; padding:12px 16px; }

  @media (max-width:760px) {
    .showcase { grid-template-columns:1fr; }
    .why-cols { grid-template-columns:1fr; }
    .phone { order:-1; }
  }
</style>
