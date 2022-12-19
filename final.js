let letters = []
let animatedLetters = []
let bgh
let circ
let gschmeus = []
let animatedGschmeus = []

function setup() {
	noCanvas()
	frameRate(60)
	angleMode(DEGREES)
	frameRate(60)
	letters.push(SVG.find("#t1")[0])
	letters.push(SVG.find("#i")[0])
	letters.push(SVG.find("#k1")[0])
	letters.push(SVG.find("#t2")[0])
	letters.push(SVG.find("#a")[0])
	letters.push(SVG.find("#k2")[0])
	gschmeus.push(SVG.find("#links-gschmeus")[0])
	gschmeus.push(SVG.find("#rechts-gschmeus")[0])
	bgh = SVG.find("#bgh")[0]
	circ = SVG.find("#circ")[0]

	letters.forEach((item, index) => {
		animatedLetters[index] = []
		item.each(function (i, children) {
			let animated = this.animate(new SVG.Spring(map(index, 0, letters.length, 100, 500), 15))
			animatedLetters[index].push(animated)
		})
	})

	gschmeus.forEach((item, index) => {
		animatedGschmeus[index] = []
		item.each(function (i, children) {
			let animated = this.animate(new SVG.Spring(map(index, 0, letters.length, 100, 500), 15))
			animatedGschmeus[index].push(animated)
		})
	})

	//setInterval(ticker, 1000)
	setInterval(realTime, 1000)
	setInterval(realTimeGschmeus, 1000)
	setInterval(dayNight, 1000 * 60)
	// realTime()
	realTimeGschmeus()
	//ticker()
	dayNight()
	show = document.querySelector("#show")
}
let enableRealTime = true
let speed = 0.8

let circCounter = 0
let circAngle = 0

let inside = false
function mouseClicked() {
	inside = !inside
}

let show
function draw() {
	circ.transform({ rotate: map(circAngle, 0, 114 / speed, -100, 100), origin: [1080, -300] })
	circAngle += sin(frameCount * speed)
	//circ.hide()

	show.innerHTML = inside

	if (inside) {
		enableRealTime = false
		const d = new Date()

		let h = d.getHours() > 12 ? d.getHours() - 12 : d.getHours()
		let m = d.getMinutes()
		let s = d.getSeconds()

		h += m / 60

		const hAngle = h * 30
		const mAngle = (m / 60) * 360
		const sAngle = (s / 60) * 360 + 90

		letters.forEach((item, index) => {
			item.each(function (i, children) {
				let x = this.attr("x") ?? 0
				let y = this.attr("y") ?? 0
				if (frameCount % 60 < 1) {
					console.log("hAngle", hAngle)
					console.log("h", h)
					console.log("mouseX", mouseX)
					console.log("windowWidth", windowWidth)
				}

				let hDiff = floor((360 - hAngle) / 30)
				console.log(hDiff)

				let mappedXhour = mouseX < windowWidth / 2 ? map(mouseX, 0, windowWidth / 2, hAngle, 360) : map(mouseX, windowWidth / 2, windowWidth, 0, hAngle)
				let mappedHDiff = mouseX < windowWidth / 2 ? map(mouseX, 0, windowWidth / 2, 0, hDiff * 360) : map(mouseX, windowWidth / 2, windowWidth, 0, mAngle)

				let mappedXmin = mouseX < windowWidth / 2 ? map(mouseX, 0, windowWidth / 2, mAngle, 360) : map(mouseX, windowWidth / 2, windowWidth, 0, mAngle)
				let minVal = mappedXmin + mappedHDiff * 60

				let mappedXsec = mouseX < windowWidth / 2 ? map(mouseX, 0, windowWidth / 2, sAngle, 360) : map(mouseX, windowWidth / 2, windowWidth, 0, sAngle)
				let secVal = mappedXsec + mappedHDiff * 60 * 60

				if (this.attr("width") == 10 || this.attr("height") == 10) {
					animatedLetters[index][i].transform({ rotate: mappedXsec, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
				} else if (this.attr("width") == 80 || this.attr("height") == 80) {
					animatedLetters[index][i].transform({ rotate: mappedXmin, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
				} else if (this.attr("width") == 160 || this.attr("height") == 160) {
					this.transform({ rotate: mappedXhour, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
				}
			})
		})
	} else {
		enableRealTime = true
	}
}

let secCounter = 0
let secAngle = 0
let minAngle = 0
let hourAngle = 0
const ticker = () => {
	let sec = 6
	let min = 0
	let hour = 0

	letters.forEach((item, index) => {
		item.each(function (i, children) {
			let x = this.attr("x") ?? 0
			let y = this.attr("y") ?? 0
			if (this.attr("width") == 10 || this.attr("height") == 10) {
				animatedLetters[index][i].transform({ rotate: i % 2 ? secAngle : secAngle * -1, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
			} else if ((this.attr("width") == 80 || this.attr("height") == 80) && secCounter % 2 === 0) {
				min = 6
				animatedLetters[index][i].transform({ rotate: minAngle, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
			} else if ((this.attr("width") == 160 || this.attr("height") == 160) && secCounter % 4 === 0) {
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

let gsecCounter = 0
let gsecAngle = 0
let gminAngle = 0
let ghourAngle = 0
const gticker = () => {
	let sec = 6
	let min = 0
	let hour = 0
	gschmeus.forEach((item, index) => {
		item.each(function (i, children) {
			let x = this.attr("x") ?? 0
			let y = this.attr("y") ?? 0
			if (this.attr("width") == 10 || this.attr("height") == 10) {
				animatedGschmeus[index][i].transform({ rotate: i % 2 ? gsecAngle : gsecAngle * -1, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
			} else if ((this.attr("width") == 80 || this.attr("height") == 80) && secCounter % 60 === 0) {
				min = 6
				animatedGschmeus[index][i].transform({ rotate: gminAngle, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
			} else if ((this.attr("width") == 160 || this.attr("height") == 160) && gsecCounter % (60 * 60) === 0) {
				hour = 30
				this.transform({ rotate: ghourAngle, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
			}
		})
	})

	gsecAngle += sec
	gminAngle += min
	ghourAngle += hour
	gsecCounter++
}

const realTimeGschmeus = () => {
	const d = new Date()

	let h = d.getHours() > 12 ? d.getHours() - 12 : d.getHours()
	let m = d.getMinutes()
	let s = d.getSeconds()

	h += m / 60

	const hAngle = h * 30
	const mAngle = (m / 60) * 360 + 90
	const sAngle = (s / 60) * 360 + 90

	gschmeus.forEach((item, index) => {
		item.each(function (i, children) {
			let x = this.attr("x") ?? 0
			let y = this.attr("y") ?? 0
			if (this.attr("width") == 10 || this.attr("height") == 10) {
				animatedGschmeus[index][i].transform({ rotate: sAngle, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
			} else if (this.attr("width") == 80 || this.attr("height") == 80) {
				animatedGschmeus[index][i].transform({ rotate: mAngle, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
			} else if (this.attr("width") == 160 || this.attr("height") == 160) {
				this.transform({ rotate: hAngle, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
			}
		})
	})
}

const realTime = () => {
	const d = new Date()

	let h = d.getHours() > 12 ? d.getHours() - 12 : d.getHours()
	let m = d.getMinutes()
	let s = d.getSeconds()

	h += m / 60

	const hAngle = h * 30
	const mAngle = (m / 60) * 360
	const sAngle = (s / 60) * 360 + 90

	if (enableRealTime) {
		letters.forEach((item, index) => {
			item.each(function (i, children) {
				let x = this.attr("x") ?? 0
				let y = this.attr("y") ?? 0
				if (this.attr("width") == 10 || this.attr("height") == 10) {
					animatedLetters[index][i].transform({ rotate: sAngle, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
				} else if (this.attr("width") == 80 || this.attr("height") == 80) {
					animatedLetters[index][i].transform({ rotate: mAngle, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
				} else if (this.attr("width") == 160 || this.attr("height") == 160) {
					this.transform({ rotate: hAngle, origin: [x + this.attr("width") / 2, y + this.attr("height") / 2] })
				}
			})
		})
	}
}

const dayNight = () => {
	const d = new Date()

	let h = d.getHours()
	let h12 = h > 12 ? h - 12 : h
	let m = d.getMinutes()
	let s = d.getSeconds()

	h12 += m / 60

	const hAngle = h12 * 30
	const mAngle = (m / 60) * 360
	const sAngle = (s / 60) * 360 + 90

	if (h < 12) bgh.attr({ width: map(h, 0, 12, 2160, 0) })
	else bgh.attr({ width: map(h, 12, 24, 0, 2160) })
	bgh.attr({ width: map(18, 12, 24, 0, 2160) })
}
