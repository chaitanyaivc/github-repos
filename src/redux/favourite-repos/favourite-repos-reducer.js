import {ADD_TO_FAVOURITE_REPOS, REMOVE_FROM_FAVOURITE_REPOS} from "./favourite-repos-type";

const initialState = [];
const favouriteReposReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITE_REPOS: {
            let filterFavs = state.filter(val => val.name === action.payload.repoDetails.name);
            if (filterFavs.length === 0) {
                action.payload.repoDetails.addedToFav = true;
                return [...state, action.payload.repoDetails]
            } else {
                return state
            }
        }
        case REMOVE_FROM_FAVOURITE_REPOS: {
            let arrayData =  state.map(val => {
                if (val.name === action.payload.repoDetails.name && val.addedToFav === true) {
                    val.addedToFav = false;
                    return val;
                } else {
                    return val
                }
            });
            return arrayData.filter(val => val.name !== action.payload.repoDetails.name);
        }
        default:
            return state
    }
}
export default favouriteReposReducer;
