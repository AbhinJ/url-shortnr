import React, { Component } from "react";
import "./css/App.css";
import * as actions from "../actions";
import { connect } from "react-redux";
import _ from "lodash";
class App extends Component {
  state = { url: "" };
  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchURL(this.state.url);
    this.setState({ url: "" });
  };
  handleChange = e => {
    this.setState({ url: e.target.value });
  };
  renderUrl() {
    if (!this.props.url) {
      return <div>Your Shortend Url Will Appear here</div>;
    }
    return <div>{this.props.url.shortUrl}</div>;
  }
  render() {
    return (
      <div className="container__item landing-page-container">
        <div className="content-wrapper">
          <header className="header">
            <div className="menu-icon header__item">
              <span className="menu-icon__line" />
            </div>
            <h1 className="heading header__item">Shortnr</h1>
          </header>
          <p className="coords">ABHINAV JAIN</p>
          <div className="url">
            <h2 className="greeting">url!!</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                className="input"
                onChange={this.handleChange}
                value={this.state.url}
                placeholder="Enter Url"
              />
              <button type="submit">Shorten</button>
              {this.renderUrl()}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ url }) {
  return { url };
}

export default connect(
  mapStateToProps,
  actions
)(App);
