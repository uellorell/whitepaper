"use client";

import { useEffect, useRef, useState } from "react";
import { faqItems, previewPages } from "@/content";

function Arrow({ direction = "right" }: { direction?: "left" | "right" }) {
  return <span aria-hidden="true" className={direction === "left" ? "arrow arrow--left" : "arrow"}>↗</span>;
}

export function PurchaseButton({ className = "", label = "Dapatkan Report" }: { className?: string; label?: string }) {
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  // [Konfirmasi URL checkout] — set NEXT_PUBLIC_CHECKOUT_URL before launch.
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim();

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    close.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab" || !dialog.current) return;
      const focusable = Array.from(dialog.current.querySelectorAll<HTMLElement>("button, a[href], [tabindex]:not([tabindex='-1'])"));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className={`button button--primary ${className}`}
        onClick={() => checkoutUrl ? window.location.assign(checkoutUrl) : setOpen(true)}
      >
        <span>{label}</span><Arrow />
      </button>
      {open && (
        <div className="dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setOpen(false); }}>
          <div ref={dialog} role="dialog" aria-modal="true" aria-labelledby="checkout-dialog-title" aria-describedby="checkout-dialog-description" className="dialog">
            <button ref={close} type="button" className="dialog-close" aria-label="Tutup" onClick={() => setOpen(false)}>×</button>
            <p className="eyebrow">Informasi pembelian</p>
            <h2 id="checkout-dialog-title">Link pembelian belum tersedia.</h2>
            <p id="checkout-dialog-description">[Konfirmasi URL checkout] agar tombol ini dapat membuka halaman pembelian resmi.</p>
            <button type="button" className="button button--text" onClick={() => setOpen(false)}>Kembali ke report <Arrow /></button>
          </div>
        </div>
      )}
    </>
  );
}

export function StickyPurchase() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => {
      setShow(!entry.isIntersecting && entry.boundingClientRect.bottom < 0);
    }, { threshold: 0 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`sticky-purchase ${show ? "sticky-purchase--show" : ""}`} aria-hidden={!show}>
      <div className="sticky-purchase__inner container">
        <div className="sticky-purchase__name"><span className="sticky-purchase__eyebrow">WHITEPAPER</span><strong>Understanding Gen Z</strong></div>
        <div className="sticky-purchase__action"><strong>Rp59.000</strong><a href="#harga" className="button button--small">Dapatkan Report <Arrow /></a></div>
      </div>
    </div>
  );
}

export function ReportCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    const next = Math.max(0, Math.min(previewPages.length - 1, index));
    const el = track.current;
    if (!el) return;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    el.scrollTo({
      left: (next / (previewPages.length - 1)) * maxScroll,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
    setActive(next);
  };

  const syncActive = () => {
    const el = track.current;
    if (!el) return;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    setActive(maxScroll === 0 ? 0 : Math.round((el.scrollLeft / maxScroll) * (previewPages.length - 1)));
  };

  return (
    <div className="preview-carousel">
      <div
        ref={track}
        className="preview-track"
        role="region"
        aria-label="Pratinjau ilustratif report"
        tabIndex={0}
        onScroll={syncActive}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") { event.preventDefault(); goTo(active + 1); }
          if (event.key === "ArrowLeft") { event.preventDefault(); goTo(active - 1); }
        }}
      >
        {previewPages.map((page, index) => (
          <article className={`preview-item preview-item--${page.type}`} key={`${page.title}-${index}`} aria-label={`${page.label}, ${index + 1} dari ${previewPages.length}`}>
            <div className={`mock-page mock-page--${page.type}`}>
              <div className="mock-page__top"><span>{page.kicker}</span><span>KG MEDIA</span></div>
              <div className="mock-page__body">
                <span className="mock-page__graphic" aria-hidden="true"><span /><span /><span /></span>
                <p className="mock-page__section">BEYOND THE STEREOTYPES</p>
                <h3>{page.title}</h3>
                <p className="mock-page__subtitle">{page.subtitle}</p>
              </div>
              <div className="mock-page__bottom"><span>UNDERSTANDING GEN Z</span><span>{String(index + 1).padStart(2, "0")}</span></div>
              <span className="mock-page__watermark">ILUSTRASI</span>
            </div>
            <p className="preview-caption"><span>{String(index + 1).padStart(2, "0")}</span>{page.label}</p>
          </article>
        ))}
      </div>
      <div className="preview-controls">
        <span className="preview-position" aria-live="polite">{String(active + 1).padStart(2, "0")} <span>/</span> {String(previewPages.length).padStart(2, "0")}</span>
        <div className="preview-dots" aria-label="Pilih halaman pratinjau">
          {previewPages.map((page, index) => <button key={page.title} type="button" className={active === index ? "is-active" : ""} aria-label={`Lihat pratinjau ${index + 1}`} aria-current={active === index ? "true" : undefined} onClick={() => goTo(index)} />)}
        </div>
        <div className="preview-buttons"><button type="button" aria-label="Halaman sebelumnya" disabled={active === 0} onClick={() => goTo(active - 1)}>←</button><button type="button" aria-label="Halaman berikutnya" disabled={active === previewPages.length - 1} onClick={() => goTo(active + 1)}>→</button></div>
      </div>
    </div>
  );
}

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="faq-list">
      {faqItems.map((item, index) => {
        const expanded = open === index;
        return (
          <div className={`faq-item ${expanded ? "faq-item--open" : ""}`} key={item.question}>
            <h3>
              <button type="button" aria-expanded={expanded} aria-controls={`faq-answer-${index}`} id={`faq-question-${index}`} onClick={() => setOpen(expanded ? null : index)}>
                <span>{item.question}</span><span className="faq-icon" aria-hidden="true">{expanded ? "−" : "+"}</span>
              </button>
            </h3>
            <div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} hidden={!expanded} className="faq-answer"><p>{item.answer}</p></div>
          </div>
        );
      })}
    </div>
  );
}
