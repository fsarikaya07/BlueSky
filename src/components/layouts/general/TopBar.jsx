import React, { Component } from "react";
import { Link } from "react-router-dom";
class TopBar extends Component {
  render() {
    return (
      <div className="top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="flat-infomation">
                <li className="phone">
                  Call us:{" "}
                  <a href="tel:+381637883420" title="phone">
                    +381 63 7883420
                  </a>
                </li>
                <li className="email">
                  Email:{" "}
                  <a href="mailto:info@blueskymarkets.com" title="email">
                    info@blueskymarkets.com
                  </a>
                </li>
              </ul>
              <div className="flat-questions">
                {/* <Link to="/contact" title="" className="questions">
                  Have any questions?
                </Link> */}

                <a href="#" target="_blank"  >
                  <i
                    className="fa-brands fa-instagram fa-xl"
                    style={{ color: "#74C0FC" }}
                  ></i>
                </a>
                <a href="#" target="_blank" style={{marginRight:10,marginLeft:10}}  >
                  <i
                    className="fa-brands fa-twitter fa-xl "
                    style={{ color: "#74C0FC" }}
                  ></i>
                </a>

                <Link to="/contact" title="" className="appointment">
                  GET AN APPOINTMENT
                </Link>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopBar;
