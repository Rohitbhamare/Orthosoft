import React from "react";
import BodyComponent from "./BodyComponent";
import HeaderComponent from "./HeaderComponent";
import SideBarComponent from "./SideBarComponent";
const ParentComponent =()=>{
    return(
        <div className="parentDiv">
            <HeaderComponent/>
            <div className="sideBarAndBodyDiv">
                <SideBarComponent/>
                <BodyComponent/>
            </div>
        </div>
    )
}
export default ParentComponent;