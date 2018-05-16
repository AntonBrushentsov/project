import React from 'react';
import PropTypes from 'prop-types';

import PaintsContainer from '../containers/PaintsContainer';

import '../../Styles/Genres.css';

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
    match: PropTypes.object
};

export default Genres;



/*const Genres = ({ route: { match } , data }) => (
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
);*/




