const canvas = document.getElementById("canvas");

if (canvas.getContext) {
	var width = canvas.width;
	var height = canvas.height;
	var ctx = canvas.getContext("2d");
} else {
	console.log("Canvas not supported");
}

function getindex(x, y, width) {
	var red = x * 4 + y * (width * 4);
	return red;
}

function put_pixel(image, x, y, width, color) {
	image.data[getindex(x, y, width)] = color[0];
	image.data[getindex(x, y, width) + 1] = color[1];
	image.data[getindex(x, y, width) + 2] = color[2];
	image.data[getindex(x, y, width) + 3] = color[3];
}

function fill_img(img, color) {
	for (let x = 0; x < img.width; x++) {
		for (let y = 0; y < img.height; y++) {
			put_pixel(img, x, y, img.width, color);
		}
	}
}

export {canvas, width, height, ctx, put_pixel, fill_img}
