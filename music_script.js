const music_player = document.querySelector("#music-player");
const tracklist = document.querySelector("#tracklist");
const dragon = document.querySelector("#dragon");
const hero_title = document.querySelector("#hero-title");

// Play first song when album title clicked
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
    const current_song = document.querySelector(".selected-song");
    const current_index = songs.indexOf(current_song);
    if (current_index >= 0 && current_index < songs.length - 1) {
        const next_song = songs[current_index + 1];
        next_song.click();
    }
});

dragon.addEventListener("click", () => {
    console.log("dragon clicked");
    let hero_title = document.querySelector("#hero-title");
    hero_title.style.background = "url('images/fire.gif') center no-repeat";
    console.log(hero_title);
    setTimeout(() => {
        hero_title.style.background = "none";
    }, 60000);
});
