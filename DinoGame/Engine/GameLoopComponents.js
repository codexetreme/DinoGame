class GameLoopComponents {
    constructor() {
        this.fps = 60;
        this.then = Date.now();
        this.interval = 1000 / this.fps;
        this.delta = 0.0;
        this.drawGame = () => {
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
    }
    startGame() {
        this.Start();
        this.drawGame();
        this.fixedUpdate();
    }
    fixedUpdate() {
        setInterval(() => {
            for (var i = 0; i < gameResources.getInstance().Rigidbodies.length; i++) {
                gameResources.getInstance().Rigidbodies[i].updateRigidbody();
            }
        }, 20);
    }
    // override this function and implement your own logic
    Update() {
    }
    Start() {
        Canvas.loadCanvas(1200, 500);
        for (var i = 0; i < gameResources.getInstance().GameObjects.length; i++) {
            gameResources.getInstance().GameObjects[i].updateGameObject();
        }
    }
}
//# sourceMappingURL=GameLoopComponents.js.map