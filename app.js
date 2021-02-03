// togloom duussan eseh hadgalah huvisagchj
var isNewGame;
//togloomiiin buh gazar global huvisagch zarlah

var activePlayer, score, rounScore;

// shoonii zurgiig uzuuleh
var diceDom = document.querySelector(".dice");
// togloomiig shineer ehelhed beltgene
// togloom ehluuleh
initGame();
function initGame() {
  //  togloom eheellle gdg tolow oruulna
  isNewGame = true;

  // toglogchiin eeljiig hadgalah huvisagch

  activePlayer = 0;

  // toglogchidiin score huvisagch

  score = [0, 0];

  // toglocghiin eeljindee tsugluulj bui onoo hivisagch

  rounScore = 0;

  // shoonii ali talaaraa buuusniig hadgalah huvisagch heregtei 1-6 rendom huvisagch uusgeh

  //  programm ehelhed beldeh
  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  //   toglogchdiin neriig butsaaj gargah
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-1-panel").classList.add("active");

  diceDom.style.display = "none";
}

//  shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
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
      document.getElementById(
        "current-" + activePlayer
      ).textContent = rounScore;
    } else {
      //   1 buusan tul toglogchiin eeljiig solino
      // ene toglogchiin eeljinee tsugluulsan onoog 0 bolgoloo
      switchToNextPlayer();
    }
  } else {
    alert("togloom duussan bna new game towch darj shineer ehlene uu ");
  }
});

// hold towchnii listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // ug toglogchiin tsugluulsan onoog global onoon derr nemj ogno
    score[activePlayer] = score[activePlayer] + rounScore;

    //   web re toog n oorchlono
    document.getElementById("score-" + activePlayer).textContent =
      score[activePlayer];

    // ug toglogch hojison eseh shalgah
    if (score[activePlayer] >= 10) {
      //   tolgoomiig duussan tolowt oruulna
      isNewGame = false;
      //   ylagch gsen ttext web dr gargah
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("togloom duussan bna new game towch darj shineer ehlene uu ");
  }
});

function switchToNextPlayer() {
  rounScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;

  // toglogchiin eeljiig ngo togloch ru shiljiilnee
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // ulaan tseg shiljuulelt
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  // shoog tur alga bolgoh
  diceDom.style.display = "none";
}
//  new game
document.querySelector(".btn-new").addEventListener("click", initGame);
