import React from "react";
import Header from "./components/header/Header";
import "./App.css";
import Home from "./components/home/Home";
import Lyric from "./components/lyrics/Lyric";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Provider from "./Context";
function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/lyrics/track/:id" component={Lyric} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
