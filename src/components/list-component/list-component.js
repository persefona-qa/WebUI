import React, { useState } from 'react';
import ShopCard from "../shop-card/ShopCard";



const ListComponents = () => {
    const books = [
        { id: 1, title: "Stephen King", description: "Shining", image: "stephenKingImage.jpg", price: 100, added: 0 },
        { id: 2, title: "J.K Rowling", description: "Harry Potter and Half-Blood Prince", image: "jkRowlingImage.jpg", price: 120, added: 0 },
        { id: 3, title: "Tess Gerritsen", description: "The Surgeon", image: "tessGerritsenImage.jpg", price: 90, added: 0 },
        { id: 4, title: "George R.R. Martin", description: "A Game of Thrones", image: "georgeRRMartinImage.jpg", price: 150, added: 0 },
        { id: 5, title: "George R.R. Martin", description: "A Clash of Kings", image: "clashOfKingsImage.jpg", price: 140, added: 0 },
        { id: 6, title: "Charlotte Brontë", description: "Jane Eyre", image: "janeEyreImage.jpg", price: 80, added: 0 }
    ];

    const [totalItems, setTotalItems] = useState([]);

    const totalPriceClick = (item) => {
        console.log("totalPriceClick", books);
        books.forEach((itemF, indexF) => {
            if (itemF.id === item.id) {
                books[indexF].added++;
            }
        });
        setTotalItems([...totalItems, item]);
    };

    const removeItem = (item) => {
        console.log("removeItem", item);
    };

    return (
        <main>
            <section className="container my-5">
                <div className="row">
                    <div className="col-6 col-sm-5 col-md-4 col-xl-3">
                        <h3>Bought on {totalItems.reduce((acc, item) => acc + item.price, 0)} UAH.</h3>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    {books.map(item => (
                        <ShopCard
                            card={item}
                            key={item.id}
                            getItem={totalPriceClick}
                            removeItem={removeItem}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ListComponents;
