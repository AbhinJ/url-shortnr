import React, { Component } from "react";
import "./css/App.css";
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="container__item landing-page-container">
          <div className="content-wrapper">
            <header className="header">
              <div className="menu-icon header__item">
                <span className="menu-icon__line" />
              </div>
              <h1 className="heading header__item">Shortnr</h1>
            </header>
            <p className="coords">ABHINAV JAIN</p>

            <div className="ellipse-conatiner">
              <h2 className="greeting">Shorten your url!!</h2>

              <div className="ellipse ellipse__outer--thin">
                <div className="ellipse ellipse__orbit" />
              </div>
              <div className="ellipse ellipse__outer--thick" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
