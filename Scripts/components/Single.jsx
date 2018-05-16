import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Login from './Login';
import Unlogin from './Unlogin';

import '../../Styles/Single.css';

const xhrFirst = new XMLHttpRequest();
const xhrSecond = new XMLHttpRequest();

class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            login: true
        };
    }

    componentDidMount() {
        const {item : { id } } = this.props;
        xhrFirst.open('POST', '/id', true);
        xhrFirst.send(id);
        xhrSecond.open('GET', '/data', true);   
        xhrSecond.send();
        xhrSecond.onload = () => {
            if( xhrSecond.readyState === 4 && xhrSecond.status === 200 ) {
                const data = xhrSecond.responseText;
                this.setState({ data: data });
            } else {
                console.error('OOPS :(', xhrSecond.statusText);
            }
        };
    }

    componentWillUnmount() {
        xhrFirst.abort();
        xhrSecond.abort();
    }

    render() {
        const { item: { image, author, title, year, likes } } = this.props;
        console.log('LIKES: ', likes);
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