function loadGame(){
  var savedGame = JSON.parse(localStorage.getItem("gameSave"));
  if(typeof savedGame.Tank !== "undefined") Tank = savedGame.Tank;
  if(typeof savedGame.Healer !== "undefined") Healer = savedGame.Healer;
  if(typeof savedGame.DPS !== "undefined") DPS = savedGame.DPS;
  if(typeof savedGame.User !== "undefined") User = savedGame.User;
}

function saveGame(){
  var gameSave = {
    //Players
    Tank: Tank,
    DPS: DPS,
    Healer: Healer,
    User: User

  };
  localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

//Auto save game
setInterval(function(){
  saveGame();
},10000) //10 seconds

//Load game save when page loads
window.onload = function(){
  loadGame();
};
