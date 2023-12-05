const quesJSON = [
  {
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    options: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];

let score = 0;
let question_no = 0;
function questionNumberUpdater() {
  question_no++;
  return question_no;
}


const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
questionsOrganiser(question_no);

// next button
const next_btn = document.createElement('button');
next_btn.textContent = 'Next...';

const nextEl = document.querySelector('.next-btn');
nextEl.append(next_btn);

next_btn.addEventListener('click', () => {
  optionsEl.textContent = '';
  let num = questionNumberUpdater();
  if (num < quesJSON.length) {
    questionsOrganiser(num);
  }
  else {
    questionEl.textContent = "Quiz Completed!";
  }
});

function questionsOrganiser(question_no) {

  const { correctAnswer, options, question } = quesJSON[question_no];

  questionEl.textContent = `Q.${question_no+1}: ${question}`;
  
    for (let option of shuffleArray(options)) {
      let btn = document.createElement("button");
      btn.textContent = option;
      btn.value = option;
      optionsEl.appendChild(btn);
      btn.addEventListener("click", () => {
        if (option === correctAnswer) {
          score++;
          let question_num=questionNumberUpdater();
          if (question_num >= quesJSON.length) {
            questionEl.textContent = "Quiz Completed!";
            optionsEl.textContent = "";
          } else {
            optionsEl.textContent = '';
            scoreEl.textContent = `Score: ${score}/5`;
            questionsOrganiser(question_num);
          }
        } else {
          score -= 0.25;
        }
        scoreEl.textContent = `Score: ${score}/5`;
      });
    }
  
}
function shuffleArray(answers) {
  for (let i = answers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
  return answers;
}


