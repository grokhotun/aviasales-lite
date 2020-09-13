import React from 'react';

import './TicketCard.scss';

const TicketCard = ({ ticket }) => {

    const { 
        carrier, 
        price, 
        to, 
        from  
    } = ticket;

    return (
        <div className="ticket-card">
            <div className="ticket-card__header">
                <div className="ticket-card__price">
                    {`${price} р.`}
                </div>
                <div className="ticket-card__logo">
                    <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="Лого авиакомпании" />
                </div>
            </div>
            <div className="ticket-card__body">
                <div className="ticket-card__row row-ticket-card">
                    <div className="row-ticket-card__col">
                        <div className="row-ticket-card__name">{to.direction}</div>
                        <div className="row-ticket-card__value">{to.timeInterval}</div>
                    </div>
                    <div className="row-ticket-card__col">
                        <div className="row-ticket-card__name">В ПУТИ</div>
                        <div className="row-ticket-card__value">{to.duration}</div>
                    </div>
                    <div className="row-ticket-card__col">
                        <div className="row-ticket-card__name">
                        {
                            to.stops.length === 0 
                            ? 'прямой'
                            : to.stops.length > 1 
                            ? `${to.stops.length} пересадки` 
                            : `${to.stops.length} пересадка`
                        }
                        </div>
                        <div className="row-ticket-card__value">
                            {
                                to.stops.length === 0 ? ' ' 
                                : to.stops.map((e, index) => index >= 1 ? `, ${e}` : e)
                            }
                        </div>
                    </div>
                </div>
                <div className="ticket-card__row row-ticket-card">
                    <div className="row-ticket-card__col">
                        <div className="row-ticket-card__name">{from.direction}</div>
                        <div className="row-ticket-card__value">{from.timeInterval}</div>
                    </div>
                    <div className="row-ticket-card__col">
                        <div className="row-ticket-card__name">В ПУТИ</div>
                        <div className="row-ticket-card__value">{from.duration}</div>
                    </div>
                    <div className="row-ticket-card__col">
                        <div className="row-ticket-card__name">
                        {
                            from.stops.length === 0 
                            ? 'прямой'
                            : from.stops.length > 1 
                            ? `${from.stops.length} пересадки` 
                            : `${from.stops.length} пересадка`
                        }
                        </div>
                        <div className="row-ticket-card__value">
                            {
                                from.stops.length === 0 ? ' ' 
                                : from.stops.map((e, index) => index >= 1 ? ', ' + e : e)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketCard;
