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

// Email Subscribe
document.getElementById("subscribe").onclick = function () {
    var email = document.getElementById("email").value;
    var message = document.getElementById("message");

    if (email === "" || email.indexOf("@") === -1) {
        message.textContent = "Please enter a valid email.";
        message.style.color = "red";
    } else {
        message.textContent = "Thanks for subscribing!";
        message.style.color = "green";
        document.getElementById("email").value = "";
    };
}
