import React, {Component} from 'react';
import RepositoryComponent from "./RepositoryComponent";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {addFavouriteRepos, removeFavouriteRepos} from '../../redux/actions';

const mapStateToProps = (state) => {
    return {
        favouriteRepos: state.favouriteReposReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addFavouriteRepos,
        removeFavouriteRepos
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryComponent);
