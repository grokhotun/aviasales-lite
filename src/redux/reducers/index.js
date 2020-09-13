const initialState = {
    tickets: [],
    loading: true,
    error: false,

    filterBy: 'fast',
    transitions: {
        all: true,
        straight: true,
        oneTransition: true,
        twoTransition: true,
        threeTransition: true,
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TICKETS_REQUEST':
            return {
                ...state,
                tickets: [],
                loading: true,
                error: false
            }
        case 'FETCH_TICKETS_SUCCESS':
            return {
                ...state,
                tickets: action.payload,
                loading: false,
                error: false
            }
        case 'FETCH_TICKETS_FAILED':
            return {
                ...state,
                tickets: [],
                loading: false,
                error: true
            }

        case 'SET_TRANSITIONS_FILTER': 
            return {
                ...state,
                transitions: action.payload
            }
        
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: action.payload
            }

        default:
            return state
    }
};

export default reducer