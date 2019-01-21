import React, { Component } from 'react';
import SignInForm from '../SignInForm/'
import SignUpForm from '../SignUpForm/'
import { connect } from 'react-redux';
import  UserPage from '../UserPage/';
import { Route, Switch } from "react-router-dom";
import Loader from '../Loader/';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ SignInForm }/>
                <Route path="/signup" component={ SignUpForm }/>
                <Route path="/userpage" component={ UserPage } />
            </Switch>
        )
    }
}

export default connect(
    state => ({
        authState: state.appState.authState
    })
)(App);

