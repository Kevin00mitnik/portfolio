const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  menu.addEventListener('click', event => {
    if (event.target instanceof HTMLAnchorElement) {
      menu.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}
