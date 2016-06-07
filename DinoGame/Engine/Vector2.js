class Vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static Add(vec1, vec2) {
        return new Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
    }
    Set(x, y) {
        this.x = x;
        this.y = y;
    }
    static Distance(vec1, vec2) {
        let dist = Math.pow(vec1.x, 2) + Math.pow(vec1.y, 2) + Math.pow(vec2.x, 2) + Math.pow(vec2.y, 2);
        dist = Math.sqrt(dist);
        return dist;
    }
    Multiply(value) {
        let resultVector = Vector2.identity;
        resultVector.x *= value;
        resultVector.y *= value;
        return resultVector;
    }
    ;
    equals(otherVector) {
        if (this.x == otherVector.x && this.y == otherVector.y)
            return true;
        else
            return false;
    }
    toString() {
        return this.x.toString() + " , " + this.y.toString();
    }
    static Lerp(vec1, vec2, time) {
        return Vector2.Add(vec1.Multiply(time), vec2.Multiply(1.0 - time));
    }
}
Vector2.up = new Vector2(0, 1);
Vector2.forward = new Vector2(1, 0);
Vector2.zero = new Vector2(0, 0);
Vector2.identity = new Vector2(1, 1);
//# sourceMappingURL=Vector2.js.map