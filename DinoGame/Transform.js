var Transform = (function () {
    function Transform() {
        this.position = Vector2.zero;
        this.scale = Vector2.identity;
    }
    Transform.prototype.Translate = function (directionVector) {
        this.position = Vector2.Add(this.position, directionVector);
    };
    Transform.prototype.SetScale = function (value) {
        if (value instanceof Vector2) {
            this.scale = value;
        }
        if (typeof value === "number") {
            this.scale.Multiply(value);
        }
    };
    return Transform;
}());
//# sourceMappingURL=Transform.js.map