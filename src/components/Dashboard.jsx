import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { EventContext } from "../context/EventContext";
import event1 from "../assets/event1.jpg";
import event2 from "../assets/event2.jpg";

const Dashboard = () => {
  const { events } = useContext(EventContext);

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard</h1>

      {/* Featured Events Section */}
      <h2>Featured Events</h2>
      <div className="featured-events">
        <div className="event-card">
          <img src={event1} alt="Event 1" className="event-image" />
          <p>Exclusive Music Concert</p>
        </div>
        <div className="event-card">
          <img src={event2} alt="Event 2" className="event-image" />
          <p>Tech Conference 2025</p>
        </div>
      </div>

      {/* User Events */}
      <h2>Your Upcoming Events</h2>
      <div className="event-list">
        {events.length > 0 ? (
          events.map(event => (
            <div key={event.id} className="event-item">
              <h3><Link to={`/events/${event.id}`}>{event.title}</Link></h3>
              <p>{event.date} - {event.location}</p>
            </div>
          ))
        ) : (
          <p>No upcoming events. <Link to="/create">Create one now!</Link></p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
