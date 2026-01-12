const dragon = document.querySelector("#dragon");
const hero_title = document.querySelector("#hero-title");

dragon.addEventListener("click", () => {
    console.log("dragon clicked");
    let hero_title = document.querySelector("#hero-title");
    hero_title.style.background = "url('images/fire.gif') center no-repeat";
    console.log(hero_title);
    setTimeout(() => {
        hero_title.style.background = "none";
    }, 60000);
});
