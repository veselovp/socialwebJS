export default class VideoP {
  // lozim sjuda vse triggeri
  constructor(trigers, popup) {
    this.btn = document.querySelectorAll(trigers)
    this.popup = document.querySelector(popup)
    this.close = this.popup.querySelector('.close')
    this.onPlayerStateChange = this.onPlayerStateChange.bind(this)
  }

  bindTriggers() {
    this.btn.forEach((btn, i) => {
      try {
        const blockedElem = btn.closest(
          '.module__video-item'
        ).nextElementSibling

        if (i % 2 == 0) {
          blockedElem.setAttribute('data-disabled', 'true')
        }
      } catch (e) {}

      btn.addEventListener('click', () => {
        if (
          !btn.closest('.module__video-item') ||
          btn.closest('.module__video-item').getAttribute('data-disabled') !==
            'true'
        ) {
          this.activeBtn = btn

          if (document.querySelector('iframe#frame')) {
            this.overlay.style.display = 'flex'
            if (this.path !== btn.getAttribute('data-url')) {
              this.path = btn.getAttribute('data-url')
              this.player.loadVideoById({ videoId: this.path })
            }
          } else {
            this.path = btn.getAttribute('data-url')

            this.createPlayer(this.path)
          }
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

  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '360',
      width: '640',
      videoId: `${url}`,
      events: {
        // onReady: onPlayerReady,
        // checking when is finishing video 
        onStateChange: this.onPlayerStateChange,
      },
    })

    this.popup.style.display = 'flex'
  }


  onPlayerStateChange(state) {
    try {
      const blockedElem = this.activeBtn.closest(
        '.module__video-item'
      ).nextElementSibling
      // copy play button to the blocked button for play
      // clone node , if need clone all childrens
      const playBtn = this.activeBtn.querySelector('svg').cloneNode(true)

      if (state.data === 0) {
        if (
          blockedElem
            .querySelector('.play__circle')
            .classList.contains('closed')
        ) {
          blockedElem.querySelector('.play__circle').classList.remove('closed')
          // deleting svg close icon from blocket video
          blockedElem.querySelector('svg').remove()
          // puting play video icon instead of blocket video
          blockedElem.querySelector('.play__circle').appendChild(playBtn)
          // changing text on' play video '
          blockedElem.querySelector('.play__text').textContent = 'play video'
          blockedElem.querySelector('.play__text').classList.remove('attention')
          blockedElem.style.opacity = 1
          blockedElem.style.filter = 'none'

          blockedElem.setAttribute('data-disabled', 'false')
        }
      }
    } catch (e) {}
  }

  init() {
    if (this.btn.length > 0) {
      var tag = document.createElement('script')

      tag.src = 'https://www.youtube.com/iframe_api'
      var firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

      this.bindTriggers()
      this.bindClose()
    }
  }
}
