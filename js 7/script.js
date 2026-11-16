const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function () {
   let task = taskInput.value.trim();

   if (task == "") {
      alert("Please enter a task!");
      return;
   }

   let li = document.createElement("li");

   let span = document.createElement("span");
   span.textContent = task;

   let buttons = document.createElement("div");
   buttons.className = "buttons";

   let editBtn = document.createElement("button");
   editBtn.textContent = "Edit";
   editBtn.className = "edit";

   editBtn.addEventListener("click", function () {
      let newTask = prompt("Edit your task:", span.textContent);

      if (newTask !== null && newTask.trim() !== "") {
         span.textContent = newTask.trim();
      }
   });

   let deleteBtn = document.createElement("button");
   deleteBtn.textContent = "Delete";
   deleteBtn.className = "delete";

   deleteBtn.addEventListener("click", function () {
      taskList.removeChild(li);
   });

   buttons.appendChild(editBtn);
   buttons.appendChild(deleteBtn);

   li.appendChild(span);
   li.appendChild(buttons);

   taskList.appendChild(li);

   taskInput.value = "";
});







/*
============================================================
           INBUILT JS FUNCTIONS & PROPERTIES EXPLANATION
============================================================

1. document.getElementById("id")
   - Kaam: Page ke elements (input box, add button, task list) ko unki ID ke zariye access karta hai.

2. .addEventListener("event", callback)
   - Kaam: Kisi element par hone wale user actions (jaise button par "click") ko listen karta hai aur click hote hi function ko run karta hai.

3. .value
   - Kaam: Input field me likha hua task read karta hai, aur task add ho jaane ke baad input field ko empty ("") kar deta hai.

4. .trim()
   - Kaam: Task ke aage aur peeche ke anchahe khali spaces ko remove karta hai taaki sirf space dabane par task add na ho.

5. alert()
   - Kaam: Agar input khali ho toh user ko warning pop-up box show karta hai.

6. document.createElement("tag")
   - Kaam: JavaScript ke through HTML tag create karta hai (jaise naya <li>, <span>, <div>, ya <button> banana).

7. .textContent
   - Kaam: Element ke andar safe plain text set karta hai (jaise span ke andar task ka naam ya button par "Edit"/"Delete" likhna).

8. .className
   - Kaam: Dynamically banaye gaye HTML element ko CSS class assign karta hai (jaise "buttons", "edit", "delete") taaki CSS styles apply ho sakein.

9. prompt("message", "default")
   - Kaam: Browser me ek pop-up dialog box open karta hai jisme user naya text likh kar OK ya Cancel kar sakta hai (task edit karne ke liye use hua hai).

10. .appendChild(child)
    - Kaam: Kisi parent element ke andar last me naya child element add karta hai (jaise list <ul> ke andar naya <li> jodna).

11. .removeChild(child)
    - Kaam: Parent element me se kisi specific child element ko hamesha ke liye delete/remove kar deta hai (jaise list se <li> hatana).
============================================================
*/
