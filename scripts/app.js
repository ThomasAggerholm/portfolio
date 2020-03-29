const backgroundTextLetters = document.querySelectorAll('.js-homepage-bg-text span')
const homepageTitleSmall = document.querySelector('.homepage__title--small')
const homepageTitleBig = document.querySelector('.homepage__title--big')

let delay = 0.2

function bgTextFadeIn() {
    backgroundTextLetters.forEach(letter => {
        letter.classList.add('animated')
        letter.style.transitionDelay = `${delay}s`
        delay += 0.2
    })

    homepageTitleSmall.classList.add('animated')
    homepageTitleBig.classList.add('animated')
}

bgTextFadeIn()