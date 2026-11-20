//checks if user selected light mode, if yes, keeps it for the other pages too
if (localStorage.getItem("theme") == "light") {
    document.documentElement.setAttribute("data-theme", "light");
}