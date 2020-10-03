import React from 'react';
import { MDBCardBody, MDBCard, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import '../../../Components/Style.css';
import First from './first';
import Second from './second';
import Third from './third';
import Slider from './slider'

export default class projects extends React.Component{
    state={
        collapseID: ""
    }

    toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

    render(){
        const scrollContainerStyle = { maxHeight: "90vh" };
        return(            
            <MDBContainer >
                <MDBCard className="card-image forProject" >
                    <MDBCardBody className="py-4 px-4 border border-white scrollbar scrollbar-secondary" style={scrollContainerStyle}>
                        <MDBRow className="d-flex justify-content-center mb-3 ">
                            <MDBCol md="5" sm="4" className="animated bounceInDown">
                                <Slider/>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow className="d-flex justify-content-center animated slideInRight">
                            <MDBCol md="10" xl="8">
                                <MDBContainer>
                                    <First collapseID={this.state.collapseID} toggleCollapse={this.toggleCollapse}/>
                                    <Second collapseID={this.state.collapseID} toggleCollapse={this.toggleCollapse}/>
                                    <Third collapseID={this.state.collapseID} toggleCollapse={this.toggleCollapse}/>
                                </MDBContainer>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        )
    }
}