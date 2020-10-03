import React from 'react';
import { MDBCardBody, MDBCollapse, MDBRow, MDBCol} from "mdbreact";
import pizza from '../../../pics/planner.gif';

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
                                <a href="github.com/samaromm/page-of-youth" className="mr-4" target="blank">Github</a>
                                <a href="page-of-youth.web.app" target="blank">Demo</a>
                            </figcaption>
                        </MDBCol>
                    </MDBRow>
                    <div className="border mb-3 p-2 " style={{backgroundColor:"rgba(88,183,115,0.5)"}}>
                        <h6 className="text-center "> 
                            Individual Project, React and Firebase<br/>
                            A planner website where you can save your schedule for each day and enter a diary/note.
                        </h6>
                    </div>
                    <p className="border p-3 " style={{backgroundColor:"rgba(88,183,115,0.5)"}} >
                        Sign up to the website, confirm your email, and add tasks to each day. 
                        Click on the task to edit/ delete, and cick on your profile to edit/delete.
                    </p>
                    <hr/>
                    <p className="black-text text-center" style={{backgroundColor:"#fff"}}>
                        This application is done using firebase for auth and database, React for Front-End, and React Big Calendar                      
                    </p>
                </div>
            </MDBCardBody>
        </MDBCollapse>
    )
}
export default thirdContents