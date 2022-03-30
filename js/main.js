import * as c from './canvaslib.js';
import * as m from './mandelbrot.js';

/**@type {HTMLCanvasElement} */

var my_image = c.ctx.createImageData(c.width, c.height);

var f = {
	scale : 1,
	remin : -2,
	remax : 2,
	imin :-2,
	imax : 2,
	offsetX : -c.width / 2/2,
	offsetY : -c.height / 2/2,
};

let ismoving = false;
let startX = 0;
let startY = 0;

c.canvas.addEventListener('mousedown', e => {
	ismoving = true;
	startX = e.offsetX;
	startY = e.offsetY;
})

c.canvas.addEventListener('mousemove', e => {
	if (ismoving === true)
	{
		f.offsetX -= (e.offsetX - startX);
		f.offsetY -= (e.offsetY - startY);
		startX = e.offsetX;
		startY = e.offsetY;
		main();
		console.log(f.offsetX, f.offsetY);
	}
})

c.canvas.addEventListener('mouseup', e => {
	if (ismoving === true)
	{
		main();
		ismoving = false;
	}
})

c.canvas.addEventListener('wheel', e => {
	if (e.wheelDelta < 0) {
		f.scale += 0.25;
	} else {
		f.scale -= 0.25;
	}
	main();
})

function main() {
	c.fill_img(my_image, [0,0,0,255]);
	m.renderFractal(my_image, f);
	c.ctx.putImageData(my_image, 0, 0);
}

main();
