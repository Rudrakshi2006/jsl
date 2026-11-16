function calculateBill() {
    var product = document.getElementById("product").value;
    let price = Number(document.getElementById("price").value);
    let quantity = Number(document.getElementById("quantity").value);

    if (product.trim() === "" || price <= 0 || quantity <= 0 ||
        !Number.isFinite(price) || !Number.isInteger(quantity)) {
        alert("Please enter valid product details!");
        return;
    }

    const gstRate = 0.18;
    let subtotal = price * quantity;
    let discount = 0;

    if (subtotal > 999) {
        discount = subtotal * 0.05;
    }

    let amount = subtotal - discount;
    let gst = amount * gstRate;
    let total = amount + gst;

    let bill = { product, subtotal, discount, gst, total };
    let { product: itemName, subtotal: sub, discount: dis, gst: tax, total: final } = bill;

    let message = `
        Product: ${itemName}<br>
        Price: Rs. ${price.toFixed(2)}<br>
        Quantity: ${quantity}<br>
        Subtotal: Rs. ${sub.toFixed(2)}<br>
        Discount: Rs. ${dis.toFixed(2)}<br>
        GST (18%): Rs. ${tax.toFixed(2)}<br>
        <b>Total Bill: Rs. ${final.toFixed(2)}</b>
    `;

    document.getElementById("result").innerHTML = message;
    console.log("Total Bill:", final);
}







/*
============================================================
           INBUILT JS FUNCTIONS & PROPERTIES EXPLANATION
============================================================

1. document.getElementById("id")
   - Kaam: Page me di gayi unique ID ke throw specific input box ya div ko select karta hai.

2. .value
   - Kaam: Input field me user ne jo likha hai (jaise price ya quantity) us data ko read karne ke kaam aata hai.

3. Number()
   - Kaam: String value ko number data type me convert karta hai taaki hum mathematics/calculation kar sakein.

4. .trim()
   - Kaam: String ke shuruat aur aakhir me lagne wale extra faltu spaces (spaces) ko automatically delete kar deta hai.

5. Number.isFinite()
   - Kaam: Check karta hai ki diya gaya number sach me ek valid finite number hai ya nahi (e.g. NaN ya Infinity toh nahi hai).

6. Number.isInteger()
   - Kaam: Check karta hai ki number poora (whole integer) number hai ya decimal wala fraction hai (jaise quantity 1, 2 honi chahiye, 1.5 nahi).

7. alert()
   - Kaam: User ko error ya warning ka popup message screen par show karta hai.

8. .toFixed(2)
   - Kaam: Number ko decimal ke 2 places tak round-off karke string format me badal deta hai (e.g. 50.00).

9. .innerHTML
   - Kaam: Kisi element ke andar HTML tags (jaise <b>, <br>) ke sath naya content show karne ke liye use hota hai.

10. console.log()
    - Kaam: Browser inspect ke console tab me final output print karta hai taaki value check kar sakein.
============================================================
*/
