var shoppingCart = [];

function addToCart() {
    var selectedClass = document.getElementById('classSelect').value;
    var cartItems = document.getElementById('cartItems');
    var totalPriceElement = document.getElementById('totalPrice');

    // Reset cart and total price
    shoppingCart = [];
    var totalPrice = 0;

    // Get selected class
    shoppingCart.push({ name: 'Class', price: 0 }); // Add class to the cart

    // Get selected packs
    var pack1Checkbox = document.getElementById('pack1');
    var pack2Checkbox = document.getElementById('pack2');

    if (pack1Checkbox.checked) {
        shoppingCart.push({ name: 'Pack 1', price: parseFloat(pack1Checkbox.getAttribute('data-price')) });
    }

    if (pack2Checkbox.checked) {
        shoppingCart.push({ name: 'Pack 2', price: parseFloat(pack2Checkbox.getAttribute('data-price')) });
    }

    // You can add more packs as needed

    // Display items in the cart
    cartItems.innerHTML = '';
    shoppingCart.forEach(function (item) {
        var listItem = document.createElement('li');
        listItem.textContent = item.name + ' - $' + item.price.toFixed(2);
        cartItems.appendChild(listItem);
        totalPrice += item.price;
    });

    // Display total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

function closeAndReturn() {
    // Redirige vers la nouvelle page
    window.location.href = 'index.html';
}