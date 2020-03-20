import React from 'react';
import { MDBCardBody, MDBCollapse} from "mdbreact";

const secContents=(props)=>{
    return(
             <MDBCollapse id="collapse2" isOpen={props.collapseID}>
                <MDBCardBody className="rgba-white-light white-text z-depth-1">
                    <p className="p-md-4 mb-0">
                    Anim pariatur cliche reprehenderit, enim eiusmod high
                    life accusamus terry richardson ad squid. 3 wolf moon
                    officia aute, non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                    wolf moon tempor, sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et.
                    </p>
                </MDBCardBody>
            </MDBCollapse>
    )
}
export default secContents