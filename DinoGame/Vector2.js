var Vector2 = (function () {
    function Vector2(x, y) {
        this.x = x;
        this.y = y;
    }
    Vector2.Add = function (vec1, vec2) {
        var sumVector = Vector2.zero;
        sumVector.x = vec1.x + vec2.x;
        sumVector.y = vec1.y + vec2.y;
        return sumVector;
    };
    Vector2.prototype.set = function (x, y) {
        this.x = x;
        this.y = y;
    };
    Vector2.prototype.Multiply = function (value) {
        var resultVector = Vector2.identity;
        resultVector.x *= value;
        resultVector.y *= value;
        return resultVector;
    };
    ;
    Vector2.prototype.equals = function (otherVector) {
        if (this.x == otherVector.x && this.y == otherVector.y)
            return true;
        else
            return false;
    };
    Vector2.prototype.toString = function () {
        return this.x.toString() + " , " + this.y.toString();
    };
    Vector2.up = new Vector2(0, 1);
    Vector2.forward = new Vector2(1, 0);
    Vector2.zero = new Vector2(0, 0);
    Vector2.identity = new Vector2(1, 1);
    return Vector2;
}());
console.log(Vector2.up.toString());
var vec1 = new Vector2(5, 6);
console.log(vec1.toString());
vec1.set(30, 20);
console.log(vec1.toString());
//# sourceMappingURL=Vector2.js.map