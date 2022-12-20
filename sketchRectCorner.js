let scaler = 60
let w = 9 * scaler
let h = 16 * scaler
let tickAngle = 6
let tickTotal = 0
let tickSpeed = 10 //60 equals 1 tick per second when used default 60fps
let t, i, k, a
let stripes1, stripes2

function setup() {
	background(255)
	createCanvas((windowHeight / 16) * 9, windowHeight)
	background(255)
	stroke(200)
	strokeWeight(0)
	fill(100)
	angleMode(DEGREES)
	t = new T()
	i = new I()
	k = new K()
	a = new A()
	stripes1 = new HorizontalStripes(mapperWidth(190), 20, [2, 3, 5, 1])
	stripes2 = new VerticalStripes(mapperWidth(854), 20, [2, 3, 5, 3, 2, 4])
}

function mapperWidth(val) {
	return map(val, 0, 1080, 0, width)
}

function mapperHeight(val) {
	return map(val, 0, 1920, 0, height)
}

function draw() {
	background(255)

	rect(60, 70, mapperWidth(190), 0)
	push()
	translate(mapperWidth(177) - stripes1.length / 2, mapperHeight(70) - stripes1.height / 2)
	stripes1.draw()
	pop()
	push()
	translate(mapperWidth(177) + stripes1.height / 2, mapperHeight(70))
	stripes2.draw()
	pop()
	if (frameCount % tickSpeed == 0) {
		tickTotal += tickAngle
	}
	//noLoop()
}

class HorizontalStripes {
	constructor(length, height, partsArray) {
		this.length = length
		this.height = height
		let sum = 0
		partsArray.forEach((part) => (sum += part))
		this.parts = sum
		this.stripes = new Array(this.parts).fill(0)

		this.stripes.forEach((stripe, index) => {
			let direction = round(random(0, 1))
			this.stripes[index] = new HorizontalStripe((this.length / this.parts) * partsArray[index], this.height, direction)
		})
	}

	draw() {
		push()
		this.stripes.forEach((stripe, index) => {
			stripe.draw()
			translate(stripe.w, 0)
		})
		pop()
	}
}

class VerticalStripes {
	constructor(length, height, partsArray) {
		this.length = length
		this.height = height
		let sum = 0
		partsArray.forEach((part) => (sum += part))
		this.parts = sum
		this.stripes = new Array(this.parts).fill(0)

		this.stripes.forEach((stripe, index) => {
			let direction = round(random(0, 1))
			this.stripes[index] = new HorizontalStripe((this.length / this.parts) * partsArray[index], this.height, direction)
		})
	}

	draw() {
		push()
		rotate(90)
		this.stripes.forEach((stripe, index) => {
			push()
			stripe.draw()
			pop()
			translate(stripe.w, 0)
		})
		pop()
	}
}

class T {
	constructor() {
		this.t1 = new HorizontalStripe()
		this.t2 = new HorizontalStripe()
		this.t3 = new VerticalStripe()
		this.t4 = new VerticalStripe()
		this.t5 = new VerticalStripe()
		this.t6 = new VerticalStripe()
	}

	draw() {
		translate(0, -this.t1.h / 2)

		push()
		translate(0, -this.t3.h / 2 + this.t3.w / 2)
		this.t1.draw()
		translate(this.t1.w, 0)
		this.t2.draw()
		pop()

		push()
		translate(this.t1.w / 2, 0)
		this.t3.draw()
		translate(0, this.t3.h)
		this.t4.draw()
		translate(0, this.t4.h)
		this.t5.draw()
		translate(0, this.t5.h)
		this.t6.draw()
		pop()
	}
}

class I {
	constructor() {
		this.i1 = new VerticalStripe()
		this.i2 = new VerticalStripe()
		this.i3 = new VerticalStripe()
		this.i4 = new VerticalStripe()
	}

	draw() {
		push()
		this.i1.draw()
		translate(0, this.i1.h)
		this.i2.draw()
		translate(0, this.i2.h)
		this.i3.draw()
		translate(0, this.i3.h)
		this.i4.draw()
		pop()
	}
}

class A {
	constructor() {
		this.a1 = new VerticalStripe()
		this.a2 = new VerticalStripe()
		this.a3 = new VerticalStripe()
		this.a4 = new VerticalStripe()
		this.a5 = new HorizontalStripe()
		this.a6 = new HorizontalStripe()
		this.a7 = new VerticalStripe()
		this.a8 = new VerticalStripe()
		this.a9 = new VerticalStripe()
		this.a10 = new VerticalStripe()
		this.a11 = new HorizontalStripe()
		this.a12 = new HorizontalStripe()
	}

	draw() {
		push()
		this.a1.draw()
		translate(0, this.a1.h)
		this.a2.draw()
		translate(0, this.a2.h)
		this.a3.draw()
		translate(0, this.a3.h)
		this.a4.draw()
		pop()

		push()
		translate(this.a5.w / 2 - this.a5.h / 2, -this.a5.w / 2 + this.a5.h / 2)
		this.a5.draw()
		translate(this.a5.w, 0)
		this.a6.draw()
		pop()

		push()
		translate(0, 100)
		translate(this.a5.w / 2 - this.a5.h / 2, -this.a5.w / 2 + this.a5.h / 2)
		this.a5.draw()
		translate(this.a5.w, 0)
		this.a6.draw()
		pop()

		push()
		translate(this.a5.w * 2 - this.a5.h / 2, 0)
		this.a7.draw()
		translate(0, this.a1.h)
		this.a8.draw()
		translate(0, this.a2.h)
		this.a9.draw()
		translate(0, this.a3.h)
		this.a10.draw()
		pop()

		// push()
		// this.a11.draw()
		// this.a12.draw()
		// pop()
	}
}

class K {
	constructor() {
		this.k1 = new VerticalStripe()
		this.k2 = new VerticalStripe()
		this.k3 = new VerticalStripe()
		this.k4 = new VerticalStripe()
		this.k5 = new HorizontalStripe(200)
		this.k6 = new HorizontalStripe(200)
		this.k7 = new HorizontalStripe()
		this.k8 = new HorizontalStripe()
	}

	draw() {
		push()
		this.k1.draw()
		translate(0, this.k1.h)
		this.k2.draw()
		translate(0, this.k1.h)
		this.k3.draw()
		translate(0, this.k1.h)
		this.k4.draw()
		pop()

		push()
		translate(this.k1.h - this.k2.w, this.k1.h - this.k1.w / 2)
		this.k5.draw(-45)
		translate(0, this.k1.h + this.k1.w)
		this.k6.draw(45)
		pop()
	}
}

class VerticalStripe {
	constructor(w = 20, h = 100) {
		this.w = w
		this.h = h
	}

	draw(startAngle = 0) {
		push()
		rotate(startAngle + -1 * tickTotal)
		rect(0, 0, this.w, this.h)
		pop()
	}
}

class HorizontalStripe {
	constructor(w = 100, h = 20, rotation = true) {
		this.w = w
		this.h = h
		this.rotation = rotation ? 1 : -1
	}

	draw(startAngle = 0) {
		push()
		rotate(startAngle + this.rotation * tickTotal)
		rect(0, 0, this.w, this.h)
		pop()
	}
}
