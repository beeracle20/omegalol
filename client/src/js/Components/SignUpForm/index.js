import React, { Component } from 'react';
import {Col, Form, ControlLabel, FormGroup, FormControl, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import { signUp } from '../../actions/appState';
import { Link } from "react-router-dom";

class SignUpForm extends Component {

    signUp() {
        this.props.signUp(this.emailInput.value, this.passwordInput.value);
    }

    render() {
        return (
            <div className="SignUpForm">
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
                            <Link to="/">
                                <Button onClick={this.signUp.bind(this)}>Sign up</Button>
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
        signUp: (email, password) => {
            dispatch(signUp(email, password));
        }
    })
)(SignUpForm);