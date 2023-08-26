// garis
const garis = document.querySelector('#garis');
const navMenu = document.querySelector('#nav-menu');
garis.addEventListener('click', function () {
  garis.classList.toggle('garis-aktif');
  navMenu.classList.toggle('hidden');
});

// navbar fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  }
};
