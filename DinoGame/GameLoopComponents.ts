class GameLoopComponents {


    fps: number = 60;
    now: number;
    then: number = Date.now();
    interval: number = 1000 / this.fps;
    delta: number = 0.0;

    drawGame() {
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
    }

    // override this function and implement your own logic
    Update() {

    }



    Start() {
        Canvas.updateScoreUI(0, gameResources.getInstance().ScoreFont, gameResources.getInstance().ScoreTextColor, new Vector2(Canvas.getWidth(), 30), new Vector2(-200, 0));
        for (var i = 0; i < gameResources.getInstance().GameObjects.length; i++) {
            gameResources.getInstance().GameObjects[i].updateGameObject();
    }
}


    
}

