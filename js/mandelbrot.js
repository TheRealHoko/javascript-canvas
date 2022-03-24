import * as c from "./canvaslib.js";

function mandelbrot_set(img, x, y) {
	var xscale, yscale, i, zx, zy, xtemp;

	xscale = x / img.width;
	yscale = y / img.height;
	zx = 0;
	zy = 0;
	i = 0;
	while ((zx * zx + zy * zy) < 4 && i < 100) {
		xtemp = zx*zx - zy*zy + xscale;
		zy = 2 * zx * zy + yscale;
		zx = xtemp;
		i++;
	}
	return (i);
}

function renderFractal(img) {
	var color = 0;
	for (let x = 0; x < img.width; x++) {
		for (let y = 0; y < img.height; y++) {
			color = [mandelbrot_set(img, x, y), 0, 0, 255];
			c.put_pixel(img, x, y, color);
		}
	}
}

export {renderFractal, mandelbrot_set}
