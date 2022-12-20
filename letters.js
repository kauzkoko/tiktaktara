class T {
	constructor(parts1, parts2 = parts1) {
		this.stripes1 = new Stripes(mapperWidth(190), 50, parts1, 0)
		this.stripes2 = new Stripes(mapperWidth(854), 50, parts2, 90)
	}

	draw() {
		push()
		translate(mapperWidth(177) - this.stripes1.length / 2, mapperHeight(70) - this.stripes1.height / 2)
		this.stripes1.draw()
		pop()
		push()
		translate(mapperWidth(177) + this.stripes2.height / 2, mapperHeight(70))
		this.stripes2.draw()
		pop()
	}
}

class I {
	constructor(parts1, parts2 = parts1, parts3 = parts1) {
		this.stripes1 = new Stripes(mapperWidth(616), 50, parts1, 90)
		this.stripes2 = new Stripes(mapperWidth(95), 50, parts2, 0)
		this.stripes3 = new Stripes(mapperWidth(95), 50, parts3, 0)
	}

	draw() {
		push()
		translate(mapperWidth(510), mapperHeight(117))
		ellipse(0, 0, 60)
		pop()

		push()
		translate(mapperWidth(510) + this.stripes1.height / 2, mapperHeight(380) - this.stripes1.height * 2)
		this.stripes1.draw()
		pop()

		push()
		translate(mapperWidth(510) - this.stripes2.length / 2, mapperHeight(380) - this.stripes2.height * 2)
		this.stripes2.draw()
		translate(0, this.stripes1.length - this.stripes3.height)
		this.stripes3.draw()
		pop()
	}
}

class A {
	constructor(parts1, parts2 = parts1, parts3 = parts1) {
		this.stripes1 = new Stripes(mapperWidth(854), 50, parts1, 90)
		this.stripes2 = new Stripes(mapperWidth(854), 50, parts2, 90)
		this.stripes3 = new Stripes(mapperWidth(190), 50, parts3, 0)
	}

	draw() {
		push()
		translate(mapperWidth(415) + this.stripes1.height / 2, mapperHeight(70))
		this.stripes1.draw()
		translate(mapperWidth(190), 0)
		this.stripes1.draw()
		translate(-mapperWidth(190), -this.stripes3.height / 2)
		this.stripes3.draw()
		translate(0, 100)
		this.stripes3.draw()
		pop()
	}
}

class K {
	constructor(parts1, parts2 = parts1, parts3 = parts1, parts4 = parts1, parts5 = parts1, parts6 = parts1) {
		this.stripes1 = new Stripes(mapperWidth(854), 50, parts1, 90)
		this.stripes2 = new Stripes(mapperWidth(190 / 2), 50, parts2, 0)
		this.stripes3 = new Stripes(80, 50, parts3, 45)
		this.stripes4 = new Stripes(60, 50, parts4, -45)
		this.stripes5 = new Stripes(mapperWidth(854 / 2 - 100), 50, parts5, 90)
		this.stripes6 = new Stripes(mapperWidth(854 / 2 - 100), 50, parts6, 90)
	}

	draw() {
		push()
		translate(mapperWidth(774) - this.stripes1.height, mapperHeight(70) - this.stripes1.height / 2)
		this.stripes1.draw()
		translate(0, this.stripes1.length / 2 - 30)
		this.stripes2.draw()
		translate(this.stripes2.length, 0)
		this.stripes3.draw()
		this.stripes4.draw()
		pop()
		push()
		translate(mapperWidth(774) - this.stripes1.height + this.stripes2.length * 2, mapperHeight(70) - this.stripes1.height / 2)
		this.stripes5.draw()
		translate(0, 300)
		this.stripes6.draw()
		pop()
	}
}
