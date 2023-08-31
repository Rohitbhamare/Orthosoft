import React from "react";
import { Link } from "react-router-dom";
const HeaderComponent =()=>{
    return(
        <div className="headerDiv">
            <Link className="Heading" to="/">OrthoSoft</Link>
        </div>
    )
}
export default HeaderComponent;