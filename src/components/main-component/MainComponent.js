import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopCard from 'C:/Lab4/src/components/shop-card/ShopCard.js'

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: null,
      cards: [
        { id: 1, title: "Stephen King", description: "Shining", imgSrc: "/images/image1.jpg" },
        { id: 2, title: "J.K Rowling", description: "Harry Potter and Half-Blood Prince", imgSrc: "/images/image2.jpg" },
        { id: 3, title: "George R.R. Martin", description: "A Game of Thrones", imgSrc: "/images/image3.jpg" },
        { id: 4, title: "George R.R. Martin", description: "A Clash of Kings", imgSrc: "/images/image4.jpg" },
        { id: 5, title: "Charlotte Brontë", description: "Jane Eyre", imgSrc: "/images/image5.jpg" },
        { id: 6, title: "Tess Gerritsen", description: "The Surgeon", imgSrc: "/images/image6.jpg" }
      ]
    };
  }

  handleCardClick = (id) => {
    this.setState({ selectedCard: id });
  };

  render() {
    return (
      <section className="container">
        <div className="row">
          {this.state.cards.map(card => (
            <div key={card.id} className="col-12 col-lg-4 d-flex justify-content-center align-items-center mb-4">
              <ShopCard
                card={card}
                isSelected={card.id === this.state.selectedCard}
                onClick={() => this.handleCardClick(card.id)}
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default MainComponent;
