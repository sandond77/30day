// 1. Get elements
// 2. Add Event listeners and extract values (if there are sliders)

const video = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button');
const toggle = document.querySelector('.toggle');
const volumeSlider = document.querySelector('[name="volume"]');
const playbackSlider = document.querySelector('[name="playbackRate"]');
const dataSkip = document.querySelectorAll('[data-skip]');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

// Play/Pause Button
playButton.addEventListener('click', handleVideo);
video.addEventListener('click', handleVideo); //so the video itself has play/pause
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

function handleVideo(){
	if(video.paused){ //will play video if paused
		video.play()
	} else {
		video.pause(); //will pause video if playing
	}

	//can also use ternary
	// return (video.paused) ? video.play() : video.pause();
}

function updateButton(){
	return (video.paused) ? toggle.textContent = '►' : toggle.textContent = '❚ ❚'
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
video.addEventListener('timeupdate', handleProgress);
video.addEventListener('click', scrub);

function handleProgress(){
	const percent = (video.currentTime / video.duration) * 100;
	// console.log(video.currentTime, video.duration, percent)
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
	console.log(e)
}

