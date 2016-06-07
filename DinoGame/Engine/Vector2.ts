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




    static Add(vec1: Vector2, vec2: Vector2): Vector2 {
        return new Vector2(vec1.x + vec2.x, vec1.y + vec2.y);
    }
    Set(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static Distance(vec1: Vector2, vec2: Vector2): number {
        let dist: number = Math.pow(vec1.x, 2) + Math.pow(vec1.y, 2) + Math.pow(vec2.x, 2) + Math.pow(vec2.y, 2);
        dist = Math.sqrt(dist);

        return dist;
    }

    Multiply(value: number): Vector2 {

        let resultVector = Vector2.identity;
        resultVector.x *= value;
        resultVector.y *= value;
        return resultVector;
        
    };
    equals(otherVector: Vector2): boolean {
        if (this.x == otherVector.x && this.y == otherVector.y)
            return true;
        else return false;
    }

    toString() {
        return this.x.toString() + " , " + this.y.toString();
    }

    static Lerp(vec1: Vector2, vec2: Vector2, time: number) {
        return Vector2.Add( vec1.Multiply(time), vec2.Multiply(1.0- time));
    }
}

