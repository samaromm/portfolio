import React from 'react';
import { MDBCardBody, MDBCard, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import astronaut from '../../../pics/2.png';
import '../../Style.css';
import Images from './iconImages'

const About =()=>{
        const scrollContainerStyle = { maxHeight: "90vh" };
        return(
            <MDBContainer >
                <MDBCard className="text-center text-white forAbout forCards" >
                    <MDBCardBody  className=" rgba-black-strong  border border-white scrollbar scrollbar-secondary" style={scrollContainerStyle}>
                        <MDBRow >
                            <MDBCol  >
                                <h5 style={{color:"#B273E1"}} className="border border-secondary p-3 w-responsive mt-4 mx-auto" > 
                                    Software Engineer,
                                    <br/>
                                    Junior Full Stack Developer
                                </h5> 
                                <br/><p className=" text-left w-responsive mx-auto mb-3" >
                                I'm Samar, Software Engineering student. <br/>
                                Good knowledge of <span style={{color:"#f06ec9"}} >OOP, Java, </span> 
                                <span style={{color:"#f06ec9"}} >React framework and a beginner NestJS learner.</span> <br/>
                                Have a front-end development certificate from <a href="https://flatironschool.com/" target="blank">Flatiron School.</a><br/>
                                Enrolled in TalenVar Back-End bootcamp.<br/>
                                Front-End intern in E-Bursum.
                                </p> 
                                <div className="animated slideInRight">      
                                    <Images/> 
                                </div>     
                                <img src ={astronaut} alt="astronaut" className="img-fluid float-left" style={{width:"100px"}}/>
                                <p className=" lead mb-3 text-left">    
                                I always try to gain knowledge in different software areas as I can, 
                                and don't limit myself to what I'm confident at; because programming field is like <strong>the space: 
                                <span style={{color:"#f06ec9"}} > huge, full of secrets, fascinating, has no end, and will always make you curious.</span></strong>
                                </p>
                            </MDBCol>
                        </MDBRow>            
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        )
}
export default About