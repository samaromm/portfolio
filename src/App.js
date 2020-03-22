import React from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom';
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
        <HashRouter basename='/'>
           <Header/>
           <Route path='/' exact component={Home}/>
           <Route path='/about' exact component={About}/>
           <Route path='/contact' exact component={Contact}/>
           <Route path='/cv' exact component={Cv}/>
           <Route path='/projects' exact component={Projects}/>
           <Footer/>
        </HashRouter>
      </div>  
    )
  }
}

export default App;
