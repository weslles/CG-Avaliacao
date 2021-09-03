function point(xr, yr) {
	this.x = xr;
	this.y = yr;
}

function draw(points, context) {
	i = 0;
	console.log(points.length)
	while (i < points.length) {

		el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		el.setAttribute("x1", points[0].x + 200)
		el.setAttribute("y1", 200 - points[0].y)
		el.setAttribute("x2", points[i].x + 200)
		el.setAttribute("y2", 200 - points[i].y)


		el.setAttribute("style", "stroke: black")

		context.appendChild(el);
		i++;
	};
}

function bresenham(point1, point2) {
	var dx = point2.x - point1.x;
	var dy = point2.y - point1.y;
	var eacum = 0;
	var x = point1.x;
	var y = point1.y;
	var points = [];
	if (dx != 0) {
		if (point1.x > point2.x) {
			points = bresenham(point2, point1);
			return points;
		}
		do {
			points.push(new point(x, y));
			x++;
			eacum = eacum + (2 * dy);
			if (eacum > dx) {
				y++;
				eacum -= 2 * dx;
			}

		} while (x < point2.x);
		points.push(new point(x, y));
		return points;
	} else if (dy != 0) {
		if (point1.y > point2.y) {
			points = bresenham(point2, point1);
			return points;
		}
		do {
			points.push(new point(x, y));
			y++;
			eacum = eacum + (2 * dx);
			if (eacum > dy) {
				x++;
				eacum -= 2 * dy;
			}

		} while (y < point2.y);
		points.push(new point(x, y));
		return points;
	}
}

function clicar() {
	let context = document.getElementById("paint")
	let x1 = parseInt(document.getElementById("x1").value)
	let y1 = parseInt(document.getElementById("y1").value)
	let x2 = parseInt(document.getElementById("x2").value)
	let y2 = parseInt(document.getElementById("y2").value)

	point1 = new point(x1, y1);
	point2 = new point(x2, y2);
	points = bresenham(point1, point2);
	console.log(points)
	draw(points, context);
}

function clean() {
	$('#paint').empty()
}