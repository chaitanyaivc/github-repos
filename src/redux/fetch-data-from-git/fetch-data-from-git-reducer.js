import {GET_DATA_FROM_GIT, GET_DATA_FROM_GIT_ERROR} from "./fetch-data-from-git-types";

const initialData = [];
const dataFromGit = (state = initialData, action) => {
    switch (action.type) {
        case GET_DATA_FROM_GIT: {
            return action.payload
        }
        case GET_DATA_FROM_GIT_ERROR: {
            return action.payload
        }
        default:
            return state
    }
}

export default dataFromGit;
