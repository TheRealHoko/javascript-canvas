import * as c from "./canvaslib.js";

function mandelbrot_set(img, x, y, f) {
	var a;
	var b;
	var ca;
	var cb;
	var i;

	a = f.remin + (x/img.width) * f.scale;
	b = f.imin + (y/img.height) * f.scale;
	ca = a;
	cb = b;
	i = 0;
	while (a + b < 4 && i < 255)
	{
		var aa = a * a;
		var bb = b * b;
		var twoab = 2 * a * b;
		a = aa - bb + ca;
		b = twoab + cb;
		if (a > f.remax || b > f.imax)
			break;
		i++;
	}
	return (i);
}

function renderFractal(img, f) {
	var color = 0;
	for (let x = 0; x < img.width; x++) {
		for (let y = 0; y < img.height; y++) {
			var rgb = mandelbrot_set(img, x, y, f);
			color = [rgb, rgb, rgb, 255];
			c.put_pixel(img, x, y, color);
		}
	}
}

export {renderFractal, mandelbrot_set}
