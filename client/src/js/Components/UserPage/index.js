import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { connect } from 'react-redux';

class UserPage extends Component {
  render() {
    console.log('render')
    return (<div>smthng</div>);
  }
}

export default connect(
  state => ({
    authState: state.appState.authState
  }),
)(UserPage);