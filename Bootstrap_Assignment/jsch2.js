document.addEventListener("DOMContentLoaded", function () {
    // Select all products
    const products = document.querySelectorAll(".card");
  
    // Function to update the total price
    function updateTotalPrice() {
      let total = 0;
      products.forEach(product => {
        const unitPrice = parseFloat(product.querySelector(".unit-price").textContent);
        const quantity = parseInt(product.querySelector(".quantity").textContent);
        total += unitPrice * quantity;
      });
      document.querySelector(".total").textContent = `${total} $`;
    }
  
    // Increment/Decrement quantity
    products.forEach(product => {
      const incrementBtn = product.querySelector(".fa-plus-circle");
      const decrementBtn = product.querySelector(".fa-minus-circle");
      const quantitySpan = product.querySelector(".quantity");
  
      incrementBtn.addEventListener("click", function () {
        let quantity = parseInt(quantitySpan.textContent);
        quantitySpan.textContent = quantity + 1;
        updateTotalPrice();
      });
  
      decrementBtn.addEventListener("click", function () {
        let quantity = parseInt(quantitySpan.textContent);
        if (quantity > 0) {
          quantitySpan.textContent = quantity - 1;
          updateTotalPrice();
        }
      });
    });
  
    // Delete items from cart
    products.forEach(product => {
      const deleteBtn = product.querySelector(".fa-trash-alt");
      deleteBtn.addEventListener("click", function () {
        product.remove();
        updateTotalPrice();
      });
    });
  
    // Like items
    products.forEach(product => {
      const likeBtn = product.querySelector(".fa-heart");
      likeBtn.addEventListener("click", function () {
        likeBtn.classList.toggle("liked");
      });
    });
  });
  