import React from 'react';
import { MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";

class aboutIcon extends React.Component{
    render(){
        return(
            <MDBNavItem className="flex-lg-fill bd-highlight col-example">
                  <MDBNavLink className={this.props.activeItem==="1"?"indigo-text ":"white-text "} to="/about" exact active={this.props.activeItem==="1"} onClick={this.props.toggle("1")}>
                    <MDBIcon icon="user-circle" size="lg" /> 
                    <br />
                    About
                  </MDBNavLink>  
            </MDBNavItem>
        )
    }
}
export default aboutIcon