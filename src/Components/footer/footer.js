import React from 'react';
import { MDBContainer,MDBCard, MDBCardFooter, MDBIcon} from "mdbreact";
import '../Style.css'

const footer =()=>{
    return(
            <MDBContainer className="footer-copyright text-center pb-5">
                <MDBCard className="purple-gradient">
                    <MDBCardFooter className="border border-white text-white">
                        Made with <MDBIcon icon="heart" className="heart" />   
                    </MDBCardFooter>
                </MDBCard>
            </MDBContainer>
    )
}

export default footer