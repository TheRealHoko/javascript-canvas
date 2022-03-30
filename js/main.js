import * as c from './canvaslib.js';
import * as m from './mandelbrot.js';

/**@type {HTMLCanvasElement} */

var my_image = c.ctx.createImageData(c.width, c.height);


var f = {
	scale : 1,
	mouseX : 0,
	mouseY : 0,
	remin : -2,
	remax : 2,
	imin :-2,
	imax : 2,
};

let ismoving = false;

c.canvas.addEventListener('mousedown', e => {
	ismoving = true;
})

c.canvas.addEventListener('mousemove', e => {
	if (ismoving === true)
	{
	}
})

c.canvas.addEventListener('mouseup', e => {
	if (ismoving === true)
	{
		ismoving = false;
		main();
	}
})
c.canvas.addEventListener('wheel', e => {
		f.mouseX = e.offsetX;
		f.mouseY = e.offsetY;
	if (e.wheelDelta < 0) {
		f.scale += 0.25;
	} else {
		f.scale -= 0.25;
	}
	console.log(f.mouseX, f.mouseY);
	main();
})

function main() {
	m.renderFractal(my_image, f);
	c.ctx.putImageData(my_image, 0, 0);
}

main();
