window.player = {
    cover: document.querySelector('.card-image'),
    title: document.querySelector('.card-content h5'),
    artist: document.querySelector('.artist'),
    audio: document.querySelector('audio'),
    data: {
        title:
            "Como começei a programar / Por que criamos a Rocketseat / Nossa Stack",
        artist: "Diego Fernandes",
        cover: "files/como-comecei.jpg",
        file: "files/como-comecei.mp3"
    },
    start() {
        this.cover.style.background = `url('${this.data.cover}') no-repeat center center / cover`
        this.title.innerText = this.data.title
        this.artist.innerHTML = `<i class='material-icons'>account_circle</i> ${this.data.artist}`
        this.artist.style.display ='flex'
        this.artist.style.alignItems ='center'
        this.artist.style.justifyContent ='center'
        this.audio.src = this.data.file
    }
}