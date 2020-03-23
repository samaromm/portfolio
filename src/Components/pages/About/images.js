import React from 'react'
import { MDBRow, MDBCol} from "mdbreact";
import Java from './java'
import Html from './Html'
import Css from './css'
import Js from './Js'
import Bootstrap from './bootstrap'
import ReactIcon from './react'

export default class images extends React.Component{
    
    render(){
        return(
            <MDBRow className="d-flex justify-content-center mb-3">
                <MDBCol>
                    <Java/>
                    <Html/>
                    <Css/>
                    <Bootstrap/>
                    <Js/>
                    <ReactIcon/>
                </MDBCol>
            </MDBRow>
        )
    }
}