// See more and see less speaker view

const mShowMoreSpkrs = document.getElementById('more-spkrs');
const mShowLessSpkrs = document.getElementById('less-spkrs');

const mHideShowSpkrs3 = document.getElementById('third-spkr');
const mHideShowSpkrs4 = document.getElementById('fourth-spkr');
const mHideShowSpkrs5 = document.getElementById('fifth-spkr');
const mHideShowSpkrs6 = document.getElementById('sixth-spkr');

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

/* mobile menu ids */
const mobileMenu = document.getElementsById('main-mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-nav-toggle');
const mobileMenuOpen = document.getElementById('mobile-menu-nav');
const mobileLink1 = document.getElementById('mob-link1');
const mobileLink2 = document.getElementById('mob-link2');
const mobileLink3 = document.getElementById('mob-link3');

// Event for mobile menu opening
mobileMenu.addEventListener('click', () => {
  mobileMenuOpen.style.display = 'block';
});

// Event for mobile menu closing
mobileMenuClose.addEventListener('click', () => {
  mobileMenuOpen.style.display = 'none';
});

mobileLink1.addEventListener('click', () => {
  mobileMenuOpen.style.display = 'none';
});

mobileLink2.addEventListener('click', () => {
  mobileMenuOpen.style.display = 'none';
});

mobileLink3.addEventListener('click', () => {
  mobileMenuOpen.style.display = 'none';
});
