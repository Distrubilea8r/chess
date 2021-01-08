export class Screen {
    constructor(width, height) {
        this.height = height;
        this.width = width;
        this.canvas = this.createCanvas();
        this.resize();
        this.context = this.canvas.getContext('2d');
    }

    resize() {
        let height = window.innerHeight - 50;
        let width = height;

        this.canvas.width = width;
        this.canvas.height = height;

        this.canvas.style.marginLeft = (window.innerWidth - width) / 2 + "px";
        this.canvas.style.marginTop = (window.innerHeight - height) / 2 + "px";
    }

    createCanvas() {
        let elements = document.getElementsByTagName('canvas');
        if( elements.length > 0 ) {
            return elements[0];
        }

        let canvas = document.createElement('canvas');
        document.body.appendChild(canvas);
        return canvas;
    }

    fill(color) {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.width, this.height);
    }
}