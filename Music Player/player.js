let audio = document.getElementById("audio");
let prev = document.getElementById("prev");
let pause = document.getElementById("pause");
let play = document.getElementById("play");
let next = document.getElementById("next");
let thumbnails = document.getElementById("thumbnails");
let progress = document.getElementById("progressBar");
let songName = document.getElementById("songName");
let albumName = document.getElementById("albumName");
let scrollName = document.getElementById("scrolling");
let mute = document.getElementById("mute");
let muted = document.getElementById("unmute");
let dots = document.getElementById("dots");
let currentSong = 0;
let songs = ['BossParty.mp3','Jimikki Ponnu.mp3','MeghamKarukatha.mp3','Vaa Vaathi.mp3']
let images = ['bossPartyImage.jpg','jimmikiPonnuImage.jpg','meghamKarukathaImage.jpg','vaaVaathiImage.jpg']
let albums = ['Waltair Veerayya','Varisu','Thiru','Vaathi']

audio.src = './Songs/' + songs[currentSong];
thumbnails.src = './SongImages/' + images[currentSong];
scrollName.innerHTML = songs[currentSong];
songName.innerHTML= songs[currentSong];
albumName.innerHTML= albums[currentSong];

play.addEventListener('click',() => {
    audio.play();
    pause.style.display = 'block';
    play.style.display = 'none';
})

pause.addEventListener('click',() => {
    pause.style.display = 'none';
    play.style.display = 'block';
    audio.pause();
})

next.addEventListener('click',() => {
    currentSong++;
    if(songs.length == currentSong){
        currentSong = 0;
    }
    audio.src = './Songs/' + songs[currentSong];
    thumbnails.src = './SongImages/' + images[currentSong];
    scrollName.innerHTML = songs[currentSong];
    songName.innerHTML= songs[currentSong];
    albumName.innerHTML= albums[currentSong];
    pause.style.display = 'block';
    play.style.display = 'none';
    audio.play();
})

prev.addEventListener('click',() => {
    currentSong--;
    if(currentSong == -1){
        currentSong = songs.length-1;
    }
    audio.src = './Songs/' + songs[currentSong];
    thumbnails.src = './SongImages/' + images[currentSong];
    scrollName.innerHTML = songs[currentSong];
    songName.innerHTML= songs[currentSong];
    albumName.innerHTML= albums[currentSong];
    pause.style.display = 'block';
    play.style.display = 'none';
    audio.play();
})

progress.addEventListener('change',() => {
    audio.currentTime = progress.value;
})

setInterval(() => {
    progress.max = audio.duration;
    progress.value = audio.currentTime;
},1000);

thumbnails.addEventListener('click', () => {
    console.log(audio.muted);
    audio.muted = false;
    muted.style.display = 'block';
    mute.style.display = 'none'
});


thumbnails.addEventListener('click', () => {
    console.log(audio.muted);
    audio.muted = true;
    muted.style.display = 'none';
    mute.style.display = 'block';
});
