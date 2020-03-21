import React from 'react';
import { MDBCard, MDBContainer, MDBIcon,MDBBtn } from "mdbreact";
import '../Style.css';
import {Link} from 'react-router-dom'

class home extends React.Component{
      render(){
        return (
          <MDBContainer className="d-flex flex-column ">
              <MDBCard className="card-image forHome ">
                <div className=" justify-content-center text-white text-center d-flex align-items-center py-5 px-4 rounded">
                  <div>
                    <h6 className="purple-text">         
                      <strong> Spaceflight </strong>
                      <MDBIcon icon="fas fa-space-shuttle" />
                    </h6>
                    <h3 className="py-3 font-weight-bold">
                      <strong>Samar's Space</strong>
                    </h3>
                    <p className="pb-3">
                      Want to join an adventure to my space?
                    </p>
                    <Link to='/about'><MDBBtn color="secondary" rounded size="md" onClick="ComponentWillMount()">
                      <MDBIcon far icon="clone" className="left" /> About Me
                    </MDBBtn>
                    </Link>     
                  </div>
                </div>
              </MDBCard>
          </MDBContainer>
        )
      }           
}
export default home