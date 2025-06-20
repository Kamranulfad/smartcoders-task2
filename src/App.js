import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
  <>
  <Header/>
      <Routes>
        <Route path="/" element={ <Home/>}>
        </Route>
      </Routes>
      <Footer/>
  </>
      
    
  )

}

export default App;