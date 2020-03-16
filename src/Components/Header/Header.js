import React from 'react';
import { MDBCard, MDBCardHeader, MDBNav, MDBContainer} from "mdbreact";
import { Link } from 'react-router-dom';
import Logo from './logo'
import Card from './card'
import AboutIcon from './aboutIcon';
import CvIcon from './cvIcon';
import ProjectsIcon from './projectsIcon';
import ContactIcon from './contactIcon';
import './Header.css'


class Header extends React.Component {
  state = {
    activeItem: "1"
}

toggle = tab => () => {
  if (this.state.activeItem !== tab) {
  this.setState({
    activeItem: tab
  });
  }
}

render(){
  return (
    <div className="classic-tabs">
      <Logo/>
       <MDBContainer>
        <MDBCard className="text-center">
          <MDBCardHeader className="purple-gradient" >
            <MDBNav classicTabs className="forNav">
                <AboutIcon activeItem={this.state.activeItem} toggle={this.toggle}/>
                <CvIcon activeItem={this.state.activeItem} toggle={this.toggle}/>
                <ProjectsIcon activeItem={this.state.activeItem} toggle={this.toggle}/>
                <ContactIcon activeItem={this.state.activeItem} toggle={this.toggle}/>
            </MDBNav>
          </MDBCardHeader>
          <Card/>
        </MDBCard>
      </MDBContainer>
    </div>
);
}
};

export default Header;