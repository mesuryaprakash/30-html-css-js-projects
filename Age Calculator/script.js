const dobEle = document.getElementById('dob');
const btnEle = document.getElementById('btn');
const ageEle = document.getElementById('age');

let today = new Date();
let currentYear = today.getFullYear();



function calculateAge() {
    let dobValue = dobEle.value;
    if (dobEle.value === '') {
        alert('Please enter your date of birth');
    } else {
        const age = getAge(dobValue);
        const ageString = age === 1 ? age + ' year' : age + ' years';
        ageEle.textContent = ageString;
    }
}

function getAge(dobValue) {
    const birthdayDate = new Date(dobValue);
    const dobYear = birthdayDate.getFullYear();
    return currentYear - dobYear;
}


btnEle.addEventListener('click', calculateAge);