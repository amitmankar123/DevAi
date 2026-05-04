
import React from "react";
import { Navigate } from "react-router-dom";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "../screens/Home.jsx"
import Login from "../screens/Login.jsx";
import Register from "../screens/Register.jsx";
import Project from "../screens/Project.jsx";
import UserAuth from "../auth/UserAuth.jsx"
const AppRoutes = ()=>{
    return(

        <BrowserRouter>
       < Routes>
       <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/project" element={<UserAuth><Project /></UserAuth>} />
       </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes