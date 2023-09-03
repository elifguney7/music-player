const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//Music
const songs = [
    {
        name: 'jacinto-1',
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto'
    },
    {
        name: 'jacinto-2',
        displayName: 'Seven Nation Army (Remix)',
        artist: 'Jacinto'
    },
    {
        name: 'jacinto-3',
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto'
    },
    {
        name: 'metric-1',
        displayName: 'Front Row (Remix)',
        artist: 'Metric/Jacinto'
    }
];

let isPlay = false;
// Play
function playSong() {
    isPlay = true;
    playBtn.classList.replace('fa-play' , 'fa-pause');
    playBtn.title= 'Pause';
    music.play();
}

// Pause
function pauseSong() {
    isPlay = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.title= 'Play';
    music.pause();
}

// Play or pause event listener
playBtn.addEventListener('click', () => (isPlay ? pauseSong() : playSong()));

//Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}
// Current song
let songIndex = 0;

// Play
function nextSong() {
    if(songIndex===3){
        songIndex = 0;
    } else{
        songIndex++;
    }
    loadSong(songs[songIndex]);
    console.log(songIndex);
    playSong();
}

// Pause
function prevSong() {
    if(songIndex === 0){
        songIndex = 3;
    } else{
        songIndex--;
    }    
    loadSong(songs[songIndex]);
    console.log(songIndex);
    playSong();
}

// On load select first Song
loadSong(songs[songIndex]);

// Update progress bar & time

function updateProgressBar(e) {
if (isPlay) {
    const { duration, currentTime } = e.srcElement;
    // update progress bar
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width=`${progressPercent}%`;
}
}

// Event listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);