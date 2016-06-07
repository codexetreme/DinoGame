
window.addEventListener("keydown", function (e) {
    if (e.keyCode == 32) {
        e.preventDefault();
        gameResources.getInstance().jumpKey = true;
        console.log(gameResources.getInstance().jumpKey);
    }
}, false);

window.addEventListener("keyup", function (e) {
    e.preventDefault();
    gameResources.getInstance().jumpKey = false;
    console.log(gameResources.getInstance().jumpKey);
}, false);