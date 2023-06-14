window.addEventListener('load', () => {
    AOS.init();

    // Video poster logics

    const videoPoster = document.querySelector('.c-about__item-video img')
    const videoFrame = document.querySelector('.c-about__item-video iframe')

    videoPoster.addEventListener('click', () => {
        videoPoster.classList.add('is-hidden')
        videoFrame.src += "?autoplay=1"
    })

     // Header burger

     const burger = document.querySelector('.c-header__burger')
     const overlay = document.querySelector('.c-overlay')

     burger.addEventListener('click', () => {
         if (burger.parentNode.parentNode.classList.contains('is-burger')) {
            burger.parentNode.parentNode.classList.remove('is-burger')
            overlay.classList.remove('is-active')
         } else {
            burger.parentNode.parentNode.classList.add('is-burger')
            overlay.classList.add('is-active')
         }
     })

     window.addEventListener('resize', () => {
        if (window.matchMedia("(min-width:768px)")) {
            burger.parentNode.parentNode.classList.remove('is-burger')
            overlay.classList.remove('is-active')
        }
     })

    // Scroll to blocks

    const menuLink = document.querySelectorAll('.c-header__menu-item a')

    menuLink.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault()
            burger.parentNode.parentNode.classList.remove('is-burger')
            overlay.classList.remove('is-active')
            document.querySelector(el.getAttribute('href')).scrollIntoView({behavior: 'smooth', block: 'center'})
        })
    })

    const logoLink = document.querySelector('.c-header__logo')

    logoLink.addEventListener('click', (e) => {
        e.preventDefault()
        burger.parentNode.parentNode.classList.remove('is-burger')
        overlay.classList.remove('is-active')
        document.querySelector('#one').scrollIntoView({behavior: 'smooth', block: 'center'})
    }) 

    // Review slider

    const swiper = new Swiper('.swiper', {
        slidesPerView: "auto",
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination'
        }
      });
})