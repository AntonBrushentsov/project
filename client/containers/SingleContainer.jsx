import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Single from '../components/Single';
import { bindActionCreators } from 'redux';

import changeLikes from '../actions/changeLikes';

const SingleContainer = ({ data, changeLikes }) => (
    <Single  data={ data } changeLikes={ changeLikes }/>
);    

//data.map( (item, index) => <Route path = {`/Genres/:type/${item.id}`} render = { route => <Single { ...{item, route} }/> } key = { index } /> )

const mapStateToProps = (state, { match })=> ({
    data: state.listReducer.filter(item => match.path.includes(item.id)),
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        changeLikes        
    }, dispatch);
};


SingleContainer.propTypes = {
    data: PropTypes.array.isRequired,
    changeLikes: PropTypes.func.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleContainer));