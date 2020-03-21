import React from 'react';
import { MDBCard, MDBCardHeader, MDBNav, MDBContainer} from "mdbreact";
import Logo from './logo'
import AboutIcon from './aboutIcon';
import CvIcon from './cvIcon';
import ProjectsIcon from './projectsIcon';
import ContactIcon from './contactIcon';
import '../Style.css'
import {withRouter} from 'react-router-dom';


class Header extends React.Component {
  
render(){
  return (
    <div className="classic-tabs">
      <Logo activeItem={this.props.activeItem} toggle={this.props.toggle}/>
       <MDBContainer>
        <MDBCard className="text-center">
          <MDBCardHeader className="purple-gradient border border-white" >
            <MDBNav classicTabs className="d-flex flex-nowrap bd-highlight justify-content-center" >
                <AboutIcon activeItem={this.props.activeItem} toggle={this.props.toggle}/>
                <CvIcon activeItem={this.props.activeItem} toggle={this.props.toggle}/>
                <ProjectsIcon activeItem={this.props.activeItem} toggle={this.props.toggle}/>
                <ContactIcon activeItem={this.props.activeItem} toggle={this.props.toggle}/>
            </MDBNav>
          </MDBCardHeader>
        </MDBCard>
      </MDBContainer>
    </div>
);
}
};

export default withRouter(Header);