import React from 'react'
import { BrowserRouter, Routes,Route, } from "react-router-dom";
import Erroe from './Erroer';
import Navbar from '../components/navbar/Navbar';
import Home from './../pages/home/Home';

const index = () => {
  return (
    <div>


    <BrowserRouter>

      <Navbar/>
       
       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<Erroe/>}/>
        </Routes>
       
       
  </BrowserRouter>
    </div>
  )
}

export default index