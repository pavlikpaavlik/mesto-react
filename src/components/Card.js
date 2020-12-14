import React from 'react';

function Card(props) {
    const cardData = props.cardData;
    function handleClick() {
        props.onCardClick(cardData);
      } 

    return(
        <li className="grid-element">
            <img src = {cardData.link} alt={cardData.name} className="grid-element__photo" onClick={handleClick} />
            <div className="grid-element__info">
                <h3 className="grid-element__title">{cardData.name}</h3>
                    <div className="grid-element__like">
                        <button type="button" className="grid-element__like-button"></button>
                        <span className="grid-element__like-counter">{cardData.likes.length}</span>
                    </div>
                    <div className="grid-element__trash"></div>
            </div>
        </li>
    ) 
}

export default Card;