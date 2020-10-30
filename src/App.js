import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./Components/Header/HeaderComponent";
import ListOfReposComponent from "./Components/ListOfRepos/ListOfReposComponent";
import React from "react";
function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <ListOfReposComponent/>
    </div>
  );
}

export default App;
