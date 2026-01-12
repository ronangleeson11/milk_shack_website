const music_player = document.querySelector("#music-player");
const tracklist = document.querySelector("#tracklist");

// Play first song when album title clicked
const hero_title = document.querySelector("#hero-title");
if (hero_title) {
    hero_title.addEventListener("click", () => {
        const first_song = tracklist.querySelector(".song");
        if (first_song) {
            first_song.click();
        }
    });
}

// Select song on click
tracklist.addEventListener("click", (event) => {
    const li = event.target.closest('li');
    if (!li || !tracklist.contains(li)) return;
    const selected_song = li.id;
    if (!selected_song) return;
    let selected_songs = document.querySelectorAll(".selected-song");
    for (song of selected_songs) {
        song.classList.remove("selected-song");
    }
    li.classList.add("selected-song");
    const src = `music/${selected_song}`;
    music_player.src = src;
    music_player.load();
    music_player.play().catch(() => {});
});

// Auto-play next song when current ends
music_player.addEventListener("ended", () => {
    const songs = Array.from(tracklist.querySelectorAll(".song"));
    const currentSong = document.querySelector(".selected-song");
    const currentIndex = songs.indexOf(currentSong);
    if (currentIndex >= 0 && currentIndex < songs.length - 1) {
        const nextSong = songs[currentIndex + 1];
        nextSong.click();
    }
});
