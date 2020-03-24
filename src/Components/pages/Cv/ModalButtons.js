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
          <MDBBtn onClick={this.open} id="info" className="p-0 bd-highlight border buttonRound" 
          style={{width:"80px", height:"80px"}} gradient="blue">General Info</MDBBtn>

          <MDBBtn onClick={this.open} id="Education" className="p-0 bd-highlight border buttonRound" 
          style={{width:"80px", height:"80px"}} gradient="blue">Education</MDBBtn>
          
          <MDBBtn onClick={this.open} id="Certifications" className="p-0 bd-highlight border buttonRound" 
          style={{width:"80px", height:"80px"}} gradient="blue" >certificates</MDBBtn>
          
          <MDBBtn onClick={this.open} id="Skills" className="p-0 bd-highlight border buttonRound" 
          style={{width:"80px", height:"80px"}} gradient="blue">Skills</MDBBtn>
          
          <MDBBtn onClick={this.open} id="Experince" className="p-0 bd-highlight border buttonRound" 
          style={{width:"80px", height:"80px"}} gradient="blue">Experince</MDBBtn>

          
          <MDBBtn className="p-0 bd-highlight border buttonRound" 
          style={{width:"80px", height:"80px"}} gradient="blue">
            <a href="https://www.google.com.tr/" color="white">Pdf Copy</a>
          </MDBBtn>
        </MDBCol>
      </MDBRow> 
      <Body id={this.state.id} modal={this.state.modal} close={this.close}/>
    </MDBContainer>
    );
  }
}

export default ModalButtons;