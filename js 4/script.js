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
