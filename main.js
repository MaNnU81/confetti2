
import JSConfetti from './node_modules/js-confetti/dist/es/index.js'

const canvas = document.getElementById("myCanvas");
canvas.width = 600;
canvas.height = 600;


const ctx = canvas.getContext("2d");
// const jsConfetti = new JSConfetti()

const jsConfetti = new JSConfetti({ canvas })


const button = document.getElementById("button")
// jsConfetti.addConfetti()
jsConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    confettiRadius: 1, // Imposta la dimensione dei confetti più piccola
        confettiNumber: 10, // Numero di confetti
 })





setTimeout(() => {
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        confettiRadius: 1, // Imposta la dimensione dei confetti più piccola
        confettiNumber: 10,
     })
     
}, 500)

button.addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        confettiRadius: 1, // Imposta la dimensione dei confetti più piccola
        confettiNumber: 10,
     })
}) 