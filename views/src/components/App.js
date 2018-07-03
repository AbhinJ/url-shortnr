import React, { Component } from "react";
import "./css/App.css";
class App extends Component {
  state = { url: "" };
  handleSubmit = e => {
    e.preventDefault();
    //Action Creater
    this.setState({ url: "" });
  };
  handleChange = e => {
    this.setState({ url: e.target.value });
  };
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
          <div class="url">
            <h2 className="greeting">url!!</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                className="input"
                onChange={this.handleChange}
                value={this.state.url}
                placeholder="Enter Url"
              />
              <button type="submit">Shorten</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
