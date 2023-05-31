import React from "react";
import { Navigate,Outlet } from "react-router-dom";

const PrivateComponent =()=>{
    const auth = localStorage.getItem('Volunteer')
    return auth?<Outlet/>:<Navigate to='/volunteer/add' />
}

export default PrivateComponent;