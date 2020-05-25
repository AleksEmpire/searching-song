import React, { Component } from "react";
import Track from "../track/Track";
import Spinner from "../spinner/Spinner";
import { Consumer } from "../../Context";
export default class TrackList extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { track_list, heading } = value;

          if (track_list.length === 0 || track_list === undefined) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {track_list.map((item) => (
                    <Track key={item.track.track_id} track={item.track} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}
