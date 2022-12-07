let t1, i, k1
let t2, a, k2
let tick = 0
let aArray = []
function setup() {
	createCanvas(windowWidth, windowHeight)
	strokeCap(SQUARE)
	angleMode(DEGREES)
	rectMode(CORNER)
	t1 = new T()
	//i = new I()
	k1 = new K()
	for (var i = 1; i <= 3; i++) {
		aArray[i - 1] = []
		for (var j = 1; j <= 3; j++) {
			if (i < 5) aArray[i - 1][j - 1] = new A(0, 0, 10, 100, 255)
			else aArray[i - 1][j - 1] = new A(0, 0, 10, 100, 0)
			aArray[i - 1][j - 1].set((j + 1) * 50, (i + 1) * 50)
		}
	}
}

function draw() {
	background(255)
	fill(0)
	rect(0, 0, width, height / PI)

	// text(frameRate(), width - 50, 20)
	// translate(width / 2, height / 2)
	// push()
	// t1.draw()
	// pop()
	// push()
	// translate(120, 0)
	// i.draw()
	// pop()
	// push()
	// translate(200, 10)
	// k1.draw()
	// pop()

	aArray.forEach((item) => {
		item.forEach((item) => item.draw())
	})
	if (frameCount % 60 == 0) tick += 6
}

class T {
	rot = 0

	constructor(x = 0, y = 0, width = 100, height = 10) {
		this.width = width
		this.height = height
		this.x = x
		this.y = y
	}

	rotate1(angle) {
		push()
		rotate(angle)
		rect(this.x, this.y, this.width, this.height)
		pop()
	}

	rotate2(angle) {
		push()
		rotate(angle)
		rect(this.x + this.width / 2 - this.height / 2, this.y, this.height, this.width)
		pop()
	}

	draw() {
		push()
		stroke(0)
		fill(255)
		rect(this.x, this.y, this.width, this.width)
		noStroke()
		fill(0)
		if (frameCount % 60 < 1) this.rot++
		this.rotate1(this.rot * 10)
		this.rotate2(-this.rot * 10)
		pop()
	}
}

class I {
	rot = 0

	constructor(x = 0, y = 0, width = 10, height = 100) {
		this.width = width
		this.height = height
		this.x = x
		this.y = y
	}

	rotate1(angle) {
		push()
		rotate(angle)
		rect(this.x, this.y, this.width, this.height)
		pop()
	}

	draw() {
		push()
		stroke(0)
		fill(255)
		rect(this.x, this.y, this.width, this.height)
		noStroke()
		fill(0)
		if (frameCount % 60 < 1) this.rot++
		this.rotate1(this.rot * 10)
		pop()
	}
}

class K {
	rot = 0

	constructor(x = 0, y = 0, width = 10, height = 100) {
		this.width = width
		this.height = height
		this.x = x
		this.y = y
	}

	rotate1(angle) {
		push()
		rotate(angle)
		rect(this.x, this.y, this.width, this.height)
		pop()
	}

	rotate2(angle) {
		push()
		rotate(angle)
		stroke(0)
		strokeWeight(this.width)
		line(this.x, this.y + this.height / 2, this.x + 80, this.y)
		pop()
	}

	rotate3(angle) {
		push()
		rotate(angle)
		stroke(0)
		strokeWeight(this.width)
		line(this.x, this.y + this.height / 2, this.x + 80, this.y + this.height)
		pop()
	}

	draw() {
		push()
		stroke(0)
		fill(255)
		rect(this.x, this.y, this.width, this.height)
		noStroke()
		fill(0)
		if (frameCount % 20 < 1) this.rot++
		this.rotate1(this.rot * 10)
		this.rotate2(-this.rot * 10)
		this.rotate3(this.rot * 10)
		pop()
	}
}

class A {
	rot = 0

	constructor(x = 0, y = 0, width = 10, height = 100, color = 0) {
		this.width = width
		this.height = height
		this.x = x
		this.y = y
		this.color = color
	}

	set(x, y) {
		this.x = x
		this.y = y
	}

	setAngle(angle) {
		this.angle = angle
	}

	draw1() {
		push()
		rotate(-60 + tick)
		line(0, 0, 50, 0)
		strokeWeight(0.5)
		fill(255, 0)
		ellipse(0, 0, 100)
		pop()
	}

	draw2() {
		push()
		translate(30, -40)
		rotate(60 + tick)
		line(0, 0, 50, 0)
		strokeWeight(0.5)
		fill(255, 0)
		ellipse(0, 0, 100)
		pop()
	}

	draw3() {
		push()
		translate(20, -20)
		rotate(tick)
		line(0, 0, 20, 0)
		strokeWeight(0.5)
		fill(255, 0)
		ellipse(0, 0, 40)
		pop()
	}

	draw() {
		strokeWeight(map(mouseX, 0, width, 0, 30))
		push()
		stroke(this.color)
		translate(this.x, this.y)
		this.draw1()
		this.draw2()
		this.draw3()
		pop()
	}
}
