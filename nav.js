// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  var menuBtn = document.querySelector('.menu-btn');
  var mobileNav = document.querySelector('.mobile-nav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      var isOpen = mobileNav.classList.contains('open');
      menuBtn.textContent = isOpen ? 'Close' : 'Menu';
      menuBtn.setAttribute('aria-expanded', isOpen);
    });
  }
});
