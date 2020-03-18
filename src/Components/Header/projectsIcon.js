import React from 'react';
import { MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";

class projectsIcon extends React.Component{
    render(){
        return(
            <MDBNavItem className="flex-lg-fill bd-highlight col-example">
                  <MDBNavLink className={this.props.activeItem==="3"?"indigo-text ":"white-text"} to="/projects" exact active={this.props.activeItem==="3"} onClick={this.props.toggle("3")}>
                    <MDBIcon fab icon="github"  size="lg" /> 
                    <br />
                    Projects
                  </MDBNavLink>  
            </MDBNavItem>
        )
    }
}
export default projectsIcon