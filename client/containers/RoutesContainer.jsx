import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import SingleContainer from './SingleContainer';

import '../Styles/Genres.css';

const RoutesContainer = ({ data }) => (
    data.map( (item, index) => <Route path = {`/Genres/:type/${item.id}`} component = { SingleContainer } key = { index } /> )
);    

//data.map( (item, index) => <Route path = {`/Genres/:type/${item.id}`} render = { route => <Single { ...{item, route} }/> } key = { index } /> )

const mapStateToProps = state => ({
    data: state.listReducer
});

RoutesContainer.propTypes = {
    data: PropTypes.array.isRequired,
    //match: PropTypes.object.isRequired 
};

export default connect(mapStateToProps)(RoutesContainer);