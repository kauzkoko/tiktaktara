let letters = []
let animatedLetters = []
let bgh

function setup() {
	noCanvas()
	frameRate(60)
	letters.push(SVG.find("#t1")[0])
	letters.push(SVG.find("#i")[0])
	letters.push(SVG.find("#k1")[0])
	letters.push(SVG.find("#t2")[0])
	letters.push(SVG.find("#a")[0])
	letters.push(SVG.find("#k2")[0])
	// letters.push(SVG.find("#links-gschmeus")[0])
	// letters.push(SVG.find("#rechts-gschmeus")[0])
	bgh = SVG.find("#bgh")[0]

	letters.forEach((item, index) => {
		animatedLetters[index] = []
		item.each(function (i, children) {
			let animated = this.animate(new SVG.Spring(map(index, 0, letters.length, 100, 500), 15))
			animatedLetters[index].push(animated)
		})
	})

	setInterval(ticker, 500)
}

function draw() {}

let secCounter = 0
let secAngle = 0
let minAngle = 0
let hourAngle = 0
const ticker = () => {
	let sec = 6
	let min = 0
	let hour = 0
	bgh.attr({ width: secCounter * 30 })
	//bgv.attr({ height: secCounter * 30 })
	letters.forEach((item, index) => {
		item.each(function (i, children) {
			let x = this.attr("x") ?? 0
			let y = this.attr("y") ?? 0
			if (this.attr("width") == 10 || this.attr("height") == 10) {
				animatedLetters[index][i].transform({ rotate: secAngle, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
			} else if ((this.attr("width") == 80 || this.attr("height") == 80) && secCounter % 60 === 0) {
				min = 6
				animatedLetters[index][i].transform({ rotate: minAngle, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
			} else if ((this.attr("width") == 160 || this.attr("height") == 160) && secCounter % (60 * 60) === 0) {
				hour = 30
				// animatedLetters[index][i].transform({ rotate: hourAngle, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
				this.transform({ rotate: hourAngle, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
			}
		})
	})
	secAngle += sec
	minAngle += min
	hourAngle += hour
	secCounter++
}
