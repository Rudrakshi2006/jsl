function reverseString(str) {
    return str.split("").reverse().join("");
}

function message() {
    var msg = "Palindrome Checker";

    function display() {
        return msg;
    }

    return display;
}

function checkPalindrome() {
    try {
        var word = document.getElementById("word").value;

        if (word == "") {
            throw "Please enter a word";
        }

        if (!/^[a-zA-Z]+$/.test(word)) {
            throw "Only alphabets are allowed";
        }

        if (word.length < 3) {
            throw "Please enter at least 3 characters";
        }

        if (word.length > 20) {
            throw "Maximum 20 characters are allowed";
        }

        let input = word.toLowerCase();
        var reversed = reverseString(input);

        if (input == reversed) {
            document.getElementById("result").innerHTML =
                "<h3>" + message()() + "</h3>" +
                "<hr>" +
                "<b>Word:</b> " + word + "<br>" +
                "<b>Result:</b> " + word + " is a palindrome";
        } else {
            document.getElementById("result").innerHTML =
                "<h3>" + message()() + "</h3>" +
                "<hr>" +
                "<b>Word:</b> " + word + "<br>" +
                "<b>Result:</b> " + word + " is not a palindrome";
        }
    } catch (error) {
        alert(error);
    }
}







/*
============================================================
           INBUILT JS FUNCTIONS & PROPERTIES EXPLANATION
============================================================

1. .split("")
   - Kaam: String ko tukdo me tod kar har character ka ek alag element bana kar array return karta hai (jaise "cat" -> ["c", "a", "t"]).

2. .reverse()
   - Kaam: Array ke elements ka order ulta (reverse) kar deta hai (jaise ["c", "a", "t"] -> ["t", "a", "c"]).

3. .join("")
   - Kaam: Array ke saare characters ko wapas jod kar ek single string bana deta hai (jaise ["t", "a", "c"] -> "tac").

4. document.getElementById("id")
   - Kaam: HTML me se id ke throw targeted element (input box ya result div) ko dhundhta hai.

5. .value
   - Kaam: Input tag me user ne jo word likha hai us string ko fetch karta hai.

6. RegExp.test() (/^[a-zA-Z]+$/.test(word))
   - Kaam: Di gayi string ko regex rule ke sath check karta hai. Agar string me sirf alphabets hain toh true, warna false return karta hai.

7. .length
   - Kaam: String me total kitne characters hain unka count batata hai (min 3 aur max 20 validation ke liye).

8. .toLowerCase()
   - Kaam: String ke saare letters ko chhote (lowercase) letters me convert karta hai taaki case-sensitive issue na ho (jaise "Madam" -> "madam").

9. .innerHTML
   - Kaam: Div ke andar result ko dynamic HTML heading aur text ke sath display karta hai.

10. alert()
    - Kaam: Agar koi condition fail hoti hai aur throw execute hota hai, toh catch block me error ka popup show karta hai.
============================================================
*/
