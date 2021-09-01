function randomColor() {
	const red = Math.trunc(Math.random() * 256);
	const green = Math.trunc(Math.random() * 256);
	const blue = Math.trunc(Math.random() * 256);
	const color = `rgb(${red}, ${green}, ${blue})`;
	return color;
}

const allSpans = document.querySelectorAll("span");

setInterval(function () {
	for (let span of allSpans) {
		span.style.color = randomColor();
	}
}, 1000);
