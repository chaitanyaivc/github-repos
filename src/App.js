import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer";
import ListOfReposContainer from "./Components/ListOfRepos/ListOfReposContainer";
import React, {Component, Fragment} from "react";
import WelcomeScreenContainer from "./Components/WelcomeScreen/WelcomeScreenContainer";
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

class App extends Component {

    render() {
        return (
            <div className="App">
                {this.props.dataRetrieved.length > 0 ?
                    <Fragment>
                        <HeaderContainer/>
                        <ListOfReposContainer/>
                    </Fragment>
                    :
                    <WelcomeScreenContainer/>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataRetrieved: state.dataFromGit
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
