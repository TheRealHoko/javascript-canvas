import * as c from "./canvaslib.js";

function mandelbrot_set(img, x, y, f) {
	var	xscale, yscale, i, zx, zy, xtemp;
	var	cx, cy;

	xscale = x / img.width;
	yscale = y / img.height;
	zx = 0;
	zy = 0;
	cx = -1.6;
	cy = -0.5;
	i = 0;
	while ((zx * zx + zy * zy) < 4 && i < 30) {
		xtemp = zx*zx - zy*zy + xscale + cx;;
		zy = 2 * zx * zy + yscale + cy;
		zx = xtemp;
		i++;
	}
	return (i);
}

function renderFractal(img, f) {
	var color = 0;
	for (let x = f.zoomX; x < img.width; x++) {
		for (let y = f.zoomY; y < img.height; y++) {
			var rgb = mandelbrot_set(img, x, y, f);
			color = [rgb*10, rgb, rgb*5, 255];
			c.put_pixel(img, x, y, color);
		}
	}
}

export {renderFractal, mandelbrot_set}
