// Now Showing Movies
// Movie List
var nowshowing = [
    { name: "Spider-Man: Brand New Day", type: "Action", duration: "2h 25m", rating:"5.0", language:"English", age:"../Images/Logo and Icon/age_p13", image:"../Images/Movies/now_showing/spiderman_poster.jpg"},
    { name: "Avengers: Infinity War", type: "Action", duration: "2h 45m", rating:"4.7", language:"English", age:"../Images/Logo and Icon/age_p13", image:"../Images/Movies/now_showing/avengers.jpg"},
    { name: "Mikael: Pemburu Dua Alam", type: "Action", duration: "2h", rating:"4.5", language:"Malay", age:"../Images/Logo and Icon/age_p13", image:"../Images/Movies/now_showing/mikael.jpg"},
    { name: "Mission: Impossible-Dead Reckoning", type: "Action", duration: "2h 43m", language:"English", age:"../Images/Logo and Icon/age_p13", rating:"4.9", image:"../Images/Movies/now_showing/mission_impossible_poster.jpg"},
    { name: "Inside Out 2", type: "Animation", duration: "1h 36m", rating:"4.6", language:"English", age:"../Images/Logo and Icon/age_u", image:"../Images/Movies/now_showing/inside_out.jpg"},
    { name: "Minions & Monsters", type: "Animation", duration: "1h 29m", rating:"4.5", language:"English", age:"../Images/Logo and Icon/age_u", image:"../Images/Movies/now_showing/minions.jpg"},
    { name: "Moana 2", type: "Animation", duration: "1h 40m", rating:"5.0", language:"English", age:"../Images/Logo and Icon/age_u", image:"../Images/Movies/now_showing/moana.jpg"},
    { name: "Toy Story 5", type: "Animation", duration: "1h 42m", rating:"4.5", language:"English", age:"../Images/Logo and Icon/age_u", image:"../Images/Movies/now_showing/toy_story_poster.jpg"},
    { name: "Dear You", type: "Drama", duration: "1h 58m", rating:"4.2", language:"English", age:"../Images/Logo and Icon/age_u", image:"../Images/Movies/now_showing/dear_you.jpg"},
    { name: "Hi, Mom", type: "Drama", duration: "2h 8m", rating:"4.4", language:"English", age:"../Images/Logo and Icon/age_u", image:"../Images/Movies/now_showing/hi_mom.webp"},
    { name: "My Love", type: "Drama", duration: "2h 25m", rating:"4.6", image:"../Images/Movies/now_showing/my_love.webp"},
    { name: "Sunshine Women's Choir", type: "Drama", duration: "2h 14m", rating:"5.0", image:"../Images/Movies/now_showing/sunshine_women_choir.jpg"},
    { name: "Clayface", type: "Thriller", duration: "1h 50m", rating:"4.8", image:"../Images/Movies/now_showing/clayface.webp"},
    { name: "Obsession", type: "Thriller", duration: "1h 48m", rating:"4.7", image:"../Images/Movies/now_showing/obsession.jpg"},
    { name: "The Shadow's Edge", type: "Thriller", duration: "2h 21m", rating:"5.0", image:"../Images/Movies/now_showing/shadow_edge.jpg"},
    { name: "Resident Evil", type: "Thriller", duration: "1h 34m", rating:"4.6", image:"../Images/Movies/now_showing/resident_evil_poster.jpg"},
];

// Show the movies based on type
function showNowshowing(type) {
    var html = "";

    for (var i = 0; i < nowshowing.length; i++) {
        var m = nowshowing [i];

        if(type == "all" || m.type.toLowerCase() == type) {
            html += '<div class="movie">' +
                    '<div class="poster"><img src="' + m.image + '" alt="' + m.name + '"></div>' +
                    '<h5>' + m.name + '</h5>' +
                    '<h6 class="duration_rating">' + 
                        '<span class="duration">' + m.type + ' · ' + m.duration + '</span>'  + 
                        '<span class="rating">★ ' + m.rating + '</span>' +
                        '</h6>' +
                    '<div class="movie_buttons">' + 
                        '<button class="book" data-index="' + i + '">' +
                            '<span class="text"><b>Book</b></span>' +
                            '<span class="icon"><img src="../Images/Logo and Icon/ticket_icon.svg"></span>' +
                        '</button>' +
                    '</div>' +
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

// Book and Cart buttons
var cart = [];

document.getElementById("movie-list").addEventListener("click", function (e) {
    var btn = e.target.closest("button");
    if (!btn) return;

    var movie = nowshowing[btn.dataset.index];

    if (btn.classList.contains("book")) {
        window.location.href = "booking.html?movie=" + encodeURIComponent(movie.name);
    }

});

// Coming Soon Movies
// Movie List
var comingsoon = [
    { name: "All In", type: "Comedy", date: "12 Dec", image:"../Images/Movies/coming_soon/all_in.jpg"},
    { name: "Annabelle", type: "Horror", date: "19 Dec", image:"../Images/Movies/coming_soon/annabelle.jpg"},
    { name: "The Backrooms", type: "Sci-Fi", date: "26 Dec", image:"../Images/Movies/coming_soon/backrooms.jpg"},
    { name: "La La Land", type: "Romance", date: "28 Dec", image:"../Images/Movies/coming_soon/lalaland.jpg"},
    { name: "The Odyssey", type: "Action", date: "30 Dec", image:"../Images/Movies/coming_soon/odyssey.jpg"},
   
];

// Show the movies based on type
function showComingsoon(type) {
    var html = "";

    for (var i = 0; i < comingsoon.length; i++) {
        var m = comingsoon [i];

        if(type === "all" || m.type.toLowerCase() === type) {
            html += '<div class="movie">' +
                    '<div class="poster"><img src="' + m.image + '" alt="' + m.name + '"></div>' +
                    '<h5>' + m.name + '</h5>' +
                     '<h6 class="type_date">' + 
                        '<span class="type">' + m.type + '</span>'  + 
                        '<span class="date">🔔' + m.date + '</span>' +
                        '</h6>' +            
                    '<div class="movie_buttons">' + 
                        '<button class="remind" data-index="' + i + '">' + 
                            '<span class="text"><b>Remind me</b></span>' + 
                            '<span class="icon"><img src="../Images/Logo and Icon/reminder_icon.svg"></span>' +
                        '</button>' +
                    '</div>' +
                    '</div>';

        }
    }

    document.getElementById("soon-list").innerHTML = html;
}

showComingsoon("all");

// Remind button
var remind = [];

document.getElementById("soon-list").addEventListener("click", function (e) {
    var btn = e.target.closest("button");
    if (!btn) return;

    var movie = comingsoon[btn.dataset.index];

    if (btn.classList.contains("remind")) {
        remind.push(movie);
        showPopup(
            "Reminder Set!",
            "We'll remind you about ",
            "../Images/Logo and Icon/reminder_icon.svg",
            "reminder",
            movie.name + "!"
        );
    }
});
