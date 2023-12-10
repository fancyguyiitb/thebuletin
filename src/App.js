import "./App.css";
//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import World from "./pages/world/World";
import Politics from "./pages/politics/Politics";
// import Business from "./pages/business/Business";
// import Technology from "./pages/technology/Technology";
import Movies from "./pages/movies/Movies";
import Education from "./pages/education/Education";
// import Health from "./pages/health/Health";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/world" element={<World title="World"/>} />
          <Route exact path="/politics" element={<Politics/>} />
          {/* <Route exact path="/business" element={<Business/>} />
          <Route exact path="/technology" element={<Technology/>} /> */}
          <Route exact path="/education" element={<Education/>} />
          {/* <Route exact path="/health" element={<Health/>} /> */}
          <Route exact path="/movies" element={<Movies/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
