
   let secretNumber = Math.trunc(Math.random() * 20) + 1;
    let score = 20;
    let highscore = 0;

    const displayMessage = function (msg) {
      document.getElementById("message").textContent = msg;
    };

    document.getElementById("check-btn").addEventListener("click", function () {
      const guess = Number(document.getElementById("user-input").value);

      if (!guess) {
        displayMessage("⛔️ No number!");
      } else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!");
        document.getElementById("number-box").textContent = secretNumber;
        document.querySelector(".head").style.backgroundColor = "darkgreen";
        document.querySelector(".division").style.backgroundColor = "lightgreen";

        if (score > highscore) {
          highscore = score;
          document.getElementById("highscore").textContent = highscore;
        }
      } else if (guess !== secretNumber) {
        if (score > 1) {
          displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
          score--;
          document.getElementById("score").textContent = score;
        } else {
          displayMessage("💥 You lost the game!");
          document.getElementById("score").textContent = 0;
        }
      }
    });

    // Reset Game on "Play Again"
    document.getElementById("again-btn").addEventListener("click", function () {
      score = 20;
      secretNumber = Math.trunc(Math.random() * 20) + 1;

      document.getElementById("score").textContent = score;
      document.getElementById("user-input").value = "";
      document.getElementById("number-box").textContent = "?";
      displayMessage("Start guessing...");
      document.querySelector(".head").style.backgroundColor = "green";
      document.querySelector(".division").style.backgroundColor = "white";
    });