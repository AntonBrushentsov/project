import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import SignIn from './components/SignIn';
import Genres from './components/Genres';
import Layout from './components/Layout';
import RoutesContainer from './containers/RoutesContainer';

import '../Styles/App.css';

const App = () => (
    <div>
        <Layout>
            <Switch>
                <Route path = '/' exact render = { () => <Redirect to = 'Home' />} />
                <Route path = '/Genres/:type' component = { Genres } exact/>
                <Route path = '/Home' component = { Home } />
                <Route path = '/Contacts' component = { Contacts } />
                <Route path = '/SignIn'  component = { SignIn } />
                <RoutesContainer />
                <Route component = { NotFound } />
            </Switch>
        </Layout >
    </div>
);

export default App;
