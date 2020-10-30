import {GET_USER_NAME_OF_GIT_USER} from "./get-name-of-git-user-types";

export const getUserNameAction = (userName) => {
    return {
        type: GET_USER_NAME_OF_GIT_USER,
        payload: {
            userName
        }
    }
}
