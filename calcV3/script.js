class Calculater {
	constructor(previous, current) {
		this.previous = previous
		this.current = current
		this.clear()
	}
	clear () {
	    this.currentOp = ""
		this.previousOp = ""
		this.operation = undefined
	}
	
	deletes() {
		this.currentOp = this.currentOp.toString().slice(0, -1)
	}
	
	appendNumber(number) {
		if (number === "." && this.currentOp.includes(".")) return
	    this.currentOp = this.currentOp.toString() + number.toString()
	}
	
	chooseOperation(operation) {
		if (this.currentOp === "") return
		if (this.previousOperand !== "") {
			this.compute()
		}
		this.operation = operation
		this.previousOp = this.currentOp
		this.currentOp = ""
	}
	
	compute() {
		let computation
		let prev = parseFloat(this.previousOp)
		let current = parseFloat(this.currentOp)
		if (isNaN(this.previousOp) || isNaN(this.currentOp)) return
		switch (this.operation) {
			case "+":
				computation = prev + current
				break
			case "-":
				computation = prev - current
				break
			case "*":
				computation = prev * current
				break
			case "/":
				computation = prev / current
				break
			default:
				return
		}
		this.currentOp = computation
		this.operation = undefined
		this.previousOp = ""
	}
	
	updateDisplay() {
		this.current[0].innerText = this.currentOp
		this.previous[0].innerText = this.previousOp
	}
}

const numberButtons = document.querySelectorAll("[data-number]")
const operationsButtons = document.querySelectorAll("[data-operation]")
const equalsButtons = document.querySelectorAll("[data-equals]")
const deleteButtons = document.querySelectorAll("[data-delete]")
const allClearButtons = document.querySelectorAll("[data-all-clear]")
const previous = document.querySelectorAll("[data-previous-operand]")
const current = document.querySelectorAll("[data-current-operand]")
const calculater = new Calculater(previous, current)
numberButtons.forEach(buttons => {
	buttons.addEventListener("click", () => {
		calculater.appendNumber(buttons.innerText)
		calculater.updateDisplay()
	})
})

operationsButtons.forEach(buttons => {
	buttons.addEventListener("click", () => {
		calculater.chooseOperation(buttons.innerText)
		calculater.updateDisplay()
	})
})

equalsButtons[0].addEventListener("click", buttons => {
	calculater.compute()
	calculater.updateDisplay()
})

allClearButtons[0].addEventListener("click", buttons => {
	calculater.clear()
	calculater.updateDisplay()
})


deleteButtons[0].addEventListener("click", buttons => {
	calculater.deletes()
	calculater.updateDisplay()
})