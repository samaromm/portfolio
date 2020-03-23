import React, { Component } from 'react';
import { MDBContainer, MDBBtn} from 'mdbreact';
import Body from './ModalBody'

class ModalButtons extends Component {
state = {
  modal: false,
  id:""
}

close=()=>{
  this.setState({
    modal:!this.state.modal
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
    <MDBContainer>
      <MDBBtn outline onClick={this.open} id="Education">Education</MDBBtn>
      <MDBBtn outline onClick={this.open} id="Certifications">Certifications</MDBBtn>
      <MDBBtn outline onClick={this.open} id="Skills">Skills</MDBBtn>
      <MDBBtn outline onClick={this.open} id="Experince">Experince</MDBBtn>
      <Body id={this.state.id} modal={this.state.modal} close={this.close}/>
    </MDBContainer>
    );
  }
}

export default ModalButtons;