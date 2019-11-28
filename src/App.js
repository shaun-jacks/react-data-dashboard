import React from "react";
import Layout from "./templates/Layout";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Settings from "./components/pages/Settings";
import Notifications from "./components/pages/Notifications";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/notifications" exact component={Notifications} />
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </Layout>
  );
};

export default App;
