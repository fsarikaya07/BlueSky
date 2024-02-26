import React, { Component } from "react";
import { Link } from "react-router-dom";
class EventBoxs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataEvents: [
        {
          id: 1,
          srcimg: "images/account/swapacc.jpg",
          title: "Swap Free Account",
          description:
            "There are different types of accounts in the Forex industry that appeal to different types of users. One of them is swap-free forex account...",
        },
        {
          id: 2,
          srcimg: "images/account/fixedacc.jpg",
          title: "Fixed Account",
          description:
            "A fixed account is a type of account of which spread rate is subject to a fixed rate without being affected by the market activity... ",
        },
        {
          id: 3,
          srcimg: "images/account/eccnaccount.jpg",
          title: "ECN Account",
          description:
            "ECN Account, which stands for Electronic Communication Network, is seen as one of the biggest innovations in the modern forex market...",
        },
      ],
    };
  }

  render() {
    return (
      <div className="row">
        {this.state.dataEvents.map((data) => (
          <div className="col-md-4" key={data.id}>
            <div className="imagebox-item">
              <div className="imagebox style1">
                <div className="imagebox-image">
                  <img src={data.srcimg} alt="financial" />
                </div>
                {/* <!-- /.imagebox-image --> */}

                <div className="imagebox-title">
                  <h3>
                    <Link
                      to="/account"
                      onClick={() => {
                        window.location.href = "/account";
                      }}
                      title=""
                    >
                      {data.title}
                    </Link>
                  </h3>
                </div>
                {/* <!-- /.iamgebox-title --> */}
                <div className="imagebox-content">
                  <div className="imagebox-desc">{data.description}</div>
                  <div className="imagebox-button">
                    <Link
                      to="/account"
                      onClick={() => {
                        window.location.href = "/account";
                      }}
                      title=""
                    >
                      read more
                    </Link>
                  </div>
                </div>
                {/* <!-- /.imagebox-content --> */}
              </div>
              {/* <!-- /.imagebox --> */}
            </div>
            {/* <!-- /.imagebox-item --> */}
          </div>
        ))}
      </div>
    );
  }
}

export default EventBoxs;
