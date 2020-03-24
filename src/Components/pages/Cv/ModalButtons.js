import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBRow, MDBCol} from 'mdbreact';
import Body from './ModalBody'
import '../../Style.css'

class ModalButtons extends Component {
  constructor(){
    super()
    this.state = {
      modal: false,
      id:""
    }
  }


close=()=>{
  this.setState({
    modal:!this.state.modal,
    id:""
  })
}

open = (event) => {
  this.setState({
    modal: !this.state.modal,
    id:event.target.id
  });
}

render() {
  return (
    <MDBContainer style={{ height: '100%' }}>
      <MDBRow className="d-flex align-items-center bd-highlight mb-3 
      justify-content-center animated slideInRight" style={{ height: '100%'}}>
        <MDBCol>  
          <MDBBtn onClick={this.open} id="General Information" className="p-0 bd-highlight border cvButtons forSpin" gradient="blue">
            General Info
          </MDBBtn>
          <MDBBtn onClick={this.open} id="Education" className="p-0 bd-highlight border cvButtons forSpin" gradient="blue">
            Education
          </MDBBtn>
          <MDBBtn onClick={this.open} id="Certifications" className="p-0 bd-highlight border cvButtons forSpin" gradient="blue" >
            certificates
          </MDBBtn>
          <MDBBtn onClick={this.open} id="Skills" className="p-0 bd-highlight border cvButtons forSpin" gradient="blue">
            Skills
          </MDBBtn>  
          <MDBBtn onClick={this.open} id="Experience" className="p-0 bd-highlight border cvButtons forSpin" gradient="blue">
             Experience
          </MDBBtn>   
          <a href="https://drive.google.com/file/d/1zADKPL18qmA6MV7GYwgTII0MhQU0xh5A/view" 
          style={{color:"white"}} target="blank" >
            <MDBBtn className="p-0 bd-highlight border cvButtons forSpin" gradient="blue">
              pdf Copy
            </MDBBtn>
          </a>         
        </MDBCol>
      </MDBRow> 
      <Body id={this.state.id} modal={this.state.modal} close={this.close}/>
    </MDBContainer>
    );
  }
}

export default ModalButtons;