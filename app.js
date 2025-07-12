const words = ["apple", "banana", "grape", "orange"];
let currentWord = "";
let score = 0;
let timeLeft = 60;
let timer;
let difficulty = "normal";

document.addEventListener("DOMContentLoaded", () => {
  const wordDisplay = document.getElementById("word-display");
  const textInput = document.getElementById("text-input");
  const feedback = document.getElementById("feedback");
  const scoreDisplay = document.getElementById("score");
  const timeDisplay = document.getElementById("time");
  const difficultySelect = document.getElementById("difficulty");

  difficultySelect.addEventListener("change", () => {
    difficulty = difficultySelect.value;
  });

  document.getElementById("start-button").addEventListener("click", () => {
    score = 0;
    timeLeft = 60;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    nextWord();
    textInput.value = "";
    textInput.focus();
    timer = setInterval(() => {
      timeLeft--;
      timeDisplay.textContent = timeLeft;
      if (timeLeft <= 0) {
        clearInterval(timer);
        feedback.textContent = "終了！";
      }
    }, 1000);
  });

  textInput.addEventListener("input", () => {
    if (textInput.value === currentWord) {
      const bonus = difficulty === "easy" ? 10 : difficulty === "normal" ? 20 : 30;
      score += bonus;
      scoreDisplay.textContent = score;
      textInput.value = "";
      nextWord();
    }
  });

  function nextWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordDisplay.textContent = currentWord;
  }
});
