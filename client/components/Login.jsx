import React, { Component } from 'react';
import axios from 'axios';

import '../Styles/SignIn.css'; 

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
            //e.preventDefault();
            const { login, password } = this.state;
            console.log(login);
            console.log(password);
            axios.post('/login', {login, password})
                //.then(res => localStorage.setItem('user', res.data))    
                .catch(error => console.log(error));
                
            
        };
    }

    render() {
        const { login, password } = this.state;
        const { changeLogin, changePassword, sendData } = this;
        return (
            <div className = 'signIn' >
                <div className = 'signIn-form' >
                    <input type = 'text' placeholder = 'login' value={ login } onChange={ changeLogin } />
                    <input type = 'password' placeholder = 'password' value={ password } onChange={ changePassword } />
                    <button onClick={ sendData }>Войти</button>
                </div>
            </div>
        );
    }
}

export default Login;