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







/*
============================================================
           INBUILT JS FUNCTIONS & PROPERTIES EXPLANATION
============================================================

1. document.getElementById("id")
   - Kaam: Form ke input fields, dropdown select, error spans, aur submit button ko unke ID se target karta hai.

2. .addEventListener(event, callback)
   - Kaam: User dwara kiye gaye alag-alag events ko listen karta hai:
     * "input": Jab user input box me har ek character type ya delete karta hai tab turant validation chalti hai.
     * "blur": Jab user input box se focus hata kar bahar click karta hai tab trigger hota hai.
     * "change": Jab dropdown me user koi option select ya change karta hai tab chalta hai.
     * "submit": Jab user submit button daba kar form bhejne ki koshish karta hai tab run hota hai.

3. this.value / .value
   - Kaam: Jis input element par event fire hua hai (`this`) ya target element ki current typed value ko nikalta hai.

4. RegExp.test() (/regex/.test(value))
   - Kaam: Di gayi string ko regular expression pattern se match karke verify karta hai ki format sahi hai ya nahi:
     * /^[a-z ]+$/i: Sirf letters aur spaces allow karta hai.
     * /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/i: Sahi email structure check karta hai.
     * /^[0-9]{10}$/: Pure 10 digits ka mobile number verify karta hai.

5. .innerText
   - Kaam: Error span ke andar red warning text message show karta hai, ya validation pass hone par text ko empty ("") kar deta hai.

6. e.preventDefault()
   - Kaam: Form submit hone par browser ka default reload hone ka behaviour rok deta hai taaki page refresh na ho aur JavaScript validation chale.

7. .trim()
   - Kaam: Name ke aage aur peeche ke anchahe spaces ko remove karta hai taaki empty space validate na ho sake.

8. alert()
   - Kaam: Agar form submit karte waqt koi bhi field galat ho toh pop-up alert warning show karta hai.
============================================================
*/
