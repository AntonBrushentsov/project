import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Authorized from './Authorized';
import Unauthorized from './Unauthorized';

import '../Styles/Single.css';

class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    componentDidMount() {
        const { data }  = this.props;
        axios.post('/data', data[0].id).then(res => this.setState({ text: res.data })).catch(error => console.log(error));
    }

    render() {
        console.log(this.props);
        const { data, changeLikes } = this.props;
        const { text } = this.state;
        console.log('WERTY: ', this.props);
        return(
            <div className='single'>
                <p className='single__text'>{ data[0].author }</p>
                <p className='single__text'>{ data[0].title } ({ data[0].year })</p>
                <div className='single__content'>
                    <img src={ data[0].image } alt='image' className='content__image' />
                    <div className = 'content__data'>{ text === '' ? 'Loading...': text }</div>
                </div>
                { localStorage.jwtToken ? <Authorized id={ data[0].id } likes={ data[0].likes } comments={ data[0].comments } changeLikes={ changeLikes }/> : <Unauthorized /> }   
            </div>
        );
    }
}

Single.propTypes = {
    data: PropTypes.array.isRequired,
    changeLikes: PropTypes.func.isRequired
};

export default Single;