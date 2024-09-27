let container=document.getElementById("main-content");
let productDetails="";
let product=[];

function fetchData(){
    fetch("https://dummyjson.com/products").then((Response)=>Response.json()).then((result)=>{
        console.log(result);

        product=result.products;
        displayProducts(product);
        localStorage.setItem("products",JSON.stringify(product))
    })
}
fetchData();
function displayProducts(){

    product.map((ele)=>{
        productDetails+=
        `
        <div class="product-card">
        

        <img src=${ele.images[0]} alt="${ele.title}">

        <p>${ele.title}</p>
        <div class="price-rating">
<span>${ele.rating} <i class="fa-solid fa-star"></i></span>

<span><i class="fa-solid fa-dollar-sign"></i>${ele.price}</span>
        </div>
        <button onClick=viewMore(${ele.id})>View more</button>
        </div>
        `
    })


    container.innerHTML=productDetails;
    
     
}
function viewMore(productId){
    localStorage.setItem("selectedProductId",productId);
    window.location.href="Product.html"
}

document.getElementById("search-product").addEventListener("input",
    searchProducts)
function searchProducts(event){
    let filteredProducts=event?.target.value
    console.log(filteredProducts)

}
fetchData();