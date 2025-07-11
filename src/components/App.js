import "../styles/App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Classes from "../pages/Classes";
import Catering from "../pages/Catering";
import Events from "../pages/Events";
import Booking from "../pages/Booking";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Navbar from "./Navbar";
import { Context } from "../context/context";
import { useContext } from "react";

export default function App() {
  const { isLoading, spaceData, adminData, setAdminData } = useContext(Context);
  const isAdmin = adminData ? true : false;

  if (isLoading) {
    return (
      <div className="App">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/catering" element={<Catering />} />
          <Route
            path="/events"
            element={<Events eventsArr={spaceData.events} />}
          />
          <Route path="/booking" element={<Booking />} />
          <Route
            path="/admin"
            element={isAdmin ? <Admin /> : <Navigate to="/admin-login" />}
          />
          <Route path="/admin-login" element={<Login setAdminData={setAdminData} />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
