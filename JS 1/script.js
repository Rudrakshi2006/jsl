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







/*
============================================================
           INBUILT JS FUNCTIONS & PROPERTIES EXPLANATION
============================================================

1. alert()
   - Kaam: Screen par ek pop-up dialog box show karta hai. User ko koi important message ya notification dikhane ke liye use hota hai.

2. document.getElementById("id")
   - Kaam: HTML document me se kisi specific 'id' wale element ko target/select karta hai taaki JavaScript se hum usme changes kar sakein.

3. .value
   - Kaam: Kisi bhi input box ke andar user ne jo text ya data type kiya hai, usko read (get) karne ya set karne ke liye use hota hai.

4. .innerText
   - Kaam: Kisi HTML tag (jaise <p>, <div>) ke andar ka plain text read ya dynamically change/display karne ke liye use hota hai.

5. console.log()
   - Kaam: Browser ke inspect console me normal text ya variable ka output print karta hai (debugging aur checking ke liye).

6. console.info()
   - Kaam: Console me information type ka message print karta hai. Kuch browsers me iske aage chhota sa info icon bhi aata hai.

7. console.warn()
   - Kaam: Console me yellow color ka warning sign aur message dikhata hai, jo batata hai ki code me dhyan dene wali koi cheez hai.

8. console.error()
   - Kaam: Console me red color ka error message highlight karta hai, jisse pata chalta hai ki koi galat ya critical issue hua hai.

9. console.table()
   - Kaam: Kisi array ya object ke data ko console me ek neat aur clean table format me row-column ke roop me print karta hai.
============================================================
*/
