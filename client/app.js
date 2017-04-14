const multiply = require('./multiply.js');

class ViewManager {

	connectEventHandlers() {
		document.getElementById('form-multiply')
			.addEventListener("submit", this.onSubmit.bind(this));

		document.getElementById('new-factor')
			.addEventListener("click", this.onFactor.bind(this));
	}

	onSubmit(event) {
		//loop over provided factors to create array
		//call multiply on array to return product -- any potential issue passing?

		//return product by editing textContent for div
	}

	onFactor(event) {
		/*create new div elemnt for new factor
		try: 
			1) create div: let field = document.createElement('div')
				a. add attributes: field.innerHTML = "<input id="" + <id> + "" type="text" size="3" />"
			2) retrieve submit element: let submit = getElementById(<submit id>)
			3) insert div before submit element: submit.insertAdjacentElement('afterend', field)
		*/

		//create an id counter variable at top and increment for each run of onFactor
	}


}