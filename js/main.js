import * as c from './canvaslib.js';
import * as m from './mandelbrot.js';

/**@type {HTMLCanvasElement} */

var my_image = c.ctx.createImageData(800, 500);
var f = {
	zoomX : 0,
	zoomY : 0,
};
c.canvas.addEventListener('wheel', e => {
	if (e.wheelDelta > 0) {
		f.zoomX = e.offsetX;
		f.zoomY = e.offsetY;
	} else {
	}
	console.log(f.zoomX, e.offsetY);
	main();
});

function main() {
	m.renderFractal(my_image, f);
	c.ctx.putImageData(my_image, 0, 0);
}

main();
