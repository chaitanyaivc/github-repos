import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import ListOfReposComponent from "./Components/ListOfRepos/ListOfReposComponent";
import React from "react";
function App() {
  return (
    <div className="App">
      <Header/>
      <ListOfReposComponent/>
    </div>
  );
}

export default App;
