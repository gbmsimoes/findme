import {EMPLOYEES_FETCH_SUCCESS} from "../actions/types";

const INITIAL_STATE = {
    employees: null
};

// if state is undefined, set it as null
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    // remove this case if none defined
        case EMPLOYEES_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }

}