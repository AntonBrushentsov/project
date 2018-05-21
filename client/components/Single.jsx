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
            data: '',
            login: true
        };
    }

    componentDidMount() {
        const { 0: { id } }  = this.props;
        axios.post('/data', id).then(res => this.setState({ data: res.data })).catch(error => console.log(error));
    }

    render() {
        const { 0: { image, author, title, year, likes } } = this.props;
        const { data, login } = this.state;
        return(
            <div className = 'single' >
                <p>{ author }</p>
                <p>{ title } ({ year })</p>
                <div className = 'single-content' >
                    <img src = { image } alt = 'image' className = 'single-image' />
                    <div className = 'single-description'>{ data === '' ? 'Loading...': data }</div>
                </div>
                { login === true ? <Authorized likes = { likes }/> : <Unauthorized /> }   
            </div>
        );
    }
}

Single.propTypes = {
    0: PropTypes.object.isRequired
};

export default Single;