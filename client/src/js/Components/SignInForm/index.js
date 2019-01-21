import React, { Component } from 'react';
import {Col, Form, ControlLabel, FormGroup, FormControl, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { setSignUpForm } from '../../actions/appState';
import axios from 'axios';
import { signIn } from '../../actions/appState';
import { Link } from "react-router-dom";


class SignInForm extends Component {
    signIn() {
        this.props.signIn(this.emailInput.value, this.passwordInput.value);
    }

    render() {
        return (
            <div className="SignInForm">
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Email
                            </Col>
                            <Col sm={8}>
                                <input type="email" placeholder="Email" ref={input => {this.emailInput = input}}/>
                            </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={8}>
                            <input type="password" placeholder="Password" ref={input => {this.passwordInput = input}}/>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={8}>
                            <Button onClick={this.signIn.bind(this)}>Sign in</Button>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={8}>
                            <Link to="/signup">
                                <Button onClick={this.props.setSignUpForm}>Sign up</Button>
                            </Link>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default connect(
    state => ({
    }),
    dispatch => ({
        setSignUpForm: () => {
            dispatch(setSignUpForm());
        },
        signIn: (email, password) => {
            dispatch(signIn(email, password));
        }
    })
)(SignInForm);

