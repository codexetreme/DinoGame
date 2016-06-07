class GameLoopComponents {


    fps: number = 60;
    protected now: number;
    protected then: number = Date.now();
    protected interval: number = 1000 / this.fps;
    delta: number = 0.0;

   
    
    startGame() {

        this.Start();
        this.drawGame();
        this.fixedUpdate();
        
        

    }

    protected drawGame = ()=> {
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

    
    protected fixedUpdate() {
        setInterval(() => {

            for (var i = 0; i < gameResources.getInstance().Rigidbodies.length; i++) {
                gameResources.getInstance().Rigidbodies[i].updateRigidbody();

            }
        }, 20);

    }

    // override this function and implement your own logic
    protected Update() {
        
    }



    protected Start() {
        
        Canvas.loadCanvas(1200, 500);
        
       
        for (var i = 0; i < gameResources.getInstance().GameObjects.length; i++) {
            gameResources.getInstance().GameObjects[i].updateGameObject();
        }
    }
}

