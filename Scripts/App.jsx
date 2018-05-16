import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
 
import Header from './components/Header';
import Genres from './components/Genres';
import Home from './components/Home';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import Single from './components/Single';
import SignIn from './components/SignIn';

import '../Styles/App.css';

const App = ({ data }) => (
    <div>
        <Header />
        <Switch>
            <Route path = '/' exact render = { () => <Redirect to = 'Home' />} />
            <Route path = '/Genres/:type' render = { route  => <Genres {  ...{route, data} }/> } exact/>
            <Route path = '/Home' component = { Home } />
            <Route path = '/Contacts' component = { Contacts } />
            <Route path = '/SignIn'  component = { SignIn } />
            {data.map( (item, index) => <Route path = {`/Genres/:type/${item.id}`} render = { route => <Single { ...{item, route} }/> } key = { index } /> )}
            <Route component = { NotFound } />
        </Switch>
        <Footer />
    </div>
);

const mapStateToProps = state => {
    return {
        data: state.listReducer
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        
    }, dispatch);
};

App.propTypes = {
    data: PropTypes.array.isRequired,
    route: PropTypes.object
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
                    