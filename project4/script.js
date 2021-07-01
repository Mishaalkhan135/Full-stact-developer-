//Get Dom elements for js code
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const volume = document.querySelector('volume');
//Creat function for clicking on video
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}
//Create function for updating the play / pause icons
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML = ' <i class="fa fa-play fa-2x"></i>'
    }else{
        play.innerHTML = ' <i class="fa fa-pause fa-2x"></i>'
    }
}
//Create function to update the progress: timner 
function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100;
    //Set the time for the timestamp
    let mins = Math.floor(video.currentTime / 60);
    if(mins < 10){
        mins = '0' + String(mins);
    }    
    let secs = Math.floor(video.currentTime % 60);
    if(secs < 10){
        secs = '0' + String(secs);
    }
    timestamp.innerHTML =`${mins}:${secs}`;

}
//Create funtion for stop video:stop button
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}
//Create fuction to update the video progress using the slider
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100;
}


//1.Event listner for clicking on video
video.addEventListener('click',toggleVideoStatus); 
video.addEventListener('pause',updatePlayIcon);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('timeupdate',updateProgress);
//2.Evnet listner for play button
play.addEventListener('click', toggleVideoStatus);

//3.Event listner for stop button
stop.addEventListener('click', stopVideo);

//4.Evnet listner for progress bar
progress.addEventListener('change',setVideoProgress);
