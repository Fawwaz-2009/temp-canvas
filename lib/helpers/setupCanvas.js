"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const canvas_1 = require("canvas");
function setupCanvas(templateUrl) {
    return canvas_1.loadImage(templateUrl).then(image => {
        const canvas = canvas_1.createCanvas(image.width, image.height);
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);
        return canvas;
    });
}
exports.default = setupCanvas;
//# sourceMappingURL=setupCanvas.js.map