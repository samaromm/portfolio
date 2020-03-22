import React from 'react';
import { MDBCardBody, MDBCollapse, MDBRow, MDBCol} from "mdbreact";
import pizza from '../../../pics/pizza.gif';

const thirdContents=(props)=>{
    return(
        <MDBCollapse id="collapse3" isOpen={props.collapseID}>
            <MDBCardBody className="rgba-white-light white-text z-depth-1">
                <div className="mb-0">
                    <MDBRow className="d-flex justify-content-center mb-3">
                        <MDBCol>
                            <img src={pizza} width="300px"
                            alt="screenrecord" className="figure-img img-fluid mx-auto d-block z-depth-1  " />
                            <figcaption className="figure-caption black-text text-center" style={{backgroundColor:"#fff"}}>
                                <a href="https://github.com/samaromm/React-Pizza.git" className="mr-4" target="blank">Github</a>
                                <a href="https://samaromm.github.io/React-Pizza/" target="blank">gh pages</a>
                            </figcaption>
                        </MDBCol>
                    </MDBRow>
                    <div className="border mb-3 p-2 " style={{backgroundColor:"rgba(88,183,115,0.5)"}}>
                        <h6 className="text-center "> 
                            Group Project, React<br/>
                            react pizza form for editing orders.
                        </h6>
                    </div>
                    <p className="border p-3 " style={{backgroundColor:"rgba(88,183,115,0.5)"}} >
                        When you click the "Edit" button on any row in the table, 
                        it should send the pizza associated with that click into the Pizza form, which will be editable.
                        When the form is submitted, the information should be reflected in your table.
                    </p>
                    <hr/>
                    <p className="black-text text-center" style={{backgroundColor:"#fff"}}>
                        This application is done using a local database; for the code that uses a josn-server 
                        under <span style={{color:"brown"}}>http://localhost:3000/pizzas</span>, check this 
                        <a href="https://github.com/lizbur10/React-Pizza.git"> repository</a>                      
                    </p>
                </div>
            </MDBCardBody>
        </MDBCollapse>
    )
}
export default thirdContents