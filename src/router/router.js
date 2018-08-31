import React from "react";
import { Route } from "react-router-dom";
import App from "../components/App";
import Posts from "../components/Posts";
import Header from "../header";
import Message from "../components/Message";
import Profile from "../components/Profile";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={App} />
        <Route  path="/posts" component={Posts} />
        <Route  path="/message" component={Message} />
        <Route  path="/profile" component={Profile} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
