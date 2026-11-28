// open and close sidebar menu //
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", function(){
    sidebar.classList.toggle("open");
        
    menuToggle.setAttribute(
        "aria-expanded",
        sidebar.classList.contains("open")
    );
});

// switch the theme between dark and light mode
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const next = document.documentElement.dataset.theme == "light" ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("theme", next);
    });
  });
});

//checks if user selected light mode, if yes, keeps it for the other pages too
if (localStorage.getItem("theme") == "light") {
    document.documentElement.setAttribute("data-theme", "light");
}

// popup box
function showPopup(title, message, icon, iconClass="", movie_name="") {
    document.getElementById("popupTitle").textContent = title;
    document.getElementById("popupMessage").textContent = message;
    var popupIcon = document.getElementById("popupIcon");
    
    popupIcon.src = icon;
    popupIcon.className = iconClass;

    document.getElementById("movie_popup").textContent = movie_name;
    document.getElementById("customPopup").style.display = "flex";
}

function closePopup() {

    document.getElementById("customPopup").style.display = "none";

}