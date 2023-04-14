// get the length of the song list
const songCount = songList.length;

// generate a random index between 0 and songCount - 1
const randomIndex = Math.floor(Math.random() * songCount);

// get the song object at the random index
const randomSong = songList[randomIndex];

// display the song's image and title on your page
const songImage = document.getElementById("song-image");
const songTitle = document.getElementById("song-title");

songImage.src = randomSong.image;
songTitle.textContent = randomSong.title;

// create a link to the song's Bandcamp page
const bandcampLink = document.getElementById("bandcamp-link");
bandcampLink.href = randomSong.bandcampUrl;
