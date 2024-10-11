function updateCart() {
  let checkboxes = document.querySelectorAll(".product-checkbox");
  let total = 0;

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      total += parseFloat(checkbox.parentElement.getAttribute("data-price"));
    }
  });
  document.getElementById("cart-total").innerText = total.toFixed(2);
}
