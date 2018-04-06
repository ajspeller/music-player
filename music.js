console.log('javscript connected');

const songs = [
  "bensound-clearday.mp3",
  "bensound-epic.mp3",
  "bensound-funkyelement.mp3",
  "bensound-goinghigher.mp3",
  "bensound-retrosoul.mp3",
  "bensound-summer.mp3",
];

const createSongList = () => {
  const list = document.createElement('ol');
  songs.forEach((song, i, songs) => {
    const item = document.createElement('li');
    item.appendChild(document.createTextNode(song));
    list.appendChild(item);
  });
  return list;
}

document.querySelector('#songList').appendChild(createSongList());

const audioPlayer = document.querySelector('#player');
const playControl = document.querySelector("#playControl");
const pauseControl = document.querySelector("#pauseControl");
const appStatus = document.querySelector("#status");
songList.addEventListener('click', function(e){
  let songToPlay = `songs/${e.srcElement.innerHTML}`
  audioPlayer.src = songToPlay;
  appStatus.innerHTML = `The currently playing song is: <strong>${e.srcElement.innerHTML}</strong>`
  audioPlayer.load();
  audioPlayer.play();
});

playControl.addEventListener('click', function() {
  audioPlayer.play();
});

pauseControl.addEventListener('click', function() {
  audioPlayer.pauser();
});
