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
    

// if (choices.questionOne[3] === answers[i]){}


console.log(questions[i])
console.log(choices[i])
console.log(answers[i])

// function count() {
//     time++;
  
  
//     var timeString = 10 - timeConverter(time);
//     //        and save the result in a variable.
//     $("#timer").text(timeString);
//     //  TODO: Use the variable you just created to show the converted time in the "display" div.
  
//   }
  
//   //  THIS FUNCTION IS DONE FOR US!
//   //  We do not need to touch it.
  
//   function timeConverter(t) {
  
//     //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
//     var minutes = Math.floor(t / 60);
//     var seconds = t - (minutes * 60);
  
//     if (seconds < 10) {
//       seconds = "0" + seconds;
//     }
  
//     return seconds;
//   }
//   console.log(t);
// console.log(timeConverter());

// count()
$("#question").text(questions[i]);

var x, len;   
for (x = 0, len = choices[i].length; x < len; x++) {
    $("#choices").append("<button>" + choices[i][x] +  "</button>" +"<br>")
    
}




 
