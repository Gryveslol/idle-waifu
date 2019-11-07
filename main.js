var gameData = {
  love: 0,
  lovePerClick: 1,
  lovePerClickCost: 10
}
function patWaifu() {
  gameData.love += gameData.lovePerClick
  document.getElementById("loveGained").innerHTML = gameData.love + " Love Gained"
}
function buyLovePerClick() {
  if (gameData.love) >= gameData.lovePerClickCost) {
    gameData.love -= gameData.lovePerClickCost
    gameData.lovePerClick += 1
    gameData.lovePerClickCost *= 2
    document.getElementById("loveGained").innerHTML = gameData.love + " Love Gained"
    document.getElementById("perClickUpgrade").innerHTML = "Improve Technique (Currently Level " + gameData.lovePerClick + ") Cost: " + gameData.lovePerClickCost + " Love"
  }
}

var mainGameLoop = window.setInterval(function() {
  patWaifu()
}, 1000)

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('idleWaifuSave', JSON.stringify(gameData))
}, 15000)

var savegame = JSON.parse(localStorage.getItem("idleWaifuSave"))
if (savegame !== null) {
  gameData = savegame
}
