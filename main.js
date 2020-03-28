// Header scroll
const siteHeader = document.querySelector('#header');

document.addEventListener('scroll', () => {
    if (window.pageYOffset > 0) {
        siteHeader.classList.add('scrolled');
    } else {
        siteHeader.classList.remove('scrolled');
    }
});


// Frontpage animations
const tlFront = new gsap.timeline();
const
    box = document.querySelector('.hero__info-box'),
    heroTitle = document.querySelectorAll('.hero-h1'),
    heroText = document.querySelectorAll('.hero-text'),
    scroll = document.querySelector('.hero-scroll__wrapper');

tlFront.from(heroTitle, { duration: 0.4, opacity: 0, y: 50, stagger: 0.2, ease: Power2.easeOut });
tlFront.from(heroText, { duration: 0.4, opacity: 0, y: 50, ease: Power2.easeOut }, '-=0.2');
tlFront.from(box, { duration: 0.6, width: 0, padding: 0, ease: Power2.easeOut }, '-=0.2');
tlFront.from(scroll, { duration: 0.4, opacity: 0, x: -50, ease: Power2.easeOut }, '-=0.2');


// ScrollMagic frontpage
const controller = new ScrollMagic.Controller();
const tl = new gsap.timeline();

const
    boxTitle = document.querySelectorAll('.js-infobox'),
    frontpageText = document.querySelectorAll('.js-frontpage-text'),
    frontpageCaseContainer = document.querySelector('.js-frontpage-cases');

tl.to(box, { duration: 1, ease: Back.easeOut.config(1.7), width: '500px', right: '5%', y: '150px' });
tl.from(boxTitle, { duration: 0.4, opacity: 0, y: 50, stagger: 0.2, ease: Power2.easeOut });
tl.from(frontpageText, { duration: 0.4, opacity: 0, x: -50, stagger: 0.2, ease: Power2.easeOut }, '-=0.3');
tl.from (frontpageCaseContainer, { duration: 0.4, opacity: 0, y: 20, ease: Power2.easeOut }, '-=0.2');



const scene = new ScrollMagic.Scene({
    triggerElement: '#frontpage-work',
    triggerHook: 'onCenter'
})
    .setTween(tl)
    .addTo(controller)