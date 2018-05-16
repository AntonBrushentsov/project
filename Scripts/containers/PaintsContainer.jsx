import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Paints from '../components/Paints';

import '../../Styles/Genres.css';

const PaintsContainer = ({ data, match }) => (
    <div className = 'content-filmGrid' >
        {data.filter( item => item.genre === match.params.type )
            .map( (item, index) => <Paints key = { index } { ...{item, match} }/>)}
    </div>
);    

const mapStateToProps = (state, { match }) => ({
    data: state.listReducer,
    match
});

PaintsContainer.propTypes = {
    data: PropTypes.array.isRequired,
    match: PropTypes.object.isRequired 
};

export default withRouter(connect(mapStateToProps)(PaintsContainer));