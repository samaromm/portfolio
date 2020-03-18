import React from 'react';
import { MDBContainer,MDBCard, MDBCardFooter} from "mdbreact";

const footer =()=>{
    return(
            <MDBContainer className="footer-copyright text-center mb-3">
                <MDBCard className="purple-gradient">
                    <MDBCardFooter className="border border-white text-white">
                        Made with <i class="far fa-heart"></i><br/>
                        &copy; {new Date().getFullYear()} Photos Copyright: <a href="http://www.freepik.com"> Freepik </a>    
                    </MDBCardFooter>
                </MDBCard>
            </MDBContainer>
    )
}

export default footer