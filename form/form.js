function validateForm() {
    var username = document.forms["Formfill"]["Username"].value;
    var email = document.forms["Formfill"]["Email"].value;
    var password = document.forms["Formfill"]["Password"].value;
    var cPassword = document.forms["Formfill"]["cPassword"].value;
    var age = document.forms["Formfill"]["age"].value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var course = document.forms["Formfill"]["course"].value;

    if (username == "" || email == "" || password == "" || cPassword == "" || age == "" || !gender || course == "") {
        alert("All fields must be filled out");
        return false;
    }

    if (password !== cPassword) {
        alert("Password and Confirm Password must match");
        return false;
    }

    return true;
}