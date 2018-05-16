import React from 'react';

import '../../Styles/SignIn.css'; 

const SignIn = () => (
    <div className = 'signIn' >
        <form className = 'signIn-form' >
            <input type = 'text' placeholder = 'login' />
            <input type = 'password' placeholder = 'password' />
            <button>Войти</button>
        </form>
    </div>
);

export default SignIn;