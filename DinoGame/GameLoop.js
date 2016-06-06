var GameLoop = (function () {
    function GameLoop() {
        this.fps = 60;
        this.then = Date.now();
        this.interval = 1000 / this.fps;
        this.delta = 0.0;
    }
    GameLoop.prototype.drawGame = function () {
        requestAnimationFrame(this.drawGame);
        this.now = Date.now();
        this.delta = this.now - this.then;
        if (this.delta > this.interval) {
            this.then = this.now - (this.delta % this.interval);
            Canvas.clearCanvas();
            this.Update();
            for (var i = 0; i < gameResources.getInstance().GameObjects.length; i++) {
                gameResources.getInstance().GameObjects[i].updateGameObject();
            }
        }
    };
    // override this function and implement your own logic
    GameLoop.prototype.Update = function () {
    };
    GameLoop.prototype.Start = function () {
        Canvas.updateScoreUI(0, gameResources.getInstance().ScoreFont, gameResources.getInstance().ScoreTextColor, new Vector2(Canvas.getWidth(), 30), new Vector2(-200, 0));
        for (var i = 0; i < gameResources.getInstance().GameObjects.length; i++) {
            gameResources.getInstance().GameObjects[i].updateGameObject();
        }
    };
    return GameLoop;
}());
loadCanvas(1200, 500);
//# sourceMappingURL=GameLoop.js.map