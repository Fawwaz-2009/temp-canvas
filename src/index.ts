
import setupCanvas from './helpers/setupCanvas';


export async function createImage(imgUrl: string) {
    const canvas = await setupCanvas(imgUrl)
    const ctx = canvas.getContext('2d');

    const y = canvas.height * 0.5
    const x = canvas.width * 0.5

    ctx.fillText("hello world", x, y);

    return canvas.toDataURL()

}
