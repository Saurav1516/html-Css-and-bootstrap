const quizData = [
  {
    question: "What does HTML stands for?",
    options: [
      "Hypertext Markup Language",
      "Hyper Transfer Markup Language",
      "Hyper Text Machine Language",
      "Hyperlink and Text Markup Language",
    ],
    correct: 0,
  },

  {
    question: "What is the full form of CSS?",
    options: [
      "Casting Style Short",
      "Camera Sheet Style",
      "Cascading Style Sheets",
      "Cost Style Sheet",
    ],
    correct: 2,
  },

  {
    question:
      "Which of the following is returned as 'true and false' in JavaScript?",
    options: ["String", "Number", "Boolean", "Null"],
    correct: 2,
  },

  {
    question: "Which HTML tag is used to create an ordered list?",
    options: ["ul", "li", "ol", "dl"],
    correct: 2,
  },
];

// 2nd step initializing  the variables
// we are selecting our needs by dom

const quiz = document.querySelector("#quiz");
const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, .option_1, .option_2, .option_3, .option_4 "
  );
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

// 3rd step = load quiz Functions

const loadQuiz = () => {
  const { question, options } = quizData[currentQuiz];

  questionElm.innerText = `${currentQuiz + 1}: ${question}`;

  options.forEach(
    (curOption, index) => (window[`option_${index + 1}`].innerText = curOption)
  );
};

loadQuiz();

// step 4 button click event handler

const getSelectedOption = () => {
  let answerElement = Array.from(answerElm);
  return answerElement.findIndex((curElem) => curElem.checked);
};

const deselectedAnswers = () => {
  return answerElm.forEach((curElem) => (curElem.checked = false));
};

submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelectedOption();
  console.log(selectedOptionIndex);

  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score = score + 1;
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    deselectedAnswers();
    loadQuiz();
  } else {
    quiz.innerHTML = `
        <div class = "result">
        <h2> Your Score: ${score}/${quizData.length} Correct Answers </h2>
        <p>Congratulations on Completing the quiz</p>
        <button class="reload-button" onclick="location.reload()">Play Again</button>
        </div>
        `;
  }
});
