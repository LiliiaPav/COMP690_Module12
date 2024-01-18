class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
const album1 = new Album('Operation Ivy', 'Energy')
const album2 = new Album('Blink 182', 'Dude Ranch')
const album3 = new Album('New Found Glory', 'Sticks and Stones')


console.log(jbox)
jbox.addAlbum(album1)
jbox.addAlbum(album2)
jbox.addAlbum(album3)

let fmPlayer = document.getElementById("fmPlayer");
let selectAlbum =document.getElementById("album");
let showFavorite = document.getElementById("show");
let pFavoriteAlbum = document.getElementById("favoriteAlbum");


for(var i = 0; i < jbox.albums.length; i++) {
    let stringToAdd = `${jbox.albums[i].artist}: ${jbox.albums[i].title}`
    console.log(stringToAdd);
    let el = document.createElement("option");
    el.textContent = stringToAdd;
    el.value = stringToAdd;
    selectAlbum.appendChild(el);
}


function fnPlay(event){
    event.preventDefault();

    let played = document.getElementById("album");
    
    let value = played.value;
    value = value.slice(0, value.indexOf(":"));

    for(var i = 0; i < jbox.albums.length; i++) {
        if (jbox.albums[i].artist===value){
            jbox.albums[i].play();
        }
    }
}

////// EVENT LISTENERS //////
fmPlayer.addEventListener('submit', function(event){fnPlay(event);});

showFavorite.addEventListener("click", function() {
    pFavoriteAlbum.innerHTML = jbox.favoriteAlbum();})

