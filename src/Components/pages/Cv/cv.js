import React from 'react';
import { MDBCardBody, MDBCard, MDBContainer} from "mdbreact";
import '../../../Components/Style.css'
import BurgerMenu from './burgerMenu'
import Lists from './lists'

export default class cv extends React.Component{
    render(){
        const scrollContainerStyle = { maxHeight: "80vh" };
        return(
            <MDBContainer>
                <MDBCard className="text-center">
                    <MDBCardBody className=" forCards border border-white scrollbar scrollbar-secondary" style={scrollContainerStyle}>
                        {window.innerWidth<1230?<BurgerMenu/>:<Lists/>}
                        {console.log(window.innerWidth)}
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        )
    }
}