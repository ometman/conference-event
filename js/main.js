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

// speakers section for dynamic content

const spkrsObj = {
  spkr1: {
    name: 'Yochai Benkler',
    img: './images/speaker1.png',
    alt: 'Photo of the first speaker',
    position: 'Berkmon Professor of Entrepreneurial legal Studies at Harvard Law School',
    background: 'Benkler studies commons-based peer production, and published his serminal book the Wealth of Networks in 2005',
  },

  spkr2: {
    name: 'SohYeong Noh',
    img: './images/speaker2.png',
    alt: 'Photo of the second speaker',
    position: 'Director of Art Centre Nabi and a board member of CC Korea',
    background: 'As the main venue for new media art production in Korea, Nabi promote cross-disciplinary collaboration and understanding mong science, technology and the arts.',
  },

  spkr3: {
    name: 'Lila Tretikov',
    img: './images/speaker3.png',
    alt: 'Photo of the first speaker',
    position: 'Executive Director of the Wikimedia Foundation',
    background: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Lorem ipsum dolor sit amet consectetur!',
  },

  spkr4: {
    name: 'Kilnam Chon',
    img: './images/speaker4.png',
    alt: 'Photo of the first speaker',
    position: 'President of Internet for Asia, A nonprofit organization.',
    background: 'Kilnam Chon helped bring the internet to Asia and is an outspoked advocate for the open web and digital commons. Great work in Internet activities.',
  },

  spkr5: {
    name: 'Julia Leda',
    img: './images/speaker5.png',
    alt: 'Photo of the first speaker',
    position: 'President of Young Pirates of Europe',
    background: 'European ingetration political demoncracy and participation of youth through online as her major concern, Leda&alts report to EU copyright law was approved by the Parliament in July.',
  },

  spkr6: {
    name: 'Ryan Merkley',
    img: './images/speaker6.png',
    position: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    background: 'Ryan had been leading open-source project at the Mozilla Foundation such as the open source movement.',
  },

};


// get element and iterate over speakers object for dynamic content
const mobSpkrs = document.querySelector('#mob-spkrs');
const deskSpkrs = document.querySelector('#desk-spkrs');
const moreSpkrsBtn = document.querySelector('#more-spkrs');
const lessSpkrsBtn = document.querySelector('#less-spkrs');

//  get object keys from speakers object
const getIds = Object.keys(spkrsObj);

// show only two speakers on mobile using id array
//
const theMobSpkrs = [getIds[0], getIds[1]];
const otherMobSpkrs = [getIds[2], getIds[3], getIds[4], getIds[5]];
// thedeskSpkrs can be called directoly from the getIds

// iterate for the two speakers
theMobSpkrs.forEach((spkrId) => {
  const twoSpkrs = document.createElement('div');
  twoSpkrs.classList.add('speakers-details');
  twoSpkrs.classList.add('twoSpkrs');
   twoSpkrs.innerHTML = `
                    <div class="spkr-img">
                        <img class="speaker-img" src="${spkrsObj[spkrId].img}" alt="${spkrsObj.spkr1.alt}">
                    </div>
                    <div class="spkr-info">
                        <h3 class="spkr-name">
                        ${spkrsObj[spkrId].name}
                        </h3>
                        <p class="spkr-position">
                        ${spkrsObj[spkrId].position}
                        </p>
                        <hr class="spkr-hr">
                        <p class="spkr-bkgd">
                        ${spkrsObj[spkrId].background}
                        </p>
                    </div> 
                </div> `;
 mobSpkrs.appendChild(twoSpkrs);
});

 //  iterate for remaining speakers  
 otherMobSpkrs.forEach((spkrId) => {
  const addSpkrs = document.createElement('div');
  addSpkrs.classList.add('speakers-details');
  addSpkrs.classList.add('addSpkrs');
  addSpkrs.innerHTML = `
                    <div class="spkr-img">
                        <img class="speaker-img" src="${spkrsObj[spkrId].img}" alt="${spkrsObj.spkr1.alt}">
                    </div>
                    <div class="spkr-info">
                        <h3 class="spkr-name">
                        ${spkrsObj[spkrId].name}
                        </h3>
                        <p class="spkr-position">
                        ${spkrsObj[spkrId].position}
                        </p>
                        <hr class="spkr-hr">
                        <p class="spkr-bkgd">
                        ${spkrsObj[spkrId].background}
                        </p>
                    </div> 
                </div> `;

  // set event for showing more speakers in this loop
  //first for showing
   moreSpkrsBtn.addEventListener('click', (e) => {
  // content position should be move - prevent default behaviour
   e.preventDefault();
   // append additional speaker
   mobSpkrs.appendChild(addSpkrs);
   // change the buttons
     moreSpkrsBtn.style.display = 'none';
     lessSpkrsBtn.style.display = 'flex';
    
   });
    //second for hiding
    lessSpkrsBtn.addEventListener('click', (e) => {
      // content position should be move - prevent default behaviour
       e.preventDefault();
       // remove additional speaker
       mobSpkrs.removeChild(addSpkrs);
       // change the buttons
         moreSpkrsBtn.style.display = 'flex';
         lessSpkrsBtn.style.display = 'none';
        
       });
 });

// display the all desktop speakers

getIds.forEach((spkrId) => {
  const theDeskSpkrs = document.createElement('div');
  theDeskSpkrs.classList.add('speakers-details');
  theDeskSpkrs.innerHTML = `
                <div class="spkr-img">
                        <img class="speaker-img" src="${spkrsObj[spkrId].img}" alt="${spkrsObj.spkr1.alt}">
                    </div>
                    <div class="spkr-info">
                        <h3 class="spkr-name">
                        ${spkrsObj[spkrId].name}
                        </h3>
                        <p class="spkr-position">
                        ${spkrsObj[spkrId].position}
                        </p>
                        <hr class="spkr-hr">
                        <p class="spkr-bkgd">
                        ${spkrsObj[spkrId].background}
                        </p>
                    </div> 
                </div> `;
    deskSpkrs.appendChild(theDeskSpkrs);
});