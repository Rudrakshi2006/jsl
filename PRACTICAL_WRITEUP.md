# JavaScript Lab Practical Write-Up & Viva Guide

Ye document specially college practical file / journal me likhne aur viva ke liye ready kiya gaya hai. Har practical me **Aim**, **6-7 lines ka simple theory/write-up** (jise aap directly notebook me likh sakte hain), aur **Key Functions** diye gaye hain.

---

## Practical 1: Introduction to JavaScript & Console Methods

### Aim:
To demonstrate different ways of implementing JavaScript (Inline, Internal, External) and practicing console debugging methods with user input.

### Theory / Write-Up (Practical File ke liye):
1. JavaScript ek lightweight, interpreted programming language hai jo web pages ko dynamic aur interactive banati hai.
2. JavaScript ko HTML me teen tarike se add kiya ja sakta hai: Inline (HTML attribute me), Internal (`<script>` tag ke andar), aur External (`.js` file bana kar link karna).
3. Production aur clean coding ke liye hamesha External JavaScript file ka use kiya jata hai.
4. User input lene ke liye HTML input elements ka use hota hai aur unki value `document.getElementById().value` se fetch ki jaati hai.
5. DOM (Document Object Model) ke through JavaScript webpage ke text content ko `.innerText` se dynamically badal sakti hai.
6. Browser debugging ke liye Console API ka use hota hai jisme `console.log()` normal message, `console.info()` information, `console.warn()` warning, aur `console.error()` error dikhata hai.
7. Data ko neat tabular format me visualize karne ke liye `console.table()` ka use kiya jata hai.

### Key Inbuilt Functions Used:
- `alert()`: Screen par pop-up notification dikhane ke liye.
- `document.getElementById()`: HTML element ko uski ID se select karne ke liye.
- `console.log()`, `console.warn()`, `console.error()`, `console.table()`: Debugging aur data printing ke liye.

---

## Practical 2: Billing Calculator (Operators & Type Casting)

### Aim:
To create a billing calculator that takes product details, calculates discounts, applies GST, and displays the final formatted bill.

### Theory / Write-Up (Practical File ke liye):
1. Real-world web applications me billing calculations ke liye user se numeric inputs liye jaate hain.
2. HTML input field se aane wala data default roop se String type ka hota hai, jise calculation ke liye `Number()` function se convert kiya jata hai.
3. User input ko sanitize karne ke liye `.trim()` method ka use hota hai taaki aage aur peeche ke empty spaces hat sakein.
4. Robust validation ke liye `Number.isFinite()` aur `Number.isInteger()` se check karte hain ki number valid aur whole number hai ya nahi.
5. `const` keyword ka use fixed values jaise GST rate (0.18) store karne ke liye kiya jata hai jise change nahi kiya ja sakta.
6. JavaScript Object aur ES6 Destructuring ka use karke bill data ko structured form me store aur extract kiya jata hai.
7. Currency aur amounts ko standard 2 decimal places tak display karne ke liye `.toFixed(2)` method ka upyog hota hai.

### Key Inbuilt Functions Used:
- `Number()`: String ko number me badalna.
- `.trim()`: Extra whitespace remove karna.
- `Number.isFinite()`, `Number.isInteger()`: Number verification.
- `.toFixed(2)`: Amount ko 2 decimal places tak round karna.
- `.innerHTML`: Formatted HTML table/bill screen par display karna.

---

## Practical 3: Student Grading System (Control Flow)

### Aim:
To implement a student grading system using conditional control structures (if-else-if ladder) and input validation.

### Theory / Write-Up (Practical File ke liye):
1. Control flow statements program execution ke direction ko decide karte hain based on true ya false conditions.
2. Student grading system me conditional logic ke liye `if-else if-else` ladder ka upyog hota hai.
3. Pehle input validation check hoti hai ki marks empty toh nahi hain aur 0 se 100 ke beech ki valid range me hain.
4. Marks ke range ke hisab se grading logic work karta hai: 90+ par A+, 80+ par A, 70+ par B, 60+ par C, 50+ par D, aur 50 se kam par F.
5. Logical operators jaise `||` (OR) ka use multiple validation conditions ko ek sath check karne ke liye hota hai.
6. ES6 Template Literals (backticks `` ` ``) ka use string interpolation aur dynamic HTML formatting ke liye hota hai.
7. Final result dynamically target container me display hota hai bina page refresh kiye.

### Key Inbuilt Functions Used:
- `document.getElementById()`: Student name aur marks input fetch karna.
- `Number()`: Marks string ko numeric value me convert karna.
- `Number.isFinite()`: Valid numeric marks verify karna.
- `alert()`: Invalid range (marks < 0 ya > 100) par warning popup dena.
- `.innerHTML`: Calculated grade card webpage par render karna.

---

## Practical 4: Palindrome Checker (Strings, Arrays & Exceptions)

### Aim:
To check whether an entered string is a palindrome using string-array methods, regular expressions, closures, and exception handling.

### Theory / Write-Up (Practical File ke liye):
1. Palindrome ek aisa word ya sequence hota hai jo aage aur peeche dono taraf se padhne par same hota hai (jaise "radar" ya "level").
2. JavaScript me string ko reverse karne ke liye three-step chaining use hoti hai: `.split("")` se characters ka array banana, `.reverse()` se array ulta karna, aur `.join("")` se wapas string banana.
3. Case sensitivity ki problem ko solve karne ke liye string ko pehle `.toLowerCase()` me convert kiya jata hai.
4. Input validation ke liye Regular Expression `/^[a-zA-Z]+$/` ka use hota hai taaki sirf alphabets allow hon.
5. Code robust banane ke liye JavaScript `try...catch` block aur `throw` statement ka use karke custom errors handle kiye jate hain.
6. Program me closure concept demonstrate kiya gaya hai jahan inner function apne outer function ke scope ko access karta hai.
7. User-friendly error handling popup alert ke through display ki jaati hai.

### Key Inbuilt Functions Used:
- `.split("")`: String ko array of characters me todna.
- `.reverse()`: Array elements ka order ulta karna.
- `.join("")`: Array ko wapas string me jodna.
- `.toLowerCase()`: String ko lowercase me convert karna.
- `RegExp.test()`: Alphabets validation check karna.
- `try...catch / throw`: Error handling.

---

## Practical 5: Shopping Cart Calculator (Higher-Order Array Methods)

### Aim:
To build an interactive shopping cart that performs calculations using modern ES6 Array methods like push, forEach, map, filter, and reduce.

### Theory / Write-Up (Practical File ke liye):
1. Shopping cart applications me dynamic list of items ko manage karne ke liye Array of Objects ka use kiya jata hai.
2. Naye product object ko cart me store karne ke liye `Array.push()` method ka use hota hai.
3. Cart items ko table format me render karne ke liye `Array.forEach()` method array ke har element par iterate karta hai.
4. Pure cart ka grand total nikalne ke liye `Array.reduce()` method single accumulator value calculate karta hai.
5. Cart ke total amount ke aadhar par conditional slab-based discounts (5%, 10%, 20%) calculate kiye jate hain.
6. `Array.map()` ka use karke products ki quick itemized summary list generate ki jaati hai.
7. Expensive products (price > 1000) ko alag karne ke liye `Array.filter()` method ka upyog hota hai jo matched elements ka naya array return karta hai.

### Key Inbuilt Functions Used:
- `Array.push()`: Naya item cart array me add karna.
- `Array.forEach()`: Array elements par loop chalana.
- `Array.reduce()`: Total bill calculate karna.
- `Array.map()`: Data transform karke summary list banana.
- `Array.filter()`: Specific condition wale items filter karna.
- `.toFixed(2)`: Discount aur net bill format karna.

---

## Practical 6: String Methods & Regular Expressions

### Aim:
To demonstrate built-in JavaScript string manipulation methods and pattern matching using Regular Expressions.

### Theory / Write-Up (Practical File ke liye):
1. String manipulation web applications me text processing, search, aur data formatting ke liye essential hota hai.
2. `String.split(/\s+/)` ka use karke text ko whitespace ke aadhar par words ke array me todte hain.
3. Text me se specific patterns (jaise vowels `[aeiou]`) dhoondhne ke liye `String.match()` method ka use hota hai.
4. Text me kisi specific word ko naye text se badalne ke liye `String.replace()` with global (`g`) aur case-insensitive (`i`) flags ka use kiya jata hai.
5. Kisi word ka exact character index position find karne ke liye `String.indexOf()` method use hota hai (na milne par -1 deta hai).
6. Email format validate karne ke liye standard regex `/^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/i` ka upyog kiya jata hai.
7. Paragraph ko reverse karne ke liye string ko array me convert karke reverse aur join kiya jata hai.

### Key Inbuilt Functions Used:
- `String.split()`: Delimiter ya regex se string todna.
- `String.match()`: Regex pattern search karke matches ka array return karna.
- `String.replace()`: Matched substring ko new text se replace karna.
- `String.indexOf()`: Substring ki position dhoondhna.
- `RegExp.test()`: Email format match verify karna.
- `Array.reverse()` & `Array.join()`: Text reverse karke connect karna.

---

## Practical 7: Interactive To-Do List (DOM Manipulation & Events)

### Aim:
To create a dynamic To-Do List application performing CRUD operations (Create, Read, Update, Delete) using DOM methods.

### Theory / Write-Up (Practical File ke liye):
1. DOM (Document Object Model) ke dwara JavaScript HTML structure ko run-time par dynamically modify kar sakti hai.
2. User interaction ko capture karne ke liye `addEventListener("click", callback)` method ka use hota hai.
3. Memory me run-time par naye HTML elements create karne ke liye `document.createElement("tag")` ka use kiya jata hai.
4. Element me text content safe tarike se add karne ke liye `.textContent` property ka use hota hai jo XSS security provide karti hai.
5. Naye bane elements ko parent container (jaise `<ul>`) me attach karne ke liye `.appendChild()` method use hota hai.
6. Task update/edit karne ke liye browser ka built-in `prompt()` dialog box use hota hai.
7. List item ko remove karne ke liye parent element se `removeChild(li)` call kiya jata hai.

### Key Inbuilt Functions Used:
- `document.createElement()`: Naya HTML element banana (`li`, `span`, `button`).
- `element.appendChild()`: Child element ko parent me jodna.
- `element.removeChild()`: Child element ko DOM se delete karna.
- `addEventListener()`: Click event handle karna.
- `prompt()`: User se prompt pop-up ke zariye update input lena.
- `.textContent`: Safe plain text set karna.

---

## Practical 8: Gym Admission Form Validation

### Aim:
To implement real-time and submission-time form validation using multiple form events and regular expressions.

### Theory / Write-Up (Practical File ke liye):
1. Client-side form validation server par invalid request jaane se rokti hai aur user experience improve karti hai.
2. Real-time validation ke liye `input` event ka use hota hai jo har character type karne par turant validate karta hai.
3. `blur` event tab trigger hota hai jab user input field se bahar click karta hai (e.g., Age validation 16 se 60 ke beech).
4. Dropdown select options ko monitor karne ke liye `change` event listener ka use kiya jata hai.
5. Form submit hone par page ko reload hone se bachane ke liye `event.preventDefault()` method call kiya jata hai.
6. Name validation ke liye alphabets regex, email ke liye email pattern, aur mobile ke liye 10-digit numeric regex `/^[0-9]{10}$/` use hota hai.
7. Validation fail hone par corresponding error span me `.innerText` se specific message show kiya jata hai.

### Key Inbuilt Functions Used:
- `addEventListener()`: Events listen karna (`input`, `blur`, `change`, `submit`).
- `event.preventDefault()`: Form ke default page-reload behavior ko rokna.
- `RegExp.test()`: Input values ko regex pattern ke sath verify karna.
- `.innerText`: Error messages inject ya clear karna.
- `this.value`: Current input field ka data access karna.

---

## Practical 9: Theme Preferences (Web Storage API)

### Aim:
To persist user theme preferences (Light/Dark mode) across browser sessions using localStorage and sessionStorage.

### Theory / Write-Up (Practical File ke liye):
1. Web Storage API browser me key-value pairs ke roop me client-side data store karne ki facility deta hai bina server cookies ke.
2. `localStorage` me store kiya gaya data persistent hota hai, yaani browser band ya computer restart hone par bhi save rehta hai.
3. `sessionStorage` me store kiya gaya data tab tak active rehta hai jab tak wo specific browser tab open rehti hai.
4. Storage me data save karne ke liye `setItem("key", "value")` method ka upyog kiya jata hai.
5. Storage se saved preference read karne ke liye `getItem("key")` method use hota hai.
6. Preferences ko clear/reset karne ke liye `removeItem("key")` method ka use hota hai.
7. Webpage load hote hi user ki saved preference restore karne ke liye `window.onload` event handler ka use hota hai.

### Key Inbuilt Functions Used:
- `localStorage.setItem()`: Local storage me theme permanently save karna.
- `localStorage.getItem()`: Saved theme read karna.
- `localStorage.removeItem()`: Local storage se preference delete karna.
- `sessionStorage.setItem()` & `sessionStorage.removeItem()`: Session-based storage manage karna.
- `window.onload`: Page load hote hi theme restore karna.
- `document.body.className`: Body par CSS class apply karna.

---

## Practical 10: Student Details using Fetch API & JSON

### Aim:
To fetch and display student records from an external JSON file asynchronously using the JavaScript Fetch API and Promises.

### Theory / Write-Up (Practical File ke liye):
1. AJAX aur Asynchronous JavaScript web pages ko page reload kiye bina background me data fetch karne ki suvidha dete hain.
2. Modern JavaScript me data requests handle karne ke liye built-in `fetch(url)` method ka use hota hai jo ek Promise return karta hai.
3. Fetch se mile raw response stream ko JavaScript object me parse karne ke liye `response.json()` method use hota hai.
4. Promises ke asynchronous flow ko `.then()` chaining ke through handle kiya jata hai.
5. Agar request fail hoti hai ya koi network error aati hai toh `.catch(error)` block error ko safely handle karta hai.
6. Target table body ko select karne ke liye CSS selector method `document.querySelector("#studentTable tbody")` use hota hai.
7. Fetched JSON array par `data.forEach()` loop chala kar dynamically table rows (`<tr>`, `<td>`) HTML me render ki jaati hain.

### Key Inbuilt Functions Used:
- `fetch(url)`: External resource/file se data asynchronously fetch karna.
- `response.json()`: Stream response ko JSON me convert karna.
- `.then()`: Resolved Promise ke data ko handle karna.
- `.catch()`: Network/parsing errors ko catch karna.
- `document.querySelector()`: Table body element select karna.
- `Array.forEach()`: Student list par iterate karke table populate karna.

---

### Quick Viva Tips (Common Questions):
- **Difference between `let`, `var`, `const`:** `var` is function-scoped and hoisted. `let` and `const` are block-scoped; `const` cannot be reassigned.
- **`==` vs `===`:** `==` compares values with type coercion; `===` checks both value and data type.
- **What is DOM:** Document Object Model, an API allowing JS to access and manipulate HTML elements.
- **`localStorage` vs `sessionStorage`:** `localStorage` has no expiration date; `sessionStorage` is cleared when the tab/session closes.
- **What is a Promise:** An object representing the eventual completion (or failure) of an asynchronous operation.
