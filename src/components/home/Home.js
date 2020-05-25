import React, { Component } from "react";
import TrackList from "../trackList/TrackList";
import Search from "../search/Search";
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Search />
        <TrackList />
      </React.Fragment>
    );
  }
}
