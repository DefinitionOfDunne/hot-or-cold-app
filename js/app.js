$(document).ready(function () {
	'use strict';

	var count = 0;
	var magicNumber = Math.floor(Math.random() * 100) + 1;

	/*--- Display information modal box ---*/
	$(".what").click(function () {
		$(".overlay").fadeIn(1000);
	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function () {
		$(".overlay").fadeOut(1000);
	});

	/* -----User Guessing Process------ */

	$('#guessButton').click(function () {
		validateGuess($('#userGuess').val());
	});

	/*------New Game --------*/
	$('.new').click(function () {
		magicNumber = Math.floor(Math.random() * 100) + 1;
		count = 0;

		empty();
		$('#feedback').append("<p>" + "Make your Guess!" + "</p>");
		$('span').text(count);
	});

	function validateGuess(guess) {

		if (isNaN(guess) || guess > 100 || !guess) {
			alert("Choose number between 1-100");
		} else {
			insertGuess(guess);
		}
	}

	function insertGuess(guess) {

		count++;
		$('span').text(count);
		$('#guessList').append("<li>" + guess + "</li>")
		generateFeedback(guess);
	}

	function empty() {

		$('#userGuess').empty();
		$(".guessBox").empty();
		$('#feedback').empty();

	}

	/*--------Generate Guess Feedback----------*/

	function generateFeedback(guess) {

		function append(item) {
			$('#feedback').append('<p>' + item + '</p>');
		}

		var guess = parseInt(guess);
		var difference = Math.abs(magicNumber - guess);

		$('#feedback').empty();

		if (magicNumber === guess) {
			append('You Win!');
		} else if (difference < 10) {
			append('hot');
		} else if (difference < 20 && difference > 9) {
			append('Kinda hot');
		} else if (difference < 30 && difference > 19) {
			append('less than warm');
		} else {
			append('cold');
		}
	}

});





