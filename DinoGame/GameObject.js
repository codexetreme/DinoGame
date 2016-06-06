var GameObject = (function () {
    function GameObject(name, position, imageSrc) {
        this.name = name;
        this.img = new Image();
        this.img.src = imageSrc;
        this.transform = new Transform();
        this.transform.position = position;
        gameResources.getInstance().GameObjects.push(this);
        console.log("pushed object " + this.name);
    }
    GameObject.prototype.updateGameObject = function () {
        Canvas.drawAsset("image", this.img, this.transform.position);
    };
    ;
    return GameObject;
}());
//# sourceMappingURL=GameObject.js.map