import React from "react";

/**
 * @requires Router
 */
import { HashRouter as Router } from "react-router-dom";
import * as routes from "./routes.json";

/**
 * @requires Components
 */
import { AppNav, AppRoutes } from "./";

export const App = () => (
  <Router>
    <AppNav routes={routes} />
    <AppRoutes routes={routes} />
  </Router>
);
export default App;
