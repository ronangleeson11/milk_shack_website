let music_player = document.querySelector("#music-player");
let tracklist = document.querySelector("#tracklist");
tracklist.addEventListener("click", (event) => {
        const li = event.target.closest('li');
        if (!li || !tracklist.contains(li)) return;
        const song = li.id;
        if (!song) return;
        const src = `music/${song}`;
        music_player.src = src;
        music_player.load();
        music_player.play().catch(() => {});
    });