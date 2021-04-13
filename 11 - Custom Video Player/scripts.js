// 1. Get elements
// 2. Add Event listeners and extract values (if there are sliders)

const video = document.querySelector('.player__video');
const playButton = document.querySelector('.player__button');
const volumeSlider = document.querySelector('[name="volume"]');
const playbackSlider = document.querySelector('[name="playbackRate"]');
const dataSkip = document.querySelectorAll('[data-skip]');
// Play Button
playButton.addEventListener('click', handleVideo);

function handleVideo(){
	if(video.paused){ //will play video if paused
		video.play()
	} else {
		video.pause(); //will pause video if playing
	}
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
console.log(dataSkip)

dataSkip.forEach((data) =>{
	let skipValue = data.dataset.skip;
	data.addEventListener('click', () => {
		video.currentTime = video.currentTime + skipValue;
	});
})

function videoBack(skipValue){
	video.currentTime = video.currentTime + skipValue;
}