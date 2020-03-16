import React from 'react';
import { MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";

class cvIcon extends React.Component{
    render(){
        return(
            <MDBNavItem >
                  <MDBNavLink className={this.props.activeItem==="2"?"indigo-text":"white-text"}to="#" active={this.props.activeItem==="2"} onClick={this.props.toggle("2")}>
                    <MDBIcon icon="book-reader" size="lg" />
                    <br />
                    CV
                  </MDBNavLink>  
            </MDBNavItem>
        )
    }
}
export default cvIcon