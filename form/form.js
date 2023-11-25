// script.js

function validateForm() {
    var username = document.forms["Formfill"]["Username"].value;
    var email = document.forms["Formfill"]["Email"].value;
    var password = document.forms["Formfill"]["Password"].value;
    var cPassword = document.forms["Formfill"]["cPassword"].value;
    var age = document.forms["Formfill"]["age"].value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var course = document.forms["Formfill"]["course"].value;

    var isValid = true;

    // Validate username
    var usernameError = document.getElementById('username-error');
    if (username == "") {
        usernameError.innerHTML = "Username is required";
        document.getElementById('username').classList.add('invalid-field');
        isValid = false;
    } else {
        usernameError.innerHTML = "";
        document.getElementById('username').classList.remove('invalid-field');
    }

   

    if (!isValid) {
        return false;
    }

    return true; 
}
