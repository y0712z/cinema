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
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("theme", next);
    });
  });
});