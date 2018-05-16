import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../../Styles/Header.css';

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
            <div className = 'header' >
                <ul className = 'header-menu' >
                    <li><Link to = '/Home' className = 'menu-logo'></Link></li>
                    <li><NavLink to = '/Home' className = 'menu-link' activeClassName = 'menu-activeLink' >Home</NavLink></li>
                    <li>
                        <NavLink to = '#' className = 'menu-link' activeClassName = 'menu-activeLink' >Жанры ↓</NavLink>
                        <ul className = 'menu-submenu' >
                            <li><Link to = '/Genres/Still-Life' className = 'submenu-link' >Натюрморт</Link></li>
                            <li><Link to = '/Genres/Portrait' className = 'submenu-link' >Портрет</Link></li>
                            <li><Link to = '/Genres/Landscape' className = 'submenu-link' >Пейзаж</Link></li>
                        </ul>
                    </li>
                    <li><NavLink to = '/Contacts' className = 'menu-link' activeClassName = 'menu-activeLink' >Contacts</NavLink></li>
                    <li>
                        <div className = { isSearchVisible ? 'menu-searchInput searchInput-active' : 'menu-searchInput searchInput-hidden' } >
                            <input type = 'text' />
                            <img src = { background } width='20px' height='20px;' alt = 'search'/>
                        </div>
                        <img src = { background } alt = 'search' onClick = { this.search } className = { isSearchVisible ? 'menu-searchIcon searchIcon-hidden' : 'menu-searchIcon' }/>
                    </li>
                    <li><NavLink to = '/SignIn' className = 'menu-link' activeClassName = 'menu-activeLink' >Войти</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Header;