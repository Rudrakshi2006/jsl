function processString() {
    let paragraph = document.getElementById("paragraph").value.trim();
    let email = document.getElementById("email").value.trim();

    if (paragraph == "" || email == "") {
        alert("Please fill both fields");
        return;
    }

    let words = paragraph.split(/\s+/);
    let vowels = paragraph.match(/[aeiou]/gi);
    let vowelCount = vowels ? vowels.length : 0;
    let replaced = paragraph.replace(/javascript/gi, "JavaScript Programming");
    let position = paragraph.indexOf("powerful");
    let emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/i;
    let emailResult = emailRegex.test(email) ? "Valid Email" : "Invalid Email";
    let text = "Contact student@gmail.com or admin@college.com";
    let extracted = text.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,}/gi);
    let reversed = paragraph.split("").reverse().join("");

    document.getElementById("output").innerHTML = `
        <h3>1. Original Paragraph</h3>
        <p>${paragraph}</p>

        <h3>2. split() - Words</h3>
        <p>${words.join(", ")}</p>

        <h3>3. match() - Vowels</h3>
        <p>${vowels ? vowels.join(", ") : "No vowels found"}</p>

        <h3>4. Vowel Count</h3>
        <p>${vowelCount}</p>

        <h3>5. replace() - Replaced Text</h3>
        <p>${replaced}</p>

        <h3>6. indexOf() - Search Word</h3>
        <p>Position of "powerful": ${position}</p>

        <h3>7. Email Validation</h3>
        <p>${email}: ${emailResult}</p>

        <h3>8. Extracted Emails</h3>
        <p>${extracted ? extracted.join(", ") : "No emails found"}</p>

        <h3>9. Reversed Paragraph</h3>
        <p>${reversed}</p>
    `;
}
