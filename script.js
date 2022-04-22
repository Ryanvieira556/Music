//initial data
let musics = 0;
let indice = 0;

//Maps
let nameArtist = album.map((item) => item.artist);
let titleCollection = album.map((item) => item.title);
let imgs = album.map((item) => item.cover);

//Displaying elements on the screen.
document.querySelector(".container img").src = imgs[0];
document.querySelector(".content .title").innerHTML = titleCollection[0];
document.querySelector(".content .artist").innerHTML = nameArtist[0];
document.querySelector(".album1 img").src = imgs[1];
document.querySelector(".album1 .title").innerHTML = titleCollection[1];
document.querySelector(".album1 .artist").innerHTML = nameArtist[1];

//Events
document.querySelector(".next").addEventListener("click", () => {
  indice++;
  rederizeMusics();
  pauseMusic()
});
document.querySelector(".previous").addEventListener("click", () => {
  if (indice > 0) {
    indice--;
    rederizeMusics();
      pauseMusic()
  }
});
document.querySelector(".play").addEventListener("click", playMusic);
document.querySelector(".pause").addEventListener("click", pauseMusic);
//Functions
rederizeMusics();

function rederizeMusics() {
  if (album[musics]) {
    let q = album[musics];
    let mapUrls = q.tracks.map((item) => item.url);
   document.querySelector(".track-audio").src = mapUrls[indice];
    if (indice > q.tracks.length - 1) {
      musics++;
      indice = 0;
      rederizeMusics();
    }
  } else {
    musics++;
    indice = 0;
    rederizeMusics();
  }
}

function playMusic() {
  document.querySelector(".track-audio").play();
  document.querySelector(".play").style.display = "none";
  document.querySelector(".pause").style.display = "block";
}

function pauseMusic() {
  document.querySelector(".track-audio").pause();
  document.querySelector(".pause").style.display = "none";
  document.querySelector(".play").style.display = "block";
}
