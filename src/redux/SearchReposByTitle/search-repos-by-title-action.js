import {SEARCH_REPO_BY_TITLE} from './search-repos-by-title-types';

export const searchReposByTitleAction = (searchKey) => {
    return {
        type: SEARCH_REPO_BY_TITLE,
        payload: {
            searchKey: searchKey
        }
    }
}
