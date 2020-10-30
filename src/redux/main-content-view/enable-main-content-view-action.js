import {ENABLE_MAIN_CONTENT} from "./main-content-view-types";

export const enableMainContent = repoData => {
    return {
        type: ENABLE_MAIN_CONTENT,
        payload: repoData
    }
}
