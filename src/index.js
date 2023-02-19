import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/ScrollTop";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ScrollToTop />
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
