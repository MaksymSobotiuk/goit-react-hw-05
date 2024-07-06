import { Link, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

import Navbar from "./components/Navbar/Navbar.jsx"



const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage.jsx'));
const MoviesDetailsPage = lazy(() =>
  import('./pages/MoviesDetailsPage/MoviesDetailsPage.jsx')
);
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast.jsx'));
const MovieReviews = lazy(() =>
  import('./components/MovieReviews/MovieReviews.jsx')
);
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage.jsx'));

function App() {

  return (
      <>
      <Navbar></Navbar>
      <Suspense fallback={null}>
    <Routes>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="/movies" element={<MoviesPage />} /> 
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
         <Route path="cast" element={<MovieCast />} />
         <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} /> 

        </Routes>
        </Suspense>
    </>
  )
}

export default App
