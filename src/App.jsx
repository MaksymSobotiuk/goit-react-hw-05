import {Link, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import Navbar from "./components/Navbar/Navbar.jsx"


function App() {

  return (
      <>
        <Navbar></Navbar>
    <Routes>
              <Route path="/" element={<HomePage/>} /> 
              <Route path="/movies" element={<MoviesPage/>} /> 
    </Routes>
    </>
  )
}

export default App
