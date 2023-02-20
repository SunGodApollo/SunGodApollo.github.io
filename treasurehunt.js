alert ("Click on the jewels and find the Treasure 💎")

var gameWin = Math.floor(Math.random() * 8)
var gameLose = Math.floor(Math.random() * 8)

if(gameWin === gameLose) {
    var gameWin = Math.floor(Math.random() * 8)
    var gameLose = Math.floor(Math.random() * 8)
}


const treasure = (location) => {


    if(location === gameWin) {
        document.getElementById(location).innerHTML = "🌈"
        setTimeout(2000)
        alert("You win!")
        window.location.reload()
    } else if(location === gameLose) {
        document.getElementById(location).innerHTML = "💣"
        setTimeout(2000)
        alert("You lose")
        window.location.reload()
    } else {
        document.getElementById(location).innerHTML = "🌴"
        alert("Try again")
    }
}
