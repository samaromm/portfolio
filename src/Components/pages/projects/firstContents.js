import React from 'react';
import { MDBCardBody, MDBCollapse, MDBRow, MDBCol} from "mdbreact";
import moviefun from '../../../pics/moviefun.gif'
import slider from '../../../pics/slider.gif'

const firstContents=(props)=>{
    return(
             <MDBCollapse id="collapse1" isOpen={props.collapseID}>
                <MDBCardBody className="rgba-white-light white-text z-depth-1">
                    <div className="mb-0">
                        <MDBRow className="d-flex justify-content-center mb-3">
                            <MDBCol>
                                <img src={moviefun} 
                                alt="screenrecord of the website" className="figure-img img-fluid mx-auto d-block z-depth-1  " />
                                <figcaption className="figure-caption black-text text-center" style={{backgroundColor:"#fff"}}>
                                    <a href="https://github.com/samaromm/moviefun" className="mr-4" target="blank">Github</a>
                                    <a href="https://mervegumuskaya.github.io/moviefun/index.html" target="blank">gh pages</a>
                                </figcaption>
                            </MDBCol>
                        </MDBRow>
                        <div className="border mb-3 p-2 border-dark" style={{backgroundColor:"rgba(68,63,168,0.5)"}}>
                            <h6 className="text-center "> 
                                Group Project, HTML/CSS/Bootstrap<br/>
                                Website for criticizing movies
                            </h6>
                        </div>
                        <p className="border p-3 border-dark " style={{backgroundColor:"rgba(68,63,168,0.5)"}} >
                            The idea was a platform for people to criticize movies and give their honest
                            opinions, but without using java script so it only foucsed on the design and
                            applying what we have learned after 1 month of html-css-bootstrap course.
                        </p>
                        <hr/>
                        <div>
                            <p>
                                One of the main points of the website is its' responsiveness.<br/>
                                Example is how the movie cards changes to slider in smaller screens.
                            </p>
                            <MDBRow className="d-flex justify-content-center mb-3">
                                <MDBCol md="4">
                                <img src={slider}
                                alt="screenshot of the slider" className="figure-img img-fluid z-depth-1 d-block mx-auto" />
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </div>
                </MDBCardBody>
            </MDBCollapse>
    )
}
export default firstContents