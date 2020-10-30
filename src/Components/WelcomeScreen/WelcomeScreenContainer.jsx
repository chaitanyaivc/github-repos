import WelcomeScreen from "./WelcomeScreen";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {getDataFromGit, getUserNameAction, searchReposByTitleAction} from '../../redux/actions';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        searchReposByTitleAction,
        getUserNameAction,
        getDataFromGit
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
