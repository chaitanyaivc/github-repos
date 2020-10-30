import React, {Component} from 'react';
import ListOfReposComponent from "./ListOfReposComponent";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import {getDataFromGit} from '../../redux/actions';

const mapStateToProps = (state) => {
    console.log('data watch: ', state.dataFromGit);
    let dataFromGit = state.dataFromGit;
    let enteredKey = state.searchReposByTitleReducer;
    let favouriteRepos = state.favouriteReposReducer;
    let allOrFavs = state.updateDropDownReducer;
    let dataProcessedToDisplay = null;
    if (allOrFavs === 'All') {
        console.log('data entered is: ', enteredKey);
        if (enteredKey.searchKey && dataFromGit) {
            dataProcessedToDisplay = dataFromGit.filter(val => val.name.toLowerCase()
                .includes(enteredKey.searchKey.toLowerCase()))
        } else {
            dataProcessedToDisplay = dataFromGit;
        }
    } else if (allOrFavs === 'Favourites') {
        dataProcessedToDisplay = favouriteRepos;
    }
    return {
        searchKeyEntered: state.searchReposByTitleReducer,
        favouriteRepos: state.favouriteReposReducer,
        updatedDropDown: state.updateDropDownReducer,
        dataProcessedToDisplay
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getDataFromGit
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfReposComponent);
