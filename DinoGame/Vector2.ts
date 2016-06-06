class Vector2 {

    x: number;
    y: number;
    static up = new Vector2(0, 1);
    static forward = new Vector2(1, 0);
    static zero = new Vector2(0, 0);
    static identity = new Vector2(1, 1);

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }




    static Add(vec1: Vector2, vec2: Vector2) {
        let sumVector: Vector2 = Vector2.zero;
        sumVector.x = vec1.x + vec2.x;
        sumVector.y = vec1.y + vec2.y;
        return sumVector;

    }
    set(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    Multiply(value: number) {

        let resultVector = Vector2.identity;
        resultVector.x *= value;
        resultVector.y *= value;
        return resultVector;
        
    };
    equals(otherVector: Vector2) {
        if (this.x == otherVector.x && this.y == otherVector.y)
            return true;
        else return false;
    }

    toString() {
        return this.x.toString() + " , " + this.y.toString();
    }


}
console.log(Vector2.up.toString());
let vec1: Vector2 = new Vector2(5, 6);

console.log(vec1.toString());


vec1.set(30, 20);

console.log(vec1.toString());
