function createBookCard(book, container) {
  const { title, authors, imageLinks } = book.volumeInfo;
  const bookId = book.id;
  const thumbnail = imageLinks?.thumbnail || "images/cover.jpeg"; // Fallback image

  // Create the card container
  const card = document.createElement("div");
  card.classList.add("card");

  // Preload the image
  const img = new Image();
  img.src = thumbnail;
  img.alt = title;
  img.onclick = () => window.location.href = `details.html?id=${bookId}`;
  img.onload = () => {
    // Only append the card to the container once the image is fully loaded
    card.appendChild(img);

    // Create the content section
    const content = document.createElement("div");
    content.classList.add("content");
    content.innerHTML = `
          <h3>${title}</h3>
          <p>Author: ${authors ? authors.join(", ") : "Unknown"}</p>
          <p>Price: $99</p>
          <div class="buttons">
              <button class="card-btn cart-btn" onclick="addToCart('${bookId}','${title}')">Add to cart</button>
          </div>
      `;
    
    // Append the content to the card
    card.appendChild(content);

    // Append the card to the container
    container.appendChild(card);
  };

  img.onerror = () => {
    img.src = "images/cover.jpeg"; // Fallback image in case of error
    card.appendChild(img);

    const content = document.createElement("div");
    content.classList.add("content");
    content.innerHTML = `
          <h3>${title}</h3>
          <p>Author: ${authors ? authors.join(", ") : "Unknown"}</p>
          <p>Price: $99</p>
          <div class="buttons">
              <button class="card-btn cart-btn" onclick="addToCart('${bookId}','${title}')">Add to cart</button>
          </div>
      `;
    card.appendChild(content);
    container.appendChild(card);
  };
}
