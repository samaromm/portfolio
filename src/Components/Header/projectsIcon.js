import React from 'react';
import { MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";

class projectsIcon extends React.Component{
    render(){
        return(
            <MDBNavItem >
                  <MDBNavLink className={this.props.activeItem==="3"?"indigo-text ":"white-text"}to="#" active={this.props.activeItem==="3"} onClick={this.props.toggle("3")}>
                    <MDBIcon fab icon="github"  size="lg" /> 
                    <br />
                    Projects
                  </MDBNavLink>  
            </MDBNavItem>
        )
    }
}
export default projectsIcon