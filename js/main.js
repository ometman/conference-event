/* mobile menu elements for open and close */
const mobileMenu = document.querySelector('#main-mobile-menu');
const mobileMenuOpen = document.querySelector('#mobile-menu-nav');
const mobileMenuClose = document.querySelectorAll('.mobile-menu-nav-toggle, .close-menu');
const blurEl = document.querySelectorAll('.blur');

// // Event for mobile menu opening
mobileMenu.addEventListener('click', () => {
  mobileMenuOpen.style.display = 'block';
  blurEl.forEach((el) => el.classList.add('blur-bg'));
});

// Event for mobile menu closing
mobileMenuClose.forEach((link) => link.addEventListener('click', () => {
  mobileMenuOpen.style.display = 'none';
  blurEl.forEach((el) => el.classList.remove('blur-bg'));
}));

// See more and see less speaker view

const mShowMoreSpkrs = document.querySelector('#more-spkrs');
const mShowLessSpkrs = document.querySelector('#less-spkrs');

const mHideShowSpkrs3 = document.querySelector('#third-spkr');
const mHideShowSpkrs4 = document.querySelector('#fourth-spkr');
const mHideShowSpkrs5 = document.querySelector('#fifth-spkr');
const mHideShowSpkrs6 = document.querySelector('#sixth-spkr');

mShowMoreSpkrs.addEventListener('click', (e) => {
  mHideShowSpkrs3.style.display = 'flex';
  mHideShowSpkrs4.style.display = 'flex';
  mHideShowSpkrs5.style.display = 'flex';
  mHideShowSpkrs6.style.display = 'flex';

  mShowMoreSpkrs.style.display = 'none';
  mShowLessSpkrs.style.display = 'flex';
  e.preventDefault();
});

mShowLessSpkrs.addEventListener('click', (e) => {
  mHideShowSpkrs3.style.display = 'none';
  mHideShowSpkrs4.style.display = 'none';
  mHideShowSpkrs5.style.display = 'none';
  mHideShowSpkrs6.style.display = 'none';

  mShowMoreSpkrs.style.display = 'flex';
  mShowLessSpkrs.style.display = 'none';
  e.preventDefault();
});