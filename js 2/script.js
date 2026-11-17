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
