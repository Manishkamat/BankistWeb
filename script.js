'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal); 

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});




// Selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body); 

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');

const nav = document.querySelector('nav');

// console.log(allSections);
// const elementId = document.getElementById('section--1');
// const  allButtons = document.getElementsByTagName('button')
// console.log(allButtons);
// const elementsClass = document.getElementsByClassName('btn');
// console.log(elementsClass);



// Creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for imporved functionality and analytics.';

message.innerHTML = 'We use cookied for imporved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.before(message);
// header.after(message); 

// Delete elements
document.addEventListener('click', function () {
  message.remove();
})

// Styles
message.style.background = '#37383d';
message.style.width = '104%';
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered')



// Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.getAttribute('src'));
// console.log(logo.src);
// console.log(logo.alt);







const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  // const s1Coords = section1.getBoundingClientRect();
  // console.log(s1Coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log('current scroll (x,y) : ', scrollX, scrollY);

  // window.scrollTo({ left: s1Coords.left + window.scrollX, top: s1Coords.top + window.scrollY, behavior: "smooth" });

  section1.scrollIntoView({ behavior: "smooth" });
})

// const h1 = document.querySelector('h1');
// const alertH1 = function (e) {
//   alert("you clicked on h1 element of html web page.");

//   // h1.removeEventListener('mouseenter', alertH1);
// }
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);


const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

//  const links = document.querySelectorAll('.nav__link');
//  links.forEach(function (link) {
//   link.addEventListener('click', function () {this.style.backgroundColor = randomColor()});
//  })


// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   e.preventDefault();
//   // console.log(randomColor());
//   this.style.backgroundColor = randomColor();
//   // e.stopPropagation()
//   console.log("Linke", e.target);
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   e.preventDefault();

//   this.style.backgroundColor = randomColor();
//   console.log("Linkse", e.target);

// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   e.preventDefault();

//   this.style.backgroundColor = randomColor();
//   console.log("Nave", e.target);

// }, true);





document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);
  if (e.target.classList.contains('nav__link')) {
    // console.log(e.target);
    const id = e.target.getAttribute('href');

    id !== '#' && document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
})


// const h1 = document.querySelector('h1');

// // console.log(h1.querySelectorAll('.highlight'));

// // console.log(h1.childNodes);

// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// // console.log(h1.parentNode);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'pink'
// h1.closest('h1').style.borderRadius = '10px';
// h1.closest('h1').style.padding = '10px 20px 10px';

// [...h1.parentElement.children].forEach((el) => {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// }) 

// Table component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {

  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;


  // Remove active classes
  tabs.forEach((t) => t.classList.remove('operations__tab--active'));

  // Active tab
  clicked.classList.add('operations__tab--active');



  // Active content area
  const activeContent = document.querySelector(`.operations__content--${clicked.dataset.tab}`);


  tabsContent.forEach((c) => {
    if (c !== activeContent) c.classList.remove('operations__content--active');
  })

  activeContent.classList.add('operations__content--active');



})



// Menu face animation


const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((sibling) => {
      if (sibling !== link) sibling.style.opacity = this;
    })
    logo.style.opacity = this;
  }
}

nav.addEventListener('mouseover', handleHover.bind(0.5))

nav.addEventListener('mouseout', handleHover.bind(1))




// Handle navbar 
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(
  stickyNav, { root: null, threshold: 0, rootMargin: '-90px' }
);

headerObserver.observe(header)






// Handle Animation on scroll

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, { root: null, threshold: 0.15 });

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
})





// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px'
});

imgTargets.forEach(img => imgObserver.observe(img));



const slider = function () {

  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.3) translateX(-800px)';
  // slider.style.overflow = 'visible';

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`
    })
  }



  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    activeSlide(curSlide)
    goToSlide(curSlide);
  }

  btnRight.addEventListener('click', function () {
    nextSlide();
  })


  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    activeSlide(curSlide);
    goToSlide(curSlide);
  }

  btnLeft.addEventListener('click', function () {
    prevSlide()
  })


  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') nextSlide();
    e.key === 'ArrowLeft' && prevSlide();
  })


  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
    })
  }
  createDots();

  const dots = document.querySelectorAll('.dots__dot');

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeSlide(slide)
    }
  })

  const activeSlide = function (slide) {
    document.querySelectorAll('.dots__dot').forEach((dot) => dot.classList.remove('dots__dot--active'));

    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
  }


  const init = function () {
    activeSlide(0);
    goToSlide(0);
  }

  init();

}

slider();

// document.addEventListener('DOMContentLoaded', function (e) {
//   console.log("HTML and Dom tree loaded.", e);
// })


// window.addEventListener('load', function (e) {
//   console.log("Full page is loaded.", e);
// })

// window.addEventListener('beforeunload', function (e) {
//   // e.preventDefault();
//   // console.log(e);
//   e.returnValue = '';
// })