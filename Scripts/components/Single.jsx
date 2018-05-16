import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Login from './Login';
import Unlogin from './Unlogin';

import '../../Styles/Single.css';

class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            login: true
        };
    }
    componentDidMount() {
        const {item : { id } }  = this.props;
        axios.post('/id', id).catch(error => console.log(error));
        axios.get('/data').then(res => this.setState({ data: res.data })).catch(error => console.log(error));
    }

    render() {
        const { item: { image, author, title, year, likes } } = this.props;
        const { data, login } = this.state;
        return(
            <div className = 'single' >
                <p>{ author }</p>
                <p>{ title } ({ year })</p>
                <div className = 'single-content' >
                    <img src = { image } alt = 'image' className = 'single-image' />
                    <div className = 'single-description'>{ data === '' ? 'Loading...': data }</div>
                </div>
                { login === true ? <Login likes = { likes }/> : <Unlogin /> }
            </div>
        );
    }
}

Single.propTypes = {
    item: PropTypes.object.isRequired
};

export default Single;