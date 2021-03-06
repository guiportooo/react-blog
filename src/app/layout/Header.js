import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  state = {
    isActive: false
  };

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }));
  };

  render() {
    return (
      <nav
        className="navbar"
        aria-label="main navigation"
        style={{
          borderBottom: "solid 1px #dddddd"
        }}
      >
        <div className="navbar-brand">
          <NavLink className="navbar-item" to="/" activeClassName="is-active">
            <img
              style={{
                borderTopLeftRadius: "50%",
                borderTopRightRadius: "50%",
                borderBottomLeftRadius: "50%",
                borderBottomRightRadius: "50%",
                marginRight: 15
              }}
              src="https://rangle.io/images/services/react-01.svg"
              width="30px"
              alt=""
            />
            <span>Guilherme Porto</span>
          </NavLink>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div
          className={
            this.state.isActive ? "navbar-menu is-active" : "navbar-menu"
          }
        >
          <div className="navbar-start">
            <NavLink
              className="navbar-item"
              to="/blog"
              activeClassName="is-active"
            >
              <span
                className="icon has-text-primary"
                style={{ marginRight: 5 }}
              >
                <i className="fas fa-code" />
              </span>
              Code Blog
            </NavLink>
            <NavLink
              className="navbar-item"
              to="/medium"
              activeClassName="is-active"
            >
              <span className="icon" style={{ marginRight: 5 }}>
                <i className="fab fa-lg fa-medium" />
              </span>
              Medium
            </NavLink>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Projects</a>
              <div className="navbar-dropdown">
                <a className="navbar-item">Overview</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">This Site</a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="https://github.com/guiportooo">
              <span className="icon">
                <i className="fab fa-lg fa-github" />
              </span>
            </a>
            <a className="navbar-item" href="https://twitter.com/guiportooo">
              <span className="icon has-text-info" style={{ color: "#0084FF" }}>
                <i className="fab fa-lg fa-twitter" />
              </span>
            </a>
            <a
              className="navbar-item"
              href="https://www.linkedin.com/in/guilhermeporto/"
            >
              Resume
              <span
                className="icon"
                style={{ color: "#0077B5", marginLeft: 5 }}
              >
                <i className="fab fa-lg fa-linkedin" />
              </span>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
