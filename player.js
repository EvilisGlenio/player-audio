window.player = {
    cover: document.querySelector('.card-image'),
    title: document.querySelector('.card-content h5'),
    artist: document.querySelector('.artist'),
    audio: document.querySelector('audio'),
    audioDate: audios,
    currentAudio: {},
    currentPlaying: 0,
    start() {
        this.update()
        this.audio.onended = () => this.next()
    },
    next() {
        this.currentPlaying++

        if(this.currentPlaying == this.audioDate.length) this.restart()
        
        this.update()
        this.audio.play()
    },
    update() {
        this.currentAudio = this.audioDate[this.currentPlaying]

        this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`

        this.title.innerText = this.currentAudio.title
        this.artist.innerHTML = `<i class='material-icons'>account_circle</i> ${this.currentAudio.artist}`
        this.artist.style.display ='flex'
        this.artist.style.alignItems ='center'
        this.artist.style.justifyContent ='center'
        this.audio.src = path(this.currentAudio.file)
    },
    restart() {
        this.currentPlaying = 0
        this.update()
    }
}