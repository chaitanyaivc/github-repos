import {ADD_TO_FAVOURITE_REPOS} from "./favourite-repos-type";

const initialState = [];
const favouriteReposReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITE_REPOS: {
            console.log('repos: ', action.payload.repoDetails);
            let filterFavs = state.filter(val => val.name === action.payload.repoDetails.name);
            if (filterFavs.length === 0) {
                return [...state, action.payload.repoDetails]
            } else {
                return state
            }
        }
        default:
            return state
    }
}
export default favouriteReposReducer;
