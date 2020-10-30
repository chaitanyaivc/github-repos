import {REMOVE_FROM_FAVOURITE_REPOS} from "./favourite-repos-type";

export const removeFavouriteRepos = (repoDetails) => {
    return {
        type: REMOVE_FROM_FAVOURITE_REPOS,
        payload: {
            repoDetails
        }
    }
}
