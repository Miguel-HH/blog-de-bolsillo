// Clicking on the slider will toggle the theme between "black" and "white".

const sliderTheme = document.getElementById('slider-theme')

sliderTheme.checked = false

function saveTheme() {
    document.body.style.transition = '.1s'
    if (this.checked) {
        document.body.classList.remove('white')
        document.body.classList.add('black')
        localStorage.setItem('savedTheme', 'black')
    } else {
        document.body.classList.remove('black')
        document.body.classList.add('white')
        localStorage.setItem('savedTheme', 'white')
    }
}

sliderTheme.addEventListener('click', saveTheme)

// When loading the page, it will use the theme saved in "localStorage"

function loadSavedTheme() {
    if (localStorage.getItem('savedTheme') === 'black') {
        document.body.className = 'black'
        sliderTheme.checked = true
    } else {
        document.body.className = 'white'
    }
}

window.onload = loadSavedTheme()
