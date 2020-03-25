import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import Education from './education'
import Exp from './exper'
import Skills from './skills'
import Certifications from'./Certifications'
import Info from './info'

export default class ModalBody extends Component{
    render(){
        return(
            <MDBModal isOpen={this.props.modal} toggle={this.props.close} size="lg" centered>
                <MDBModalHeader >{this.props.id}</MDBModalHeader>
                <MDBModalBody >
                    {this.props.id==="Education" && <Education/>}
                    {this.props.id==="Experience" && <Exp/>}
                    {this.props.id==="Skills" && <Skills/>}
                    {this.props.id==="Certifications" && <Certifications/>}
                    {this.props.id==="General Information" && <Info/>}
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.props.close}>Close</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        )
    }
}