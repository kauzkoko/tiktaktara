let scaler = 50
let w = 9 * scaler
let h = 16 * scaler
let tickAngle = 6
let tickTotal = 0
let tickSpeed = 60 //60 equals 1 tick per second when used default 60fps

function setup() {
	background(255)
	createCanvas(w, h)
	stroke(0)
	strokeWeight(5)
	fill(0)
	translate(width / 2, height / 2)
	ellipse(0, 0, 20)
	fill(100)
}

function draw() {
	translate(width / 2, height / 2)
	rotate(-tickTotal)
	rect(0, -10, 100, 20)
	ellipse(0, 0, 20)
	if (frameCount % tickSpeed == 0) tickTotal += tickAngle
}
