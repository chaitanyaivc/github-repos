import {SEARCH_REPO_BY_TITLE} from './search-repos-by-title-types';

let initialState = {};
const searchReposByTitleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_REPO_BY_TITLE: {
            return {...state, searchKey: action.payload.searchKey}
        }
        default: {
            return state
        }
    }
}

export default searchReposByTitleReducer;
