// switch the theme between dark and light mode
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".theme-toggle").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const next = document.documentElement.dataset.theme == "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("theme", next);
    });
  });
});

//checks if user selected light mode, if yes, keeps it for the other pages too
if (localStorage.getItem("theme") == "light") {
    document.documentElement.setAttribute("data-theme", "light");
}