import React from "react"
import {Routes,Route, Navigate} from "react-router-dom"
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import Thankyou from "../pages/Thankyou"

const Routers =()=>{
    return (
    <Routes>
        <Route path="/" element={<Navigate to ='/home'/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/tours" element={<Tours/>}></Route>
        <Route path="/tours/:id" element={<TourDetails/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path='/thankyou' element={<Thankyou/>}></Route>
        <Route path="/tours/search" element={<SearchResultList/>}></Route>
        
    </Routes>
    )
}
export default Routers;