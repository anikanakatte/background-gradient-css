var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");
var button = document.querySelector("button");

color1.defaultValue = '#ff0000';
color2.defaultValue = '#ffa500';

setGradient = () => {
	body.style.background = "linear-gradient(to right," + color1.value + " ," + color2.value + ")" ;
	console.log(color1.value);

	css.textContent = body.style.background + ";"
}

generateRandom = () => {
	const red = Math.floor((Math.random() * 255));
	const green = Math.floor((Math.random() * 255));
	const blue = Math.floor((Math.random() * 255));	

	hexColor = "#" + rgbToHex(red) + rgbToHex(green) + rgbToHex(blue);
}

rColor1 = () => {
	generateRandom();	
	color1.value = hexColor;
}
rColor2 = () => {
	generateRandom();	
	color2.value = hexColor;
}

rgbToHex = (rgb) => {
	let hex = Number(rgb).toString(16);
	if (hex.length < 2) {
		hex = "0" + hex; 
	}
	return hex;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", function() {
	rColor1();
	rColor2();
	setGradient();
});
