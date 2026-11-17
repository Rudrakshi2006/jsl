function calculateGrade() {
    let name = document.getElementById("name").value;
    let marksInput = document.getElementById("marks").value;
    let marks = Number(marksInput);

    if (name.trim() === "" || marksInput.trim() === "") {
        alert("Please fill all fields!");
        return;
    }

    if (!Number.isFinite(marks) || marks < 0 || marks > 100) {
        alert("Please enter valid marks between 0 and 100!");
        return;
    }

    let grade;

    if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 60) {
        grade = "C";
    } else if (marks >= 50) {
        grade = "D";
    } else {
        grade = "F (Fail)";
    }

    let message = `
        <b>Student Name:</b> ${name}<br>
        <b>Marks:</b> ${marks}<br>
        <b>Grade:</b> ${grade}
    `;

    document.getElementById("result").innerHTML = message;
    console.log("Student:", name, "Grade:", grade);
}
