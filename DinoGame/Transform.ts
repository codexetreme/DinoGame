class Transform {

    position: Vector2;
    scale: Vector2;

    constructor() {
        this.position = Vector2.zero;
        this.scale = Vector2.identity;
    }

    Translate(directionVector: Vector2) {
        this.position = Vector2.Add(this.position, directionVector);
    }

    SetScale(value: Vector2 | number) {

        if (value instanceof Vector2) {
            this.scale = value;
        }
        if (typeof value === "number") {
            this.scale.Multiply(value);
        }

            
   
    }
    

}