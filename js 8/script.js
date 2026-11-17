document.getElementById("name").addEventListener("input", function() {
    let name = this.value;

    if (/^[a-z ]+$/i.test(name)) {
        document.getElementById("nameError").innerText = "";
    } else {
        document.getElementById("nameError").innerText = "Only letters allowed";
    }
});

document.getElementById("age").addEventListener("blur", function() {
    let age = this.value;

    if (age >= 16 && age <= 60) {
        document.getElementById("ageError").innerText = "";
    } else {
        document.getElementById("ageError").innerText = "Age must be 16 to 60";
    }
});

document.getElementById("email").addEventListener("input", function() {
    let email = this.value;
    let pattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/i;

    if (pattern.test(email)) {
        document.getElementById("emailError").innerText = "";
    } else {
        document.getElementById("emailError").innerText = "Invalid email";
    }
});

document.getElementById("mobile").addEventListener("input", function() {
    let mobile = this.value;

    if (/^[0-9]{10}$/.test(mobile)) {
        document.getElementById("mobileError").innerText = "";
    } else {
        document.getElementById("mobileError").innerText = "Enter 10-digit mobile number";
    }
});

document.getElementById("plan").addEventListener("change", function() {
    if (this.value == "") {
        document.getElementById("planError").innerText = "Select a plan";
    } else {
        document.getElementById("planError").innerText = "";
    }
});

document.getElementById("gymForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let plan = document.getElementById("plan").value;

    if (/^[a-z ]+$/i.test(name) &&
        age >= 16 && age <= 60 &&
        /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/i.test(email) &&
        /^[0-9]{10}$/.test(mobile) &&
        plan != "") {

        document.getElementById("result").innerText = "Gym Admission Successful!";
    } else {
        document.getElementById("result").innerText = "";
        alert("Please enter valid details!");
    }
});
