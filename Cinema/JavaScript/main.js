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
