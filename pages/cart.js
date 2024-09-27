document.addEventListener("DOMContentLoaded", () => {
    let cartContent=document.getElementById("cart-content");
    displayCart();

})
function displayCart() {
    let cartContent = document.getElementById("cart-content");
    let cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cartContent);
    cartContent.innerHTML = "";
    let total = 0;
    if (cart.length == 0) {
        cartContent.innerHTML =` <p>cart is empty<span><a href="Home.html>start shopping</a></span></p>`
    }
    cart.map((ele) => {
        total += ele.price;
        let cartDiv = document.createElement("div");

        cartDiv.classList.add("cart-container");
        cartDiv.innerHTML = `
        <div class="cart-card">
        <img src=${ele.images[0]} alt=${ele.title}/>
        <div class="cart-details">
        <p><strong>Name:</strong>${ele.title}</p>
        <p><strong>In Stock:</strong>${ele.stock}</p>
        <p><strong>Minimum Order Quantity:</strong>${ele.minimumOrderQuality}</p>
        <p><strong>Price:</strong>${ele.price}</p>
        </div>
<div class="cart-remove">
<button class="remove-btn" onclick=remove(${index})>Remove</button>
</div>
</div>
`


        //  cartContent.appendChild=cartDiv
    })



}
function remove(index){
    let cart =JSON.parse(localStorage.getItem("cart"))||[];
    cart.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cart));

    displayCart();
}