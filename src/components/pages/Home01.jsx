import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Footer,
  Header,
  Slider,
  Loader,
  CarouselClient,
  TopBar,
} from "../layouts/general";
import { Featured } from "../layouts/general/featured";

import { Callback } from "../layouts/general/callback";

import { Benefit } from "../layouts/home06";
import Currency from "../layouts/Currency";

class Home01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          names: "Home",
        },
      ],
    };
  }
  render() {
    return (
      <div className="bg-body3">
        <div className="boxed">
          <Loader />
          <TopBar />
          {this.state.headers.map((data) => (
            <Header data={data} key={data.id} />
          ))}
          <Slider />
          {/* <div id="W1696" className='döviz'></div> */}
          
          <Featured />
          <Benefit />
          {/* <Services /> */}
          {/* <Project /> */}
          <Callback />
            <Currency/>
          {/* <Blog /> */}

          <CarouselClient />

          <Footer />
        </div>
      </div>
    );
  }
}

export default withRouter(Home01);
