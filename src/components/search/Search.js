import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../Context";
export default class Search extends Component {
  state = {
    trackTitle: "",
  };
  changeFieldHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  searchLyric = (dispatch, e) => {
    e.preventDefault();
    const { trackTitle } = this.state;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=b2f84be3a1532ec4ed99ae249147773b`
      )
      .then(
        (res) =>
          dispatch({
            type: "SEARCH_LYRIC",
            payload: res.data.message.body.track_list,
          }),
        this.setState({
          trackTitle: "",
        })
      )
      .catch(console.error());
  };
  render() {
    const { trackTitle } = this.state;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <i className="fa fa-dash-music"></i>Search Song
              </h1>
              <p className="lead text-center">Get lyrics</p>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter title"
                    name="trackTitle"
                    value={trackTitle}
                    onChange={this.changeFieldHandler.bind(this)}
                  />
                </div>
                <button
                  className="btn-lg btn-primary btn-block mb-5"
                  onClick={this.searchLyric.bind(this, dispatch)}
                >
                  Get Lyric
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
