import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../Styles/Data.css';

class Authorized extends Component {
    constructor() {
        super();
        this.changeLikes = () => {
            this.props.changeLikes('yhtrdsfs', 'pasha');
        };
    }

    render() {
        const { likes, comments } = this.props;
        console.log('PROPS: ', comments);
        const { changeLikes} = this;
        return (
            <div className='data'>
                <div className='data__likes'>
                    <span className='likes__text'>{ likes } пользователь(ей) оценили картину</span>
                    <button className='likes__button' onClick={ changeLikes }>Оценить</button>
                </div>
                <div className='data__comments'>
                    {comments.map((item, index) => (
                        <div key={ index } className='comments__block'>
                            <span className='comments__name'>{ item.name }: </span>
                            <span className='comments__comment'>{ item.comment }</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

Authorized.propTypes = {
    likes: PropTypes.number.isRequired,
    changeLikes: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired 

};


export default Authorized;