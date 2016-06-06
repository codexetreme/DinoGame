var Canvas = (function () {
    function Canvas() {
    }
    Canvas.loadCanvas = function (DOMCanvasElement, width, height) {
        this.canvas = DOMCanvasElement;
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvasContext = this.canvas.getContext("2d");
    };
    Canvas.getWidth = function () {
        return this.canvas.width;
    };
    Canvas.getHeight = function () {
        return this.canvas.height;
    };
    Canvas.clearCanvas = function () {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Canvas.updateScoreUI = function (score, font, color, position, offsetPosition) {
        this.canvasContext.font = "30px" + " " + font;
        this.canvasContext.strokeStyle = color;
        this.canvasContext.strokeText("Score : " + score, position.x + offsetPosition.x, position.y + offsetPosition.y);
    };
    Canvas.drawAsset = function (type, source, position) {
        if (type == "image") {
            this.canvasContext.drawImage(source, position.x, position.y);
        }
    };
    return Canvas;
}());
//# sourceMappingURL=canvasFunctionality.js.map