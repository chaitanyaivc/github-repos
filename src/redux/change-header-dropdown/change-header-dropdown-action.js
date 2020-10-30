import {UPDATE_DROP_DOWN} from "./change-header-dropdown-types";

export const changeHeaderDropDown = (dropDownSelected) => {
    return {
        type: UPDATE_DROP_DOWN,
        payload: {
            dropDownSelected
        }
    }
}
