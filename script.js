function prompNam() {
  const h1Prom = document.getElementById("proNam");
  var namex = prompt("enter your name please?");
  if (namex === null || namex === "") {
    h1Prom.innerHTML = "no name found";
  } else {
    h1Prom.innerHTML = "welcome  " + namex;
  }
}
prompNam();

const questions = [
  {
    question: "What is the name of the capital of Canada?",
    answers: [
      { text: "Manitoba", correct: false },
      { text: "Ottawa", correct: true },
      { text: "Alberta", correct: false },
      { text: "Quebec", correct: false },
    ],
  },
  {
    question: "Which  is the smallest contident in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Africa", correct: false },
      { text: "Astralia", correct: true },
      { text: "arctic", correct: false },
    ],
  },
  {
    question: "which is the largest desert in the world",
    answers: [
      { text: "kalahari", correct: false },
      { text: "Gobi ", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Blue Wheel", correct: true },
      { text: "Shark", correct: false },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const nextBtn = document.getElementById("next-btn");
const ansButtons = document.getElementById("ans-buttons");

let currentQuestionIndex = 0;
let score = 0;
function startQuize() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    ansButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextBtn.style.display = "none";
  while (ansButtons.firstChild) {
    ansButtons.removeChild(ansButtons.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("inCorrect");
  }
  Array.from(ansButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `you scored ${score} out of ${questions.length}`;
  nextBtn.innerHTML = "play Again";
  nextBtn.style.display = "block";
}
function handleNextBtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuize();
  }
});
startQuize();
