/**
 * Clicking on the slider will toggle the theme between "black" and "white".
 * The selected theme will be saved on "localStorage".
 */

const sliderTheme = document.getElementById('slider-theme')

sliderTheme.checked = false

sliderTheme.addEventListener('click', function () {
    document.body.style.transition = '.1s';
    if (this.checked) {
        document.body.classList.remove('white')
        document.body.classList.add('black')
        localStorage.setItem('savedTheme', 'black')
    } else {
        document.body.classList.remove('black')
        document.body.classList.add('white')
        localStorage.setItem('savedTheme', 'white')
    }
})

// The default theme is "white".

window.onload = () => {
    if (localStorage.getItem('savedTheme') === 'black') {
        document.body.className = 'black'
        sliderTheme.checked = true
    } else {
        document.body.className = 'white'
    }
}
