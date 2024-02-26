import React, { Component } from "react";
import AboutSlider from "../general/AboutSlider";
class BoxView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgslide: [
        {
          id: "1",
          srcimg: "images/BLUESKY/Bluesky.jpg",
        },
        {
          id: "2",
          srcimg: "images/BLUESKY/Bluesky.jpg",
        },
      ],
      content: [
        {
          id: "1",
          title: "Want to know more about Finance Plus?",
          description:
            "In your life, you may have many times facing financial issues. It’s good if you know how to handle it by yourself and have enough time to take care of it. In other cases, it’s time you get a financial consulting service. And the article below will show you those cases.quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
        },
      ],
      blogtimeline: [
        {
          id: "1",
          year: "2012",
          title: "Start with a small service",
          description:
            "This was the time when we started our company. We had no idea how far we would go, we weren’t even sure that we would be able to survive for a few years. What drove us to start the company was the understanding that we could provide a service no one else was providing.",
        },
        {
          id: "2",
          year: "2013",
          title: "Website Design, Seo Makerting Online",
          description:
            "This was the time when we started our company. We had no idea how far we would go, we weren’t even sure that we would be able to survive for a few years. What drove us to start the company was the understanding that we could provide a service no one else was providing.",
        },
        {
          id: "3",
          year: "2014",
          title: "Developer WordPress Themeforest.net",
          description:
            "This was the time when we started our company. We had no idea how far we would go, we weren’t even sure that we would be able to survive for a few years. What drove us to start the company was the understanding that we could provide a service no one else was providing.",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div className="flexslider s2">
          <div className="flat-slides">
            <ul className="slides">
            <AboutSlider/>
            </ul>
          </div>
        </div>
        <div className="box-content backgroundColorWhite">
          <div className="title">Blue Sky Markets is a broker company operating with a St Vincent license since 2017.</div>
          <p >
            Blue Sky Markets team is here to provide you a service above world
            standards. With more than 140 products and several account options
            tailored for each investor's needs, we offer satisfaction guarantee
            to all our investors who want to take part in Forex markets. <br />
            <br />
            Featuring the MetaTrader4 and MetaTrader5 trading platforms, we
            provide our customers with a 5/24 service with a leverage ratio of
            1:200. <br />
            <br /> We produce special solutions for our customers, who are just
            starting to trade in the markets and who are traders in the forex
            markets for a long time. Our expert investment consultants and
            customer service team are on your side to make sure your trading
            operates in a safe way.
            <br />
            <br /> Investor friendly service understanding, fast
            deposit/withdrawal opportunities and last minute developments
            regarding the market are all just a few of the opportunities that
            Blue Sky Markets customers will benefit from. You can be sure that
            our team will provide all necessary support and will do whatever it
            takes to get a more comfortable and secure investment experience!
          </p>
          <div className="dividers dividers-bc-v4"></div>
        </div>

     
      </div>
    );
  }
}

export default BoxView;
