const backgroundTextLetters = document.querySelectorAll('.js-homepage-bg-text span')
const homepageTitleSmall = document.querySelector('.homepage__title--small')
const homepageTitleBig = document.querySelector('.homepage__title--big')

let duration = 0.5

function bgTextFadeIn() {
    backgroundTextLetters.forEach(letter => {
        letter.classList.add('animated')
        letter.style.transitionDuration = `${duration}s`
        duration += 0.2
    })

    homepageTitleSmall.classList.add('animated')
    homepageTitleBig.classList.add('animated')
    console.log('Working')
}

bgTextFadeIn()