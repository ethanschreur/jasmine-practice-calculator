window.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('calc-form');
	if (form) {
		setupIntialValues();
		form.addEventListener('submit', function(event) {
			event.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById('loan-amount').value,
		years: +document.getElementById('loan-years').value,
		rate: +document.getElementById('loan-rate').value
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	document.getElementById('loan-amount').value = 1000;
	document.getElementById('loan-years').value = 10;
	document.getElementById('loan-rate').value = 0.05;
	update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	let top = values['amount'] * (values['rate'] / 12);
	let bot = 1 - (1 + values['rate'] / 12) ** -(values['years'] * 12);
	let monthlyNum = top / bot;
	let monthlyRounded = monthlyNum.toFixed(2);
	return String(monthlyRounded);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	console.log(monthly);
	document.getElementById('monthly-payment').innerText = monthly;
}
