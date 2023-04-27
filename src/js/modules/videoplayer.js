export default class VideoP {
  // lozim sjuda vse triggeri
  constructor(trigers, popup) {
    this.btn = document.querySelectorAll(trigers)
    this.popup = document.querySelector(popup)
    this.close = this.popup.querySelector('.close')
  }
  play() {
    this.btn.forEach((one) => {
      one.addEventListener('click', () => {
        console.log('close')
      })
    })
  }

  bindTriger() {
    this.btn.forEach((one) => {
      one.addEventListener('click', () => {
        // esli player uze estj sozdavatj novij ne nado a pokazatj starij
        if (document.querySelector('iframe#frame')) {
          this.popup.style.display = 'flex'
        } else {
          const path = one.getAttribute('data-url')
          this.createplayer(path)
        }
      })
    })
  }

  bindClose() {
    this.close.addEventListener('click', () => {
      this.popup.style.display = 'none'
      this.player.stopVideo()
    })
  }

  createplayer(url) {
    this.player = new YT.Player('frame', {
      height: '360',
      width: '640',
      videoId: `${url}`,
      // events: {
      //   onReady: onPlayerReady,
      //   onStateChange: onPlayerStateChange,
      // },
    })
    console.log(this.player)
    this.popup.style.display = 'flex'
  }
  init() {
    var tag = document.createElement('script')

    tag.src = 'https://www.youtube.com/iframe_api'
    var firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    this.bindTriger()
    this.bindClose()
  }
}
