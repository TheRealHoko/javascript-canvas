import * as c from './canvaslib.js';
import * as m from './mandelbrot.js';

/**@type {HTMLCanvasElement} */

var my_image = c.ctx.createImageData(800, 500);

console.log(my_image);
m.renderFractal(my_image);
c.ctx.putImageData(my_image, 0, 0);
