console.log("Welcome To Spotify");

let songIndex = 1;
let audioElement = new Audio(`songs/${songIndex}.mp3`);
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('containers'));
let ct=0;

let songs = [
    {songName: "Legion", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Trap", filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "They Mad", filePath: "songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Rich The Kid", filePath: "songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Song title", filePath: "songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Safety Dance", filePath: "songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Back it up", filePath: "songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName: "Toofan", filePath: "songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName: "True Love", filePath: "songs/10.mp3", coverPath:"covers/10.jpg"},
    {songName: "Legion", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Trap", filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "They Mad", filePath: "songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Rich The Kid", filePath: "songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Song title", filePath: "songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Safety Dance", filePath: "songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Back it up", filePath: "songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName: "Toofan", filePath: "songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName: "True Love", filePath: "songs/10.mp3", coverPath:"covers/10.jpg"},
    {songName: "Legion", filePath: "songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Trap", filePath: "songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "They Mad", filePath: "songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Rich The Kid", filePath: "songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Song title", filePath: "songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Safety Dance", filePath: "songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Back it up", filePath: "songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName: "Toofan", filePath: "songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName: "True Love", filePath: "songs/10.mp3", coverPath:"covers/10.jpg"},
]


songItems.forEach((element,i)=>{
    // console.log("hello",element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByTagName("h3")[0].innerText = songs[i].songName;
});


//Handle Play/Pause Click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
        makeAllPlays();
    }
})


//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    //update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value = progress;
});

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = (myprogressbar.value * audioElement.duration)/100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        
        audioElement.src = `songs/${songIndex+1}.mp3`;
    
        audioElement.currentTime=0;
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;

    })
});
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex=0;
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }else{
        songIndex +=1;
        console.log(songIndex);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=9;
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }else{
        songIndex -=1;
        // console.log(songIndex);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
})


