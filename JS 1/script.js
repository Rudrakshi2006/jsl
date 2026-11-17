function externalJS() {
    alert("Hello from External JavaScript!");
}

function showInfo() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;

    if (name === "" || age === "") {
        alert("Please enter your name and age!");
        return;
    }

    let message = `Welcome ${name}! Your age is ${age}.`;

    document.getElementById("output").innerText = message;

    console.log("User Name:", name);
    console.info("User Age:", age);
    console.warn("This is a warning message!");
    console.error("This is an error demonstration!");
    console.table([{ Name: name, Age: age }]);
}
