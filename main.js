
import JSConfetti from './node_modules/js-confetti/dist/es/index.js'

const canvas = document.getElementById("myCanvas");
canvas.width = 600;
canvas.height = 600;


const ctx = canvas.getContext("2d");
// const jsConfetti = new JSConfetti()

const jsConfetti = new JSConfetti({ canvas })


const button = document.getElementById("button")
// jsConfetti.addConfetti()   //normale


/////emonji
jsConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
    emojiSize: 32,
        confettiNumber: 100, // Numero di confetti
 })
setTimeout(() => {
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        emojiSize: 32,
        confettiNumber: 100,
     })
     
}, 500)
button.addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
        emojiSize: 32,
        confettiNumber: 100,
     })
}) 


