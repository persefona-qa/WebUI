/*import React, { useState } from 'react';
import ShopCard from '../shop-card/ShopCard'; // Adjust the import path as per your project structure

import stephenKingImage from './assets/1.png';
import jkRowlingImage from './assets/2.png';
import tessGerritsenImage from './assets/3.png';
import georgeRRMartinImage from './assets/4.png';
import clashOfKingsImage from './assets/5.png';
import janeEyreImage from './assets/6.png'

const ListComponents = () => {
    const books = [
        { id: 1, title: "Stephen King", description: "Shining", price: 100, image: stephenKingImage, added: 0 },
        { id: 2, title: "J.K Rowling", description: "Harry Potter and Half-Blood Prince", price: 289, image: jkRowlingImage, added: 0 },
        { id: 3, title: "Tess Gerritsen", description: "The Surgeon", price: 199, image: tessGerritsenImage, added: 0 },
        { id: 4, title: "George R.R. Martin", description: "A Game of Thrones", price: 350, image: georgeRRMartinImage, added: 0 },
        { id: 5, title: "George R.R. Martin", description: "A Clash of Kings", price: 350, image: clashOfKingsImage, added: 0 },
        { id: 6, title: "Charlotte Brontë", description: "Jane Eyre", price: 200, image: janeEyreImage, added: 0 }
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
    }
    const removeItem = (item) => {
        console.log("removeItem", item);
    }

    return (
        <main>
            <section className="container my-5">
                <div className="row">
                    <div className="col-6 col-sm-5 col-md-4 col-xl-3">
                        <h3>Bought on {totalItems.reduce((acc, item) => acc + item.price, 0)} UAH</h3>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    {books.map(item => {
                        return (
                        <ShopCard
                            card={item}
                            key={item.id}
                            getItem={totalPriceClick}
                            removeItem={removeItem}
                        />
                        ) })}
                </div>
            </section>
        </main>
    );
};

export default ListComponents;
*/



// list-components.js
import React, { useState, useEffect } from 'react';
import ShopCard from '../shop-card/ShopCard';
import BasketComponent from '../basket-component/BasketComponent';
import { LOCALSTORE_TOTALITEMS } from '../../constant/constants';

import stephenKingImage from './assets/1.png';
import jkRowlingImage from './assets/2.png';
import tessGerritsenImage from './assets/3.png';
import georgeRRMartinImage from './assets/4.png';
import clashOfKingsImage from './assets/5.png';
import janeEyreImage from './assets/6.png';

const ListComponents = () => {
    const [totalItems, setTotalItems] = useState([]);

    useEffect(() => {
        const getLocalStore = () => {
            let totalItemsLocal = window.localStorage.getItem(LOCALSTORE_TOTALITEMS);
            totalItemsLocal = totalItemsLocal ? JSON.parse(totalItemsLocal) : [];
            setTotalItems(totalItemsLocal);
        };

        getLocalStore();
    }, []);

    const totalPriceClick = (item) => {
        const updatedItems = [...totalItems, item];
        setTotalItems(updatedItems);
        window.localStorage.setItem(LOCALSTORE_TOTALITEMS, JSON.stringify(updatedItems));
    };

    const removeItem = (item) => {
        const updatedItems = totalItems.filter(book => book.id !== item.id);
        setTotalItems(updatedItems);
        window.localStorage.setItem(LOCALSTORE_TOTALITEMS, JSON.stringify(updatedItems));
    };

    const books = [
        { id: 1, title: "Stephen King", description: "Shining", price: 100, image: stephenKingImage, added: 0 },
        { id: 2, title: "J.K Rowling", description: "Harry Potter and Half-Blood Prince", price: 289, image: jkRowlingImage, added: 0 },
        { id: 3, title: "Tess Gerritsen", description: "The Surgeon", price: 199, image: tessGerritsenImage, added: 0 },
        { id: 4, title: "George R.R. Martin", description: "A Game of Thrones", price: 350, image: georgeRRMartinImage, added: 0 },
        { id: 5, title: "George R.R. Martin", description: "A Clash of Kings", price: 350, image: clashOfKingsImage, added: 0 },
        { id: 6, title: "Charlotte Brontë", description: "Jane Eyre", price: 200, image: janeEyreImage, added: 0 }
    ];

    return (
        <main>
            <section className="container my-5">
                <div className="row">
                    <div className="col-6 col-sm-5 col-md-4 col-xl-3">
                        <h3>Bought for {totalItems.reduce((acc, book) => acc + book.price, 0)} UAH</h3>
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
            <section className="container">
                <div className="row">
                    <div className="col-12">
                        <BasketComponent totalItems={totalItems} />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ListComponents;
