const menuBtn = document.getElementById('menu-btn');
const forAbout = document.getElementById('about-btn');
const forSolutions = document.getElementById('solutions-btn');
const forContact = document.getElementById('contact-btn');
const forSupport = document.getElementById('support-btn');

const menuToggle = document.getElementById('menu-primary-navigation-1');
const aboutMenu = document.getElementById('about-menu');
const solutionsMenu = document.getElementById('solutions-menu');
const contactMenu = document.getElementById('contact-menu');
const supportMenu = document.getElementById('support-menu');

menuBtn.addEventListener('click', () => {
  menuToggle.classList.toggle('invisible');
  menuToggle.classList.toggle('visible');
});

forAbout.addEventListener('click', () => {
  forAbout.classList.toggle('change-i');
  aboutMenu.classList.toggle('sub-menu-active');
});

forSolutions.addEventListener('click', () => {
  forSolutions.classList.toggle('change-i');
  solutionsMenu.classList.toggle('sub-menu-active');
});

forContact.addEventListener('click', () => {
  forContact.classList.toggle('change-i');
  contactMenu.classList.toggle('sub-menu-active');
});

forSupport.addEventListener('click', () => {
  forSupport.classList.toggle('change-i');
  supportMenu.classList.toggle('sub-menu-active');
});

let currentIndex = 0;

let currentDisplay = document.querySelectorAll('.current-display');

setInterval(() => {
  if (currentIndex === 5) {
    return (currentIndex = 0);
  } else {
    currentIndex++;
  }

  currentDisplay.forEach((display, index) => {
    if (currentIndex === 5) return (currentIndex = 0);

    if (index === currentIndex) {
      display.classList.add('display');
      display.classList.remove('hidden');
    } else {
      display.classList.remove('display');
      display.classList.add('hidden');
    }
  });
}, 5000);

const nextSlide = () => {
  currentIndex++;

  currentDisplay.forEach((display, index) => {
    if (currentIndex === 5) return (currentIndex = 0);

    if (index === currentIndex) {
      display.classList.add('display');
      display.classList.remove('hidden');
    } else {
      display.classList.remove('display');
      display.classList.add('hidden');
    }
  });
};

const backSlide = () => {
  currentIndex--;

  currentDisplay.forEach((display, index) => {
    if (currentIndex <= 0) return (currentIndex = 0);

    if (index === currentIndex) {
      display.classList.add('display');
      display.classList.remove('hidden');
    } else {
      display.classList.remove('display');
      display.classList.add('hidden');
    }
  });
};
