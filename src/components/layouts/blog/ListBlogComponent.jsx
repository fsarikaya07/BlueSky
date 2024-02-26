import React, { Component } from "react";


class AccBlogComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: [
        {
          id: 1,
          numb: "1",
          class: "active",
        },
        {
          id: 2,
          numb: "2",
        },
        {
          id: 3,
          numb: ">",
        },
      ],
    };
  }
  render() {
    return (
      <div className="col-md-12">
        <div className="post-wrap">
          {/* /// Text Area */}

          <div className="site-section py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="heading-39101 mb-5">
                    <span className="backdrop ">BLUESKY</span>
                    <h4 className="subtitle-39191">Account</h4>
                    <h1 className="font-weight-bold">Swap Free Account</h1>
                  </div>
                  <p>
                    {" "}
                    There are different types of accounts in the Forex industry
                    that appeal to different types of users. One of them is
                    swap-free forex account.It is a deal between two parties to
                    exchange two currencies at a certain exchange rate at a
                    certain time in the future. <br />
                    The Swap-Free account, also known as the Islamic Account, is
                    at least as profitable as other types of accounts. The only
                    difference between a swap-free account and a regular account
                    is that there is no interest fee.
                    <br />
                    In Forex markets, swap is referred to as overnight carrying
                    cost/overnight rate. Interest differences between two
                    countries’ currencies are taken into account when
                    calculating Forex swap rates.
                    <br /> If you are among the investors who do not want to
                    earn interest due to your religious sensitivities or do not
                    want to incur costs due to interest, the Swap-Free Account
                    option may be a better choice for you. With the swap-free
                    account, you can move the positions you have opened to the
                    next day without paying an interest fee.
                  </p>
                </div>
                <div className="col-md-6" data-aos="fade-right">
                  <img
                    src="images/account/swapacc.jpg"
                    alt="Image"
                    className="animated bounceInRight img-fluid img-blog "
                    style={{ animationDelay: "0.5s" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* /// Text Area */}
          <div className="site-section py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 order-md-1 " data-aos="fade-left">
                  <img
                    src="images/account/fixedacc.jpg"
                    alt="Image"
                    className="animated bounceInLeft img-fluid img-blog"
                    style={{ animationDelay: "1s" }}
                  />
                </div>
                <div className="col-md-5 order-md-2 ml-auto">
                  <div className="heading-39101 mb-5">
                    <span className="backdrop text-info">BLUESKY</span>
                    <h4 className="subtitle-39191">Account</h4>
                    <h1 className="font-weight-bold">Fixed Account</h1>
                  </div>
                  <p>
                    A fixed account is a type of account of which spread rate is
                    subject to a fixed rate without being affected by the market
                    activity. As it offers the investor the opportunity to
                    invest without being exposed to the unexpected and frequent
                    fluctuations in the market, you don’worry about your
                    investment. <br /> <br /> Although it is affected by the
                    sharp fluctuations in the market from time to time, when the
                    market movements return to normal, the spread rates will
                    return to the range you settled. Unless sharp decreases in
                    liquidity and sharp volatility rises are seen in fixed forex
                    accounts, very impressive changes are not common. <br />{" "}
                    <br /> One of the account types we offer you as Blue Sky
                    Markets is the fixed account. Unlike the account types with
                    dynamic spread system, which are affected even by the
                    unsharp ups and downs of the market, you can make longer
                    term and predictable investment movements with the fixed
                    account.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* /// Text Area */}
          <div className="site-section py-5  ">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="heading-39101 mb-5">
                    <span className="backdrop text-info">BLUESKY</span>
                    <h4 className="subtitle-39191">Account</h4>
                    <h1 className="font-weight-bold">ECN Account</h1>
                  </div>
                  <p>
                    ECN Account, which stands for Electronic Communication
                    Network, is seen as one of the biggest innovations in the
                    modern forex market. <br /> ECN account is among the first
                    choices of investors with its transparency, practicality and
                    advantages. With direct access to liquidity collateral and
                    automatic matching of order requests, it is defined as the
                    step of the future for the vast majority of forex investors
                    globally and the bridge that connects the investor to it.{" "}
                    <br /> An ECN broker takes advantage of commission fees per
                    transaction. <br /> ECN account is one of the account types
                    offered by Blue Sky Markets. With this account type, you can
                    make instant and secure forex trading with the support of
                    trading algorithms, expert consultants and risk management
                    systems. <br />
                    Let us choose the most suitable account for you with our
                    approach that we prioritize service, start earning with us
                    without wasting time!
                  </p>
                </div>
                <div className="col-md-6" data-aos="fade-right">
                  <img
                    src="images/account/swapacc.jpg"
                    alt="Image"
                    className="animated bounceInRight img-fluid img-blog"
                    style={{ animationDelay: "1.5s" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccBlogComponent;
