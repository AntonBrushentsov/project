import React, { Component } from 'react';
import axios from 'axios';
import crypto from 'crypto-js';
import { Link } from 'react-router-dom';

import '../Styles/Form.css'; 

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            login: '',
            password: '',
            repeat: '',
            loginError: '',
            passwordError: '',
            repeatError: '',
            serverError: '',
            answer: ''
        };
    
        this.changeLogin = e => {
            if (e.target.value.length != 0) {
                this.setState({ login: e.target.value, loginError: ''});
            } else {
                this.setState({ login: e.target.value, loginError: 'Необходмио указать логин'});
            }
        },

        this.changePassword = e => { 
            if (e.target.value.length < 6 && e.target.value.length !== 0) {
                this.setState({password: e.target.value, passwordError: 'Пароль должен быть больше 6 символов' });
            } else {
                this.setState({password: e.target.value, passwordError: '' });
            }  
        },

        this.changeRepeat = e => {
            if (e.target.value !== this.state.password && e.target.value.length !== 0) {
                this.setState({ repeat: e.target.value, repeatError: 'Пароли не совпадают' });    
            } else {
                this.setState({ repeat: e.target.value, repeatError: ''});
            }
        },

        this.submit = () => {
            const { login, password } = this.state;
            const str = crypto.AES.encrypt(password, login).ciphertext.toString();
            axios.post('/registration', { login, str })
                .then(result => {
                    const { serverError, answer } = result.data;
                    this.setState({ serverError, answer });
                })
                .catch( error => console.error('Error:', error));

        },

        this.isButtonEnabled = () => {
            const { login, password, repeat, loginError, passwordError, repeatError } = this.state;
            return login !== '' && password !== '' && repeat !== '' && loginError === '' && passwordError === '' && repeatError === '';
        },

        this.getForm = () => {
            const { changeLogin, changePassword, changeRepeat, submit, isButtonEnabled } = this;
            const { login, password, repeat, loginError, passwordError, repeatError, serverError } = this.state;
            return (
                <div className='form'>
                    <div className='form__element'>
                        <input type='text' placeholder='login' className='form__input' value={ login } onChange={ changeLogin }/>
                        <span className='form__error'>{ loginError }</span>
                    </div>
                    <div className='form__element'>
                        <input type='password' placeholder='password' className='form__input' value={ password } onChange={ changePassword }/>
                        <span className='form__error'>{ passwordError }</span>
                    </div>
                    <div className='form__element'>
                        <input type='password' placeholder='repeat password' className='form__input' value={ repeat } onChange={ changeRepeat }/>
                        <span className='form__error'>{ repeatError }</span>
                    </div>
                    <button className= { isButtonEnabled() ? 'form__button' : 'form__button form__button__disabled' } onClick={ submit } disabled={ !isButtonEnabled() } >Регистрация</button>
                    <div className='form__serverError'>{ serverError }</div>
                </div>
            );
        };

        this.endRegistration = () => {
            const { answer } = this.state;
            return (
                <div className='form__information'>
                    <span className='information__text'>{ answer }</span>
                    <Link to = '/' className='information__link'>
                        <button className='information___button'>На главную</button>
                    </Link>
                </div>
            );
        };
    }

    

    render() {
        const { getForm, endRegistration } = this;
        const { answer } = this.state;
        if(answer !== '') {
            return  endRegistration();
        } else {
            return  getForm();
        }
    }
}

export default Signup;