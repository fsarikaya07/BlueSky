import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Header, TopBar, Footer, Loader } from "../layouts/general";

class RiskManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          names: "Pages",
        },
      ],
      titleheading: [
        {
          id: "1",
          title: "Money Deposit/Withdrawal",
        },
      ],
      breadcrumbs: [
        {
          id: 1,
          title: "Home",
          classicon: "fa fa-angle-right",
          aria: "true",
        },
        {
          id: 2,
          title: "Money Deposit/Withdrawal",
          classicon: "fa fa-angle-right",
          aria: "",
        },
      ],
    };
  }
  render() {
    return (
      <div className="bg-body3 overflow-hidden">
        <div className="boxed">
          <Loader />
          <TopBar />
          {this.state.headers.map((data) => (
            <Header data={data} key={data.id} />
          ))}
          <div className="page-title backgroundColorWhite ">
            <div className="container ">
              <div className="row">
                <div className="col-md-12">
                  <div className="page-title-heading">
                    {this.state.titleheading.map((data) => (
                      <h1 key={data.id} className="h1-title">
                        {data.title}
                      </h1>
                    ))}
                  </div>
                  <ul className="breadcrumbs">
                    {this.state.breadcrumbs.map((data) => (
                      <li key={data.id}>
                        <Link to="#" title="">
                          {data.title}
                          <i
                            className={data.classicon}
                            aria-hidden={data.aria}
                          ></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="container  pt-2">
            <div className="row">
              <div className="post-wrap ">
                <div className="site-section marginTop">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <div className="heading-39101 mb-5">
                          <span className="backdrop text-info">BLUESKY</span>
                          <h4 className="subtitle-39191">
                            Money Deposit/Withdrawal
                          </h4>
                          <h1 className="font-weight-bold">Bank Transfer</h1>
                        </div>
                        <p>
                          As Blue Sky Markets, we offer you various deposit and
                          withdrawal options on your accounts. The first is bank
                          transfer. You do not need to go beyond the money
                          transfer methods you are used to while starting your
                          investment transactions. You can fund with the
                          transfer you will make through your bank and start
                          investing.
                        </p>
                      </div>
                      <div className="col-md-6" data-aos="fade-right">
                        <img
                          src="images/bank/transfer.jpg"
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
                      <div
                        className="col-md-6 order-md-1 "
                        data-aos="fade-left"
                      >
                        <img
                          src="images/bank/creditcard.jpg"
                          alt="Image"
                          className="animated bounceInLeft img-fluid img-blog"
                          style={{ animationDelay: "1s" }}
                        />
                      </div>
                      <div className="col-md-5 order-md-2 ml-auto">
                        <div className="heading-39101 mb-5">
                          <span className="backdrop text-info">BLUESKY</span>
                          <h4 className="subtitle-39191">
                            Money Deposit/Withdrawal
                          </h4>
                          <h1 className="font-weight-bold">Credit Card</h1>
                        </div>
                        <p>
                          Our second payment method is credit card. Payments
                          made by credit card, which is one of the most
                          preferred and trusted methods of Forex users
                          worldwide, are both easy and fast. We can easily say
                          that transfers made by credit card take place within a
                          few minutes. While sending money with a credit card,
                          you can make transactions through our website
                          practically without even needing a customer
                          representative.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default RiskManagement;
