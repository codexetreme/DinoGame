var gameResources = (function () {
    function gameResources() {
        this.DinoImagePath = "Resources/dinoImage.png";
        this.TreeImagePath = "Resources/treeImage.png";
        // colors
        this.ScoreTextColor = "#40d291";
        this.ScoreFont = "Comic Sans MS";
    }
    gameResources.getInstance = function () {
        return this.mInstance;
    };
    gameResources.mInstance = new gameResources();
    return gameResources;
}());
//# sourceMappingURL=Resources.js.map