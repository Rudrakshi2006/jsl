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







/*
============================================================
           INBUILT JS FUNCTIONS & PROPERTIES EXPLANATION
============================================================

1. document.getElementById("id")
   - Kaam: Page me se paragraph textarea, email input, aur output div ko select karta hai.

2. .value
   - Kaam: Textarea aur text input ke andar user dwara type kiya gaya content nikalta hai.

3. .trim()
   - Kaam: Text ke starting aur ending spaces ko cut kar deta hai taaki khaali spaces validation bypass na karein.

4. alert()
   - Kaam: Agar input empty ho toh screen par warning pop-up message show karta hai.

5. String.split()
   - Kaam: String ko tukdo me tod kar array banata hai.
     * split(/\s+/): Spaces/tabs ke basis par words ka array banata hai.
     * split(""): Har character ko alag karke array banata hai.

6. String.match()
   - Kaam: String me regex pattern dhoondhta hai.
     * match(/[aeiou]/gi): Saare vowels ka array nikalta hai.
     * match(/[a-z0-9]+@.../gi): Text me se email addresses find karke array deta hai (agar match na mile toh null deta hai).

7. .length
   - Kaam: Array me kitne matched items (vowels) mile unka total count nikalta hai.

8. String.replace()
   - Kaam: Diye gaye regex word (jaise 'javascript') ko doosre naye text ('JavaScript Programming') se badalta hai. 'gi' flag ka matlab hai global aur case-insensitive.

9. String.indexOf("word")
   - Kaam: String me kisi word ka pehla starting character index (position) batata hai. Agar word na mile toh -1 return karta hai.

10. RegExp.test() (emailRegex.test(email))
    - Kaam: Email string ko pattern ke against test karta hai aur validation ke roop me true ya false return karta hai.

11. Array.reverse()
    - Kaam: Characters ke array ko ulta karta hai taaki sentence/paragraph reverse ho sake.

12. Array.join(", ") / Array.join("")
    - Kaam: Array ke sabhi elements ko aapas me jod kar wapas string bana deta hai (jaise comma laga kar ya directly bina space ke).

13. .innerHTML
    - Kaam: Result wale container div ke andar headings, paragraphs aur formatted content render karta hai.
============================================================
*/
