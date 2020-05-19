var WindowButton = document.querySelector('#WindowButton');
var flyoutMenu = document.querySelector('#flyoutMenu');

WindowButton.addEventListener("click", showMenu, false);
flyoutMenu.addEventListener("click", hideMenu, false);

function showMenu(e) {
    flyoutMenu.classList.add("show");

    document.body.style.overflow = 'hidden';
}

function hideMenu(e) {
    flyoutMenu.classList.remove("show");
    e.stopPropagation();

    document.body.style.overflow = "auto";
}