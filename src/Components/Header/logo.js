import React from 'react';
import logopic from '../../pics/logo.png'
import '../Style.css'
import {Link} from "react-router-dom";

const logo=(props)=>{
    return(
        <Link to="/" exact onClick={props.toggle("")} >
            <img src={logopic} alt="samar's spcae" className="img-fluid mx-auto d-block forLogo" />
        </Link>
    )
}
export default logo;