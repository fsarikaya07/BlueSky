import React, { Component } from "react";

class TextMainFooter extends Component {
  render() {
    return (
      <div className="widget widget-text">
        <p>
          <img
            src="images/BLUESKY/blueskylogo.png"
            alt="bluesky"
            width={77}
            height={29}
            data-retina="images/BLUESKY/blueskylogo.png"
            data-width={87}
            data-height={29}
          />
        </p>
        <p>
          Featuring the MetaTrader4 and MetaTrader5 trading platforms, we
          provide our customers with a 5/24 service with a leverage ratio of
          1:200.
        </p>
      </div>
      /* <!-- /.widget-text --> */
    );
  }
}

export default TextMainFooter;
