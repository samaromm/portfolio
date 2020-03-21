import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header/Header.js'
import About from './Components/pages/About/About';
import Contact from './Components/pages/Contact/contact';
import Cv from './Components/pages/Cv/cv';
import Projects from './Components/pages/projects/projects';
import Home from './Components/pages/home'
import Footer from './Components/footer/footer'


class App extends React.Component{
  render(){
    return(
      <div className="bg">
        <Router>
           <Header/>
           <Route path='samarspace/' exact component={Home}/>
           <Route path='samarspace/about' exact component={About}/>
           <Route path='samarspace/contact' exact component={Contact}/>
           <Route path='samarspace/cv' exact component={Cv}/>
           <Route path='samarspace/projects' exact component={Projects}/>
           <Footer/>
        </Router>
      </div>  
    )
  }
}

export default App;
