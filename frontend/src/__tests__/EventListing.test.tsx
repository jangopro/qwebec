import EventListing from "../components/EventListing";
import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Tests for EventListing Component", () => {
  it("should render", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <EventListing />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
