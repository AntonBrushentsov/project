import React from 'react';
import PropTypes from 'prop-types';

import PaintsContainer from '../containers/PaintsContainer';

import '../Styles/Genres.css';

const Genres = ({ match }) => (
    <React.Fragment>
        <h3>На этой странице вас будет информация о таком жанре живописи как {match.url}</h3>
        <div className='description'>Вот тут по идее будет немного инфы о самом жанре</div>
        <PaintsContainer />
    </React.Fragment>
);

Genres.propTypes = {
    match: PropTypes.object.isRequired
};

export default Genres;




