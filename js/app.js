// My questions and answers to the quiz
var myQuestions = [
  {
    question: "Jim Carrey plays  _______  as the Cable guy",
    answers: {
      a:'Matt Brody',
      b: 'Sam Brody',
      c: 'Chip Douglas',
      d: 'Brian Jenny'
  },
    correctAnswer:'c'
  },
  {
    question:'Who is the director of this movie ?',
    answers: {
      a:'Ben Stiller',
      b: 'Will Ferrell',
      c: 'J.K. Rowling',
      d: 'David Blaine'
  },
  correctAnswer:'a'
},
{
    question:'Jack Black plays as _______ co-worker',
    answers: {
      a:'Steven',
      b:'Chip',
      c:'Ben Stiller',
      d:'Andy Dick'
    },
    correctAnswer:'a'
  },
  {
    question:'When was the movie release date?',
    answers: {
      a:'January 17, 1992',
      b:'April 26, 1993',
      c:'November 26, 1989',
      d:'June 14, 1996'
    },
    correctAnswer:'d'
  },
  {
question:'Who won the knight fight ?',
answers: {
  a:'Steven',
  b:'Chip',
  c:'Bruce Lee',
  d:'Chuck Norris'
},
correctAnswer:'a'
},
{
  question:'How did the basketball game scene end ?',
  answers:  {
    a:'Steven quits the game',
    b:'Steven makes the full-court shot to win the game',
    c:'Chip catches the alley-oop to win the game',
    d:'Chip jumps on Jack Black to dunk and shatters the backboard'
  },
  correctAnswer:'d'
},
{
  question:'What present did Chip give Steven for being a good friend?',
  answers: {
    a:'Dennys gift card',
    b:'A pair of Jordans',
    c:'A huge T.V. and karoke system',
    d:'Playstation'
  },
  correctAnswer:'c'
},
{
  question:'What is the information superhighway ?',
  answers:  {
    a:'A satellite infrastructure',
    b:'Comcast cable',
    c:'The internet',
    d:'Pagers'
  },
  correctAnswer:'a'
},
{
  question:'What song did Chip sing at Stevens karoke party?',
  answers: {
    a:'Somebody to love - Jefferson Airplanes',
    b:'Gucci gang - Lil Pump',
    c:'Strawberry Fields - The Beatles',
    d:'Changes - Tupac'
  },
  correctAnswer:'a'
},
{
  question:'What was Stevens gift to Chip?',
  answers: {
    a:'Basketball',
    b:'Warriors jersey',
    c:'49ers jersey',
    d:'A speech therapy book'
  },
  correctAnswer:'d'
}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

function showQuestions(questions, quizContainer){
  // we'll need a place to store the output and the answer choices
  var output = [];
  var answers;

  // for each question...
  for(var i=0; i<questions.length; i++){

    // first reset the list of answers
    answers = [];

    // for each available answer...
    for(letter in questions[i].answers){

      // ...add an html radio button
      answers.push(
        '<label>'
          + '<input type="radio" name="question'+i+'" value="'+letter+'">'
          + letter + ': '
          + questions[i].answers[letter]
        + '</label>'
      );
    }

    // add this question and its answers to the output
    output.push(
      '<div class="question">' + questions[i].question + '</div>'
      + '<div class="answers">' + answers.join('') + '</div>'
    );
  }

  // finally combine our output list into one string of html and put it on the page
  quizContainer.innerHTML = output.join('');
}


function showResults(questions, quizContainer, resultsContainer){

  // gather answer containers from our quiz
  var answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  var userAnswer = '';
  var numCorrect = 0;

  // for each question...
  for(var i=0; i<questions.length; i++){

    // find selected answer
    userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

    // if answer is correct
    if(userAnswer===questions[i].correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[i].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[i].style.color = 'red';
    }
  }

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

// show questions right away
showQuestions(questions, quizContainer);

// on submit, show results
submitButton.onclick = function(){
  showResults(questions, quizContainer, resultsContainer);
}

}
