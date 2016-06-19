class TreeController {
    spawnTrees(num) {
        this.trees = new Array();
        for (let i = 0; i < num; i++) {
            this.trees.push(new GameObject("tree " + i.toString(), new Vector2(Canvas.getWidth() + 50, Canvas.getHeight() - 80), true, gameResources.getInstance().TreeImagePath));
            this.trees[i].rigidbody.setGravity(Vector2.zero);
        }
    }
    setSpeed(speed) {
        for (let i = 0; i < this.trees.length; i++) {
            this.trees[i].rigidbody.setVelocity(new Vector2(speed, 0));
        }
    }
    cycleTrees() {
        for (let i = 0; i < this.trees.length; i++) {
            if (this.trees[i].transform.position.x < -15) {
                if (i == 0)
                    this.trees[i].transform.position.x = Canvas.getWidth() + Math.floor(Math.random() * 100);
                else {
                    this.trees[i].transform.position.x = this.trees[0].transform.position.x + Math.floor(Math.random() * 50);
                }
            }
        }
    }
}
//# sourceMappingURL=treeRoller.js.map