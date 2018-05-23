import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

import '../Styles/Profile.css';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            login: '',
            password: ''
        };
        this.Logout = () => {
            const token = localStorage.jwtToken;
            localStorage.removeItem('jwtToken');
            axios.post('/logout', token).catch(error => console.error(error));
        };
    }
    componentDidMount() {
        axios.post('/profile', localStorage.jwtToken)
            .then(result => {
                const { login, decrypted } = result.data;
                this.setState({ login, password: decrypted });
            })
            .catch(error => console.error(error));
    }

    render() {
        const { login, password } = this.state;
        const { Logout } = this;
        if(localStorage.jwtToken){
            return (
                <div className='profile'>
                    <h3 className='profile__text'>Your login: { login }</h3>
                    <h3 className='profile__text'>Your password: { password }</h3>
                    <Link className='profile__link' to='/'>
                        <button onClick={ Logout } className='profile__button'>Выйти</button>
                    </Link>
                </div>
            );
        } else {
            return <Redirect to='/Login' />;
        } 
    }
}

export default Profile;