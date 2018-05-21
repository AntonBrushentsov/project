import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../Styles/Header.css';

import background from '../../files/search.png';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            isSearchVisible: false
        },
        this.search = () => {
            this.setState({ isSearchVisible: !this.state.isSearchVisible});
        };
    }

    render() {
        const { isSearchVisible } = this.state;
        return (
            <div className='header'>
                <ul className='menu'>
                    <li><Link to='/Home' className='logo'></Link></li>
                    <li><NavLink to = '/Home' className='menu__link' activeClassName='menu__activeLink'>Home</NavLink></li>
                    <li>
                        <NavLink to='#' className='menu__link' activeClassName='menu__activeLink'>Жанры ↓</NavLink>
                        <ul className='menu__submenu' >
                            <li><Link to='/Genres/Still-Life' className='submenu__link'>Натюрморт</Link></li>
                            <li><Link to='/Genres/Portrait' className='submenu__link'>Портрет</Link></li>
                            <li><Link to='/Genres/Landscape' className='submenu__link'>Пейзаж</Link></li>
                        </ul>
                    </li>
                    <li><NavLink to='/Contacts' className='menu__link' activeClassName='menu__activeLink'>Contacts</NavLink></li>
                    <li>
                        <div className={ isSearchVisible ? 'menu__searchInput menu__searchInput__active' : 'menu__searchInput menu__searchInput__hidden' }>
                            <input type='text'/>
                            <img src={ background } width='20px' height='20px;' alt='search'/>
                        </div>
                        <img src={ background } alt = 'search' onClick={ this.search } className={ isSearchVisible ? 'menu__searchIcon menu__searchIcon__hidden' : 'menu__searchIcon' }/>
                    </li>
                    <li><NavLink to='/Login' className='menu__link' activeClassName='menu__activeLink'>Войти</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Header;