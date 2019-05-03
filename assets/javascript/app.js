// Timers
// Debugging
// JS / Jquery review
// setTimeout
// setInterval


var counter = 0;
var i = [0+counter];
var time = 0;



var questions = [
    'Which great lake shares a border with Minnesota?',
    'The _________ river flows through Minneapolis',
    'What is the Minnesota state bird?', 
    'What year was Minnesota admitted to the Union?', 
]



var choices = [
    ['Lake Michigan','Lake Huron', 'Lake Minnesota', 'Lake Superior'],
    ['Minnesota River', 'Mississippi River', 'Missouri River', 'Minneapolis River'],
    ['Loon', 'Lady Slipper', 'Canadian Goose', 'American Finch'],
    ['1791', '1798', '1858', '1891'],
]

var answers = [
     choices[i][3],
     choices[i][1],
     choices[i][0],
     choices[i][2],
    ]
    


// console.log(questions[i])
// console.log(choices[i])
// console.log(answers[i])



$("#question").text(questions[i]);

var x, len;   
for (x = 0, len = choices[i].length; x < len; x++) {
    $("#choices" + x).append($('<h3>' + choices[i][x] +'</h3>'));
}

var clockRunning = false;
var intervalId
var timer
var delayButtonAlert;

function reset() {
  time = 0;
  $("#timer").text("10");
}

function start() {
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
}
 //  Start on click.
 $(".btn").on("click", function() {
  //  Set the button alert's timeout to run three seconds after the function's called.
  delayButtonAlert = setTimeout(function() {
    alert("Alert #2: Called 3 seconds after the start button is clicked.");
  }, 10000);
});


