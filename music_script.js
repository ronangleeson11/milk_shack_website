const music_player = document.querySelector("#music-player");
const tracklist = document.querySelector("#tracklist");
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
