// Our Halls
// Halls List
var halls = [
    { name: "DOLBY", type: "PREMIUM", price: "RM 30", 
        facilities1: "Dolby Atmos", facilities2: "Dolby Vision", facilities3: "Recliner seats", image:"../Images/Halls/dolby.png"},
    { name: "JUNIOR", type: "FAMILY", price: "RM 14", 
        facilities1: "Kid-sized seats", facilities2: "Playful", facilities3: "Family friendly", image:"../Images/Halls/junior.png"},
    { name: "IMAX", type: "GIANT SCREEN", price: "RM28 ", 
        facilities1: "Big Screen", facilities2: "Powerful sound", facilities3: "Laser projection", image:"../Images/Halls/imax.png"},
    { name: "SCREEN X", type: "PANORAMIC", price: "RM 24", 
        facilities1: "270° screen", facilities2: "Surround Audio", facilities3: "Side-wall visuals", image:"../Images/Halls/screen_x.png"},
   
];

// Show the halls based on type
function showHalls(type) {
    var html = "";

    for (var i = 0; i < halls.length; i++) {
        var h = halls [i];

        if(type === "all" || h.type.toLowerCase() === type) {
            html += '<div class="halls_section">' +
                    '<div class="poster"><img src="' + h.image + '" alt="' + h.name + '"></div>' +
                    '<h5 class="hall_type">' + h.type + '</h5>' +
                    '<h2>' + h.name + '</h2>' +
                    '<div class="hall_facilities">' + 
                        '<h6>' + h.facilities1 + '</h6>' +
                        '<h6>' + h.facilities2 + '</h6>' +
                        '<h6>' + h.facilities3 + '</h6>' +
                    '</div>' +
                    '<div class="price">' +
                        '<h5>Tickets from</h5>' +
                        '<h4>' + h.price + '</h4>' +
                    '</div>' +
                    '<div class="hall_button">' + 
                        '<button class="book" data-index="' + i + '"><b>Book now</b>' + '</button>' +
                    '</div>' +
                    '</div>';

        }
    }

    document.getElementById("halls-list").innerHTML = html;
}

showHalls("all");

// Hall book button
document.getElementById("halls-list").addEventListener("click", function (e) {
    var btn = e.target.closest("button");
    if (!btn) return;

    var hall = halls[btn.dataset.index];

    if (btn.classList.contains("book")) {
        window.location.href = "booking.html?hall=" + encodeURIComponent(hall.name);
    };
})

// Show the halls based on type
function showHalls(type) {
    var html = "";

    for (var i = 0; i < halls.length; i++) {
        var h = halls [i];

        if(type === "all" || h.type.toLowerCase() === type) {
            html += '<div class="halls_section">' +
                    '<div class="poster"><img src="' + h.image + '" alt="' + h.name + '"></div>' +
                    '<h5 class="hall_type">' + h.type + '</h5>' +
                    '<h2>' + h.name + '</h2>' +
                    '<div class="hall_facilities">' + 
                        '<h6>' + h.facilities1 + '</h6>' +
                        '<h6>' + h.facilities2 + '</h6>' +
                        '<h6>' + h.facilities3 + '</h6>' +
                    '</div>' +
                    '<div class="price">' +
                        '<h5>Tickets from</h5>' +
                        '<h4>' + h.price + '</h4>' +
                    '</div>' +
                    '<div class="hall_button">' + 
                        '<button class="book" data-index="' + i + '"><b>Book now</b>' + '</button>' +
                    '</div>' +
                    '</div>';

        }
    }

    document.getElementById("halls-list").innerHTML = html;
}

showHalls("all");
