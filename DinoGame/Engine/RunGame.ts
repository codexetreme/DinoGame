class RunGame extends GameLoopComponents {



    dino: GameObject;
    Tree: GameObject;
    dinoTransform: Transform;
    dinoVelocity: Vector2;
    dinoHeight: number = 91;
    dinoJumpSpeed: number = 10;


    treeHeight: number = 80;

    nameCounter: number = 1;
    name: string = "tree ";
   


    
    Start() {
        super.Start();
        console.log("called overriden start ");
        this.dino = new GameObject("Dino", new Vector2(50, Canvas.getHeight() - this.dinoHeight),true, gameResources.getInstance().DinoImagePath);

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

    grounded: boolean;
    V: Vector2 = Vector2.identity;
    Update() {
        super.Update();
        if (!gameResources.getInstance().pauseKey)
            this.dinoJump();
        else
            Canvas.writeToCanvas("Game Paused",new Vector2(Canvas.getWidth() / 2, Canvas.getHeight() / 2));
        //clamps it to bottom
        if (this.dinoTransform.position.y >= Canvas.getHeight() - 91) {

            this.dinoTransform.position.y = Canvas.getHeight() - 91
            this.grounded = true;
        }
        else this.grounded = false;



        Canvas.updateScoreUI(0, gameResources.getInstance().ScoreFont, gameResources.getInstance().ScoreTextColor, new Vector2(Canvas.getWidth(), 30), new Vector2(-200, 0));
    }

    

}


let g: RunGame = new RunGame();

g.startGame();