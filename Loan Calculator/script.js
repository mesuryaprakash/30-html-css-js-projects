const loanAmount = document.getElementById('loan-amount');
const interestRate = document.getElementById('interest-rate');
const months = document.getElementById('months');

function calculateLoan(){
    interest = (loanAmount.value * (interestRate.value * 0.01)) / months.value;
    // console.log(interest)
    monthlyPayment = (loanAmount.value / months.value + interest).toFixed(2);
    // console.log(monthlyPayment)
    document.getElementById('payment').innerHTML = `Pay Amount Per Month: ${monthlyPayment}`
}
calculateLoan()