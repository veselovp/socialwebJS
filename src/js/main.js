import MainSlider from './modules/sliders/sliderMain'
import MiniSlider from './modules/sliders/sliderMini'
import Difference from './modules/differences'
import VideoP from './modules/videoplayer'
import Form from './modules/form'
import ShowInfo from './modules/sliders/showInfo'

window.addEventListener('DOMContentLoaded', () => {
  const slider = new MainSlider({ btns: '.next', page: '.page' })
  slider.render()

  const modulePageSlider = new MainSlider({ btns: '.next', page: '.moduleapp' })
  modulePageSlider.render()

  const showUpSlider = new MiniSlider({
    page: '.showup__content-slider',
    prev: '.showup__prev',
    next: '.showup__next',
    activeClass: 'card-active',
    animate: true,
  })
  showUpSlider.init()

  const modulesSlider = new MiniSlider({
    page: '.modules__content-slider',
    prev: '.modules__info-btns .slick-prev',
    next: '.modules__info-btns .slick-next',
    activeClass: 'card-active',
    animate: true,
    autoplay: true,
  })
  modulesSlider.init()

  const feedSlider = new MiniSlider({
    page: '.feed__slider',
    prev: '.feed__slider .slick-prev',
    next: '.feed__slider .slick-next',
    activeClass: 'feed__item-active',
  })
  feedSlider.init()

  const player = new VideoP('.showup .play', '.overlay')
  player.init()

  new VideoP('.module__video-item .play', '.overlay').init()

  new Difference('.officerold', '.officernew', '.officer__card-item').init()

  new Form('.form').init()

  new ShowInfo('.plus__content').init()

  
})
