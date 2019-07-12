// Timers
// Debugging
// JS / Jquery review
// setTimeout
// setInterval
var card = $("#quiz-area");
var countStartNumber = 15;

var questions = [
  {
    question: 'Which Great Lake shares a border with Minnesota?',
    choices: ['Lake Michigan', 'Lake Huron', 'Lake Minnesota', 'Lake Superior'],
    answer: 'Lake Superior',
    fact:'The largest Great Lake'
  },
  {
    question: 'The _________ river flows through Minneapolis',
    choices: ['Minnesota River', 'Mississippi River', 'Missouri River', 'Minneapolis River'],
    answer: 'Mississippi River',
    fact: 'The Mississippi River is the 4th longest river in the world.'
  },
  {
    question: 'What is the Minnesota state bird?',
    choices: ['Loon', 'Lady Slipper', 'Canadian Goose', 'American Finch'],
    answer: 'Loon',
    fact: 'While the Loon is the state bird, the Lady Slipper is the state flower.'
  },
  {
    question: 'What year was Minnesota admitted to the Union?',
    choices: ['1791', '1798', '1858', '1891'],
    answer: '1858',
    fact: 'On May 11th, 1858, Minnesota was the 32nd state to enter the Union.'
  },
  {
    question: 'Which Minnesota governor started a nationaly recognized company that is still in existence?',
    choices: ['Mark Dayton', 'Alexander Ramsey', 'William R Marshall', 'John S Pillsbury'],
    answer: 'John S Pillsbury',
    fact: 'After many business failures, C.A. Pillsbury and Company was started with his nephew.'
  },
  {
    question: 'Which of the following was NOT created in Minnesota?',
    choices: ['Water Skiing', 'Zubaz', 'SPAM', 'Blender'],
    answer: 'Blender',
    fact: 'The blender was invented next door in Wisconsin'
  },
  {
    question: 'On which lake was water skiing invented?',
    choices: ['Lake Pepin', 'Mille Lacs', 'Cross Lake', 'Lake Minnetonka'],
    answer: 'Lake Pepin',
    fact: 'Lake Pepin is a wide portion of the Missippi River'
  }
];

var game = {

  questions: questions,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  countdown: function() {
    game.counter--;
    $("#counter-number").text(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.timeUp();
    }
  },

  loadQuestion: function() {

    timer = setInterval(game.countdown, 1000);

    card.html("<h2>" + questions[this.currentQuestion].question + "</h2>");

    for (var i = 0; i < questions[this.currentQuestion].choices.length; i++) {
      card.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].choices[i]
      + "'>" + questions[this.currentQuestion].choices[i] + "</button>");
    }
  },

  nextQuestion: function() {
    game.counter = countStartNumber;
    $("#counter-number").text(game.counter);
    game.currentQuestion++;
    game.loadQuestion();
  },

  timeUp: function() {

    clearInterval(timer);

    $("#counter-number").html(game.counter);

    card.html("<h2>Time is up!</h2>");
    card.append("<h3>The Correct Answer is: " + questions[this.currentQuestion].answer + "</h3>");
    card.append("<h4>" + questions[this.currentQuestion].fact + "</h4>");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  results: function() {

    clearInterval(timer);

    card.html("<h2>Score:</h2>");

    $("#counter-number").text(game.counter);

    card.append("<h3>Correct Answers: " + game.correct + "</h3>");
    card.append("<h3>Incorrect Answers: " + game.incorrect + "</h3>");
    card.append("<h3>Unanswered: " + (questions.length - (game.incorrect + game.correct)) + "</h3>");
    card.append("<br><button id='start-over'>Start Over?</button>");
  },

  clicked: function(e) {
    clearInterval(timer);
    if ($(e.target).attr("data-name") === questions[this.currentQuestion].answer) {
      this.answeredCorrectly();
    }
    else {
      this.answeredIncorrectly();
    }
  },

  answeredIncorrectly: function() {

    game.incorrect++;

    clearInterval(timer);

    card.html("<h2>Nope!</h2>");
    card.append("<h3>The Correct Answer was: " + questions[game.currentQuestion].answer + "</h3>");
    card.append("<h4>" + questions[this.currentQuestion].fact + "</h4>");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  answeredCorrectly: function() {

    clearInterval(timer);

    game.correct++;

    card.html("<h2>Correct!</h2>");
    card.append("<h4>" + questions[this.currentQuestion].fact + "</h4>");

    if (game.currentQuestion === questions.length - 1) {
      setTimeout(game.results, 3 * 1000);
    }
    else {
      setTimeout(game.nextQuestion, 3 * 1000);
    }
  },

  reset: function() {
    this.currentQuestion = 0;
    this.counter = countStartNumber;
    this.correct = 0;
    this.incorrect = 0;
    this.loadQuestion();
  }
};


// var x, len;   
// for (x = 0, len = questions[i].choices.length; x < len; x++) {
//     $("#choices" + x).append($('<h3>' + questions.choices[i] +'</h3>'));
// }
// window.onload = function() {
//   $(".btn").on("click", start);
// };
// var clockRunning = false;
// var intervalId
// var timer
// var delayButtonAlert;

// // function answer() {
// //   if (choices[i] === answers[i])
// //   console.log("correct");
// //   !clockRunning;
// //   time = 0;
// //   $("#timer").text("10");
// // }



// function start() {
//   if (!clockRunning) {
//     intervalId = setInterval(count, 1000);
//     clockRunning = true;
//   }
// }
//   //Start on click.
//  $(".btn").on("click", function() {
//   //  Set the button alert's timeout to run three seconds after the function's called.
//   delayButtonAlert = setTimeout(function() {
//     alert("Alert #2: Called 3 seconds after the start button is clicked.");
//   }, 10000);
// });

// function count() {
//   time++;
//   var converted = 10 - timeConverter(time);
// //console.log(converted);
//   $("#timer").text(converted);
// }

// function timeConverter(t) {

//   var minutes = Math.floor(t / 60);
//   var seconds = t - (minutes * 60);
//   return  seconds;
// }
$(document).on("click", "#start-over", function() {
  game.reset();
});

$(document).on("click", ".answer-button", function(e) {
  game.clicked(e);
});

$(document).on("click", "#start", function() {
  $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>30</span> Seconds</h2>");
  game.loadQuestion();
});

