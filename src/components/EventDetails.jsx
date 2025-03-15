import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { EventContext } from "../context/EventContext";

const EventDetails = () => {
  const { id } = useParams();
  const { events } = useContext(EventContext);
  const event = events.find(e => e.id === parseInt(id));

  if (!event) return <p className="container">Event not found</p>;

  return (
    <div className="container">
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>{event.date} - {event.location}</p>
      <Link to="/" className="nav-link">Back to Events</Link>
    </div>
  );
};

export default EventDetails;
