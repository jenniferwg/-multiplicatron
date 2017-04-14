const multiply = require('./multiply.js');

var factorNumber = 3;
var factorCount = 2;

class ViewManager {

	connectEventHandlers() {
		document.getElementById('form-multiply')
			.addEventListener("submit", this.onSubmit.bind(this));

		document.getElementById('new-factor')
			.addEventListener("click", this.onFactor());
	}

	onFactor() {
		let field = document.createElement('div');
		field.innerHTML = "<input id='num" + factorNumber + "' type='text' size='3' />"

		factorNumber++;
		factorCount++;

		let submit = document.getElementById('calculate');
		submit.insertAdjacentElement('afterend', field);
	}

	onSubmit(event) {
		event.preventDefault();

		let arguments = [];
		for (i = 1; i <= factorCount; i++) {
			let number = document.getElementById('num' + i).value;
			arguments.push(parseInt(number, 10));
		}

		const product = multiply(arguments);
		document.getElementById('product').textContent = product;
	}

}

const ViewManager = new ViewManager;
ViewManager.connectEventHandlers();