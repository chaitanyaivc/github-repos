import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./Components/Header/HeaderComponent";
import HeaderContainer from "./Components/Header/HeaderContainer";
import ListOfReposComponent from "./Components/ListOfRepos/ListOfReposComponent";
import ListOfReposContainer from "./Components/ListOfRepos/ListOfReposContainer";
import React from "react";
function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <ListOfReposContainer/>
    </div>
  );
}

export default App;
