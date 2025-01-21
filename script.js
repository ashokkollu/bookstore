//search function

function SearchBook() {
  const query = document.getElementById("SearchInput").value;
  if (query) {
    window.location.href = `results.html?query=${encodeURIComponent(query)}`;
  }
}

 // Event listener for Enter key in the search input
 document.getElementById('SearchInput').addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
      SearchBook();
  }
});


function addToCart(bookId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  if (!cart.includes(bookId)) {
      cart.push(bookId);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert("Book added to cart!");
  } else {
      alert("Book is already in the cart.");
  }

  // Update cart count in navbar
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.getElementById('cartCount').textContent = cart.length;
}

// Update cart count on page load
updateCartCount();

