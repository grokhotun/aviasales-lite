import React from 'react';
import { TicketCard } from '@components';


const Tickets = ({ tickets, showMoreTickets, shownTickets }) => {
    return (
        <div className="tickets">
            <div className="tickets__body">
                {
                    tickets.length === 0 
                    ? <div className="tickets__not-found"><span>Не найдено билетов с даннными параметрами</span></div> 
                    :tickets.map((ticket, index) => <TicketCard key={index} ticket={ticket} />)
                }
            </div>
            <div className="tickets__footer">
                {
                    shownTickets > tickets.length 
                    ? null 
                    : (
                        <button onClick={() => showMoreTickets()} className="tickets__showmore-btn">
                            Показать ещё 5 вариантов
                        </button>
                    )
                }
            </div>
        </div>
    )
};

export default Tickets;
