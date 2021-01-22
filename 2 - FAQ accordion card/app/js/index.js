var questions = document.querySelectorAll('.container-question');
var answers = document.querySelectorAll('.container-answer');

for(let i = 0; i < questions.length; i++){
  questions[i].onclick = function() {
    questions[i].classList.toggle('bold');
    answers[i].classList.toggle('visible');
  }
  
}

