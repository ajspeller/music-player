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
