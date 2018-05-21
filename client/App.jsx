import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Signup from './components/Signup';
import Genres from './components/Genres';
import Layout from './components/Layout';
import RoutesContainer from './containers/RoutesContainer';

import './Styles/App.css';

const App = () => (
    <div>
        <Layout>
            <Switch>
                <Route path = '/' exact render = { () => <Redirect to = 'Home' />} />
                <Route path = '/Genres/:type' component = { Genres } exact/>
                <Route path = '/Home' component = { Home } />
                <Route path = '/Contacts' component = { Contacts } />
                <Route path = '/Login'  component = { Login } />
                <Route path = '/Signup'  component = { Signup } />
                <RoutesContainer />
                <Route component = { NotFound } />
            </Switch>
        </Layout >
    </div>
);

export default App;
