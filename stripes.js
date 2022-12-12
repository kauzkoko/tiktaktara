class Stripe {
	constructor(w = 100, h = 20, tickSpeed = 1, tickDirection = 1) {
		this.w = w
		this.h = h
		this.tickSpeed = tickSpeed
		this.tickDirection = tickDirection
		this.tickTotal = 0
		this.tickAngle = 6
	}

	draw(startAngle = 0) {
		if (frameCount % this.tickSpeed == 0) {
			this.tickTotal += this.tickAngle
		}
		push()
		translate(0, this.h / 2)
		rotate(startAngle + this.tickDirection * this.tickSpeed * this.tickTotal)
		rect(0, 0, this.w * 2, this.h)
		pop()
	}
}

class Stripes {
	constructor(length, height, partsArray, orientation) {
		this.length = length
		this.height = height
		this.orientation = orientation
		let sum = 0
		partsArray.forEach((part) => (sum += part))
		this.parts = partsArray.length
		this.stripes = new Array(this.parts).fill(0)
		this.stripes.forEach((stripe, index) => {
			let tickSpeed = round(random(10, 20))
			let tickDirection = round(random(-1, 1))
			//if (direction) tickSpeed += direction
			this.stripes[index] = new Stripe((this.length / sum) * partsArray[index], this.height, tickSpeed, tickDirection)
		})
	}

	draw() {
		push()
		rotate(this.orientation)
		translate(this.stripes[0].w / 2, 0)
		this.stripes.forEach((stripe, index) => {
			stripe.draw()
			if (index < this.stripes.length - 1) translate(this.stripes[index + 1].w / 2 + stripe.w / 2, 0)
		})
		pop()
	}
}
