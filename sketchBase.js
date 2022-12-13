//let SVG = window.SVG
let letters = []
let test
let springArray = []

function setup() {
	letters.push(SVG.find("#t1")[0])
	letters.push(SVG.find("#i")[0])
	letters.push(SVG.find("#k1")[0])
	letters.push(SVG.find("#t2")[0])
	letters.push(SVG.find("#a")[0])
	letters.push(SVG.find("#k2")[0])

	let el = letters[0].children()[0]
	el.animate(new SVG.Spring(400, 20))

	letters.forEach((item, index) => {
		springArray[index] = []
		item.each(function (i, children) {
			let me = this.animate(new SVG.Spring(400, 20))
			springArray[index].push(me)
			// me.transform({ rotate: counter, origin: [this.attr("x") + this.attr("width") / 2, this.attr("y") + this.attr("height") / 2] })
		})
	})

	//let test = letters[0].children()[0].animate(new SVG.Spring(400, 20))
	setInterval(inti, 1000)
}

let counter = 0
const inti = () => {
	letters.forEach((item, index) => {
		item.each(function (i, children) {
			//let me = this.animate(new SVG.Spring(400, 20))
			springArray[index][i].transform({ rotate: counter, origin: [this.attr("x") + this.attr("width") / 2, this.attr("y") + this.attr("height") / 2] })
		})
	})
	counter += 6
}

function draw() {}

/*
	createCanvas((windowHeight / 16) * 9, windowHeight)
	image(svg, 0, 0, width, height)
let test = window.SVG(document.getElementById("test-svg"))
	let upperT = select("#upperT")

*/

const update = () => {
	const d = new Date()
	let h = d.getHours()
	let m = d.getMinutes()
	let s = d.getSeconds()

	// Make sure we see partial hours
	h += m / 60

	// Calculate angle
	const hAngle = (h / 24) * 360
	const mAngle = (m / 60) * 360
	const sAngle = (s / 60) * 360

	//console.log(test)

	//test.transform({ rotate: sAngle, origin: [test.attr("x") + test.attr("width") / 2, test.attr("y") + test.attr("height") / 2] })

	// letters.forEach((item) => {
	// 	item.each(function (i, children) {
	// 		this.transform({ rotate: sAngle, origin: [this.attr("x") + this.attr("width") / 2, this.attr("y") + this.attr("height") / 2] })
	// 	})
	// })
}

/************************************
  This codepen is part of the svg.js
  advent calendar. You can find all
  the pens at twitter: @svg_js
*************************************/

// const width = window.innerWidth
// const height = window.innerHeight - 10

// // Create SVG and set viewbox
// // so that we zoom into the center
// let canvas
// function setup() {
// 	noCanvas()

// 	canvas = SVG()
// 		.addTo("body")
// 		.size(width, height)
// 		.viewbox(-width / 8, -height / 8, width / 4, height / 4)

// 	// Big circle
// 	canvas.circle(80).center(0, 0).fill("none").stroke({
// 		width: 1,
// 		color: SVG.Color.random(),
// 	})

// 	// Hours line
// 	const hour = canvas.rect(100, 100).fill("#ff00ff").animate(new SVG.Spring(400, 20))

// 	// Minutes line
// 	const min = canvas.rect(100, 100).fill("#ff00ff").animate(new SVG.Spring(400, 20))

// 	// Seconds line
// 	const sec = canvas.rect(100, 100).fill("#ff00ff").animate(new SVG.Spring(400, 20))
// 	console.log(sec)

// 	const update2 = () => {
// 		// Get time
// 		const d = new Date()
// 		let h = d.getHours()
// 		let m = d.getMinutes()
// 		let s = d.getSeconds()

// 		// Make sure we see partial hours
// 		h += m / 60

// 		// Calculate angle
// 		const hAngle = (h / 24) * 360
// 		const mAngle = (m / 60) * 360
// 		const sAngle = (s / 60) * 360

// 		// Rotate
// 		hour.transform({ rotate: hAngle, origin: [0, 0] })
// 		min.transform({ rotate: mAngle, origin: [0, 0] })
// 		sec.transform({ rotate: sAngle, origin: [0, 0] })
// 	}

// 	setInterval(update2, 1000)
// 	update2()
// }
