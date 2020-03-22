import React from 'react';
import { MDBCardBody, MDBCollapse, MDBRow, MDBCol} from "mdbreact";
import colorSlider from '../../../pics/colorSlider.gif'
import slider from '../../../pics/slider.gif'

const secContents=(props)=>{
    return(
        <MDBCollapse id="collapse2" isOpen={props.collapseID}>
           <MDBCardBody className="rgba-white-light white-text z-depth-1">
               <div className="mb-0">
                   <MDBRow className="d-flex justify-content-center mb-3">
                       <MDBCol>
                           <img src={colorSlider} width="300px"
                           alt="screenrecord" className="figure-img img-fluid mx-auto d-block z-depth-1  " />
                           <figcaption className="figure-caption black-text text-center" style={{backgroundColor:"#fff"}}>
                               <a href="https://github.com/samaromm/color-slider.git" className="mr-4" target="blank">Github</a>
                               <a href="https://samaromm.github.io/color-slider/index.html" target="blank">gh pages</a>
                           </figcaption>
                       </MDBCol>
                   </MDBRow>
                   <div className="border mb-3 p-2 " style={{backgroundColor:"rgba(252,181,212,0.5)"}}>
                       <h6 className="text-center "> 
                           individual Project, HTML/CSS/Javascript<br/>
                           Script for Changing colors of different parts of any website.
                       </h6>
                   </div>
                   <p className="border p-3 " style={{backgroundColor:"rgba(252,181,212,0.5)"}} >
                       The idea is providing a tool for the users to change the colors of different parts of the website as they please
                        Using rgb range.<br/>There were a lot of times when I had to browse websites that their colors hurt my eyes
                        or too difficult for me to see since I can't see the dark things well! this tool can help in
                        such situations.
                   </p>
                   <hr/>
                    <p className="black-text text-center" style={{backgroundColor:"#fff"}}>
                        It was done with pure Java Script, the point was the script itself and not the design.                        
                    </p>
               </div>
           </MDBCardBody>
       </MDBCollapse>
    )
}
export default secContents