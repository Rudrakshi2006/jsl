function loadStudents() {
    fetch("students.json")
        .then(response => response.json())
        .then(data => {
            let tableBody = document.querySelector("#studentTable tbody");
            tableBody.innerHTML = "";

            data.forEach(student => {
                tableBody.innerHTML += `
                    <tr>
                        <td>${student.id}</td>
                        <td>${student.name}</td>
                        <td>${student.department}</td>
                        <td>${student.marks}</td>
                    </tr>
                `;
            });
        })
        .catch(error => {
            console.log("Error:", error);
        });
}







/*
============================================================
           INBUILT JS FUNCTIONS & PROPERTIES EXPLANATION
============================================================

1. fetch(url)
   - Kaam: Kisi file (jaise students.json) ya online server API se data asynchronously mangwane ke liye use hota hai. Yeh ek Promise return karta hai.

2. .then()
   - Kaam: Jab fetch request successfully data le aati hai (Promise resolve hoti hai), tab aage ka kaam perform karne ke liye chained callback function run karta hai.

3. response.json()
   - Kaam: Server ya file se aane wale raw response data ko parse karke pure JavaScript array/object me convert karta hai.

4. document.querySelector(selector)
   - Kaam: CSS selector ke zariye (#studentTable tbody) table ke andar ke <tbody> tag ko dhoondh kar target karta hai.

5. .innerHTML
   - Kaam: Table body ko pehle clear ("") karta hai, fir student data ke anusar nayi rows (<tr>, <td>) dynamic roop se jodta hai.

6. Array.forEach()
   - Kaam: JSON se mile array ke har ek student record par loop chalata hai taaki har student ka row table me generate ho sake.

7. .catch()
   - Kaam: Agar fetch request fail ho jaye (jaise file na mile ya network error ho), toh error ko pakadta hai taaki program crash na ho.

8. console.log()
   - Kaam: Agar koi error aati hai toh usko browser ke console screen par print karta hai debugging ke liye.
============================================================
*/
