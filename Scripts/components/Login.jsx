import React from 'react';
import PropTypes from 'prop-types';

import '../../Styles/Login.css';

const Login = ({ likes }) => (
    <div className = 'login' >
        <div className = 'login-estimate' >
            <h3>{ likes } человек оценили картину</h3>
            <button className = 'estimate-button' >Оценить</button>
        </div>
        <div className = 'login-comments' ></div>
    </div>
);

Login.propTypes = {
    likes : PropTypes.number.isRequired
};

export default Login;