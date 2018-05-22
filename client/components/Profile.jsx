import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const style = { color: 'white'};

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            login: 'default',
            password: 'default'
        };
    }
    componentDidMount() {
        axios.post('/profile', localStorage.jwtToken)
            .then(result => {
                const { login, decrypted } = result.data;
                this.setState({ login, password: decrypted });
            })
            .catch(error => console.error(error));
    }

    render() {
        const { login, password } = this.state;
        
        if(localStorage.jwtToken){
            return (
                <div style={ style }>
                    <h3>Your login: { login }</h3>
                    <h3>Your password: { password }</h3>
                </div>
            );
        } else {
            return <Redirect to='/Login' />;
        } 
    }
}

export default Profile;