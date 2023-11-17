const quizzes = ["HTML", "CSS", "JavaScript", "Accessibility"];

const quizQuestions = {
  HTML: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "High Text Markup Language",
        "Hyper Tabular Markup Language",
      ],
      correctAnswer: "Hyper Text Markup Language",
    },
    // ... more HTML questions
  ],
  // ... add questions for other quizzes
};

function renderLandingPage() {
  const appContainer = document.getElementById("app");
  appContainer.innerHTML = `
    <div class="container">
      <h1>Choose a Quiz</h1>
      ${quizzes
        .map(
          (quiz) => `<button onclick="startQuiz('${quiz}')">${quiz}</button>`
        )
        .join("")}
    </div>
  `;
}

function startQuiz(selectedQuiz) {
  const appContainer = document.getElementById("app");
  const questions = quizQuestions[selectedQuiz];

  let currentQuestionIndex = 0;
  let score = 0;

  function renderQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    appContainer.innerHTML = `
      <div class="container">
        <h1>${selectedQuiz} Quiz</h1>
        <div class="question">
          <p>${currentQuestion.question}</p>
        </div>
        <div class="options">
          ${currentQuestion.options
            .map(
              (option, index) =>
                `<button onclick="handleAnswer('${option}')">${option}</button>`
            )
            .join("")}
        </div>
        <div class="score">
          <p>Score: ${score}</p>
        </div>
      </div>
    `;
  }

  function handleAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
      score++;
    }

    if (currentQuestionIndex + 1 < questions.length) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    appContainer.innerHTML = `
      <div class="container">
        <h1>Final Score</h1>
        <p>Total Score: ${score} out of ${questions.length}</p>
      </div>
    `;
  }

  renderQuestion();
}

renderLandingPage();
