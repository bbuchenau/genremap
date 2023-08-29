import './scss/index.scss'

function initNavBackground() {
    const nav = document.querySelector('.nav')
    const listener = function () {
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop

        if (scrollPosition > 10) {
            nav.classList.add('scrolled')
        } else {
            nav.classList.remove('scrolled')
        }
    }

    document.addEventListener('scroll', listener, {passive: true})
    listener()
}

function initNavButtons() {
    const buttons = document.querySelectorAll('.btn-nav')

    for (const button of buttons) {
        button.addEventListener('click', function () {
            const targetId = button.dataset.target
            const target = document.getElementById(targetId)
            const rect = target.getBoundingClientRect()
            const distance = rect.top - 72

            window.scrollBy({top: distance, behavior: 'smooth'})
        })
    }
}

document.addEventListener('DOMContentLoaded', function () {
    initNavBackground()
    initNavButtons()
})
