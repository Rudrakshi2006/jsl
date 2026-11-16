let cart = [];

function addProduct() {
    let name = document.getElementById("name").value;
    let price = Number(document.getElementById("price").value);
    let qty = Number(document.getElementById("qty").value);

    if (name.trim() == "" || price <= 0 || qty <= 0 ||
        !Number.isFinite(price) || !Number.isInteger(qty)) {
        alert("Enter valid product details");
        return;
    }

    let product = {
        id: cart.length + 1,
        name: name,
        price: price,
        quantity: qty
    };

    cart.push(product);
    displayCart();

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("qty").value = "";
}

function displayCart() {
    let table = document.getElementById("cartTable");

    table.innerHTML = `
        <tr>
            <th>ID</th><th>Product</th><th>Price</th>
            <th>Quantity</th><th>Total</th>
        </tr>`;

    cart.forEach(function(item) {
        table.innerHTML += `
            <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td>${item.price * item.quantity}</td>
            </tr>`;
    });

    let total = cart.reduce(function(sum, item) {
        return sum + item.price * item.quantity;
    }, 0);

    let discount = 0;

    if (total >= 50000) {
        discount = total * 0.20;
    } else if (total >= 20000) {
        discount = total * 0.10;
    } else if (total >= 5000) {
        discount = total * 0.05;
    }

    let finalAmount = total - discount;

    document.getElementById("result").innerHTML = `
        <h3>Bill Summary</h3>
        Total: Rs. ${total}<br>
        Discount: Rs. ${discount.toFixed(2)}<br>
        <b>Final Amount: Rs. ${finalAmount.toFixed(2)}</b>`;

    let summary = document.getElementById("summary");
    summary.innerHTML = "";

    cart.map(function(item) {
        summary.innerHTML += `<li>${item.name}: ${item.price * item.quantity}</li>`;
    });

    let expensive = document.getElementById("expensive");
    expensive.innerHTML = "";

    let exp = cart.filter(function(item) {
        return item.price > 1000;
    });

    exp.forEach(function(item) {
        expensive.innerHTML += `<li>${item.name}</li>`;
    });
}







/*
============================================================
           INBUILT JS FUNCTIONS & PROPERTIES EXPLANATION
============================================================

1. document.getElementById("id")
   - Kaam: HTML me se specific id wale element (input fields, table, list ya div) ko target karta hai.

2. .value
   - Kaam: Input boxes me user ne jo data enter kiya hai usko get karta hai, ya input fields ko reset/clear ("") karta hai.

3. Number()
   - Kaam: Input field se aane wali string value ko arithmetic calculations ke liye number me convert karta hai.

4. .trim()
   - Kaam: Product name ke aage ya peeche ke faltu spaces ko hata kar check karta hai ki name blank toh nahi hai.

5. Number.isFinite()
   - Kaam: Validate karta hai ki product price ek valid aur finite number hai.

6. Number.isInteger()
   - Kaam: Confirm karta hai ki product quantity ek poora integer number hai (fraction ya decimal nahi).

7. alert()
   - Kaam: Invalid input enter karne par user ko alert box dikhata hai.

8. Array.length (.length)
   - Kaam: Cart array me kitne items maujood hain unka total count batata hai (naya unique id generate karne me use hua hai).

9. Array.push() (cart.push(product))
   - Kaam: Naye product object ko cart array ke end me add/insert kar deta hai.

10. Array.forEach()
    - Kaam: Array ke har ek element par loop chala kar code execute karta hai (jaise table rows create karna).

11. Array.reduce()
    - Kaam: Array ke sabhi items ko process karke ek single accumulated value calculate karta hai (yahan pure cart ka total bill sum nikalne ke liye use hua hai).

12. .toFixed(2)
    - Kaam: Discount aur final price ko 2 decimal digits tak round off karke neat format me lata hai.

13. Array.map()
    - Kaam: Array ke har ek item ko transform/process karta hai aur summary list item <li> generate karta hai.

14. Array.filter()
    - Kaam: Diye gaye condition (price > 1000) ke basis par items ko filter karke unka ek alag naya array return karta hai.

15. .innerHTML
    - Kaam: Dynamic HTML tags (jaise table rows <tr>, list items <li>) ko webpage ke DOM me inject karta hai.
============================================================
*/
