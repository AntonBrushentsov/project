import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/Data.css';

const Unauthorized = () => (
    <div className='data'>
        <span className='data__text'>Для того чтобы оценить картину или оставить коментарий, необходимо войти на сайт</span> 
        <Link to='/login' className='data__link'>
            <button className='data__button'>войти</button>
        </Link>
    </div>
);

export default Unauthorized;