$(document).ready(function() {
        
    var randomNumber = Math.floor(Math.random() * 120 + 19);
    var wins = 0;
    var losses = 0;
    var total = 0;

    $("#number-to-guess").text(randomNumber);

    var num1 = Math.floor(Math.random() * 12 + 1);
    var num2 = Math.floor(Math.random() * 12 + 1);
    var num3 = Math.floor(Math.random() * 12 + 1);
    var num4 = Math.floor(Math.random() * 12 + 1);

    $(".crystal1").on("click", function() {
      total = total + num1;
      $("#currentTotal").text(total);
      if (total == randomNumber) {
        winGame();
      } else if (total > randomNumber) {
        loseGame();
      }
    });
    $(".crystal2").on("click", function() {
      total = total + num2;
      $("#currentTotal").text(total);
      if (total == randomNumber) {
        winGame();
      } else if (total > randomNumber) {
        loseGame();
      }
    });
    $(".crystal3").on("click", function() {
      total = total + num3;
      $("#currentTotal").text(total);

      if (total == randomNumber) {
        winGame();
      } else if (total > randomNumber) {
        loseGame();
      }
    });
    $(".crystal4").on("click", function() {
      total = total + num4;
      $("#currentTotal").text(total);

      if (total == randomNumber) {
        winGame();
      } else if (total > randomNumber) {
        loseGame();
      }
    });

    function winGame() {
      alert("You win!");
      wins++;
      $("#wins").text(wins);
      newGame();
    }
    function loseGame() {
      alert("You lost!");
      losses++;
      $("#losses").text(losses);
      newGame();
    }


    $("#wins").text(wins);
    $("#losses").text(losses);

    function newGame() {
      randomNumber = Math.floor(Math.random() * 120 + 19);
      $("#number-to-guess").text(randomNumber);
      num1 = Math.floor(Math.random() * 12 + 1);
      num2 = Math.floor(Math.random() * 12 + 1);
      num3 = Math.floor(Math.random() * 12 + 1);
      num4 = Math.floor(Math.random() * 12 + 1);
      total = 0;
      $("#currentTotal").text(total);
    }
  });