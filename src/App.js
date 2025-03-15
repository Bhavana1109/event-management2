import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import CreateEvent from "./components/CreateEvent";
import EventDetails from "./components/EventDetails";
import EventList from "./components/EventList";

import DashboardPage from "./pages/DashboardPage";
import "./styles/CreateEvent.css";
import "./styles/EventList.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/create" className="nav-link">Create Event</Link>
      </nav>

      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/create" element={<CreateEvent />} />
        <Route path="/events/:id" element={<EventDetails />} />
      </Routes>
    </>
  );
}

export default App;
