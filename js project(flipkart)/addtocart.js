
let addToCartButton = document.getElementById("btn1");
addToCartButton.addEventListener("click", function(e) {
    
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
    const imageUrl = params.get("image_url");
    const productName = params.get("product_name");
    const price = params.get("price");

   
    storeData(imageUrl, productName, price);
});

function storeData(imageUrl, productName, price) {
    console.log( imageUrl, productName, price);
    const cartItem = {
        imageUrl: imageUrl,
        productName: productName,
        price: price
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(cartItem);

       localStorage.setItem("cart", JSON.stringify(cart));
    
    alert(`${productName} has been added to your cart!`);
}
