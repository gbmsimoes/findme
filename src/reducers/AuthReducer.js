import {
    EMAIL_CHANGED,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    PASSWORD_CHANGED,
    REPEAT_PASSWORD_CHANGED,
    SIGNUP_USER, SIGNUP_USER_FAIL, SIGNUP_USER_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
    email: '',
    password: '',
    repeatPassword: '',
    user: null,
    error: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {

    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, error: '', email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, error: '', password: action.payload };
        case REPEAT_PASSWORD_CHANGED:
            return { ...state, error: '', repeatPassword: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed.', password: '', loading: false };
        case SIGNUP_USER:
            return { ...state, loading: true, error: '' };
        case SIGNUP_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case SIGNUP_USER_FAIL:
            return { ...state, error: action.payload.error, email: '', password: '', repeatPassword: '', loading: false };
        default:
            return state;
    }
}