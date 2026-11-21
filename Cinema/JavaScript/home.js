const slides = document.querySelector('.slides');
const count = slides.children.length;
const dotsBox = document.querySelector('.dots');
let current = 0;

// one dot per image
for (let i=0; i<count; i++) {
    const dot = document.createElement('button');
    dot.onclick = () => show(i);
    dotsBox.appendChild(dot);
}

function show (i) {
    current = i;
    slides.scrollTo({left: slides.clientWidth * i});
    dotsBox.querySelectorAll('button').forEach((d,n) =>
        d.classList.toggle('active', n === i)
    );
}

// autoplay every 4 seconds
setInterval (() => show ((current + 1) % count), 4000);

show(0);

// Now Showing Movies
// Movie List
var nowshowing = [
    { name: "Spider-Man: Brand New Day", type: "Action", rating:"5.0", image:"../Images/Movies/now_showing/spiderman_poster.jpg"},
    { name: "Avengers: Doomsday", type: "Action", rating:"4.7", image:"../Images/Movies/now_showing/avengers.jpg"},
    { name: "Mikael: Pemburu Dua Alam", type: "Action", rating:"4.5", image:"../Images/Movies/now_showing/mikael.jpg"},
    { name: "Mission: Impossible-Dead Reckoning", type: "Action", rating:"4.9", image:"../Images/Movies/now_showing/mission_impossible_poster.jpg"},
    { name: "Inside Out 2", type: "Animation", rating:"4.6", image:"../Images/Movies/now_showing/inside_out.jpg"},
    { name: "Minions & Monsters", type: "Animation", rating:"4.5", image:"../Images/Movies/now_showing/minions.jpg"},
    { name: "Moana 2", type: "Animation", rating:"5.0", image:"../Images/Movies/now_showing/moana.jpg"},
    { name: "Toy Story 5", type: "Animation", rating:"4.5", image:"../Images/Movies/now_showing/toy_story_poster.jpg"},
    { name: "Dear You", type: "Drama", rating:"4.2", image:"../Images/Movies/now_showing/dear_you.jpg"},
    { name: "How to Make Millions Before Grandma Dies (Lahn Mah)", type: "Drama", rating:"4.0", image:"../Images/Movies/now_showing/millions_grandma.jpg"},
    { name: "My Love", type: "Drama", rating:"4.6", image:"../Images/Movies/now_showing/my_love.webp"},
    { name: "Sunshine Women's Choir", type: "Drama", rating:"5.0", image:"../Images/Movies/now_showing/sunshine_women_choir.jpg"},
    { name: "Clayface", type: "Thriller", rating:"4.8", image:"../Images/Movies/now_showing/clayface.webp"},
    { name: "Obsession", type: "Thriller", rating:"4.7", image:"../Images/Movies/now_showing/obsession.jpg"},
    { name: "Project Hail Mary", type: "Thriller", rating:"5.0", image:"../Images/Movies/now_showing/project_hail_mary.jpg"},
    { name: "Resident Evil", type: "Thriller", rating:"4.6", image:"../Images/Movies/now_showing/resident_evil_poster.jpg"},
];

// Show the movies based on type
function showNowshowing(type) {
    var html = "";

    for (var i = 0; i < nowshowing.length; i++) {
        var m = nowshowing [i];

        if(type === "all" || m.type.toLowerCase() === type) {
            html += '<div class="movie">' +
                    '<div class="poster"><img src="' + m.image + '"alt="' + m.name + '"></div>' +
                    '<h3>' + m.name + '</h3>' +
                    '<h5>' + m.type + ' · ★ ' + m.rating + '</h5>' +
                    '</div>';
        }
    }

    document.getElementById("movie-list").innerHTML = html;
}

// Tab clicks
var tabs = document.querySelectorAll(".tab");

for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function (e) {
        e.preventDefault();

        for (var j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove("active");
        }
        this.classList.add("active");

        showNowshowing(this.dataset.filter);
    };
}

// Show everything when page opens
showNowshowing("all");