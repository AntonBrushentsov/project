import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../Styles/Form.css'; 

class Login extends Component {
    constructor() {
        super();
        this.state = {
            login: '',
            password: ''
        };
    
        this.changeLogin = e => this.setState({ login: e.target.value });

        this.changePassword = e => this.setState({ password: e.target.value });

        this.sendData = () => {
            const { login, password } = this.state;
            console.log(login);
            console.log(password);
            axios.post('/login', {login, password})    
                .catch(error => console.log(error));
        };
    }

    render() {
        const { login, password } = this.state;
        const { changeLogin, changePassword, sendData } = this;
        return (
            <Fragment>
                <div className='form' >
                    <input type='text' placeholder='login' value={ login } onChange={ changeLogin } className='form__input'/>
                    <input type='password' placeholder='password' value={ password } onChange={ changePassword } className='form__input'/>
                    <button onClick={ sendData } className='form__button'>Войти</button>
                    <div className='form__information'>
                        <span className='information__text'>Нет аккаунта?</span>
                        <Link to = '/Signup' className='information__link'><button className='information___button'>Регистрация</button></Link>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Login;