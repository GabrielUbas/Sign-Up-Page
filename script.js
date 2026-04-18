/*
Signup Form Validation
Author: Gabriel Ubas
Date: 2026
Purpose: Validate all signup inputs without page reload
*/

function validateForm() {

    // CLEAR ALL ERRORS
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("birthError").innerHTML = "";
    document.getElementById("sexError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("userError").innerHTML = "";
    document.getElementById("passError").innerHTML = "";
    document.getElementById("confirmError").innerHTML = "";
    document.getElementById("selectError").innerHTML = "";
    document.getElementById("checkError").innerHTML = "";
    document.getElementById("freqError").innerHTML = "";
    document.getElementById("successMsg").innerHTML = "";

    let isValid = true;

    // ======================
    // PERSONAL INFORMATION
    // ======================

    let name = document.getElementById("fullName").value.trim();
    if (name.length < 2) {
        document.getElementById("nameError").innerHTML = "Name must be at least 2 characters.";
        isValid = false;
    }

    let birth = document.getElementById("birthdate").value;
    if (birth === "") {
        document.getElementById("birthError").innerHTML = "Birthdate is required.";
        isValid = false;
    } else {
        let age = new Date().getFullYear() - new Date(birth).getFullYear();
        if (age < 13) {
            document.getElementById("birthError").innerHTML = "You must be at least 13 years old.";
            isValid = false;
        }
    }

    let sex = document.getElementsByName("sex");
    let sexSelected = false;
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sexSelected = true;
        }
    }
    if (!sexSelected) {
        document.getElementById("sexError").innerHTML = "Please select your sex.";
        isValid = false;
    }

    let email = document.getElementById("email").value;
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerHTML = "Enter a valid email.";
        isValid = false;
    }

    // ======================
    // ACCOUNT DETAILS
    // ======================

    let username = document.getElementById("username").value;
    let lettersAndNumbers = /^[a-zA-Z0-9]+$/;

    if (username.length < 8 || username.length > 20) {
        document.getElementById("userError").innerHTML = "Username must be 8-20 characters.";
        isValid = false;
    }

    if (!lettersAndNumbers.test(username)) {
        document.getElementById("userError").innerHTML = "Only letters and numbers allowed.";
        isValid = false;
    }

    let password = document.getElementById("password").value;

    if (password.length < 10) {
        document.getElementById("passError").innerHTML = "Password must be at least 10 characters.";
        isValid = false;
    }

    if (!/[A-Z]/.test(password)) {
        document.getElementById("passError").innerHTML = "Must include uppercase letter.";
        isValid = false;
    }

    if (!/[a-z]/.test(password)) {
        document.getElementById("passError").innerHTML = "Must include lowercase letter.";
        isValid = false;
    }

    if (!/[0-9]/.test(password)) {
        document.getElementById("passError").innerHTML = "Must include a number.";
        isValid = false;
    }

    let confirm = document.getElementById("confirmPassword").value;
    if (confirm !== password) {
        document.getElementById("confirmError").innerHTML = "Passwords do not match.";
        isValid = false;
    }

    // ======================
    // TOPIC QUESTIONS
    // ======================

    let select = document.getElementById("helpType").value;
    if (select === "") {
        document.getElementById("selectError").innerHTML = "Please choose an option.";
        isValid = false;
    }

    let checks = document.getElementsByName("causes");
    let checked = false;
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            checked = true;
        }
    }
    if (!checked) {
        document.getElementById("checkError").innerHTML = "Select at least one cause.";
        isValid = false;
    }

    let freq = document.getElementsByName("frequency");
    let freqSelected = false;
    for (let i = 0; i < freq.length; i++) {
        if (freq[i].checked) {
            freqSelected = true;
        }
    }
    if (!freqSelected) {
        document.getElementById("freqError").innerHTML = "Select participation frequency.";
        isValid = false;
    }

    // SUCCESS MESSAGE
    if (isValid) {
        document.getElementById("successMsg").innerHTML = "Successfully signed up!";
    }

    return isValid;
}