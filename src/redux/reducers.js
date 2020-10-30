import {combineReducers} from "redux";
import searchReposByTitleReducer from "./SearchReposByTitle/search-repos-by-title-reducer";
import favouriteReposReducer from './favourite-repos/favourite-repos-reducer';
import updateDropDownReducer from './change-header-dropdown/change-header-dropdown-reducer';
import dataFromGit from './fetch-data-from-git/fetch-data-from-git-reducer';
export default combineReducers({
    searchReposByTitleReducer,
    favouriteReposReducer,
    updateDropDownReducer,
    dataFromGit
})
