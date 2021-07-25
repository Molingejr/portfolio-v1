import React from 'react';

const Card = (props) => {
    const cardData = props.data;

    return (
        <div className="card" style={{ backgroundColor: `${cardData.color}` }}>
            <div className="card__head">
                <div className="card__heading">{cardData.heading}</div>
                <div className="card__summary">{cardData.summary.summary}</div>
            </div>
            
            {cardData.items && <div className="card__foot">
                    <ul className="card__items">
                        {cardData.items.map(item => (
                            <li className="card__items--item">{item}</li>
                        ))}
                    </ul>
                    <a href={cardData.url} className="btn-red card__btn" target="_blank">See more</a>
                </div>
            }
            
        </div>
    )
}

export default Card;