// toglogchiin eeljiig hadgalah huvisagch

var activePlayer = 1;

// toglogchidiin score huvisagch

var score = [0, 0];

// toglocghiin eeljindee tsugluulj bui onoo hivisagch

var rounScore = 0;

// shoonii ali talaaraa buuusniig hadgalah huvisagch heregtei 1-6 rendom huvisagch uusgeh

var dice = Math.floor(Math.random() * 6) + 1;

document.querySelector("#score-0").textContent = 0;

document.querySelector("#score-1").textContent = 0;
document.querySelector("#current-0").textContent = 0;
document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = "none";

console.log("shoo :" + dice);
