import React from 'react';
import PropTypes from 'prop-types';

import PaintGrid from './PaintGrid';

import '../../Styles/Genres.css';

const Genres = ({ route: { match } , data }) => (
    <div className = 'content'>
        <h3>На этой странице вас будет информация о таком жанре живописи как {match.params.type}</h3>
        <div className = 'content-description' >
             Вот тут по идее будет немного инфы о самом жанре   
        </div>
        <div className = 'content-filmGrid'>
            { data.filter( item => item.genre === match.params.type )
                .map( (item, index) => <PaintGrid key = { index } { ...{item, match} }/>) }
        </div>            
    </div>
);

Genres.propTypes = {
    data: PropTypes.array.isRequired,
    route: PropTypes.object.isRequired
};

export default Genres;