import {ENABLE_MAIN_CONTENT,DISABLE_MAIN_CONTENT} from "./main-content-view-types";

let initialState = {data:'', display: false};
const mainContentViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case ENABLE_MAIN_CONTENT: {
            console.log('open in main view: ',action.payload);
            return {...state, data:action.payload, display: true};
        }
        case DISABLE_MAIN_CONTENT: {
            return {...state, data:'', display: false};
        }
        default:
            return state;
    }
}
export default mainContentViewReducer;
