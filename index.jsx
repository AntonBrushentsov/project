import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './Scripts/App';
import rootReducer from './Scripts/reducers/Index';

const customMiddleWare = (/*store*/) => next => action => {
    console.log('Middleware triggered:', action);
    next(action);
};

const store = createStore(rootReducer, 
    compose(applyMiddleware(customMiddleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


render(
    <Provider store = { store } >
        <Router>
            <App />    
        </Router>
    </Provider>, document.getElementById('root'));