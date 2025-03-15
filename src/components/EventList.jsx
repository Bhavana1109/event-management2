import React, { useContext } from "react";
import { EventContext } from "../context/EventContext";
import "../styles/EventList.css"; // Import CSS file

const EventList = () => {
  const { events } = useContext(EventContext);

  return (
    <div className="home-container">
      <h1 className="home-title">Upcoming Events</h1>
      <p className="home-subtitle">Discover and join exciting events near you!</p>
      
      <div className="event-list">
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="event-card">
              <img src={`https://source.unsplash.com/400x200/?${event.title}`} alt={event.title} className="event-image"/>
              <div className="event-info">
                <h3>{event.title}</h3>
                <p><strong>Date:</strong> {event.date}</p>
                <p><strong>Location:</strong> {event.location}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-events">No upcoming events.</p>
        )}
      </div>
    </div>
  );
};

export default EventList;
