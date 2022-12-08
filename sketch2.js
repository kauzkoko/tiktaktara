const s2 = (sketch) => {
	let scaler = 60
	let w = 9 * scaler
	let h = 16 * scaler
	let tickAngle = 6
	let tickTotal = 0
	let tickSpeed = 60 //60 equals 1 tick per second when used default 60fps
	let t, i, k, a

	sketch.setup = () => {
		sketch.background(255)
		let cnv = sketch.createCanvas((sketch.windowHeight / 16) * 9, sketch.windowHeight)
		cnv.parent("canvas2")
		sketch.background(255)
		sketch.stroke(0)
		sketch.strokeWeight(0)
		sketch.fill(0)
		sketch.angleMode(sketch.DEGREES)
		sketch.rectMode(sketch.CENTER)
		t = new T([1, 2, 4, 1], [2, 3, 5, 2, 4, 2, 5])
		t2 = new T([2, 5, 3], [2, 1, 5, 7])
		i = new I([2, 3, 5, 2, 4, 2, 5], [2, 1, 5, 7], [2, 1, 5, 7])
		k = new K([2, 1, 5, 7])
		a = new A([2, 1, 5, 7])
	}

	sketch.draw = () => {
		sketch.background(255)
		t.draw()
		i.draw()
		k.draw()
		sketch.translate(0, height / 2)
		t2.draw()
		a.draw()
		k.draw()
		if (sketch.frameCount % tickSpeed == 0) {
			tickTotal += tickAngle
		}
		//sketch.noLoop()
	}
}

let p52 = new p5(s2)
