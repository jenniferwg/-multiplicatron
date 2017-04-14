const multiply = require('./multiply.js');

var factorNumber = 3;
var factorCount = 2;

class ViewManager {

	connectEventHandlers() {
		document.getElementById('calculate')
			.addEventListener("click", this.onSubmit.bind(this));
		document.getElementById('new-factor')
			.addEventListener("click", this.onFactor.bind(this));
	}

	onFactor(event) {
		let field = document.createElement('div');
		field.innerHTML = "<input id='num" + factorNumber + "' type='text' autocomplete='off' />"

		factorNumber++;
		factorCount++;

		let linebreak = document.getElementById('linebreak');
		linebreak.parentNode.insertBefore(field, linebreak);
	}

	onSubmit(event) {
		var factors = [];
		for (let i = 1; i <= factorCount; i++) {
			let number = document.getElementById('num' + i).value;
			if (number) {
				factors.push(parseFloat(number, 10));
				if (isNaN(parseFloat(number, 10)) === true) {
					document.getElementById('num' + i).style.border = "2px solid red";
				} else {
					document.getElementById('num' + i).style.border = "";
				}
			}
		}

		const product = multiply.apply(this, factors);
		document.querySelector('.product').textContent = product;
	}

}

const viewManager = new ViewManager;
viewManager.connectEventHandlers();