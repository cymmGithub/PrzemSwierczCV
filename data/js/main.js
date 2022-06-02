// Show menu function

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle('show-menu');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

// Removing show-menu class each time we click nav__link

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');

  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// Scroll section

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
    } else {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

// Show scrollTop

function scrollTop() {
  const scroll = document.getElementById('scroll-top');

  if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scroll.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);

// Scaling size when cv is downloaded
function scaleCV() {
  document.body.classList.add('scale-cv');
}

function removeScale() {
  document.body.classList.remove('scale-cv');
}

// Generate PDF
const areaCV = document.getElementById('area-cv');

const resumeButton = document.getElementById('resume-button');
// html2pdf options

const opt = {
  margin: 0,
  filename: 'PrzemysławŚwierczCV.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 4 },
  jsPDF: { format: 'a4', orientation: 'portrait' },
};

// calling html2pdf
function generateResume() {
  html2pdf(areaCV, opt);
}

// Scaling cv when download button is clicked and removing it after 4s

resumeButton.addEventListener('click', () => {
  scaleCV();
  generateResume();
  setTimeout(removeScale, 4000);
});
