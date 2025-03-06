
import JSConfetti from './node_modules/js-confetti/dist/es/index.js'

const canvas = document.getElementById("myCanvas");
canvas.width = 600;
canvas.height = 600;


const ctx = canvas.getContext("2d");
// const jsConfetti = new JSConfetti()

const jsConfetti = new JSConfetti({ canvas })


const button = document.getElementById("button")
jsConfetti.addConfetti()





setTimeout(() => {
    jsConfetti.addConfetti()
}, 500)

button.addEventListener('click', () => {
    jsConfetti.addConfetti()
}) 