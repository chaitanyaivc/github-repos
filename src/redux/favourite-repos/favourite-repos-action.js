import {ADD_TO_FAVOURITE_REPOS} from "./favourite-repos-type";

export const addFavouriteRepos = (repoDetails) => {
    return {
        type: ADD_TO_FAVOURITE_REPOS,
        payload: {
            repoDetails
        }
    }
}
