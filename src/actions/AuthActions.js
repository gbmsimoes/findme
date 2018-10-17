import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
    EMAIL_CHANGED, EMPLOYEE_UPDATE,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    PASSWORD_CHANGED,
    REPEAT_PASSWORD_CHANGED,
    SIGNUP_USER, SIGNUP_USER_FAIL, SIGNUP_USER_SUCCESS
} from "./types";


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};

export const repeatPasswordChanged = (text) => {
    return {
        type: REPEAT_PASSWORD_CHANGED,
        payload: text
    }
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUSerSuccess(dispatch, user))

            .catch(() => loginUSerFail(dispatch))
    };
};



const loginUSerSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });

    Actions.main();
};

const loginUSerFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};

export const signupUser = ({ email, password, repeatPassword }) => {
    if(password !== repeatPassword){
        return {
            type: SIGNUP_USER_FAIL,
            payload: { error: 'Passwords not equal' }
        };
    }

    return (dispatch) => {
        dispatch({ type: SIGNUP_USER });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => signupUSerSuccess(dispatch, user))
            .catch(() => signupUSerFail(dispatch))
    };
};
const signupUSerSuccess = (dispatch, user) => {
    dispatch({
        type: SIGNUP_USER_SUCCESS,
        payload: user
    });

    Actions.pop();
};

const signupUSerFail = (dispatch) => {
    dispatch({
        type: SIGNUP_USER_FAIL,
        payload: { error: 'New User Creation Failed.' }
    });
};