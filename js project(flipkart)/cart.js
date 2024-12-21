
function displayCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || []; 
    const cartContainer = document.getElementById("cart-container");

    
    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cartContainer.innerHTML = cart.map(item => {
        return `
            <div class="cart-item">
                <img src="${item.imageUrl}" alt="${item.productName}" class="cart-item-image">
                <h5>${item.productName}</h5>
                <p>Price: ₹${item.price}</p>
            </div>
        `;
    }).join('');
}


window.onload = displayCart;
