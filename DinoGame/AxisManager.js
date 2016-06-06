addEventListener("keydown", function (e) {
    gameResources.getInstance().keysDown[e.keyCode] = true;
}, false);
addEventListener("keyup", function (e) {
    gameResources.getInstance().keysDown[e.keyCode] = false;
}, false);
//# sourceMappingURL=AxisManager.js.map