function setTheme(theme) {
   document.body.className = theme;
   localStorage.setItem("theme", theme);
   sessionStorage.setItem("sessionTheme", theme);
}

function clearPreference() {
   localStorage.removeItem("theme");
   sessionStorage.removeItem("sessionTheme");
   document.body.className = "";
}

window.onload = function () {
   let saved = localStorage.getItem("theme");

   if (saved == "dark") {
      document.body.className = "dark";
   }
};







/*
============================================================
           INBUILT JS FUNCTIONS & PROPERTIES EXPLANATION
============================================================

1. document.body.className
   - Kaam: HTML document ke <body> tag par directly CSS class assign ("dark" ya "light") karta hai ya class ko empty ("") karke default theme par laata hai.

2. localStorage.setItem("key", value)
   - Kaam: Browser ke Local Storage me data permanently save karta hai. Browser band karne ya system restart karne ke baad bhi yeh data delete nahi hota.

3. sessionStorage.setItem("key", value)
   - Kaam: Browser ke Session Storage me data temporary taur par save karta hai. Yeh data tab tak rehta hai jab tak wo browser tab open rehti hai.

4. localStorage.removeItem("key")
   - Kaam: Local Storage se specific key (jaise "theme") aur uski saved value ko delete kar deta hai.

5. sessionStorage.removeItem("key")
   - Kaam: Session Storage se specific key (jaise "sessionTheme") ko delete kar deta hai.

6. window.onload
   - Kaam: Yeh event tab trigger hota hai jab poora webpage (HTML, CSS aur images) poori tarah browser me load ho jata hai. Iske andar hum page khulte hi saved settings apply karte hain.

7. localStorage.getItem("key")
   - Kaam: Local Storage me pehle se save ki gayi value ko read (fetch) karta hai taaki check kiya ja sake ki user ne dark theme select ki thi ya nahi.
============================================================
*/
