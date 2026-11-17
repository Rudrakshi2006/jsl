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
