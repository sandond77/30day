// 1. Get elements
// 2. Add Event listeners and extract values (if there are sliders)

const video = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button');
const volumeSlider = document.querySelector('[name="volume"]');
const playbackSlider = document.querySelector('[name="playbackRate"]');
const dataSkip = document.querySelectorAll('[data-skip]');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

// Play Button
playButton.addEventListener('click', handleVideo);
video.addEventListener('click',handleVideo);

function handleVideo(){
	if(video.paused){ //will play video if paused
		video.play()
	} else {
		video.pause(); //will pause video if playing
	}

	//can also use ternary
	// return (video.paused) ? video.play() : video.pause();
}
// Volume Slider
volumeSlider.addEventListener('input', updateVolume);

function updateVolume(){
	video.volume = volumeSlider.value;
}
// Playback Rate Slider
playbackSlider.addEventListener('input', updatePlaybackRate);

function updatePlaybackRate(){
	video.playbackRate = playbackSlider.value;
}

// Skip Button
// console.log(dataSkip)
let time = 0;
dataSkip.forEach((data) =>{
	time = Number.parseInt(data.dataset.skip);
	data.addEventListener('click', videoSkip);
})

function videoSkip(){
	video.currentTime += time;
}

//Progress Bar Code
let length = 0;
let percent = 0;
video.onloadedmetadata = () => { //will extract the video duration once it loads
	length = video.duration;
	console.log(length);
};

function percentage(){
	percent = (video.currentTime/length)*100;
	console.log(percent)
}
// const length = video.duration;
// console.log(length);