const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyperlinks and Text Markup Language", correct: false},
      { text: "Hyper Text Markup Language", correct: true},
      { text: "Home Tool Markup Language", correct: false},
    ]
  },
 {
   question: "In HTML, onblur and onfocus are:",
   answers: [
    { text: "Style attributes", correct: false},
    { text: "HTML attributes", correct: false},
    { text: "Event attributes", correct: true},
   ]
 },
 {
  question: "Graphics defined by SVG is in which format?",
  answers: [
    { text: "XML", correct: true},
    { text: "HTML", correct: false},
    { text: "CSS", correct: false},
  ]
 },
 {
  question: "Which character is used to indicate an end tag?",
  answers: [
    {text: ">", correct: false},
    { text: "*", correct: false},
    { text: "/", correct: true},
  ]
 },
 {
  question: "In HTML, which attribute is used to specify that an input field must be filled out?",
  answers: [
    { text: "placeholder", correct: false},
    { text: "formvalidate", correct: false},
    { text: "required", correct: true},
  ]
 },
 {
  question: "Which input type defines a slider control?",
  answers: [
    { text: "slider", correct: false},
    { text: "range", correct: true},
    { text: "search", correct: false},
  ]
 },
 {
  question: "Inline elements are normally displayed without starting a new line.",
  answers: [
    { text: "True", correct: true},
    { text: "False", correct: false},
    { text: "Nothing like Inline in HTML", correct: false},
  ]
 },
 {
  question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
  answers: [
    { text: "title", correct: false},
    { text: "longdesc", correct: false},
    { text: "alt", correct: true},
  ]
 },
 {
  question: "An iframe is used to display a web page within a web page.",
  answers: [
    { text: "True", correct: true},
    { text: "False", correct: false},
    { text: "There is no such thing as that", correct: false},
  ]
 },
 {
  question: "Who is making the Web standards?",
  answers: [
    { text: "Mozilla", correct: false},
    { text: "The World Wide Web Consortium", correct: true},
    { text: "Google", correct: false},
  ]
 }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
   resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer=> {
  const button = document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add("btn");
  answerButtons.appendChild(button);
  if(answer.correct){
    button.dataset.correct = answer.correct;
  }
  button.addEventListener("click", selectAnswer);
});
}

function resetState(){
  nextButton.style.display = "none";
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
 
function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
 if(isCorrect){
  selectedBtn.classList.add("correct");
  score++;
 }else{
  selectedBtn.classList.add("incorrect");
 }
  Array.from(answerButtons.children).forEach(button =>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
 }

 function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
 }


function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}



nextButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
  });

startQuiz();


// const questionElement = document.getElementById("question");
// const answerButtons = document.getElementById("answer-buttons");
// const nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;

// function startQuiz(){
//   currentQuestionIndex = 0;
//   score = 0;
//   nextButton.innerHTML = "Next";
//   showQuestion();
// }

// function showQuestion(){
//   resetState();
//   let currentQuestion = questions[currentQuestionIndex];
//   let questionNo = currentQuestionIndex + 1;
//   questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//   currentQuestion.answers.forEach(answer => {
//     const button = document.createElement("button");
//     button.innerHTML = answer.text;
//     button.classList.add("btn");
//     answerButton.appendChild(button);
//     if(answer.correct){
//       button.dataset.correct = answer.correct;
//     }
    
//     button.addEventListener("click", selectAnswer);
//   });
// }
//  function resetState(){
//   nextButton.style.display = "none";
//   while(answerButtons.firstChild){
//     answerButtons.removeChild(answerButtons.firstChild);
//   }
//  }

//  function selectAnswer(e){
//   const selectedBtn = e.target;
//   const isCorrect = selectedBtn.dataset.correct === "true";
//   if(isCorrect){
//     selectedBtn.classList.add("correct");
//     score++;
//   } else{
//     selectedBtn.classList.add("incorrect");
//   }
//   Array.from(answerButtons.children).forEach(button =>{
//     if(button.dataset.correct === "true"){
//       button.classList.add("correct");
//     }
//     button.disabled = true;
//   });
//   nextButton.style.display ="block";
//   }

//   function showScore(){
//     resetState();
//     questionElement.innerHTML = 'You scored ${score} out of ${questions.length}!';
//     nextButton.innerHTML = "Play Again";
//     nextButton.style.display = "block";
//   }

// function handleNextButton(){
//   currentQuestionIndex++;
//   if (currentQuestionIndex < questions.length){
//     showQuestion();
//   }else{
//     showScore();
//   }
// }

//   nextButton.addEventListener("click", ()=>{
//     if(currentQuestionIndex < questions.length){
//       handleNextButton();
//     }else{
//       startQuiz();
//     }
//   });
  


