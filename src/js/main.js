import Slider from './modules/slider'
import VideoP from './modules/videoplayer'

window.addEventListener('DOMContentLoaded', () => {
  const slider = new Slider('.page', '.next')
  slider.render()

  const player = new VideoP('.showup .play', '.overlay')
  player.init()
})
