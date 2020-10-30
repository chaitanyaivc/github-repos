import HeaderComponent from "./HeaderComponent";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {
    changeHeaderDropDown,
    searchReposByTitleAction
} from '../../redux/actions'

const mapStateToProps = (state) => {
    return {
        searchKeyEntered: state.searchReposByTitleReducer,
        updatedDropDown: state.updateDropDownReducer,
        userName: state.getUserNameReducer.userName
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeHeaderDropDown,
        searchReposByTitleAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
