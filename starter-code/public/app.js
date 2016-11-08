console.log('app.js connected');
$(document).ready(function(){

$('#guess-number-form').on('submit', getGuess);
function getGuess() {
  event.preventDefault();
  $.ajax({
    method: "GET",
    url: 'http://localhost:3000/pickanumber',
    data: $('#guess-number-form').serialize(),
    success: handleGuessSuccess,

  });
};

function handleGuessSuccess(data){
  $('.serverResponse').html(data);
};
$('#target-number-form').on('submit', getTarget);
function getTarget(){
  event.preventDefault();
  $.ajax({
    method: "POST",
    url: 'http://localhost:3000/pick-a-number',
    data: $('#target-number-form').serialize(),
    success: handleTargetSuccess,
  });
};
function handleTargetSuccess(data){
  $('.serverSecResponse').html(data);

};

  console.log('DOM ready');
});
