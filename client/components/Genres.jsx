import React from 'react';
import PropTypes from 'prop-types';

import PaintsContainer from '../containers/PaintsContainer';

import '../Styles/Genres.css';

const Genres = ({ match }) => (
    <div className = 'content'>
        <h3>На этой странице вас будет информация о таком жанре живописи как {match.url}</h3>
        <div className = 'content-description' >
             Вот тут по идее будет немного инфы о самом жанре   
        </div>
        <PaintsContainer />
    </div>
);

Genres.propTypes = {
    match: PropTypes.object.isRequired
};

export default Genres;




