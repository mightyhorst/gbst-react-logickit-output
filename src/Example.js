import React from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Breadcrumb } from "react-bootstrap";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { LinkContainer } from "react-router-bootstrap";

import {
  Journey,
  JourneyNav,
  JourneyContent,
  JourneyNavStep,
  JourneyStep
} from "./uikit";

import "./App.css";
import "./app/styles";

const Home = () => <span>Home</span>;

const About = () => <span>About</span>;

const Users = () => <span>Users</span>;

const App = () => (
  <MemoryRouter>
    <Container className="p-3">
      <Breadcrumb>
        <LinkContainer to="/home">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </LinkContainer>
        <LinkContainer to="/about">
          <Breadcrumb.Item>About</Breadcrumb.Item>
        </LinkContainer>
        <LinkContainer to="/users">
          <Breadcrumb.Item>Users</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>

      <Jumbotron>
        <p>
          Navigate to{" "}
          <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/">
              <Button>Home</Button>
            </LinkContainer>
            <LinkContainer to="/about">
              <Button>About</Button>
            </LinkContainer>
            <LinkContainer to="/users">
              <Button>Users</Button>
            </LinkContainer>
          </ButtonToolbar>
        </p>
      </Jumbotron>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Journey>
        <JourneyNav>
          <JourneyNavStep step={0} title="Client Details" isActive />
          <JourneyNavStep step={1} title="Application Details" />
          <JourneyNavStep step={2} title="Summary" />
        </JourneyNav>
        <JourneyContent>
          <JourneyStep step={0}></JourneyStep>
          <JourneyStep step={1}></JourneyStep>
          <JourneyStep step={2}></JourneyStep>
        </JourneyContent>
      </Journey>
    </Container>
  </MemoryRouter>
);

export default App;
