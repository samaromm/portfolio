import React from 'react';
import { MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";

const contactIcon =(props)=>{
        return(
            <MDBNavItem className="flex-lg-fill bd-highlight col-example">
                  <MDBNavLink className={props.activeItem==="4"?"indigo-text":"white-text"} to="/contact" exact active={props.activeItem==="4"} onClick={props.toggle("4")}>
                    <MDBIcon icon="address-book" size="lg"/>
                    <br />
                    Contact
                  </MDBNavLink>  
            </MDBNavItem>
        )
}
export default contactIcon