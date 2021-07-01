const foxImg = document.querySelector('#fox')
const foxSays = new Audio("/audio/fox.mp3")
console.log(foxSays)


// console.log(foxImg)

foxImg.addEventListener("click", function (evt) {
    foxSays.volume = .01
    foxSays.play()
})

// Add event listener to #notFox
// Listen for click and on a click:
// make sure an image has been selected
// Get the element id and use it to create an Audio element!
// fix its volume
// Play the audio element!

const notFoxImg = document.querySelector("#notFox")

notFoxImg.addEventListener("click", evt => {
    if (evt.target.id !== "notFox") {
        const audioElement = new Audio(`../audio/${evt.target.id}.mp3`)
        audioElement.volume = .01
        audioElement.play()
    }
})



// for (let i = 0; i < winComb.length; i++) {
//     let combination = winComb[i]
//     let foundWinner = true
//     combination.forEach(num => {

//         if (!player2.includes(num)) {
//             foundWinner = false
//         }
//     })

//     if (foundWinner) {
//         console.log('found winner', winComb[i])
//         break
//     }
// }