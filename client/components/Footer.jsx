import React from 'react';

import { Link } from 'react-router-dom';

import '../Styles/Footer.css';

import fb from '../../files/fb.png';
import vk from '../../files/vk.png';
import tw from '../../files/tw.png';
import i from '../../files/i.png';

const images = [
    {src: fb, link: 'https://www.facebook.com/'},  
    {src: vk, link: 'https://www.vk.com/'}, 
    {src: tw, link: 'https://twitter.com/'}, 
    {src: i, link: 'https://www.instagram.com/'}];

const Footer = () => (
    <div className='footer'>
        <div className='footer__information'>&copy;Pavel Efimov. 2018</div> 
        <Link to='/Home' className='logo'></Link>       
        <div className='footer__social' >
            {images.map( (item, index) =>(
                <a key={ index } target='_blank' href={ item.link } className='social__link'>
                    <img className='social__image' src={ item.src } alt='img' key={ index }/>
                </a>))}
        </div>
    </div>
);

export default Footer;