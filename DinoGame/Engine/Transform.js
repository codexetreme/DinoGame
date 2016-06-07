class Transform {
    constructor() {
        this.position = Vector2.zero;
        this.scale = Vector2.identity;
    }
    Translate(directionVector) {
        this.position = Vector2.Add(this.position, directionVector);
    }
    SetScale(value) {
        if (value instanceof Vector2) {
            this.scale = value;
        }
        if (typeof value === "number") {
            this.scale.Multiply(value);
        }
    }
}
//# sourceMappingURL=Transform.js.map