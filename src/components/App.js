import "../styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Classes from "../pages/Classes";
import Catering from "../pages/Catering";
import Events from "../pages/Events";
import Booking from "../pages/Booking";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/catering" element={<Catering />} />
          <Route path="/events" element={<Events />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
