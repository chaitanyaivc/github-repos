import {ADD_TO_FAVOURITE_REPOS, REMOVE_FROM_FAVOURITE_REPOS} from "./favourite-repos-type";

export const addFavouriteRepos = (repoDetails) => {
    console.log('called action');
    return {
        type: ADD_TO_FAVOURITE_REPOS,
        payload: {
            repoDetails
        }
    }
}
