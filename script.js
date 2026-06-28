// EDIT LINK DI SINI BRO
const PANEL_URL = 'https://privatepanelzyrodevv.duckdns.top';
const ORDER_URL = 'https://t.me/USERNAME_BOT_AUTOORDER';
const CHANNEL_URL = 'https://t.me/USERNAME_CHANNEL';
const DOCS_URL = 'https://t.me/USERNAME_CHANNEL';

const links = {
  panel: PANEL_URL,
  order: ORDER_URL,
  channel: CHANNEL_URL,
  docs: DOCS_URL
};

document.querySelectorAll('[data-link]').forEach((element) => {
  const key = element.getAttribute('data-link');
  element.href = links[key] || '#';
  element.target = '_blank';
  element.rel = 'noopener noreferrer';
});

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    navLinks?.classList.remove('show');
  });
});
