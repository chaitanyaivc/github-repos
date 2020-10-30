import {UPDATE_DROP_DOWN} from "./change-header-dropdown-types";
const initialState = 'All';
const updateDropDownReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_DROP_DOWN: {
            return action.payload.dropDownSelected
        }
        default:
            return state
    }
}

export default updateDropDownReducer;
