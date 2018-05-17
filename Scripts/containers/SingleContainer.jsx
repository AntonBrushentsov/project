import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Single from '../components/Single';


const SingleContainer = ({ data }) => (
    <Single  {...data } />
);    

//data.map( (item, index) => <Route path = {`/Genres/:type/${item.id}`} render = { route => <Single { ...{item, route} }/> } key = { index } /> )

const mapStateToProps = (state, { match })=> ({
    data: state.listReducer.filter(item => match.path.includes(item.id)),
});

SingleContainer.propTypes = {
    data: PropTypes.array.isRequired,
};

export default withRouter(connect(mapStateToProps)(SingleContainer));