class GameObject {
    constructor(name, position, hasRigidBody, imageSrc) {
        this.name = name;
        this.img = new Image();
        this.img.src = imageSrc;
        this.transform = new Transform();
        this.transform.position = position;
        this.isRigidBodyEnabled = hasRigidBody;
        if (this.isRigidBodyEnabled)
            this.rigidbody = new Rigidbody(this);
        gameResources.getInstance().GameObjects.push(this);
        console.log("pushed object " + this.name);
    }
    updateGameObject() {
        Canvas.drawAsset("image", this.img, this.transform.position);
    }
    ;
}
//# sourceMappingURL=GameObject.js.map