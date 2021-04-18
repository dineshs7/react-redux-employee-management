import { LOGOUT, SHOW_DASHBOARD, FORM_SUBMISSION_STATUS } from '../actions/actionTypes';
import { stateData } from '../reducers/data';

const initialState = {
    formSubmitted: false,
    userStatus: LOGOUT,
    data: {
        username: "",
        password: ""
    }
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FORM_SUBMISSION_STATUS:
            return {
                formSubmitted: action.formSubmitted,
                userStatus: action.userStatus,
                data: {
                    username: action.data.username,
                    password: action.data.password
                }
            }
        case SHOW_DASHBOARD: {
            return {
                ...state,
                stateData
            }
        }
        default:
            return state;
    }
}

export default reducer;
