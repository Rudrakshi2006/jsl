function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
    sessionStorage.setItem("sessionTheme", theme);
}

function clearPreference() {
    localStorage.removeItem("theme");
    sessionStorage.removeItem("sessionTheme");
    document.body.className = "";
}

window.onload = function() {
    let saved = localStorage.getItem("theme");

    if (saved == "dark") {
        document.body.className = "dark";
    }
};
