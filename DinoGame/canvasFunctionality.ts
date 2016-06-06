class Canvas {

    private static canvas: HTMLCanvasElement;
    private static canvasContext: CanvasRenderingContext2D;

    static loadCanvas(DOMCanvasElement: HTMLCanvasElement, width: number, height: number) {
        this.canvas = DOMCanvasElement;
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvasContext = this.canvas.getContext("2d");

    }
    static getWidth(): number {
        return this.canvas.width;
    }


    static getHeight(): number {
        return this.canvas.height;
    }
    static clearCanvas() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    static updateScoreUI(score: number, font: string, color: string, position: Vector2, offsetPosition: Vector2) {
        this.canvasContext.font = "30px" + " " + font;
        this.canvasContext.strokeStyle = color;
        this.canvasContext.strokeText("Score : " + score, position.x + offsetPosition.x, position.y + offsetPosition.y);
    }

    static drawAsset(type: string, source: HTMLImageElement, position: Vector2) {
        if (type == "image") {
            this.canvasContext.drawImage(source, position.x, position.y);
        }
    }
}