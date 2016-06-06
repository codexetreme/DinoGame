﻿class GameObject {

    name: string;
    img: HTMLImageElement;
    transform: Transform;
    

    constructor(name, position, imageSrc) {
        this.name = name;
        this.img = new Image();
        this.img.src = imageSrc;
        this.transform = new Transform();
        this.transform.position = position;
        gameResources.getInstance().GameObjects.push(this);
        console.log("pushed object " + this.name);
    }


    updateGameObject() {
        Canvas.drawAsset("image", this.img, this.transform.position);
    };
}