import AviasalesService from "../../services"
const aviasalesAPI = new AviasalesService();

const ticketsLoaded = (tickets) => ({
    type: 'FETCH_TICKETS_SUCCESS',
    payload: tickets
});

const ticketsRequested = () => ({
    type: 'FETCH_TICKETS_REQUEST',
});

const ticketsError = (error) => ({
    type: 'FETCH_TICKETS_FAILED',
    payload: error
});

const setTransitions = (transitions) => ({
    type: 'SET_TRANSITIONS_FILTER',
    payload: transitions
});

const setFilterBy = (filterBy) => ({
    type: 'SET_FILTER_BY',
    payload: filterBy
});

const fetchTickets = (dispatch) => () => {
    dispatch(ticketsRequested());
    aviasalesAPI.getData()
        .then((data) => dispatch(ticketsLoaded(data)))
        .catch((error) => dispatch(ticketsError(error)));
    
};

export {
    fetchTickets,
    setTransitions,
    setFilterBy,
}