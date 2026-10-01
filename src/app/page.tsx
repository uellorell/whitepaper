import Image from "next/image";
import { audiences, dimensions, insights, timeline } from "@/content";
import { FAQAccordion, PurchaseButton, ReportCarousel, StickyPurchase } from "@/components/interactive";

const publicAsset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

function SectionLabel({ number, children, light = false }: { number: string; children: React.ReactNode; light?: boolean }) {
  return <p className={`section-label ${light ? "section-label--light" : ""}`}><span>{number}</span><span>{children}</span></p>;
}

export default function Home() {
  return (
    <>
      <a href="#konten" className="skip-link">Langsung ke konten</a>
      <StickyPurchase />

      <main id="konten">
        {/* 01 — Hero */}
        <section id="hero" className="hero section-shell" aria-labelledby="hero-title">
          <div className="hero__texture" aria-hidden="true" />
          <div className="hero__inner container">
            <div className="hero__copy">
              <p className="eyebrow hero__eyebrow"><span className="eyebrow__line" /> 01 — Research & Analytics KG Media</p>
              <h1 id="hero-title" className="hero__sr-only">Beyond the Stereotypes: Understanding Gen Z</h1>
              <div className="hero__details">
                <p className="hero__description">Memahami Gen Z Indonesia lebih dalam lewat empat riset tentang identitas, budaya, musik, dan cara mereka memandang uang.</p>
                <div className="hero__purchase"><div className="price-stack"><span className="old-price">Rp99.000</span><strong>Rp59.000</strong></div><PurchaseButton /></div>
                <p className="hero__support">Termasuk akses Kompas.com PLUS MAX</p>
              </div>
            </div>
          </div>
          <div className="hero__visual">
            <Image
              className="hero__image"
              src={publicAsset("/images/understanding-gen-z-hero-bleed.webp")}
              alt="Ilustrasi sekelompok orang berdiskusi di sekitar meja dengan laptop dan catatan."
              width={1920}
              height={1080}
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="hero__bottom container"><span>01 — 06</span></div>
        </section>

        {/* 02 — Why it matters + what you'll discover */}
        <section id="mengapa" className="explore section-shell" aria-labelledby="explore-title">
          <div className="container">
            <SectionLabel number="02">PERSPEKTIF &amp; CAKUPAN</SectionLabel>
            <div className="explore__opening">
              <div className="why__intro"><h2 id="explore-title">Gen Z Lebih Kompleks dari <em>Stereotipnya.</em></h2><p>Satu generasi bisa hidup di banyak ruang, selera, dan prioritas. Untuk memahaminya, kita perlu melihat lebih dekat.</p><Image className="why__character" src={publicAsset("/images/character-perspective.webp")} alt="" aria-hidden="true" width={610} height={570} sizes="(max-width: 760px) 280px, 410px" /></div>
              <div className="why__questions" aria-label="Pertanyaan yang dijelajahi report">
                <p className="why__cue">PERTANYAAN YANG LAYAK DITELUSURI</p>
                <div><span>01</span><p>Mengapa mereka punya persona berbeda di media sosial?</p></div>
                <div><span>02</span><p>Mengapa generasi digital tertarik pada kamera analog dan photobox?</p></div>
                <div><span>03</span><p>Apa yang membuat sebuah lagu lebih penting daripada siapa musisinya?</p></div>
                <div><span>04</span><p>Mengapa financial independence begitu penting bagi mereka?</p></div>
              </div>
            </div>
            <div id="cakupan" className="explore__dimensions" aria-labelledby="dimensions-title">
              <div className="section-heading section-heading--split"><h3 id="dimensions-title">Satu Report,<br /><em>Empat Sisi Gen Z.</em></h3><p>Dari identitas sampai cara mereka memandang uang, setiap lensa memberi konteks yang saling melengkapi.</p></div>
              <div className="sides__grid">
                {dimensions.map((item) => <article key={item.number} className={`side side--${item.accent}`}><div className="side__top"><span className="side__number">{item.number}</span><span className="side__glyph" aria-hidden="true" /></div><h3>{item.title}</h3><p>{item.lead}</p><ul aria-label={`Topik ${item.title}`}>{item.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></article>)}
              </div>
            </div>
          </div>
        </section>

        {/* 03 — Key insights + report preview */}
        <section id="insight" className="proof section-shell" aria-labelledby="insights-title">
          <div className="insights__grain" aria-hidden="true" />
          <div className="container">
            <SectionLabel number="03" light>TEMUAN &amp; PRODUK</SectionLabel>
            <div className="insights__heading"><h2 id="insights-title">Temuan yang Mungkin Mengubah Cara Anda <em>Melihat Gen Z.</em></h2><p>Beberapa sudut pandang dari report. Cerita lengkap dan konteks risetnya ada di dalam.</p></div>
            <div className="insights__list">
              {insights.map((item, index) => <article key={item.number} className={`insight insight--${index + 1}`}><span className="insight__number">{item.number}</span><div><blockquote>“{item.quote}”</blockquote><p>{item.question}</p></div></article>)}
            </div>
            <div id="preview" className="proof__preview" aria-labelledby="preview-title">
              <div className="proof__preview-heading"><div><p className="proof__eyebrow">DI DALAM REPORT</p><h3 id="preview-title">Intip Isi <em>Report.</em></h3></div><div><p>Dari identitas hingga cara mereka memandang uang: lihat bagaimana empat perspektif hadir dalam satu publikasi.</p></div></div>
              <figure className="preview__source-page">
                <Image src={publicAsset("/images/understanding-gen-z-hero-bleed.webp")} alt="Halaman sampul Understanding Gen Z dari PDF sumber, dengan judul dan ilustrasi diskusi Gen Z." width={1920} height={1080} sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1280px) calc(100vw - 80px), 1200px" />
                <figcaption className="preview__source-caption"><span>01. SAMPUL</span></figcaption>
              </figure>
              <ReportCarousel />
            </div>
          </div>
        </section>

        {/* 04 — Research provenance */}
        <section id="riset" className="research section-shell" aria-labelledby="research-title">
          <div className="container">
            <SectionLabel number="04">DI BALIK RISET</SectionLabel>
            <div className="research__header"><h2 id="research-title">Bukan Berdasarkan <em>Satu Studi.</em></h2><div><p>Report ini menyatukan beberapa studi Research & Analytics KG Media untuk memberikan gambaran yang lebih utuh tentang Gen Z.</p><p className="research__scope">Cakupan yang diketahui: Gen Z urban Indonesia dengan akses pada teknologi, budaya populer, dan gaya hidup modern. Tidak dimaksudkan untuk mewakili seluruh Gen Z Indonesia.</p></div></div>
            <div className="research__signals" aria-label="Gambaran sumber riset"><div><strong>4</strong><span>STUDI</span></div><div><strong>2024—2026</strong><span>RENTANG RISET</span></div><div><strong>Gen Z urban</strong><span>INDONESIA</span></div><div><strong>KG Media</strong><span>RESEARCH & ANALYTICS</span></div></div>
            <div className="timeline"><div className="timeline__heading"><h3>Jejak riset di balik report</h3><p>Empat studi, satu sintesis.</p></div><ol>{timeline.map((item) => <li key={`${item.year}-${item.title}`}><span className="timeline__year">{item.year}</span><span className="timeline__dot" aria-hidden="true" /><h4>{item.title}</h4><p>{item.focus}</p></li>)}</ol></div>
          </div>
        </section>

        {/* 05 — Audience + offer + compact FAQ */}
        <section id="untuk-siapa" className="conversion section-shell" aria-labelledby="conversion-title">
          <div className="container">
            <SectionLabel number="05">UNTUK PEKERJAAN &amp; KEPUTUSAN ANDA</SectionLabel>
            <div className="conversion__audience">
              <div className="section-heading section-heading--split"><h2 id="conversion-title">Insight yang Bisa Dipakai, <em>Bukan Sekadar Dibaca.</em></h2><p>Perspektif yang membantu Anda memahami konteks sebelum membuat keputusan.</p></div>
              <div className="audience__grid">{audiences.map((item) => <article key={item.number}><span>{item.number}.</span><div><h3>{item.title}</h3><p>{item.value}</p></div><span className="audience__arrow" aria-hidden="true">↗</span></article>)}</div>
            </div>
            <div id="harga" className="conversion__offer" aria-labelledby="purchase-title">
              <div className="purchase__grid"><div className="purchase__details"><p className="purchase__subhead">NILAI REPORT</p><h3 id="purchase-title">Dapatkan Full Report <em>Understanding Gen Z.</em></h3><p className="purchase__intro">Satu sumber insight untuk membaca empat sisi Gen Z Indonesia.</p><div className="purchase__contents"><p className="purchase__subhead">YANG ANDA DAPATKAN</p><ul><li>Understanding Gen Z digital whitepaper, ±30 halaman</li><li>Sintesis insight dari 4 studi Gen Z</li><li>Perspektif identitas, kultur, musik, dan finansial</li></ul></div><div className="purchase__plus"><span>+</span><div><strong>Termasuk Kompas.com PLUS MAX</strong><p>Benefit tambahan dari Kompas.com. [Konfirmasi rincian dan durasi akses PLUS MAX]</p></div></div></div><div className="purchase__panel"><div className="purchase__panel-bottom"><p className="purchase__panel-kicker">FULL DIGITAL REPORT</p><h4>Beyond the Stereotypes:<br /><em>Understanding Gen Z</em></h4><p className="purchase__panel-summary">Empat perspektif tentang identitas, kultur, musik, dan finansial dalam satu publikasi.</p><div className="purchase__panel-meta"><span>4 STUDI</span><span>±30 HALAMAN</span></div><div className="purchase__price"><span className="old-price">Rp99.000</span><strong>Rp59.000</strong></div><p className="purchase__panel-access">Termasuk akses Kompas.com PLUS MAX</p><PurchaseButton className="purchase__button" label="Dapatkan Report Sekarang" /></div></div></div>
            </div>
            <div id="faq" className="conversion__faq" aria-labelledby="faq-title"><div><p className="purchase__subhead">FAQ</p><h3 id="faq-title">Sebelum Anda <em>Memutuskan.</em></h3><p className="faq__intro">Hal praktis yang perlu diketahui tentang report dan pembeliannya.</p><Image className="faq__character" src={publicAsset("/images/character-insight.webp")} alt="" aria-hidden="true" width={784} height={730} sizes="(max-width: 767px) 220px, 280px" /></div><FAQAccordion limit={5} /></div>
          </div>
        </section>

        {/* 06 — Final CTA */}
        <section id="penutup" className="final section-shell" aria-labelledby="final-title">
          <div className="final__linework" aria-hidden="true" />
          <div className="container final__inner">
            <div className="final__copy">
              <SectionLabel number="06" light>LANGKAH BERIKUTNYA</SectionLabel>
              <h2 id="final-title">Jangan Hanya Menebak Apa yang <em>Dipikirkan Gen Z.</em></h2>
              <p>Lihat lebih dalam bagaimana Gen Z membangun identitas, mengikuti budaya, menikmati musik, dan mengambil keputusan finansial.</p>
              <div className="final__action"><span>Rp59.000</span><PurchaseButton /></div>
            </div>
            <div className="final__characters" aria-hidden="true"><Image src={publicAsset("/images/character-group.webp")} alt="" width={1714} height={1156} sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 1100px) 340px, 470px" /></div>
          </div>
        </section>
      </main>
    </>
  );
}
