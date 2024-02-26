import React, { Component } from "react";
import { Link } from "react-router-dom";
class UsefulLink extends Component {
  render() {
    return (
      <div className="widget widget-services">
        <ul className="one-half first">
          <li>
            <Link
              to="/about-v1"
              onClick={() => {
                window.location.href = "/";
              }}
              title=""
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about-v2"
              onClick={() => {
                window.location.href = "/about";
              }}
              title=""
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/about-v3"
              onClick={() => {
                window.location.href = "/account";
              }}
              title=""
            >
              Account
            </Link>
          </li>
        </ul>
        {/* <!-- /.one-half --> */}
        <ul className="one-half">
          <li>
            <Link
              to="/services-v1"
              onClick={() => {
                window.location.href = "/money-deposit";
              }}
              title=""
            >
              Money Deposit/Withdrawal
            </Link>
          </li>
          <li>
            <Link
              to="/services-v2"
              onClick={() => {
                window.location.href = "/platforms";
              }}
              title=""
            >
              Platforms
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio-v1"
              onClick={() => {
                window.location.href = "/Contact";
              }}
              title=""
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* <!-- /.one-half --> */}
      </div>
      /* <!-- /.widget-services --> */
    );
  }
}

export default UsefulLink;
