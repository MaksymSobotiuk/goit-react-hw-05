import {Link, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import MoviesDetailsPage from "./pages/MoviesDetailsPage.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"



function App() {

  return (
      <>
        <Navbar></Navbar>
    <Routes>
              <Route path="/" element={<HomePage/>} /> 
        <Route path="/movies" element={<MoviesPage />} /> 
        <Route path="/movies/:movieId" element={<MoviesDetailsPage/>} /> 
    </Routes>
    </>
  )
}

export default App
