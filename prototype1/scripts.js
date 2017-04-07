$( document ).ready(function(){
    $(".button-collapse").sideNav();
    $('.modal').modal();
})


var songs = [
 {
   "id": 1,
   "title": "17",
   "artist": "Kings of Leon",
   "length": "3:06",
   "imgurl": "https://lh5.ggpht.com/fzmZqTU2ZAVslA3fj1jU7h_WK42wBa68lsTF5ZpMLoBUswIA-P5-IHo0mJ5-uCecvF9LnZZukA=s160-c-e100-rwu-v1"
 },
 {
     "id": 2,
   "title": "Affirmation",
   "artist": "Savage Garden",
   "length": "4:15",
   "imgurl": "https://lh6.ggpht.com/CtS2h5jSMbiRqTkklhaT6pYnBtlPl-_xegDOgwprFimCqwQkQtlfZwdEsiAg6RuDY3HX1LbK=s160-c-e100-rwu-v1"
 },{
     "id": 3,
   "title": "Amaranth",
   "artist": "Nightwish",
   "length": "3:52",
   "imgurl": "https://lh5.ggpht.com/D8kK378N-jq6kFcbnANqseXgUKLNiCjiEwS7FOTJHLJPzrtVH-Sq1NEIz7c=s160-c-e100-rwu-v1"
 },{
     "id": 4,
   "title": "Bad",
   "artist": "Michael Jackson",
   "length": "4:09",
   "imgurl": "https://lh6.ggpht.com/Bc_4mr3Z4YHPekvOonBtX5Mh1gwzI8iGih60l6ab9omqb7FOkWZSHAUyv0U=s160-c-e100-rwu-v1"
 },{
     "id": 5,
   "title": "Breaking the Habit",
   "artist": "Linkin Park",
   "length": "3:17",
   "imgurl": "https://lh3.googleusercontent.com/Apl7VkpGcqAtcyixEW1BAfjfs0MwAIptKcz3XC-VgLLV6AqvBCH4sr-_lrGO8OSkNzvCJFEfIiY=s160-c-e100-rwu-v1"
 },{
     "id": 6,
   "title": "Can't Stop",
   "artist": "Red Hot Chilli Peppers",
   "length": "4:31",
   "imgurl": "https://lh3.googleusercontent.com/HP89txW4eDKNpjhTe35Uw2EFjkZkroPqc-GQIz_VwmWcrKLYGUEykFb_kI5fyoUhTFx3cmnnhg=s160-c-e100-rwu-v1"
 },{
     "id": 7,
   "title": "Counting Stars",
   "artist": "One Republic",
   "length": "4:18",
   "imgurl": "https://lh3.googleusercontent.com/7TMTXExLZ7WaA6eUGNPM9ubBzBdGk5wVBkzEzvZHX1bL1fP90RBjVOKwm-nRkMOd5oONJdmynAM=s160-c-e100-rwu-v1"
 },{
     "id": 8,
   "title": "Do I Wanna Know?",
   "artist": "Arctic Monkeys",
   "length": "4:33",
   "imgurl": "https://lh3.googleusercontent.com/OaAyAzpBbH9c6n45B24nM42mOx9u5CE6g3Ydpv2tOOS7B2SK5RXsaAiW825fAqy-cgKZxAOnSQ=s160-c-e100-rwu-v1"
 },{
     "id": 9,
   "title": "Eagleheart",
   "artist": "Stratovarius",
   "length": "3:57",
   "imgurl": "https://lh3.googleusercontent.com/XmCvVkvTSPCW30cUOUlpG5ZJaN3S5u3yRlMWj1lAU-S92iiVpZt3PzdBrETAuSytnq5jhWClNw=s160-c-e100-rwu-v1"
 },{
     "id": 10,
   "title": "Greased Lightning",
   "artist": "John Travolta",
   "length": "3:14",
   "imgurl": "https://lh3.googleusercontent.com/QeIP6rDOaxCqCp_BqGK8PxRkLquThpkU2_UR2F_ulkvadO_0jq2l-KavdLlICFwVoIR26qVFgw=s160-c-e100-rwu-v1"
 }
];

var all_songs = [];
var selected_songs = [];
var songs_container = document.getElementById("songs-collection");
var playlist_container = document.getElementById("playlist-collection");
// run on page load
for (var i = 0; i < songs.length; i++) {
    all_songs.push(songs[i].id);
}
populateSongs();
populatePlaylist();

function populateSongs() {
    all_songs.sort();
    songs_container.innerHTML = "";
    for(var i = 0; i < all_songs.length; i++) {
        var song_id = all_songs[i] - 1;
        var li = document.createElement("li");
        li.id = songs[song_id].id;
        li.className = "collection-item avatar";
        li.dataset.id = songs[song_id].id;
        songs_container.appendChild(li);
        var img = document.createElement("img");
        img.src = songs[song_id].imgurl;
        img.className = "circle";
        li.appendChild(img);
        var span = document.createElement("span");
        span.className = "title";
        span.innerHTML = songs[song_id].title;
        li.appendChild(span);
        var p = document.createElement("p");
        p.innerHTML = songs[song_id].artist + " · " + songs[song_id].length;
        li.appendChild(p);
    }
}
function populatePlaylist() {
    selected_songs.sort();
    playlist_container.innerHTML = "";
    for(var i = 0; i < selected_songs.length; i++) {
        var song_id = selected_songs[i]-1;
        var li = document.createElement("li");
        li.id = songs[song_id].id;
        li.className = "collection-item avatar";
        li.dataset.id = songs[song_id].id;
        playlist_container.appendChild(li);
        var img = document.createElement("img");
        img.src = songs[song_id].imgurl;
        img.className = "circle";
        li.appendChild(img);
        var span = document.createElement("span");
        span.className = "title";
        span.innerHTML = songs[song_id].title;
        li.appendChild(span);
        var p = document.createElement("p");
        p.innerHTML = songs[song_id].artist + " · " + songs[song_id].length;
        li.appendChild(p);
    }
}

new Slip(songs_container);
new Slip(playlist_container);
songs_container.addEventListener('slip:swipe', function(e) {
    // e.target list item swiped
    if (true) {
        // list will collapse over that element
        e.target.parentNode.removeChild(e.target);
        all_songs.splice(all_songs.indexOf(parseInt(e.target.dataset.id)), 1);
        console.log(all_songs);
        selected_songs.push(parseInt(e.target.dataset.id));
    } else {
        e.preventDefault(); // will animate back to original position
    }
});
playlist_container.addEventListener('slip:swipe', function(e) {
    // e.target list item swiped
    if (true) {
        // list will collapse over that element
        e.target.parentNode.removeChild(e.target);
        all_songs.push(parseInt(e.target.dataset.id));
        selected_songs.splice(selected_songs.indexOf(parseInt(e.target.dataset.id)), 1);
    } else {
        e.preventDefault(); // will animate back to original position
    }
});

var songs_menu_item = document.getElementById("songs-menu-item");
var playlist_menu_item = document.getElementById("playlist-menu-item");

songs_menu_item.onclick = function(){
    populateSongs();
};
playlist_menu_item.onclick = function(){
    populatePlaylist();
};