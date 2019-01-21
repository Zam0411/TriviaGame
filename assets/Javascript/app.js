//hides quiz before start is pressed
var quiz = $('.game').hide();
     
//starts quiz game
var startGame = $("#start-btn").on('click', function() {
    $(this).parent().hide();
    $('.game').show();
    });

    function changeValue() {
        document.getElementById("timer").innerHTML = --value;
    }

        var timerInterval = null;
            function start() {
            value = 45;
            timerInterval = setInterval(changeValue, 1000);  

            if (timerInterval == 0){
                start();
                    
            
            }
}

$("#sub-but").click(function() {
clearInterval(timerInterval);


});






var myQuestions = [
{
question: "What was the name of the mall where Marty meets the Time Machine?",
answers: {
    A: "Twin Pines Mall", 
    B: "Lone Pines Mall", 
    C: "New Pines Mall", 
    D: "Both A and B"
},
correctAnswer: 'A',
},
{
question: "What was Marty's father's name?",
answers: {
    A: "Biff", 
    B: "Ivan", 
    C: "Randy", 
    D: "George"
},
    correctAnswer: 'D',
},
{
question: "What was the name of doc browns dog?",
answers: {
    A: "Einstein", 
    B: "Tesla", 
    C: "Snoopy", 
    D: "Spot"
},
    correctAnswer: "A",
},
{
question: "What is the name of the core component of the time machine that gave it function?",
answers: {
    A: "Time Clock", 
    B: "Flux Capacitor", 
    C: "Flux Incapacitor", 
    D: "Time Setter"
},
    correctAnswer: "B",
},
];


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('sub-but');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function newFunction() {
    console.log(showResults);
}

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

// adds question and its answers to the output
output.push(
    '<div class="question">' + questions[i].question + '</div>'
    + '<div class="answers">' + answers.join('') + '</div>'
);
}

//combines output list into one string of html and puts it on the page
quizContainer.innerHTML = output.join('');
}


function showResults(questions, quizContainer, resultsContainer){

// gather answer containers from our quiz
var answerContainers = quizContainer.querySelectorAll('.answers');

// keep track of user's answers
var userAnswer = '';
var numCorrect = 0;

// for each question
for(var i=0; i<questions.length; i++){

// find selected answer
userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

// if answer is correct
if(userAnswer===questions[i].correctAnswer){
    // add to the number of correct answers
    numCorrect++;
    
    // color the answers green
    answerContainers[i].style.color = 'green';
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