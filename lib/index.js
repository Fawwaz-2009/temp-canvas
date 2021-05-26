"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImage = void 0;
const setupCanvas_1 = __importDefault(require("./helpers/setupCanvas"));
function createImage(imgUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const canvas = yield setupCanvas_1.default(imgUrl);
        const ctx = canvas.getContext('2d');
        const y = canvas.height * 0.5;
        const x = canvas.width * 0.5;
        const fontSize = canvas.height * 0.3;
        ctx.font = `${fontSize}px Arial`;
        ctx.textAlign = "center";
        ctx.fillText('hello world', x, y);
        return canvas.toDataURL();
    });
}
exports.createImage = createImage;
//# sourceMappingURL=index.js.map