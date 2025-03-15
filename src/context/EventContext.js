import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/events")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const addEvent = (newEvent) => {
    axios.post("http://localhost:5000/api/events", newEvent)
      .then((response) => setEvents([...events, response.data]))
      .catch((error) => console.error("Error adding event:", error));
  };

  return (
    <EventContext.Provider value={{ events, setEvents, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};
