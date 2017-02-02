var canvas = new Canvas(800, 600);
canvas.setBgColor(0, 0, 0, 1);
canvas.changeColor("#ffffff");

var astroids = [];
var nu = 100;

for(var i = 0; i < nu; i++) {
	astroids[i] = new Astroid();
}


for(var i = 0; i < nu; i++) {
	astroids[i].show();
}
for(var i = 0; i < nu; i++) {
	astroids[i].update();
}

var count = 1;
setInterval(function() {
	canvas.clear("#000000");

	for(var i = 0; i < nu; i++) {
		astroids[i].show();
	}
	
	for(var i = 0; i < nu; i++) {
		astroids[i].update();
	}
	count++;
}, 1);