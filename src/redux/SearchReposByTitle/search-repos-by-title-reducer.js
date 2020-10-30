import {SEARCH_REPO_BY_TITLE} from './search-repos-by-title-types';
import {act} from "@testing-library/react";

let initialState = {};
const searchReposByTitleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_REPO_BY_TITLE: {
            console.log(action.payload.searchKey);
            return {...state, searchKey: action.payload.searchKey}
        }
        default: {
            return state
        }
    }
}

export default searchReposByTitleReducer;
