import React, { useEffect, useState } from 'react';
import { LOCALSTORE_TOTALITEMS } from '../../constant/constants';

const BasketComponent = ({ totalItems }) => {
    const [localItems, setLocalItems] = useState([]);

    useEffect(() => {
        const getLocalStore = () => {
            let cardsLocal = window.localStorage.getItem(LOCALSTORE_TOTALITEMS);
            cardsLocal = cardsLocal ? JSON.parse(cardsLocal) : [];
            setLocalItems(cardsLocal);
        };

        getLocalStore();
    }, [totalItems]);

    const renderItems = () => {
        if (localItems.length === 0) {
            return <div>No selected items</div>;
        }

        return localItems.map(item => (
            <div key={item.id}>
                {item.title}
            </div>
        ));
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h2>Selected items list</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6">
                    {renderItems()}
                </div>
            </div>
        </div>
    );
};

export default BasketComponent;
