import React, { Component } from "react";
import { Header, TopBar, Footer, Loader } from "../layouts/general";
import { Link } from "react-router-dom";


class Contact01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          names: "Blog",
        },
      ],
      titleheading: [
        {
          id: "1",
          title: "Contact",
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
          title: "Contact",
          classicon: "",
          aria: "",
        },
      ],
      contactinfo: [
        {
          id: "1",
          title: "Address",
          info: "5 floor, First St Vincent Bank Ltd Building, James street, Kingstown, St.Vincent and Grenadines, P.O. Box 1570, Kingstown ",
        },
        {
          id: "2",
          title: "Phone number",
          info: "Call us: 382 69 520 543",
        },
        {
          id: "3",
          title: "E-mail address",
          info: "info@blueskymarkets.com",
        },
      ],
    };
  }
  render() {
    return (
      <div className="bg-body">
        <div className="boxed">
          <Loader />
          <TopBar />
          {this.state.headers.map((data) => (
            <Header data={data} key={data.id} />
          ))}

          <div className="page-title backgroundColorWhite">
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

          <section className="flat-row pd-contact-v1 ">
            <div className="container backgroundColorWhite">
              <div className="row">
                <div className="col-md-4">
                  <div className="contact-info">
                    {this.state.contactinfo.map((data) => (
                      <div className="info info-address" key={data.id}>
                        <div className="title">{data.title}</div>
                        <p>{data.info}</p>
                      </div>
                    ))}
                  </div>
                </div>

                
                <div className="col-md-8">
                                    <div className="flat-form-info">
                                        <form id="contactform"  method="post" action="./contact/contact-process.php" noValidate="novalidate" className="form-info">
                                            <div className="one-half v3">
                                                <p className="input-info"><input type="text" name="name" id="name"  placeholder="Name" required="required" /></p>
                                                <p className="input-info"><input type="email" name="email" id="email"  placeholder="Email" required="required" /></p>
                                                <p className="input-info"><input type="text" name="subject" id="subject"  placeholder="Subject" required="required" /></p>
                                                <p className="input-info"><button type="submit" className="submit">Send Message</button></p>
                                            </div>
                                            <div className="one-half v4">
                                                <p className="input-info"><textarea id="message-contact" name="message" placeholder="Message" required="required"></textarea></p>
                                            </div>
                                        </form>
                                    </div>
                                </div> 

                
              </div>
            </div>
          </section>

          <section className="" style={{ width: '100%' }}>
           
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Contact01;
