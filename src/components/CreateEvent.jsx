import React, { useState, useContext } from "react";
import { EventContext } from "../context/EventContext";
import "../styles/CreateEvent.css"; // Import CSS file

const CreateEvent = () => {
  const { events, setEvents } = useContext(EventContext);
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    location: ""
  });

  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (eventData.title && eventData.date && eventData.location) {
      setEvents([...events, { id: events.length + 1, ...eventData }]);
      setEventData({ title: "", date: "", location: "" });
    }
  };

  return (
    <div className="create-event-container">
      <h2 className="create-event-title">Create a New Event</h2>
      <form onSubmit={handleSubmit} className="create-event-form">
        <label>Event Title</label>
        <input
          type="text"
          name="title"
          value={eventData.title}
          onChange={handleChange}
          required
          className="input-field"
        />

        <label>Event Date</label>
        <input
          type="date"
          name="date"
          value={eventData.date}
          onChange={handleChange}
          required
          className="input-field"
        />

        <label>Event Location</label>
        <input
          type="text"
          name="location"
          value={eventData.location}
          onChange={handleChange}
          required
          className="input-field"
        />

        <button type="submit" className="submit-btn">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
