import './App.css';
import { useEffect } from "react";
//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          {/* <Route exact path="/:mediaType/:id" element={<Details />} /> */}
          {/* <Route exact path="/search/:query" element={<SearchResult />} /> */}
          {/* <Route exact path="/explore/:mediaType" element={<Explore />} /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
