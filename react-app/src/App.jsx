import React from 'react'
import Images from './Images/Skardu pic.jpg'
import ImgComp from "./components/ImgComp"
import ImgComp2 from "./components/MyPic"
import Comp1 from "./components/SignIn"
import Comp2 from "./components/SignUp"
import Comp3 from "./components/counter"
import Navbar from "./components/Nabar"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App =() => {
  return (

    <>

<BrowserRouter>
<Navbar/>
      <Routes>
        <Route path="/" element={<ImgComp />}/>
        <Route path="/login" element={<Comp1 />} />
        <Route path="/register" element={<Comp2 />} />
        <Route path="/counter" element={<Comp3 />} />
      </Routes>
    </BrowserRouter>

       </>
   
    
  )
}
export default App;
