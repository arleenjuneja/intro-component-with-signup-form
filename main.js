const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById('submit');

function accessName() {
	console.log(this.value);
}

submitBtn.addEventListener('click', function(e) {
	e.preventDefault();
	let inputs = document.getElementsByTagName('input');
	for (let i = 0; i < inputs.length; i++) {
		let id = inputs[i].getAttribute('id')
		if (inputs[i].value === '') {
			addError(inputs[i], inputs[i].name + ' cannot be empty');
	    } else if (checkEmail(email.value) === false) {
	    	console.log('Looks like this is not an email');
	    	addError(email, 'Looks like this is not an email');
	    } else {
	    	removeError(inputs[i]);
	    }
	}
});
function addError(field, message) {
	field.style.borderColor = 'rgb(255, 122, 122)';
	const formControl = field.parentElement;
	const small = formControl.querySelector('small');
	small.innerText = message;
	field.removeAttribute('placeholder');
	const after = field.nextElementSibling;
	after.classList.add('error');
}

function removeError(field) {
	let after = field.nextElementSibling;
	after.classList.remove('error');
}

function checkEmail(string) {
	var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(string);
}
firstName.addEventListener('change', accessName);
lastName.addEventListener('change', accessName);