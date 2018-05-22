import React from 'react';
import { NavLink } from 'react-router-dom';

const IsUserLogin = () => {
    if(localStorage.jwtToken) {
        return <li><NavLink to='/Profile' className='menu__link' activeClassName='menu__activeLink'>Профиль</NavLink></li>;
    } else {
        return <li><NavLink to='/Login' className='menu__link' activeClassName='menu__activeLink'>Войти</NavLink></li>; 
    }
};

export default IsUserLogin;