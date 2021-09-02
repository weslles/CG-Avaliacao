function point(xr, yr) {
	this.x = xr;
	this.y = yr;
}

function draw(points, context) {
	i = 0;
	while (i < points.length) {
		el = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
		el.setAttribute("r", 5)
		el.setAttribute("cx", points[i].x + 200)
		el.setAttribute("cy", 200 - points[i].y)

		el.setAttribute("fill", "black")

		context.appendChild(el);
		i++;
	};
}

function circleSimple(r, point1) {
	x = 0;
	yr = r
	y = r;
	array = [];
	truex = 0;
	truey = 0;
	do {
		xneg = (x) * (-1);
		yneg = (y) * (-1);
		//xy
		array.push(new point(x, y));
		array.push(new point(y, x));
		//--
		array.push(new point(xneg, yneg));
		array.push(new point(yneg, xneg));
		//+-
		array.push(new point(x, yneg));
		array.push(new point(yneg, x));
		//-+
		array.push(new point(xneg, y));
		array.push(new point(y, xneg));
		x++;
		x = x + 1;
		yr = Math.sqrt(r * r - x * x);
		y = parseInt(Math.round(yr));
	} while (x <= yr);
	for (i = 0; i < array.length; i++) {
		array[i].x += point1.x;
		array[i].y += point1.y;
	}
	return array;
}

function clicar() {
	let context = document.getElementById("svg")
	let x = parseInt(document.getElementById("x").value)
	let y = parseInt(document.getElementById("y").value)
	let r = parseInt(document.getElementById("r").value)

	point1 = new point(x, y);
	circle = circleSimple(r, point1);
	console.log(circle)
	draw(circle, context);
}
