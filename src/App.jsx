import {Link, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import Navigation from "./components/Navigation/Navigation.jsx"


function App() {

  return (
      <>
        <Navigation></Navigation>
    <Routes>
              <Route path="/" element={<HomePage/>} /> 
              <Route path="/movies" element={<MoviesPage/>} /> 
    </Routes>
    </>
  )
}

export default App
