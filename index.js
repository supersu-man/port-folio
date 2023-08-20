const themeButton = document.getElementById('theme-button')
const musicButton = document.getElementById('music-button')

const sunIcon = document.getElementById('sun-icon')
const moonIcon = document.getElementById('moon-icon')
const muteIcon = document.getElementById('mute-icon')
const unmuteIcon = document.getElementById('unmute-icon')

const player = document.getElementById('audio')

const toggleTheme = () => {
    if (localStorage.getItem('dark-theme')) {
        document.body.classList.replace('dark-theme', 'light-theme')
        sunIcon.classList.remove('d-none')
        moonIcon.classList.add('d-none')
        localStorage.removeItem('dark-theme')
    } else {
        document.body.classList.replace('light-theme', 'dark-theme')
        moonIcon.classList.remove('d-none')
        sunIcon.classList.add('d-none')
        localStorage.setItem('dark-theme', ' ')
    }
}

const toggleMusic = () => {
    if (player.muted) {
        player.muted = false
        unmuteIcon.classList.remove('d-none')
        muteIcon.classList.add('d-none')
    } else {
        player.muted = true
        muteIcon.classList.remove('d-none')
        unmuteIcon.classList.add('d-none')
    }
}

const openWindow = (value) => {
    console.log(value)
    switch (value) {
        case 'about': window.open("https://www.linkedin.com/in/sumanthperambuduri/")
        break
        case 'projects': window.open("https://github.com/supersu-man")
        break
        case 'contact': window.open("https://mail.google.com/mail/?view=cm&source=mailto&to=sumanthpera444@gmail.com")
        break
        case 'resume': window.open("../assets/resume.pdf")
    }
}