import React from "react";
import { Switch, Route } from 'react-router-dom';

const HomePage = ({routes}) => <> Hello </>;


export function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" >
        <HomePage />
      </Route>
      <Route path="/cat/:catId">
        Category
      </Route>
    </Switch>
  );
}
