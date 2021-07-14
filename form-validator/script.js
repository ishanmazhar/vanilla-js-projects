const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error'; 
    const small = formControl.querySelector('small');
    small.innerText = message; 
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'; 
}

// Check if email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
}

// function isValidEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase()); 
// }

const getFieldName = input => {
    if (input.id === "password2") return "Password confirmation";
    else return input.id.charAt(0).toUpperCase() + input.id.slice(1); 
}

// Check input is provided
const checkRequired = inputArr => {
    inputArr.forEach((input) => {
        if(input.value === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
}

// Check input length
const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must contain at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must contain less than ${max} characters`);
    } else {
        showSuccess(input); 
    }
}

// Check passwords match
const checkPasswordsMatch = (input1, input2) => {
    if(input1.value !== input2.value) {
        showError(password2, "Passwords do not match")
    } else {
        showSuccess(password2); 
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15); 
    checkEmail(email); 
    checkLength(password, 6, 25); 
    checkPasswordsMatch(password, password2); 
    checkLength(password2, 6, 25); 
    
    // if(username.value === '') {
    //     showError(username, 'Username is required'); 
    // } else {
    //     showSuccess(username); 
    // }

    // if(email.value === '') {
    //     showError(email, 'Email is required'); 
    // } else if (!isValidEmail(email.value)) {
    //     showError(email, 'Email is not valid'); 
    // } else {
    //     showSuccess(email); 
    // }

    // if(password.value === '') {
    //     showError(password, 'Password is required'); 
    // } else {
    //     showSuccess(password); 
    // }

    // if(password2.value === '') {
    //     showError(password2, 'Please confirm password'); 
    // } else {
    //     showSuccess(password2); 
    // }
});


