function rollDice(){
    var die = document.getElementById("die")
    var d1 = Math.floor(Math.random()*6)+1;
    die.innerHTML = d1;

var score = document.getElementById("score")
var scoreArr = Array.from({length:3});
scoreArr.push(d1)


score.innerHTML = scoreArr;
}
