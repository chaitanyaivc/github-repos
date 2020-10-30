import {GET_USER_NAME_OF_GIT_USER} from "./get-name-of-git-user-types";

let initialState = null;
const getUserNameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_NAME_OF_GIT_USER:
            return action.payload
        default:
            return state
    }
}
export default getUserNameReducer;
