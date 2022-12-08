class Stripe {
	constructor(w = 100, h = 20, rotation = true) {
		this.w = w
		this.h = h
		this.rotation = rotation ? 1 : -1
	}

	draw(startAngle = 0) {
		push()
		translate(0, this.h / 2)
		rotate(startAngle + this.rotation * tickTotal)
		rect(0, 0, this.w, this.h)
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
			let direction = round(random(0, 1))
			this.stripes[index] = new Stripe((this.length / sum) * partsArray[index], this.height, direction)
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
