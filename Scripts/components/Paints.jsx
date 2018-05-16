import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../../Styles/PaintGrid.css';

const Paints = ({ item: { id, title, author, image }, match }) => (
    <div className = 'paintGrid'>
        <img src = {image} alt = 'image' className = 'paintGrid-image' />
        <div className = 'paintGrid-text' >{title}</div>
        <div className = 'paintGrid-text'>{author}</div>
        <Link to = {`${match.url}/${id}`} className = 'paintGrid-link' >
            <button  className = 'paintGrid-button'>Подробнее</button>
        </Link>
    </div>
);

Paints.propTypes = {
    item: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
};

export default Paints;