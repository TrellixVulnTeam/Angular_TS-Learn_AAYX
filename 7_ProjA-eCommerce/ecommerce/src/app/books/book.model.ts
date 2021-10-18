export interface Book {
    title: string;
    author: string;
    pages: string;
    genre: string[];
    publisher: string;
    language: string;
    isbn: string;
    price: number;
    stock: number;
    img: string;
    promo?: boolean;
}

export const books: Book[] = [
    {
        "title": "Cappuccetto Rosso",
        "author": "Carlo Collodi",
        "pages": "211",
        "genre": [
            "Education",
            "Kids"
        ],
        "publisher": "Ape Junior",
        "language": "Italiano",
        "isbn": "8861888496",
        "price": 18.99,
        "stock": 23,
        "img": "https://images-na.ssl-images-amazon.com/images/I/51%2Bd-J%2BKWPL._SX358_BO1,204,203,200_.jpg"
    },
    {
        "title": "Zanna Bianca",
        "author": "Jack London",
        "pages": "122",
        "genre": [
            "Education",
            "Kids"
        ],
        "publisher": "Crescere Editore",
        "language": "Italiano",
        "isbn": "8883371631",
        "price": 13.99,
        "stock": 3,
        "promo": true,
        "img": "https://images-na.ssl-images-amazon.com/images/I/51obzWUj10L._SX337_BO1,204,203,200_.jpg"
    },
    {
        "title": "Il pendolo di Foucault",
        "author": "Umberto Eco",
        "pages": "188",
        "genre": [
            "Classic",
            "Thriller"
        ],
        "publisher": "Bompiani",
        "language": "Italiano",
        "isbn": "8845278662",
        "price": 21.99,
        "stock": 4,
        "promo": true,
        "img": "https://images-na.ssl-images-amazon.com/images/I/41Af1dQe7aL._SX360_BO1,204,203,200_.jpg"
    },
    {
        "title": "50 shades of gray",
        "author": "E. L. James",
        "pages": "540",
        "genre": [
            "Adult"
        ],
        "publisher": "Mondadori",
        "language": "Italiano",
        "isbn": "8804648899",
        "price": 22.99,
        "stock": 54,
        "img": "https://images-na.ssl-images-amazon.com/images/I/51pk-FoStKL._SX334_BO1,204,203,200_.jpg"
    },
    {
        "title": "Alice in wonderland",
        "author": "Lewis Carroll",
        "pages": "78",
        "genre": [
            "Education",
            "Kids"
        ],
        "publisher": "Usborne Publishing",
        "language": "Inglese",
        "isbn": "074606781X",
        "price": 9.99,
        "stock": 12,
        "promo": true,
        "img": "https://images-na.ssl-images-amazon.com/images/I/51yiD5YANfL._SX334_BO1,204,203,200_.jpg"
    },
    {
        "title": "Il signore degli Anelli",
        "author": "J.R.R. Tolkien",
        "pages": "890",
        "genre": [
            "Kids"
        ],
        "publisher": "Bompiani",
        "language": "Italiano",
        "isbn": "AKJ231234KJG",
        "price": 19.99,
        "stock": 11,
        "promo": false,
        "img": "https://images-na.ssl-images-amazon.com/images/I/41y52a%2B9h3L._SX361_BO1,204,203,200_.jpg"
    },
    {
        "title": "Il gabbiano Jonathan Livingston",
        "author": "Richard Bach",
        "pages": "110",
        "genre": [
            "Kids"
        ],
        "publisher": "Munson",
        "language": "Italiano",
        "isbn": "MBN231KJ23",
        "price": 8.99,
        "stock": 43,
        "promo": false,
        "img": "https://images-na.ssl-images-amazon.com/images/I/41Or-9HB4ML._SX304_BO1,204,203,200_.jpg"
    },
    {
        "title": "Racconti del terrore",
        "author": "Edgar Allan Poe",
        "pages": "220",
        "genre": [
            "Horror"
        ],
        "publisher": "Mondadori",
        "language": "Italiano",
        "isbn": "KBJIU2312HJ",
        "price": 13.99,
        "stock": 57,
        "promo": false,
        "img": "https://images-na.ssl-images-amazon.com/images/I/41PibJTD8IL._SX320_BO1,204,203,200_.jpg"
    }
];
