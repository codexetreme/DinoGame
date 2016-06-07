class Canvas {
    static loadCanvas(width, height) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.id = "gameCanvas";
        document.body.appendChild(this.canvas);
        this.canvasContext = this.canvas.getContext("2d");
    }
    static getWidth() {
        return this.canvas.width;
    }
    static getHeight() {
        return this.canvas.height;
    }
    static clearCanvas() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    static updateScoreUI(score, font, color, position, offsetPosition) {
        this.canvasContext.font = "30px" + " " + font;
        this.canvasContext.strokeStyle = color;
        this.canvasContext.strokeText("Score : " + score, position.x + offsetPosition.x, position.y + offsetPosition.y);
    }
    static drawAsset(type, source, position) {
        if (type == "image") {
            this.canvasContext.drawImage(source, position.x, position.y);
        }
    }
}
//# sourceMappingURL=canvasFunctionality.js.map