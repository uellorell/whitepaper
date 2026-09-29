import Image from "next/image";
import { audiences, dimensions, insights, timeline } from "@/content";
import { FAQAccordion, PurchaseButton, ReportCarousel, StickyPurchase } from "@/components/interactive";

function Brand({ light = false }: { light?: boolean }) {
  return <span className={`brand ${light ? "brand--light" : ""}`} aria-label="Kompas.com"><span className="brand__mark">K</span><span>Kompas<span className="brand__dot">.com</span></span></span>;
}

function SectionLabel({ number, children, light = false }: { number: string; children: React.ReactNode; light?: boolean }) {
  return <p className={`section-label ${light ? "section-label--light" : ""}`}><span>{number}</span><span>{children}</span></p>;
}

function ReportObject({ small = false }: { small?: boolean }) {
  return (
    <div className={`report-object ${small ? "report-object--small" : ""}`} role="img" aria-label="Ilustrasi sampul digital whitepaper Beyond the Stereotypes: Understanding Gen Z">
      <div className="report-object__page report-object__page--back" aria-hidden="true"><span>IDENTITY / CULTURE / MUSIC / MONEY</span><i /></div>
      <div className="report-object__page report-object__page--middle" aria-hidden="true"><span>RESEARCH & ANALYTICS KG MEDIA</span><i /></div>
      <div className="report-cover">
        <div className="report-cover__top"><span>RESEARCH & ANALYTICS<br />KG MEDIA</span><span>4 STUDIES</span></div>
        <div className="report-cover__art" aria-hidden="true"><span className="orbit orbit--one" /><span className="orbit orbit--two" /><span className="orbit orbit--three" /><span className="orbit-dot orbit-dot--one" /><span className="orbit-dot orbit-dot--two" /></div>
        <div className="report-cover__title"><span>BEYOND THE<br />STEREOTYPES:</span><strong>Understanding<br />Gen Z</strong></div>
        <div className="report-cover__bottom"><span>IDENTITY · CULTURE · MUSIC · MONEY</span><span>KOMPAS.COM</span></div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a href="#konten" className="skip-link">Langsung ke konten</a>
      <header className="site-header" id="top">
        <div className="site-header__inner container">
          <a href="#top" className="site-header__brand" aria-label="Kompas.com, kembali ke atas"><Brand /><span className="site-header__divider" /><span className="site-header__research">Research & Analytics</span></a>
          <nav aria-label="Navigasi utama" className="site-header__nav"><a href="#cakupan">Cakupan</a><a href="#preview">Isi report</a><a href="#riset">Tentang riset</a></nav>
          <a href="#harga" className="header-cta">Dapatkan Report <span aria-hidden="true">↗</span></a>
        </div>
      </header>
      <StickyPurchase />

      <main id="konten">
        {/* 01 — Hero */}
        <section id="hero" className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero__texture" aria-hidden="true" />
          <div className="hero__inner container">
            <div className="hero__copy">
              <p className="eyebrow hero__eyebrow"><span className="eyebrow__line" /> Research & Analytics KG Media</p>
              <h1 id="hero-title" className="hero__sr-only">Beyond the Stereotypes: Understanding Gen Z</h1>
              <p className="hero__description">Memahami Gen Z Indonesia lebih dalam lewat empat riset tentang identitas, budaya, musik, dan cara mereka memandang uang.</p>
              <div className="hero__purchase"><div className="price-stack"><span className="old-price">Rp99.000</span><strong>Rp59.000</strong></div><PurchaseButton /></div>
              <p className="hero__support"><span aria-hidden="true">✦</span> Termasuk akses Kompas.com PLUS MAX</p>
            </div>
          </div>
          <div className="hero__visual">
            <Image
              className="hero__image"
              src="/images/understanding-gen-z-hero-bleed.webp"
              alt="Ilustrasi sekelompok orang berdiskusi di sekitar meja dengan laptop dan catatan."
              width={1920}
              height={1080}
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="hero__bottom container"><span>SCROLL TO EXPLORE</span><span>01 — 10</span></div>
        </section>

        {/* 02 — Why this matters */}
        <section id="mengapa" className="why section-shell" aria-labelledby="why-title">
          <div className="container">
            <SectionLabel number="02">PERSPEKTIF</SectionLabel>
            <div className="why__grid">
              <div className="why__intro"><h2 id="why-title">Gen Z Lebih Kompleks dari <em>Stereotipnya.</em></h2><p>Satu generasi bisa hidup di banyak ruang, selera, dan prioritas. Untuk memahaminya, kita perlu melihat lebih dekat.</p><Image className="why__character" src="/images/character-perspective.webp" alt="" aria-hidden="true" width={610} height={570} sizes="(max-width: 760px) 280px, 410px" /></div>
              <div className="why__questions" aria-label="Pertanyaan yang dijelajahi report">
                <p className="why__cue">PERTANYAAN YANG LAYAK DITELUSURI</p>
                <div><span>01</span><p>Mengapa mereka punya persona berbeda di media sosial?</p></div>
                <div><span>02</span><p>Mengapa generasi digital tertarik pada kamera analog dan photobox?</p></div>
                <div><span>03</span><p>Apa yang membuat sebuah lagu lebih penting daripada siapa musisinya?</p></div>
                <div><span>04</span><p>Mengapa financial independence begitu penting bagi mereka?</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — Four sides */}
        <section id="cakupan" className="sides section-shell" aria-labelledby="sides-title">
          <div className="container">
            <SectionLabel number="03">CAKUPAN REPORT</SectionLabel>
            <div className="section-heading section-heading--split"><h2 id="sides-title">Satu Report,<br /><em>Empat Sisi Gen Z.</em></h2><p>Empat lensa untuk membaca perilaku, pilihan, dan budaya Gen Z Indonesia dengan lebih utuh.</p></div>
            <div className="sides__grid">
              {dimensions.map((item) => <article key={item.number} className={`side side--${item.accent}`}><div className="side__top"><span className="side__number">{item.number}</span><span className="side__glyph" aria-hidden="true" /></div><h3>{item.title}</h3><p>{item.lead}</p><ul aria-label={`Topik ${item.title}`}>{item.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></article>)}
            </div>
          </div>
        </section>

        {/* 04 — Insight teasers */}
        <section id="insight" className="insights section-shell" aria-labelledby="insights-title">
          <div className="insights__grain" aria-hidden="true" />
          <div className="container">
            <SectionLabel number="04" light>INTIP INSIGHT</SectionLabel>
            <div className="insights__heading"><h2 id="insights-title">Temuan yang Mungkin Mengubah Cara Anda <em>Melihat Gen Z.</em></h2><p>Beberapa sudut pandang dari report. Cerita lengkap dan konteks risetnya ada di dalam.</p></div>
            <div className="insights__list">
              {insights.map((item, index) => <article key={item.number} className={`insight insight--${index + 1}`}><span className="insight__number">{item.number}</span><div><blockquote>“{item.quote}”</blockquote><p>{item.question}</p></div><span className="insight__asterisk" aria-hidden="true">✳</span>{index === 0 && <Image className="insight__character" src="/images/character-insight.webp" alt="" aria-hidden="true" width={784} height={730} sizes="(max-width: 760px) 210px, (max-width: 1100px) 250px, 340px" />}</article>)}
            </div>
            <a className="insights__link" href="#preview">Lihat Isi Report <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        {/* 05 — Report preview */}
        <section id="preview" className="preview section-shell" aria-labelledby="preview-title">
          <div className="container">
            <SectionLabel number="05">DI DALAM REPORT</SectionLabel>
            <div className="section-heading section-heading--split"><h2 id="preview-title">Intip Isi <em>Report.</em></h2><div><p>Dari identitas hingga cara mereka memandang uang: lihat bagaimana empat perspektif hadir dalam satu publikasi.</p><p className="preview__disclaimer">Sampul berasal dari PDF sumber. Halaman lainnya masih berupa ilustrasi. [Tambahkan halaman report final sebelum publikasi]</p></div></div>
            <figure className="preview__source-page">
              <Image src="/images/understanding-gen-z-hero-bleed.webp" alt="Halaman sampul Understanding Gen Z dari PDF sumber, dengan judul dan ilustrasi diskusi Gen Z." width={1920} height={1080} sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1280px) calc(100vw - 80px), 1200px" />
              <figcaption><span>VISUAL DARI PDF SUMBER</span><span>01 / SAMPUL</span></figcaption>
            </figure>
            <ReportCarousel />
          </div>
        </section>

        {/* 06 — Research provenance */}
        <section id="riset" className="research section-shell" aria-labelledby="research-title">
          <div className="container">
            <SectionLabel number="06">DI BALIK RISET</SectionLabel>
            <div className="research__header"><h2 id="research-title">Bukan Berdasarkan <em>Satu Studi.</em></h2><div><p>Report ini menyatukan beberapa studi Research & Analytics KG Media untuk memberikan gambaran yang lebih utuh tentang Gen Z.</p><p className="research__scope">Cakupan yang diketahui: Gen Z urban Indonesia dengan akses pada teknologi, budaya populer, dan gaya hidup modern. Tidak dimaksudkan untuk mewakili seluruh Gen Z Indonesia.</p></div></div>
            <div className="research__signals" aria-label="Gambaran sumber riset"><div><strong>4</strong><span>STUDI</span></div><div><strong>2024—2026</strong><span>RENTANG RISET</span></div><div><strong>Gen Z urban</strong><span>CAKUPAN YANG DIKETAHUI</span></div><div><strong>KG Media</strong><span>RESEARCH & ANALYTICS</span></div></div>
            <div className="timeline"><div className="timeline__heading"><h3>Jejak riset di balik report</h3><p>Empat studi, satu sintesis.</p></div><ol>{timeline.map((item) => <li key={`${item.year}-${item.title}`}><span className="timeline__year">{item.year}</span><span className="timeline__dot" aria-hidden="true" /><h4>{item.title}</h4><p>{item.focus}</p></li>)}</ol></div>
          </div>
        </section>

        {/* 07 — Audience relevance */}
        <section id="untuk-siapa" className="audience section-shell" aria-labelledby="audience-title">
          <div className="container">
            <SectionLabel number="07">UNTUK PEKERJAAN ANDA</SectionLabel>
            <div className="section-heading section-heading--split"><h2 id="audience-title">Insight yang Bisa Dipakai, <em>Bukan Sekadar Dibaca.</em></h2><p>Perspektif yang membantu Anda memahami konteks sebelum membuat keputusan.</p></div>
            <div className="audience__grid">{audiences.map((item) => <article key={item.number}><span>{item.number} /</span><div><h3>{item.title}</h3><p>{item.value}</p></div><span className="audience__arrow" aria-hidden="true">↗</span></article>)}</div>
          </div>
        </section>

        {/* 08 — Purchase decision */}
        <section id="harga" className="purchase section-shell" aria-labelledby="purchase-title">
          <div className="container">
            <SectionLabel number="08">NILAI REPORT</SectionLabel>
            <div className="purchase__grid"><div className="purchase__details"><h2 id="purchase-title">Dapatkan Full Report <em>Understanding Gen Z.</em></h2><p className="purchase__intro">Satu sumber insight untuk membaca empat sisi Gen Z Indonesia.</p><div className="purchase__contents"><p className="purchase__subhead">YANG ANDA DAPATKAN</p><ul><li>Sintesis insight dari 4 studi Gen Z</li><li>Perspektif identitas, kultur, musik, dan finansial</li><li>Digital whitepaper sekitar 30 halaman</li></ul></div><div className="purchase__plus"><span>+</span><div><strong>Termasuk Kompas.com PLUS MAX</strong><p>Benefit tambahan dari Kompas.com. [Konfirmasi rincian dan durasi akses PLUS MAX]</p></div></div></div><div className="purchase__panel"><div className="purchase__panel-visual"><ReportObject small /></div><div className="purchase__panel-bottom"><p>BEYOND THE STEREOTYPES: UNDERSTANDING GEN Z</p><div className="purchase__price"><span className="old-price">Rp99.000</span><strong>Rp59.000</strong></div><PurchaseButton className="purchase__button" label="Dapatkan Report Sekarang" /><span className="purchase__note">[Konfirmasi URL checkout dan mekanisme fulfillment]</span></div></div></div>
          </div>
        </section>

        {/* 09 — FAQ */}
        <section id="faq" className="faq section-shell" aria-labelledby="faq-title">
          <div className="container faq__grid"><div><SectionLabel number="09">PERTANYAAN UMUM</SectionLabel><h2 id="faq-title">Sebelum Anda <em>Memutuskan.</em></h2><p className="faq__intro">Hal praktis yang perlu diketahui tentang report dan pembeliannya.</p></div><FAQAccordion /></div>
        </section>

        {/* 10 — Final CTA */}
        <section id="penutup" className="final section-shell" aria-labelledby="final-title">
          <div className="final__linework" aria-hidden="true" />
          <div className="container final__inner">
            <div className="final__copy">
              <SectionLabel number="10" light>LANGKAH BERIKUTNYA</SectionLabel>
              <h2 id="final-title">Jangan Hanya Menebak Apa yang <em>Dipikirkan Gen Z.</em></h2>
              <p>Lihat lebih dalam bagaimana Gen Z membangun identitas, mengikuti budaya, menikmati musik, dan mengambil keputusan finansial.</p>
              <div className="final__action"><span>Rp59.000</span><PurchaseButton /></div>
            </div>
            <div className="final__characters" aria-hidden="true"><Image src="/images/character-group.webp" alt="" width={1714} height={1156} sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1100px) 340px, 470px" /></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container site-footer__inner"><div><Brand /><p>Research & Analytics KG Media</p></div><div><a href="#top">Kembali ke atas ↑</a><span>© 2026 Kompas.com</span></div></div></footer>
    </>
  );
}
