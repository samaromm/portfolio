import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header/Header.js'


class App extends React.Component{
  render(){
    return(
      <div className="bg">
        <Router>
           <Header/>
        </Router>
      </div>  
    )
  }
}

export default App;
