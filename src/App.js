

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from "./components/menu/Menu";
import ShopCard from "./components/shop-card/ShopCard";


// Importing images from assets directory
import stephenKingImage from './assets/1.png';
import jkRowlingImage from './assets/2.png';
import tessGerritsenImage from './assets/3.png';
import georgeRRMartinImage from './assets/4.png';
import clashOfKingsImage from './assets/5.png';
import janeEyreImage from './assets/6.png';

function App() {
    const [selectedCard, setSelectedCard] = useState(null);

    const books = [
        { id: 1, title: "Stephen King", description: "Shining", image: stephenKingImage },
        { id: 2, title: "J.K Rowling", description: "Harry Potter and Half-Blood Prince", image: jkRowlingImage },
        { id: 3, title: "Tess Gerritsen", description: "The Surgeon", image: tessGerritsenImage },
        { id: 4, title: "George R.R. Martin", description: "A Game of Thrones", image: georgeRRMartinImage },
        { id: 5, title: "George R.R. Martin", description: "A Clash of Kings", image: clashOfKingsImage },
        { id: 6, title: "Charlotte Brontë", description: "Jane Eyre", image: janeEyreImage }
    ];

    const handleCardClick = (id) => {
        setSelectedCard(id);
    };

    return (
        <div className="App">
            <h1><i>Welcome to the Book Land!</i></h1>
            <section className="app">
                <header className="app-header">
                    <Menu />
                </header>

        </section>
 );

            <section className="container">
                <div className="row">
                    {books.map(book => (
                        <div key={book.id} className="col-12 col-lg-3">
                            <ShopCard
                                card={book}
                                isSelected={selectedCard === book.id}
                                onClick={() => handleCardClick(book.id)}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default App;

