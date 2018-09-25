import React from "react";

export default () => {
  return (
    <nav className="navbar navbar-transparent navbar-absolute">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a href="" className="navbar-brand">
            Dev
          </a>
        </div>

        <div className="collapse navbar-collapse" id="navigation-example">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#pablo">home</a>
            </li>
            <li>
              <a href="#pablo">About Us</a>
            </li>
            <li>
              <a href="#pablo">Product</a>
            </li>
            <li>
              <a href="#pablo">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
