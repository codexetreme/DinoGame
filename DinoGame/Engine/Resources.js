class gameResources {
    constructor() {
        this.DinoImagePath = "Resources/dinoImage.png";
        this.TreeImagePath = "Resources/treeImage.png";
        // colors
        this.ScoreTextColor = "#40d291";
        this.ScoreFont = "Comic Sans MS";
        this.GameObjects = new Array();
        this.Rigidbodies = new Array();
        this.jumpKey = false;
        this.pauseKey = false;
    }
    static getInstance() {
        return this.mInstance;
    }
}
gameResources.mInstance = new gameResources();
//# sourceMappingURL=Resources.js.map