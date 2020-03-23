import React from 'react';
import { MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";
import '../Style.css'

const aboutIcon = (props)=> {
        return(
            <MDBNavItem className="flex-lg-fill bd-highlight col-example">
                  <MDBNavLink className={props.activeItem==="1"?"indigo-text ":"white-text "} to="/about" exact active={props.activeItem==="1"} onClick={props.toggle("1")}>
                    <MDBIcon icon="user-circle" size="lg" className="forSpin"/> 
                    <br />
                    About
                  </MDBNavLink>  
            </MDBNavItem>
        )
}
export default aboutIcon