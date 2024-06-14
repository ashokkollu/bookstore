
const books = [
    { id: 'poetry', title: 'Leaves of Grass', author: 'Walt Whitman', price: 224, image: 'images/leaves_of_grass.jpg',link:'https://simple.wikipedia.org/wiki/Leaves_of_Grass' },
    { id: 'poetry', title: 'When You Ask Me Where Im Going', author: 'Jasmin Kaur', price: 760, image: 'images/when_you_ask_me_where_im_going.jpg' ,link:'https://www.goodreads.com/book/show/43453732-when-you-ask-me-where-i-m-going'},
    { id: 'poetry', title: 'The Art of Letting Go', author: 'Sanhita Baruah', price: 300, image: 'images/the_art_of_letting_go.jpg',link:'https://www.goodreads.com/book/show/43179703-the-art-of-letting-go' },
    { id: 'poetry', title: 'Shakespeares Sonnets', author: 'William Shakespeare', price: 294, image: 'images/shakespeares_sonnets.jpg',link:'https://en.wikipedia.org/wiki/Shakespeare%27s_sonnets' },
    { id: 'poetry', title: 'The Wilderness', author: 'Sandra Lim', price: 888, image: 'images/the_wilderness.jpg' ,link:'https://www.goodreads.com/en/book/show/20663737'},
    { id: 'poetry', title: 'If Not, Winter: Fragments of Sappho', author: 'Anne Carson', price: 1406, image: 'images/if_not_winter_fragments.jpg' ,link:'https://www.goodreads.com/book/show/150253.If_Not_Winter'},

    { id: 'romance', title: 'The Notebook', author: 'Nicolas Sparks', price: 800, image: 'images/notebook.jpg' ,link:'https://www.goodreads.com/book/show/33648131-the-notebook'},
    { id: 'romance', title: 'It Ends With Us', author: 'Colleen Hoover', price: 259, image: 'images/it_ends_with_us.jpeg' ,link:'https://www.goodreads.com/book/show/27362503-it-ends-with-us'},
    { id: 'romance', title: 'It Starts With Us', author: 'Colleen Hoover', price: 259, image: 'images/it_starts_with_us.jpg' ,link:'https://www.goodreads.com/book/show/60393672-it-starts-with-us'},
    { id: 'romance', title: 'Call Me By Your Name', author: 'André Aciman', price: 278, image: 'images/call_me_by_your_name.jpg' ,link:'https://www.goodreads.com/book/show/36336078-call-me-by-your-name'},
    { id: 'romance', title: 'People We Meet On Vacation', author: 'Emily Henry', price: 320, image: 'images/people_we_meet_on_vacation.jpg' ,link:'https://www.goodreads.com/book/show/54985743-people-we-meet-on-vacation'},
    { id: 'romance', title: 'Twisted Love', author: 'Ana Huang', price: 156, image: 'images/twisted_love.jpg',link:'https://www.goodreads.com/book/show/55817097-twisted-love' },

    { id: 'fiction', title: 'The Great Gatsby', author: 'F. Scott-Fitzgerald', price: 1200, image: 'images/The_Great_Gatsby.jpg',link:'https://www.goodreads.com/book/show/4671.The_Great_Gatsby' },
    { id: 'fiction', title: 'Nineteen Eighty-Four', author: 'George Orwell', price:400 , image: 'images/1984.jpg' ,link:'https://www.goodreads.com/book/show/61439040-1984'},
    { id: 'fiction', title: 'The Alchemist', author: 'Paulo Coelho', price: 335, image: 'images/the_alchemist.jpg' ,link:'https://www.goodreads.com/book/show/18144590-the-alchemist'},
    { id: 'fiction', title: 'The Bell Jar', author: 'Sylvia Plath', price:600 , image: 'images/the_bell_jar.jpg' ,link:'https://www.goodreads.com/book/show/6514.The_Bell_Jar'},
    { id: 'fiction', title: 'The Book Theif', author: 'Markus Zusak', price: 374, image: 'images/the_book_theif.jpg' ,link:'https://www.goodreads.com/book/show/19063.The_Book_Thief'},
    { id: 'fiction', title: 'The Kite Runner', author: 'Khaled Hosseini', price: 170 , image: 'images/Kite_runner.jpg' ,link:'https://www.goodreads.com/book/show/77203.The_Kite_Runner'},
    
    { id: 'mystery', title: 'Every Time I Go On Vacation Someone Dies', author: 'Catherine Mack', price: 1443, image: 'images/every_time_i_go_on_vacation_someone_dies.jpg' ,link:'https://www.goodreads.com/book/show/195790849-every-time-i-go-on-vacation-someone-dies'},
    { id: 'mystery', title: 'Perfect Murder', author: 'Ruskin Bond', price: 200, image: 'images/perfect_murder.jpg' ,link:'https://www.goodreads.com/en/book/show/33864118-the-perfect-murder'},
    { id: 'mystery', title: 'The Davinci Code', author: 'Dan Brown', price: 449, image: 'images/the_davinci_code.jpg',link:'https://www.goodreads.com/book/show/968.The_Da_Vinci_Code' },
    { id: 'mystery', title: 'None of This Is True', author: 'Lisa Jewell', price: 321, image: 'images/none_of_this_is_true.jpg' ,link:'https://www.goodreads.com/book/show/62334530-none-of-this-is-true'},
    { id: 'mystery', title: 'Granite Harbor', author: 'Peter Nichols', price: 1901, image: 'images/granite_harbour.jpg' ,link:'https://www.goodreads.com/book/show/150260819-granite-harbor'},
    { id: 'mystery', title: 'The One That Got Away with Murder', author: 'Trish Lundy', price: 1444, image: 'images/the_one_that_got_away_with_murder.jpg' ,link:'https://www.goodreads.com/book/show/122765706-the-one-that-got-away-with-murder'},
    
];
document.addEventListener('DOMContentLoaded', () => {
    const booksSection = document.getElementById('books-section');
    const categories = {};

    books.forEach(book => {
        if (!categories[book.id]) {
            categories[book.id] = [];
        }
        categories[book.id].push(book);
    });

    Object.keys(categories).forEach(category => {
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'category-container';

        const categoryTitle = document.createElement('h2');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
        categoryContainer.appendChild(categoryTitle);

        const bookContainer = document.createElement('div');
        bookContainer.className = 'book-container';

        categories[category].forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.className = 'book';
            bookElement.id = `book-${book.title.replace(/\s+/g, '-').toLowerCase()}`;
            bookElement.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Price: Rs.${book.price.toFixed(2)}/-</p>
                <p><a href="${book.link}" target="_blank">Know More</a></p>
            `;
            bookContainer.appendChild(bookElement);
        });

        categoryContainer.appendChild(bookContainer);
        booksSection.appendChild(categoryContainer);
    });

    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');
    const searchResultModal = document.getElementById('search-result');
    const searchResultMessage = document.getElementById('search-result-message');
    const closeButtons = document.querySelectorAll('.close-button');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchBar.value.toLowerCase();
        const foundBook = books.find(book => book.title.toLowerCase() === searchTerm);

        if (foundBook) {
            searchResultMessage.textContent = `The book "${foundBook.title}" by ${foundBook.author} is available for Rs.${foundBook.price.toFixed(2)}/-.`;
            document.getElementById(`book-${foundBook.title.replace(/\s+/g, '-').toLowerCase()}`).scrollIntoView({ behavior: 'smooth' });
        } else {
            searchResultMessage.textContent = 'The book you searched for is not available.';
        }

        searchResultModal.style.display = 'flex';
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });

    let lastScrollTop = 0;
    const nav = document.querySelector('nav');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            nav.style.top = '-60px'; 
        } else {
            nav.style.top = '0';
        }
        lastScrollTop = scrollTop;
    });
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const name = contactForm.elements['name'].value;
        const email = contactForm.elements['email'].value;
        const message = contactForm.elements['message'].value;

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        contactForm.reset();

        alert('Message sent successfully!');
    });
});
