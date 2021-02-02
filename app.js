// toglogchiin eeljiig hadgalah huvisagch

var activePlayer = 0;

// toglogchidiin score huvisagch

var score = [0, 0];

// toglocghiin eeljindee tsugluulj bui onoo hivisagch

var rounScore = 0;

// shoonii ali talaaraa buuusniig hadgalah huvisagch heregtei 1-6 rendom huvisagch uusgeh

var diceNumber = Math.floor(Math.random() * 6) + 1;
//  programm ehelhed beldeh
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
//  shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  //    1 - 6 hurtel sanamsargui too gargaj avna
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //   sshoonii zurg web deer gargaj irne
  diceDom.style.display = "block";
  // buusan sanamsargui toond hargalzah shoog web dr gargaj irne
  diceDom.src = "dice-" + diceNumber + ".png";
  //   buusan too n 1  ees oor bol  idevehtei toglogchiin eeljiin onoog nemegduulne
  if (diceNumber !== 1) {
    //   1 ees ylaagtai too buulga
    rounScore = rounScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = rounScore;
  } else {
    //   1 buusan tul toglogchiin eeljiig solino
    // ene toglogchiin eeljinee tsugluulsan onoog 0 bolgoloo
    rounScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    // toglogchiin eeljiig ngo togloch ru shiljiilnee
    // herew idewehtei toglogch n  0 baiwal idwehtei toglogchiig 1 bolgo
    // herew ugui bol  idewehtei toglogchiig  0 bolgo

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // ulaan tseg shiljuulelt
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // shoog tur alga bolgoh
    diceDom.style.display = "none";

    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }
  }
});
