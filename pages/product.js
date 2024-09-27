document.addEventListener("DOMContentLoaded",()=>{
  let productDetails=document.getElementById("product-details");
  let products=JSON.parse(localStorage.getItem("products"));
  let selectedProductId=localStorage.getItem("selectedProductId");
console.log(selectedProductId)
  if(products&&selectedProductId){
      let selectedProduct=products.find((prod=>prod.id==selectedProductId));
      console.log(selectedProduct)

      if(selectedProduct){
          productDetails.innerHTML=
          `
          <div class="selected-product">
          <div class="image-details">
          <div class="image-container">
          <img src=${selectedProduct.images[0]} alt=${selectedProduct.title}/>
          </div>
          <div class="product-desc">
          <p><strong>Name:</strong>${selectedProduct.title}</p>
          <p><strong>Price:</strong>${selectedProduct.price}</p>
          <p><strong>Description:</strong>${selectedProduct.description}</p>
          <p><strong>Rating:</strong>${selectedProduct.rating}</p>+
          <div class="btns">
          <button id ="btn-cart onclick=addToCart"> Add to cart</button>
          <button class ="btn-home"<a href ="Home.html">back to home</a></button>
          </div>
          </div>
          </div>
          <div class="review-rating">
          <h2>Comments</h2>
          ${selectedProduct.reviews.map((e)=>
`
              <div class ="rating">
              <p>${'❤️'.repeat(e.rating)}${'🖤'.repeat(5-e.rating)}</p>
              <p>${e.comment}</p>
              <p>By${e.reviewerName}</p>
              `
          )}

      
          </div>
          </div>
          `

          document.getElementById("btn-card").addEventListener("onclick",()=>{
              addToCart(selectedProduct);
          })
      }
  }
  function addToCart(product){
      console.log("entering into cart")
      let cart =JSON.parse(localStorage.getItem)||[];
      cart.push(cartProuct);
      localStorage.setItem("cartItem",JSON.stringify(cart));
      alert("product is added to cart!");
  }

})