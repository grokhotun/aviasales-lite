import { orderBy } from 'lodash';

const sortBy = (items, type) => {
    switch (type) {
        case 'fast':
            return orderBy(items, 'totalDuration', 'asc');
        case 'cheap':
            return orderBy(items, 'price', 'asc');
        default:
            return items;
    }
};

const filterByTransitions = (tickets, transitions) => {
    return tickets.filter((ticket) => 
        transitions.all ||
        transitions.straight && ticket.totalTransitions === 0 ||
        transitions.oneTransition && ticket.totalTransitions === 1 ||
        transitions.twoTransition && ticket.totalTransitions === 2 ||
        transitions.threeTransition && ticket.totalTransitions === 3
    );
};

export {
    sortBy,
    filterByTransitions
}
