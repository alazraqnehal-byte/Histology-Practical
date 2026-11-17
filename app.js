
const quiz = [
  {
    question: "Which structure is stained purple-blue by Hematoxylin?",
    options: [
      "Cytoplasm",
      "Nucleus",
      "Collagen fibers",
      "Fat droplets"
    ],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

function showQuiz() {
  const main = document.querySelector("main");

  main.innerHTML = `
    <section class="welcome">
      <h1>NeL Practical Quiz</h1>
      <p>Test your histology knowledge.</p>
      <div id="question"></div>
      <div id="options"></div>
      <button id="check">Check Answer</button>
      <p id="feedback"></p>
      <p id="score"></p>
    </section>
  `;

  renderQuestion();
}

function renderQuestion() {
  const q = quiz[currentQuestion];

  document.getElementById("question").innerHTML =
    `<h2>${q.question}</h2>`;

  const options = document.getElementById("options");
  options.innerHTML = "";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.style.cssText =
      "display:block;width:100%;padding:14px;margin:10px 0;border:1px solid #ddd;border-radius:12px;background:white;color:#263B56;";

    button.onclick = () => {
      selectedAnswer = index;
      document.querySelectorAll("#options button")
        .forEach(b => b.style.background = "white");
      button.style.background = "#FCE4F1";
    };

    options.appendChild(button);
  });

  document.getElementById("feedback").textContent = "";
  document.getElementById("score").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  showQuiz();

  document.getElementById("check").onclick = () => {
    if (selectedAnswer === null) {
      document.getElementById("feedback").textContent =
        "Please select an answer first.";
      return;
    }

    const correct = quiz[currentQuestion].answer;

    if (selectedAnswer === correct) {
      score++;
      document.getElementById("feedback").textContent =
        "Correct answer! Well done!";
    } else {
      document.getElementById("feedback").textContent =
        "Incorrect. The correct answer is: " +
        quiz[currentQuestion].options[correct];
    }

    document.getElementById("score").textContent =
      "Your score: " + score + " / " + quiz.length;

    document.getElementById("check").disabled = true;
  };
});
