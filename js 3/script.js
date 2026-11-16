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







/*
============================================================
           INBUILT JS FUNCTIONS & PROPERTIES EXPLANATION
============================================================

1. document.getElementById("id")
   - Kaam: HTML document me se specific id wale element (input ya div) ko select karta hai.

2. .value
   - Kaam: User ne input field me jo text ya marks enter kiye hain, usko read karne ke kaam aata hai.

3. Number()
   - Kaam: Input se milne wali string value ko numeric type me convert karta hai taaki marks ko compare kar sakein (>= 90 etc.).

4. .trim()
   - Kaam: Text ke aage aur peeche ke anchahe spaces ko remove karta hai taaki agar user sirf space dabaye toh use empty maana jaye.

5. Number.isFinite()
   - Kaam: Check karta hai ki input value ek valid real number hai ya nahi.

6. alert()
   - Kaam: Form validation fail hone par screen par warning pop-up box open karta hai.

7. .innerHTML
   - Kaam: Result wale div ke andar HTML tags (jaise <b>, <br>) ke sath formatted grade report render karta hai.

8. console.log()
   - Kaam: Student ka naam aur calculated grade browser ke console tab me print karta hai.
============================================================
*/
