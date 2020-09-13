import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Spinner, ErrorIndicator, Tickets } from '@components';
import { fetchTickets } from '../redux/actions';
import { sortBy, filterByTransitions } from '../utils';

const TicketsContainer = ({ tickets, error, loading, fetchTickets }) => {

    const [shownTickets, setShownTickets] = useState(5);
    useEffect(() => {
        fetchTickets();
    }, []);

    const showMoreTickets = () => {
        const shownNumber = shownTickets;
        setShownTickets(shownNumber + 5);
    };

    if (loading) return <Spinner/>
    if (error) return <ErrorIndicator/>
    return <Tickets tickets={tickets.slice(0, shownTickets)} shownTickets={shownTickets} showMoreTickets={showMoreTickets} />
};

const mapStateToProps = ({ tickets, error, loading, filterBy, transitions }) => ({
    tickets: sortBy(filterByTransitions(tickets, transitions), filterBy),
    error,
    loading,
    filterBy
});

const mapDispatchToProps = (dispatch) => ({
    fetchTickets: fetchTickets(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketsContainer);
