function point(xr, yr) {
	this.x = xr;
	this.y = yr;
}
/** Função que cria linha no gráfico */
function draw(points, point, context) {
	i = 0;
	console.log(points.length)
	while (i < points.length) {

		el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		el.setAttribute("x1", point.x + 200)
		el.setAttribute("y1", 200 - point.y)
		el.setAttribute("x2", points[i].x + 200)
		el.setAttribute("y2", 200 - points[i].y)


		el.setAttribute("style", "stroke: black")

		context.appendChild(el);
		i++;
	};
}

/* Algoritmo DDA */
function dda(point1, point2) {
	dx = point2.x - point1.x;
	dy = point2.y - point1.y;

	if (Math.abs(dx) >= Math.abs(dy)) {
		step = Math.abs(dx);
	}
	else {
		step = Math.abs(dy);
	}
	incX = dx / step;
	incY = dy / step;
	points = [];
	x = point1.x;
	y = point1.y;
	for (i = 0; i <= step; i++) {
		points.push(new point(Math.round(x), Math.round(y)));
		x += incX;
		y += incY;
	}

	return points;
}

/* Pega os valores inseridos pelo usuário para calcular o DDA e Desenhar o gráfico */
function clicar() {
	let context = document.getElementById("paint")
	let x1 = parseInt(document.getElementById("x1").value)
	let y1 = parseInt(document.getElementById("y1").value)
	let x2 = parseInt(document.getElementById("x2").value)
	let y2 = parseInt(document.getElementById("y2").value)

	point1 = new point(x1, y1);
	point2 = new point(x2, y2);
	points = dda(point1, point2);
	console.log(points)
	draw(points, point1, context);
}

function clean() {
	$('#paint').empty()
}