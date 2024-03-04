const form = document.querySelector('.sign-up');
const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        //add error class
        setErrorFor(username, 'Username cannot be blank');
    } else {
        //add success class
        setSuccessFor(username);
    }

    if (emailValue === '') {
        //add error class
        setErrorFor(email, 'email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        //add success class
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'password cannot be blank');
    } else if (passwordValue.length < 8) {
        setErrorFor(password, 'at least 8 characters');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'password2 cannot be blank');
    } else if (password2Value !== passwordValue) {
        setErrorFor(password2, "password doesn't match");
    } else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('.error');

    // add error message
    small.innerText = message;
    small.style.display = 'block';

    // add error class
    formControl.className = 'input-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('.error');

    small.style.display = 'none';

    formControl.className = 'input-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
