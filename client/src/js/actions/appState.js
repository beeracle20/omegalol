import axios from 'axios';

export const setSignUpForm = () => {
    return dispatch => {
        axios.get('/signup', {
            }).then(() => {
                
            });
            dispatch({type: 'SET_SIGNUP_FORM', authState: 'none'});  
    }
}

export const signUp = (email, password) => {
    return dispatch => {
        axios.post('/signup', {
                email: email,
                password: password
            }).then(res => {
                console.log(res.data);
            }).catch(err => {
                console.log(err);
            });
            dispatch({type: 'SET_SIGNIN_FORM', authState: 'none'}); 
    }
}

export const signIn = (email, password) => {
    return dispatch => {
        console.log('Try to sing in as: ');
        console.log(`Email: ${email}`);
        console.log(`Password: ${password}`);
        axios.post('/signin', {
            email: email,
            password: password
        }).then((res) => {
            console.log(res);
        });
    }
}