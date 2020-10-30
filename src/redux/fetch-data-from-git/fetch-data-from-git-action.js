import {GET_DATA_FROM_GIT, GET_DATA_FROM_GIT_ERROR} from "./fetch-data-from-git-types";
import axios from 'axios';
export const getDataFromGit = (url) => {
    return dispatch => {
        axios.get('https://api.github.com/users/bradtraversy/repos')
            .then(response => {
                dispatch({
                    type: GET_DATA_FROM_GIT,
                    payload: response.data
                })
            })
            .catch(err => {
                dispatch({
                    type: GET_DATA_FROM_GIT_ERROR,
                    payload: err
                })
            })
    }
}
