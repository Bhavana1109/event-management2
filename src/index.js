import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { EventProvider } from "./context/EventContext";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <EventProvider>
      <App />
    </EventProvider>
  </BrowserRouter>
);
