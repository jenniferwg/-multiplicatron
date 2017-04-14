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
		field.innerHTML = "<input id='num" + factorNumber + "' type='text' size='3' />"

		factorNumber++;
		factorCount++;

		let product = document.querySelector('.product');
		product.parentNode.insertBefore(field, product);
	}

	onSubmit(event) {
		var factors = [];
		for (let i = 1; i <= factorCount; i++) {
			let number = document.getElementById('num' + i).value;
			factors.push(parseInt(number, 10));
		}

		const product = multiply.apply(this, factors);
		document.querySelector('.product').textContent = product;
	}

}

const viewManager = new ViewManager;
viewManager.connectEventHandlers();