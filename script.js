const questionBank = [
  {
    type: "Odd or Even",
    text: "If num = 8, what is the correct answer?",
    options: ["8 is odd", "8 is even", "8 is divisible by 5", "8 is divisible by 7"],
    answer: "8 is even",
  },
  {
    type: "Remainder",
    text: "What is `10 % 2`?",
    options: ["0", "1", "2", "5"],
    answer: "0",
  },
  {
    type: "Remainder",
    text: "What is `11 % 3`?",
    options: ["0", "1", "2", "3"],
    answer: "2",
  },
  {
    type: "Divisible by 3",
    text: "Which number is divisible by 3?",
    options: ["10", "12", "14", "16"],
    answer: "12",
  },
  {
    type: "Divisible by 5",
    text: "Which number is divisible by 5?",
    options: ["11", "13", "15", "17"],
    answer: "15",
  },
  {
    type: "Divisible by 3 and 5",
    text: "Which number is divisible by both 3 and 5?",
    options: ["10", "12", "15", "18"],
    answer: "15",
  },
  {
    type: "Divisible by 3 and 7",
    text: "Which number is divisible by both 3 and 7?",
    options: ["14", "18", "21", "24"],
    answer: "21",
  },
  {
    type: "if else",
    text: "In Python, which word starts a condition?",
    options: ["if", "else", "for", "print"],
    answer: "if",
  },
  {
    type: "if elif else",
    text: "Which word checks another condition after `if`?",
    options: ["elif", "else", "for", "range"],
    answer: "elif",
  },
  {
    type: "Input",
    text: "Which code is used to take number input from the user?",
    options: ["num = int(input())", "print(num)", "num == 5", "for i in range(5)"],
    answer: "num = int(input())",
  },
  {
    type: "Variables",
    text: "Which line creates a variable named `x` with value `10`?",
    options: ["x == 10", "10 = x", "x = 10", "print = 10"],
    answer: "x = 10",
  },
  {
    type: "Operators",
    text: "Which symbol is used to find remainder?",
    options: ["+", "%", "/", "*"],
    answer: "%",
  },
  {
    type: "for loop",
    text: "Which code starts a loop?",
    options: ["for i in range(5):", "if i in range(5):", "range i in 5:", "print(i, range(5))"],
    answer: "for i in range(5):",
  },
  {
    type: "range()",
    text: "How many times will `for i in range(5)` run?",
    options: ["3 times", "4 times", "5 times", "6 times"],
    answer: "5 times",
  },
  {
    type: "range(start, stop)",
    text: "What is the first number in `range(2, 10)`?",
    options: ["0", "1", "2", "10"],
    answer: "2",
  },
  {
    type: "range(start, stop, step)",
    text: "In `range(5, 100, 15)`, what is the step?",
    options: ["5", "10", "15", "100"],
    answer: "15",
  },
  {
    type: "Temperature program",
    text: "If temperature is 15, what should the program print?",
    options: [
      "It is winter, take coat!!",
      "It is hot outside, wear tshirts",
      "It is too hot, dont go outside!!",
      "The number is not divisible by 3",
    ],
    answer: "It is winter, take coat!!",
  },
  {
    type: "Temperature program",
    text: "If temperature is 25, what should the program print?",
    options: [
      "It is winter, take coat!!",
      "It is hot outside, wear tshirts",
      "It is too hot, dont go outside!!",
      "The loop runs 25 times",
    ],
    answer: "It is hot outside, wear tshirts",
  },
  {
    type: "Temperature program",
    text: "If temperature is 45, what should the program print?",
    options: [
      "It is winter, take coat!!",
      "It is hot outside, wear tshirts",
      "It is too hot, dont go outside!!",
      "It is an even number",
    ],
    answer: "It is too hot, dont go outside!!",
  },
  {
    type: "Odd or Even",
    text: "If num % 2 == 0, the number is:",
    options: ["odd", "even", "divisible by 7", "a variable"],
    answer: "even",
  },
];

const positiveMessages = [
  "You did a good job today. Keep learning step by step.",
  "Nice work. Your effort today matters and you are improving.",
  "Well done. You stayed focused and completed the test.",
  "Good work today. Small steps lead to strong progress.",
];

const state = {
  studentName: "",
  questions: [],
  currentIndex: 0,
  score: 0,
  selectedOption: null,
};

const welcomeScreen = document.getElementById("welcome-screen");
const examScreen = document.getElementById("exam-screen");
const resultScreen = document.getElementById("result-screen");
const studentNameInput = document.getElementById("student-name");
const nameError = document.getElementById("name-error");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const downloadBtn = document.getElementById("download-btn");
const dashName = document.getElementById("dash-name");
const questionCount = document.getElementById("question-count");
const liveScore = document.getElementById("live-score");
const questionType = document.getElementById("question-type");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const resultName = document.getElementById("result-name");
const resultScore = document.getElementById("result-score");
const resultDate = document.getElementById("result-date");
const resultMessage = document.getElementById("result-message");
const cardName = document.getElementById("card-name");
const cardScore = document.getElementById("card-score");
const cardDate = document.getElementById("card-date");
const cardMessage = document.getElementById("card-message");

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatDate(date) {
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function showScreen(screen) {
  welcomeScreen.classList.add("hidden");
  examScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  screen.classList.remove("hidden");
}

function startExam() {
  const enteredName = studentNameInput.value.trim();

  if (!enteredName) {
    nameError.textContent = "Please enter the student name.";
    studentNameInput.focus();
    return;
  }

  nameError.textContent = "";
  state.studentName = enteredName;
  state.questions = shuffle(questionBank).slice(0, 10);
  state.currentIndex = 0;
  state.score = 0;
  state.selectedOption = null;

  dashName.textContent = state.studentName;
  liveScore.textContent = "0";
  showScreen(examScreen);
  renderQuestion();
}

function renderQuestion() {
  const currentQuestion = state.questions[state.currentIndex];
  state.selectedOption = null;

  questionCount.textContent = `${state.currentIndex + 1} / ${state.questions.length}`;
  questionType.textContent = currentQuestion.type;
  questionText.textContent = currentQuestion.text;
  nextBtn.textContent = state.currentIndex === state.questions.length - 1 ? "Finish Test" : "Next";
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    button.textContent = option;
    button.addEventListener("click", () => selectOption(button, option));
    optionsContainer.appendChild(button);
  });
}

function selectOption(button, option) {
  state.selectedOption = option;
  const optionButtons = optionsContainer.querySelectorAll(".option-btn");
  optionButtons.forEach((item) => item.classList.remove("selected"));
  button.classList.add("selected");
}

function handleNext() {
  if (!state.selectedOption) {
    return;
  }

  const currentQuestion = state.questions[state.currentIndex];
  if (state.selectedOption === currentQuestion.answer) {
    state.score += 1;
    liveScore.textContent = String(state.score);
  }

  if (state.currentIndex === state.questions.length - 1) {
    finishExam();
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
}

function getPositiveMessage(score) {
  if (score >= 9) {
    return "Excellent work. You understood the questions very well today.";
  }

  if (score >= 7) {
    return "Very good work. You are learning well and building confidence.";
  }

  if (score >= 5) {
    return "Good effort. You are making progress and that matters.";
  }

  return positiveMessages[Math.floor(Math.random() * positiveMessages.length)];
}

function finishExam() {
  const today = formatDate(new Date());
  const message = getPositiveMessage(state.score);

  resultName.textContent = state.studentName;
  resultScore.textContent = `${state.score} / ${state.questions.length}`;
  resultDate.textContent = today;
  resultMessage.textContent = message;

  cardName.textContent = state.studentName;
  cardScore.textContent = `${state.score} / ${state.questions.length}`;
  cardDate.textContent = today;
  cardMessage.textContent = message;

  showScreen(resultScreen);
}

function downloadScoreCard() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const safeName = state.studentName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const width = 1200;
  const height = 700;

  canvas.width = width;
  canvas.height = height;

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#1f6c52");
  gradient.addColorStop(0.55, "#2f8f6b");
  gradient.addColorStop(1, "#59bc8f");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "rgba(255,255,255,0.12)";
  ctx.beginPath();
  ctx.arc(1030, 140, 140, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(980, 610, 170, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "rgba(255,255,255,0.92)";
  ctx.font = "700 28px Nunito, sans-serif";
  ctx.fillText("Python Achievement Card", 80, 90);

  ctx.fillStyle = "#ffffff";
  ctx.font = "800 62px Nunito, sans-serif";
  ctx.fillText(state.studentName, 80, 170);

  ctx.fillStyle = "rgba(255,255,255,0.16)";
  roundRect(ctx, 80, 225, 320, 150, 28);
  ctx.fill();

  ctx.fillStyle = "rgba(255,255,255,0.82)";
  ctx.font = "700 28px Nunito, sans-serif";
  ctx.fillText("Score", 110, 280);
  ctx.fillStyle = "#ffffff";
  ctx.font = "800 60px Nunito, sans-serif";
  ctx.fillText(`${state.score} / ${state.questions.length}`, 110, 345);

  ctx.fillStyle = "rgba(255,255,255,0.88)";
  ctx.font = "700 30px Nunito, sans-serif";
  ctx.fillText(`Date: ${cardDate.textContent}`, 80, 435);

  wrapText(
    ctx,
    cardMessage.textContent,
    80,
    515,
    700,
    44,
    "700 32px Nunito, sans-serif"
  );

  const link = document.createElement("a");
  const url = canvas.toDataURL("image/png");

  link.href = url;
  link.download = `${safeName || "student"}-score-card.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight, font) {
  ctx.font = font;
  ctx.fillStyle = "#ffffff";

  const words = text.split(" ");
  let line = "";
  let currentY = y;

  words.forEach((word, index) => {
    const testLine = `${line}${word} `;
    const testWidth = ctx.measureText(testLine).width;
    const isLastWord = index === words.length - 1;

    if (testWidth > maxWidth && line) {
      ctx.fillText(line.trim(), x, currentY);
      line = `${word} `;
      currentY += lineHeight;
    } else {
      line = testLine;
    }

    if (isLastWord) {
      ctx.fillText(line.trim(), x, currentY);
    }
  });
}

function restartExam() {
  studentNameInput.value = state.studentName;
  showScreen(welcomeScreen);
}

startBtn.addEventListener("click", startExam);
nextBtn.addEventListener("click", handleNext);
restartBtn.addEventListener("click", restartExam);
downloadBtn.addEventListener("click", downloadScoreCard);

studentNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    startExam();
  }
});
