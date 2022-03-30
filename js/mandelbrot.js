import * as c from "./canvaslib.js";


function WtoS(Wx, Wy, Sx, Sy, f) {
	return ([Sx = (Wx - f.offsetX),
			Sy = (Wy - f.offsetY)]);
}

function StoW(Sx, Sy, Wx, Wy, f) {
	Wx = (Sx + f.offsetX);
	Wy = (Sy + f.offsetY);
}

function mandelbrot_set(x, y, ex, ey, f) {
	var a;
	var b;
	var ca;
	var cb;
	var i;

	a = f.remin + (x/ex) * f.scale;
	b = f.imin + (y/ey) * f.scale;
	ca = a;
	cb = b;
	i = 0;
	while (a + b < 4 && i < 30)
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
	var psx = 0;
	var psy = 0;
	var pex = 0;
	var pey = 0;
	for (let x = 0; x < img.width; x++) {
		for (let y = 0; y < img.height; y++) {
			[psx, psy] = WtoS(x, y, psx, psy, f);
			[pex, pey] = WtoS(img.width, img.height, pex, pey, f);
			var rgb = mandelbrot_set(psx, psy, pex, pey, f);
			color = [rgb, rgb, rgb, 255];
			c.put_pixel(img, psx, psy, img.width, color);
		}
	}
}

export {renderFractal}
