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
const fullScreen = document.querySelector('.full_screen');
const player = document.querySelector('.player');

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
let mousedown = false;
video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', scrub); 
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); //&& will force the listener to check the mousedown flag
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

function handleProgress(){
	const percent = (video.currentTime / video.duration) * 100;
	// console.log(video.currentTime, video.duration, percent)
	progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
	const scrubTime = (e.offsetX/progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

//full screen button
let full = false;
const oldWidth = player.style.width;
const oldHeight = player.style.height;
fullScreen.addEventListener('click', toggleSize);

function toggleSize(){
	return full ? 
		(full = false, player.style.width = oldWidth, player.style.height = oldHeight) 
		:
		(full = true, player.style.maxWidth ='100%', player.style.width = '100%', player.style.height = '100%')
}