import React from 'react';
import { connect } from 'react-redux';
import { setTransitions } from '../redux/actions';
import { Filter } from '@components';

const FilterContainer = ({ transitions, setTransitions }) => {
    
    const onToggle = (name) => {
        if (name === 'all') {
            if (transitions.all) {
                setTransitions({
                    all: false,
                    straight: false,
                    oneTransition: false,
                    twoTransition: false,
                    threeTransition: false,
                });
            } else {
                setTransitions({
                    all: true,
                    straight: true,
                    oneTransition: true,
                    twoTransition: true,
                    threeTransition: true,
                });
            }
        } else {
            setTransitions({
                ...transitions,
                [name]: !transitions[name]
            });
        }
    };
    
    return <Filter transitions={transitions} onToggle={onToggle} />
};

const mapStateToProps = ({ transitions }) => ({
    transitions
});

const mapDispatchToProps = (dispatch) => ({
    setTransitions: (transitions) => dispatch(setTransitions(transitions))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer)
