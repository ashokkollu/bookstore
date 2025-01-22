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


function addToCart(bookId,title) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const popup = document.getElementById('AddPopup');
  const popupMessage = document.getElementById('popup-message');
 
  if (!cart.includes(bookId)) {
      cart.push(bookId);
      localStorage.setItem('cart', JSON.stringify(cart));
      popupMessage.textContent = `"${title}" is added to your cart.`;
  } else {
    popupMessage.textContent = `"${title}" already exists in your cart.`;
  }
// Show the popup
popup.style.display = 'flex';

// Close the popup after 3 seconds
setTimeout(function () {
    popup.style.display = 'none';
}, 3000);
  // Update cart count in navbar
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.getElementById('cartCount').textContent = cart.length;
}

// Update cart count on page load
updateCartCount();

