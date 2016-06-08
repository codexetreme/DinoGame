window.addEventListener("keydown", function (e) {
    if (e.keyCode == 32) {
        e.preventDefault();
        gameResources.getInstance().jumpKey = true;
    }
    if (e.keyCode == 27) {
        e.preventDefault();
        gameResources.getInstance().pauseKey = !gameResources.getInstance().pauseKey;
        console.log(gameResources.getInstance().pauseKey);
    }
}, false);
window.addEventListener("keyup", function (e) {
    e.preventDefault();
    gameResources.getInstance().jumpKey = false;
    console.log(gameResources.getInstance().jumpKey);
}, false);
//# sourceMappingURL=AxisManager.js.map