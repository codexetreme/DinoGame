class Rigidbody {

    private velocity: Vector2 = Vector2.zero;
    private gravity: Vector2 = new Vector2(0, 0.5);
    private go: GameObject
    constructor(gameObject: GameObject) {
        gameResources.getInstance().Rigidbodies.push(this);
        this.go = gameObject;
    }

    setGravity(grav: Vector2) {
        this.gravity = grav;
    }

    setVelocity(velocity: Vector2) {

        this.velocity = velocity;
    }

    updateRigidbody() {
        this.go.transform.position = Vector2.Add(this.go.transform.position, this.velocity);
        this.go.transform.position = Vector2.Add(this.go.transform.position, this.gravity);
    }

}