﻿class RunGame extends GameLoopComponents {



    dino: GameObject;
    Tree: GameObject;
    dinoTransform: Transform;
    dinoVelocity: Vector2;
    dinoHeight: number = 91;
    dinoJumpSpeed: number;


    treeHeight: number = 80;

    nameCounter: number = 1;
    name: string = "tree ";
    makeTree() {
        let spawnVector: Vector2 = new Vector2(Canvas.getWidth() + Math.random() * 1000, Canvas.getHeight() - this.treeHeight);
        console.log(Math.random());
        let tree: GameObject = new GameObject(this.name + this.nameCounter.toString(), spawnVector, true, gameResources.getInstance().TreeImagePath);
        let treeVelocity: Vector2 = new Vector2(-5, 0);
        tree.rigidbody.setGravity(Vector2.zero);
        tree.rigidbody.setVelocity(treeVelocity);
        this.nameCounter++;
    }



    
    Start() {
        super.Start();
        console.log("called overriden start ");
        this.dino = new GameObject("Dino", new Vector2(50, Canvas.getHeight() - this.dinoHeight),true, gameResources.getInstance().DinoImagePath);

        this.dinoTransform = this.dino.transform;
        this.dinoJumpSpeed = 3;
        this.dino.rigidbody.setGravity(Vector2.zero);
        Canvas.updateScoreUI(0, gameResources.getInstance().ScoreFont, gameResources.getInstance().ScoreTextColor, new Vector2(Canvas.getWidth(), 30), new Vector2(-200, 0));


        setInterval(() => { this.makeTree(); }, 2000);

        this.makeTree();
        

    }

    grounded: boolean;
    V: Vector2 = Vector2.identity;
    Update() {
        super.Update();
        if (gameResources.getInstance().jumpKey && this.grounded) {
            this.dino.rigidbody.setVelocity(new Vector2(0,-6));
            
        }

        if (this.dinoTransform.position.y <= Canvas.getHeight() - this.dinoHeight - 150) {
            this.dino.rigidbody.setVelocity(new Vector2(0,6));
        }  

        


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