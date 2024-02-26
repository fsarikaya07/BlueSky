import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopFooter extends Component {
  render() {
    return (
      <div className="widget-infomation">
        <ul className="infomation-footer">
          <li>
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <a href="mailto:info@blueskymarkets.com" title="email">
              info@blueskymarkets.com
            </a>
          </li>
          <li>
            <i className="fa fa-phone" aria-hidden="true"></i>
            <a href="tel:+381637883420" title="phone">
              +381 63 7883420
            </a>
          </li>
          <li>
            <i className="fa fa-map-marker" aria-hidden="true"></i>
            <a
              href="https://www.google.com/maps/search/?api=1&query=St.Vincent+and+Grenadines%2C+P.O.+Box+1570%2C+Kingstown"
              target="_blank"
              rel="noopener noreferrer"
            >
              St.Vincent and Grenadines, P.O. Box 1570, Kingstown
            </a>
          </li>
        </ul>
        {/* <!-- /.infomation-footer --> */}
      </div>
      /* <!-- /.widget-infomation --> */
    );
  }
}

export default TopFooter;
