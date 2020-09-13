import React from 'react';
import { connect } from 'react-redux';
import { Tabs } from '@components';
import { setFilterBy } from '../redux/actions';

const TabsContainer = ({ filterBy, setFilterBy }) => {
    return <Tabs setFilter={setFilterBy} filterBy={filterBy}/>
};

const mapStateToProps = ({ filterBy }) =>({
    filterBy
});

const mapDispatchToProps = (dispatch) =>({
    setFilterBy: (filter) => dispatch(setFilterBy(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(TabsContainer);
