//----- initialize variables
var userGuess;
var count = 0;
var magicNumber = Math.floor(Math.random()*100)+1;

/*--- page load -------*/
$(document).ready(function(){
	feedback = $('#feedback');
	guessList = $('#guessList');

/*--- Display information modal box ---*/
  	$(".what").click(function(){
    $(".overlay").fadeIn(1000);
	});

 /*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  	$(".overlay").fadeOut(1000);
 	});


	/* -----User Guessing Process------ */
	$('#guessButton').click(function() {
		userGuess = $('#userGuess').val();
		userGuess = parseInt(userGuess);

		if (isNaN(userGuess) || userGuess > 100) {
		alert("COME ON MAN");
		}

		else {
		count++;
		console.log(count); 
		$('span').text(count)
		console.log (userGuess);
		guessList.append("<li>" + userGuess + "</li>")
		generateFeedback();
		}
	});
});




/*--- Display information modal box ---*/
  		$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

 /*--- Hide information modal box ---*/
  		$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
 	});

/*------New Game --------*/
$('.new').click(function() {
	feedback.empty();
	feedback.append("<p>" + "Make your Guess!" + "</p>");
	$('#userGuess').empty();
	$(".guessBox").empty();
	generateNumber();
	count = 0;
	$('span').text(count);
	});

/*--------Generate Guess Feedback----------*/
	function generateNumber(){
	magicNumber = Math.floor(Math.random()*100)+1;
}
	function generateFeedback() {
		feedback.empty();
		if(magicNumber === userGuess){
		feedback.append("<p>" + 'You Win!' + "</p>");
		} else if(Math.abs(magicNumber - userGuess) < 10){
		feedback.append("<p>" + 'hot' + "</p>");
		} else if(Math.abs(magicNumber - userGuess) < 20 && Math.abs(magicNumber - userGuess) > 9){
		feedback.append("<p>" + 'Kinda hot' + "</p>");
		} else if(Math.abs(magicNumber - userGuess) < 30 && Math.abs(magicNumber - userGuess) > 19){
		feedback.append("<p>" + 'less than warm' + "</p>");
		} else {
		feedback.append("<p>" + 'cold' + "</p>");
		}
	}





