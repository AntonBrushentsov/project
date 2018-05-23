import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

import '../Styles/Form.css'; 

class Login extends Component {
    constructor() {
        super();
        this.state = {
            login: '',
            password: '',
            loginError: '',
            passwordError: '',
            serverError: '',
        };
    
        this.changeLogin = e => {
            if (e.target.value.length != 0) {
                this.setState({ login: e.target.value, loginError: ''});
            } else {
                this.setState({ login: e.target.value, loginError: 'Необходмио указать логин'});
            }
        },

        this.changePassword = e => {
            if (e.target.value.length != 0) {
                this.setState({ password: e.target.value, passwordError: ''});
            } else {
                this.setState({ password: e.target.value, passwordError: 'Необходмио указать пароль'});
            }
        };

        this.sendData = () => {
            const { login, password } = this.state;
            axios.post('/login', { login, password })  
                .then(result => {
                    const { serverError, token } = result.data;
                    if(token) {
                        localStorage.setItem('jwtToken', token);
                    }
                    this.setState({ serverError});
                })
                .catch(error => console.log(error));
        };
        
        this.isButtonEnabled = () => {
            const { login, password, loginError, passwordError } = this.state;
            return login !== '' && password !== '' && loginError === '' && passwordError === '';
        };
    }

    render() {
        const { login, password, loginError, passwordError, serverError } = this.state;
        const { changeLogin, changePassword, sendData, isButtonEnabled } = this;
        if (localStorage.jwtToken) {
            return <Redirect to='/Profile'/>;  
        } else {
            return (
                <Fragment>
                    <div className='form' >
                        <div className='form__element'>
                            <input type='text' placeholder='login' value={ login } onChange={ changeLogin } className='form__input'/>
                            <span className='form__error'>{ loginError }</span>
                        </div>
                        <div className='form__element'>
                            <input type='password' placeholder='password' value={ password } onChange={ changePassword } className='form__input'/>
                            <span className='form__error'>{ passwordError }</span>
                        </div>
                        <button onClick={ sendData } className= { isButtonEnabled() ? 'form__button' : 'form__button form__button__disabled'} disabled={ !isButtonEnabled() }>Войти</button>
                        <div className='form__information'>
                            <div className='form__serverError'>{ serverError }</div>
                            <span className='information__text'>Нет аккаунта?</span>
                            <Link to = '/Signup' className='information__link'>
                                <button className='form__button'>Регистрация</button>
                            </Link>
                        </div>
                    </div>
                </Fragment>
            );
        }
    }
}

export default Login;
/*
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
} else {
    delete axios.defaults.headers.common['Authorization'];
}
*/