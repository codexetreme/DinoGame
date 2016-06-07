class Rigidbody {
    constructor(gameObject) {
        this.velocity = Vector2.zero;
        this.gravity = new Vector2(0, 0.5);
        gameResources.getInstance().Rigidbodies.push(this);
        this.go = gameObject;
    }
    setGravity(grav) {
        this.gravity = grav;
    }
    setVelocity(velocity) {
        this.velocity = velocity;
    }
    updateRigidbody() {
        this.go.transform.position = Vector2.Add(this.go.transform.position, this.velocity);
        this.go.transform.position = Vector2.Add(this.go.transform.position, this.gravity);
    }
}
//# sourceMappingURL=RigidBody.js.map