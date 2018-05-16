import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import SignIn from './components/SignIn';
import Genres from './components/Genres';
import Layout from './components/Layout';

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
                <Route component = { NotFound } />
            </Switch>
        </Layout >
    </div>
);

export default App;
/*
<Switch>
            <Route path = '/' exact render = { () => <Redirect to = 'Home' />} />
            <Route path = '/Genres/:type' render = { route  => <Genres {  ...{route, data} }/> } exact/>
            <Route path = '/Home' component = { Home } />
            <Route path = '/Contacts' component = { Contacts } />
            <Route path = '/SignIn'  component = { SignIn } />
            {data.map( (item, index) => <Route path = {`/Genres/:type/${item.id}`} render = { route => <Single { ...{item, route} }/> } key = { index } /> )}
            <Route component = { NotFound } />
</Switch>
*/

/*const mapStateToProps = state => {
    return {
        data: state.listReducer
    };
};*/

/*const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        
    }, dispatch);
};*/

/*App.propTypes = {
    data: PropTypes.array.isRequired,
    route: PropTypes.object
};*/
/*withRouter(connect(mapStateToProps, mapDispatchToProps)(App));*/
                    