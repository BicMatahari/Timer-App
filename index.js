var imageA = document.getElementById("imageA");

var hel = document.getElementById("mainTimer");
var now = new Date().getTime();

var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

	

var countDownDate = new Date("July 21, 2023 00:00:00").getTime();
	
function updateCountdown() {
	var now = new Date().getTime();
	var distance = countDownDate - now;

	days.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
	hours.textContent = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	minutes.textContent = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	seconds.textContent = Math.floor((distance % (1000 * 60)) / 1000);
}

function setState (stateName) {
	var homeElement = document.getElementById("home");
	var timerElement = document.getElementById("timer");
	var completeElement = document.getElementById("complete");

	// console.log(homeElement, timerElement, completeElement);

	switch (stateName) {
	case "home":
		homeElement.classList.remove('hidden');
		timerElement.classList.add('hidden');
		completeElement.classList.add('hidden');
		break;
	case "timer":
		homeElement.classList.add('hidden');
		timerElement.classList.remove('hidden');
		completeElement.classList.add('hidden');
		break;
	case "complete":
		homeElement.classList.add('hidden');
		timerElement.classList.add('hidden');
		completeElement.classList.remove('hidden');
		break;
	default: 
		alert ("ERROR UNKNOWN STATE")
	}
}

// setInterval(updateCountdown, 1000);

window.onload = (event) => {
	setState("home");
}

