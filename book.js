function createBookCard(book, container) {
    const { title, authors, imageLinks } = book.volumeInfo;
    const bookId = book.id;
    const thumbnail = imageLinks?.thumbnail || 'https://via.placeholder.com/150'; // Fallback image

    // Create the card container
    const card = document.createElement('div');
    card.classList.add('card');

    // Create the image element
    const img = document.createElement('img');
    img.src = thumbnail;
    img.alt = title;
    img.onclick = () => window.location.href = `details.html?id=${bookId}`;

    // Create the content section
    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = `
        <h3>${title}</h3>
        <p>Author: ${authors ? authors.join(', ') : 'Unknown'}</p>
        <p>Price: $99</p>
        <div class="buttons">
            <button class="card-btn cart-btn" onclick="addToCart('${bookId}','${title}')">Add to cart</button>
        </div>
    `;

    // Append the image and content to the card
    card.appendChild(img);
    card.appendChild(content);

    // Append the card to the provided container
    container.appendChild(card);
}
