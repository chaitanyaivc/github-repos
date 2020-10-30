import React, {Component} from 'react';
import ContributorsComponent from "./ContributorsComponent";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {
    disableMainContent
} from '../../redux/actions'

const mapStateToProps = (state) => {
    return {
        dataOfARepo: state.mainContentViewReducer.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        disableMainContent
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContributorsComponent);
