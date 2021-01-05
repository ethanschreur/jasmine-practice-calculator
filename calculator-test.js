it('should calculate the monthly rate correctly', function() {
	expect(calculateMonthlyPayment({ amount: 1000, years: 10, rate: 0.05 })).toEqual('10.61');
});

it('should return a result with 2 decimal places', function() {
	expect(
		calculateMonthlyPayment({ amount: 10043, years: 8, rate: 0.058 })[
			calculateMonthlyPayment({ amount: 10043, years: 8, rate: 0.058 }).length - 3
		]
	).toEqual('.');
});
console.log(calculateMonthlyPayment({ amount: 10043, years: 8, rate: 0.058 }));

/// etc
