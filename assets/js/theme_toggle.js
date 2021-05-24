/**
 * Clicking on the slider will toggle the theme between "black" and "white".
 * The selected theme will be saved on "localStorage".
 *
 * Hacer clic en slider alternará el tema entre "black" y "white".
 * El tema seleccionado será guardado en "localStorage".
 */

const sliderTheme = document.getElementById('slider-theme')

sliderTheme.checked = false

sliderTheme.addEventListener('click', function() {
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

/**
 * The default theme is "white".
 *
 * El tema por defecto es "white".
 */

window.onload = () => {
    if (localStorage.getItem('savedTheme') === 'black') {
        document.body.className = 'black'
        sliderTheme.checked = true
    } else {
        document.body.className = 'white'
    }
}
