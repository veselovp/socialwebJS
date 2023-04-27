import MainSlider from './modules/sliders/sliderMain'
import VideoP from './modules/videoplayer'

window.addEventListener('DOMContentLoaded', () => {
  const slider = new MainSlider({ btns: '.next', page: '.page' })
  slider.render()

  const player = new VideoP('.showup .play', '.overlay')
  player.init()
})
