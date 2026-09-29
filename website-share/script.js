(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Keep the purchase behavior of the current preview while checkout is unconfigured.
  let lastPurchaseButton = null;
  let previousOverflow = '';

  function closePurchaseDialog() {
    const backdrop = document.querySelector('.dialog-backdrop');
    if (!backdrop) return;
    backdrop.remove();
    document.body.style.overflow = previousOverflow;
    document.removeEventListener('keydown', onDialogKeydown);
    lastPurchaseButton?.focus();
    lastPurchaseButton = null;
  }

  function onDialogKeydown(event) {
    if (event.key === 'Escape') {
      closePurchaseDialog();
      return;
    }
    if (event.key !== 'Tab') return;
    const dialog = document.querySelector('.dialog');
    if (!dialog) return;
    const focusable = [...dialog.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }

  function openPurchaseDialog(trigger) {
    lastPurchaseButton = trigger;
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const backdrop = document.createElement('div');
    backdrop.className = 'dialog-backdrop';
    backdrop.innerHTML = `
      <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="checkout-dialog-title" aria-describedby="checkout-dialog-description">
        <button type="button" class="dialog-close" aria-label="Tutup">×</button>
        <p class="eyebrow">Informasi pembelian</p>
        <h2 id="checkout-dialog-title">Link pembelian belum tersedia.</h2>
        <p id="checkout-dialog-description">[Konfirmasi URL checkout] agar tombol ini dapat membuka halaman pembelian resmi.</p>
        <button type="button" class="button button--text">Kembali ke report <span aria-hidden="true" class="arrow">↗</span></button>
      </div>`;
    backdrop.addEventListener('mousedown', (event) => {
      if (event.target === backdrop) closePurchaseDialog();
    });
    backdrop.querySelectorAll('button').forEach((button) => {
      button.addEventListener('click', closePurchaseDialog);
    });
    document.body.append(backdrop);
    document.addEventListener('keydown', onDialogKeydown);
    backdrop.querySelector('.dialog-close').focus();
  }

  document.querySelectorAll('.button--primary').forEach((button) => {
    button.addEventListener('click', () => openPurchaseDialog(button));
  });

  const hero = document.getElementById('hero');
  const stickyPurchase = document.querySelector('.sticky-purchase');
  if (hero && stickyPurchase) {
    const updateSticky = () => {
      const show = hero.getBoundingClientRect().bottom < 0;
      stickyPurchase.classList.toggle('sticky-purchase--show', show);
      stickyPurchase.setAttribute('aria-hidden', String(!show));
    };
    window.addEventListener('scroll', updateSticky, { passive: true });
    window.addEventListener('resize', updateSticky);
    updateSticky();
  }

  const track = document.querySelector('.preview-track');
  if (track) {
    const cards = [...track.querySelectorAll('.preview-item')];
    const dots = [...document.querySelectorAll('.preview-dots button')];
    const position = document.querySelector('.preview-position');
    const previous = document.querySelector('.preview-buttons button:first-child');
    const next = document.querySelector('.preview-buttons button:last-child');
    let active = 0;

    const setActive = (index) => {
      active = Math.max(0, Math.min(cards.length - 1, index));
      position.innerHTML = `${String(active + 1).padStart(2, '0')} <span>/</span> ${String(cards.length).padStart(2, '0')}`;
      dots.forEach((dot, dotIndex) => {
        dot.classList.toggle('is-active', dotIndex === active);
        if (dotIndex === active) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
      });
      previous.disabled = active === 0;
      next.disabled = active === cards.length - 1;
    };

    const goTo = (index) => {
      const target = Math.max(0, Math.min(cards.length - 1, index));
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      track.scrollTo({
        left: (target / (cards.length - 1)) * maxScroll,
        behavior: reducedMotion.matches ? 'instant' : 'smooth',
      });
      setActive(target);
    };

    const syncActive = () => {
      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      setActive(maxScroll === 0 ? 0 : Math.round((track.scrollLeft / maxScroll) * (cards.length - 1)));
    };

    track.addEventListener('scroll', syncActive, { passive: true });
    track.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        goTo(active + 1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goTo(active - 1);
      }
    });
    dots.forEach((dot, index) => dot.addEventListener('click', () => goTo(index)));
    previous.addEventListener('click', () => goTo(active - 1));
    next.addEventListener('click', () => goTo(active + 1));
    setActive(0);
  }

  const faqItems = [...document.querySelectorAll('.faq-item')];
  faqItems.forEach((item, index) => {
    const button = item.querySelector('h3 button');
    button.addEventListener('click', () => {
      const shouldOpen = button.getAttribute('aria-expanded') !== 'true';
      faqItems.forEach((faqItem, faqIndex) => {
        const expanded = faqIndex === index && shouldOpen;
        faqItem.classList.toggle('faq-item--open', expanded);
        faqItem.querySelector('h3 button').setAttribute('aria-expanded', String(expanded));
        faqItem.querySelector('.faq-icon').textContent = expanded ? '−' : '+';
        faqItem.querySelector('.faq-answer').hidden = !expanded;
      });
    });
  });
})();
