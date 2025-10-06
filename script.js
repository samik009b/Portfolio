const loadingScreen = document.getElementById("loading-screen");
const loadingText = document.getElementById("loading-text");
const progressBar = document.querySelector(".progress-bar");
const percentage = document.querySelector(".percentage");
const portfolio = document.getElementById("portfolio");

const phrases = [
	"Compiling my regrets…",
	"Writing code I'll never remember",
	"JavaScript, why you do this?",
	"Debugging my soul… Almost there",
	"I hate frontend designing"
];

// Check if loading has been shown before
const hasLoaded = sessionStorage.getItem("hasLoaded");

if (!hasLoaded) {
	// First visit - show loading animation
	let phraseIndex = 0;
	let progress = 0;
	const totalDuration = 5000; // 5 seconds
	const updateInterval = 50; // Update every 50ms
	const totalSteps = totalDuration / updateInterval;
	const progressPerStep = 100 / totalSteps;
	const phraseInterval = totalDuration / phrases.length;

	// Update progress bar and percentage
	const progressTimer = setInterval(() => {
		progress += progressPerStep;

		if (progress >= 100) {
			progress = 100;
			clearInterval(progressTimer);

			// Finish loading
			setTimeout(() => {
				loadingScreen.classList.add("hidden");
				setTimeout(() => {
					loadingScreen.style.display = "none";
					portfolio.classList.add("visible");
					sessionStorage.setItem("hasLoaded", "true");
				}, 800);
			}, 300);
		}

		progressBar.style.width = progress + "%";
		percentage.textContent = Math.floor(progress) + "%";
	}, updateInterval);

	// Change phrases
	const phraseTimer = setInterval(() => {
		phraseIndex++;
		if (phraseIndex < phrases.length) {
			loadingText.style.animation = "none";
			setTimeout(() => {
				loadingText.textContent = phrases[phraseIndex];
				loadingText.style.animation = "textFadeIn 0.6s ease-out forwards";
			}, 50);
		} else {
			clearInterval(phraseTimer);
		}
	}, phraseInterval);
} else {
	loadingScreen.style.display = "none";
	portfolio.classList.add("visible");
}
