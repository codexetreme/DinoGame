class RunGame extends GameLoopComponents {
    constructor(...args) {
        super(...args);
        this.dinoHeight = 91;
        this.dinoJumpSpeed = 10;
        this.treeHeight = 80;
        this.nameCounter = 1;
        this.name = "tree ";
        this.V = Vector2.identity;
    }
    makeTree() {
        let spawnVector = new Vector2(Canvas.getWidth() + Math.random() * 1000, Canvas.getHeight() - this.treeHeight);
        let tree = new GameObject(this.name + this.nameCounter.toString(), spawnVector, true, gameResources.getInstance().TreeImagePath);
        let treeVelocity = new Vector2(-5, 0);
        tree.rigidbody.setGravity(Vector2.zero);
        tree.rigidbody.setVelocity(treeVelocity);
        this.nameCounter++;
    }
    Start() {
        super.Start();
        console.log("called overriden start ");
        this.dino = new GameObject("Dino", new Vector2(50, Canvas.getHeight() - this.dinoHeight), true, gameResources.getInstance().DinoImagePath);
        this.dinoTransform = this.dino.transform;
        this.dino.rigidbody.setGravity(Vector2.zero);
        Canvas.updateScoreUI(0, gameResources.getInstance().ScoreFont, gameResources.getInstance().ScoreTextColor, new Vector2(Canvas.getWidth(), 30), new Vector2(-200, 0));
        setInterval(() => { this.makeTree(); }, 2000);
        this.makeTree();
    }
    dinoJump() {
        if (gameResources.getInstance().jumpKey && this.grounded) {
            this.dino.rigidbody.setVelocity(new Vector2(0, -this.dinoJumpSpeed));
        }
        if (this.dinoTransform.position.y <= Canvas.getHeight() - this.dinoHeight - 150) {
            this.dino.rigidbody.setVelocity(new Vector2(0, this.dinoJumpSpeed));
        }
    }
    Update() {
        super.Update();
        if (!gameResources.getInstance().pauseKey)
            this.dinoJump();
        else
            Canvas.writeToCanvas("Game Paused", new Vector2(Canvas.getWidth() / 2, Canvas.getHeight() / 2));
        //clamps it to bottom
        if (this.dinoTransform.position.y >= Canvas.getHeight() - 91) {
            this.dinoTransform.position.y = Canvas.getHeight() - 91;
            this.grounded = true;
        }
        else
            this.grounded = false;
        Canvas.updateScoreUI(0, gameResources.getInstance().ScoreFont, gameResources.getInstance().ScoreTextColor, new Vector2(Canvas.getWidth(), 30), new Vector2(-200, 0));
    }
}
let g = new RunGame();
g.startGame();
//# sourceMappingURL=RunGame.js.map