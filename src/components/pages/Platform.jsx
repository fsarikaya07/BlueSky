import React, { Component } from "react";
import { Header, TopBar, Footer, Loader } from "../layouts/general";
import { Link } from "react-router-dom";

class Platform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: [
        {
          id: 1,
          names: "Why Do I Need To Use Financial ?",
        },
      ],
      titleheading: [
        {
          id: "1",
          title: "Why Do I Need To Use Financial ?",
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
          title: "Why Do I Need To Use Financial ?",
          classicon: "",
          aria: "",
        },
      ],
      list: [
        {
          id: 1,
          text: "Customer experience, which includes the impression the homepage and overall design style give the customers their satisfaction when they interact with the site and perform tasks.",
        },
        {
          id: 2,
          text: "Service-level, which looks at responsiveness and reliability of websites – scores them on how quickly they respond to user commands and such factors as average downtime.",
        },
        {
          id: 3,
          text: "Best practices, such as ease of use, quality, availability and security – site managers must be compliant with data laws requiring them to protect customer information and the integrity of customer accounts.",
        },
      ],
      datablog: [
        {
          id: "1",
          srcimg: "images/blog/blog-post-01.png",
          title: "WHY DO I NEED TO USE FINANCIAL ?",
          time: "11 Jan 2021",
          author: "admin",
          category: "Business",
          comments: "No comment",
          description:
            "Sed facilisis lorem in orci bibendum ullamcorper. Mauris vitae augue elementum, sodales nulla a, semper ligula. Nullam vel enim risus. Integer rhoncus hendrerit sem egestas porttitor. Integer et mi sed dolor eleifend pretium quis ut velit. Nam sit amet arcu feugiat, consequat orci at, ultrices magna ",
          description1:
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
          description2:
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
        },
      ],
      tabcloud: [
        {
          id: "1",
          tablink: "Creative",
        },
        {
          id: "2",
          tablink: "Portfolio",
        },
        {
          id: "3",
          tablink: "ThemeForest",
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
              <div className="row ">
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
          <section className="main-content">
            <div className="container backgroundColorWhite">
              <div className=" ">
                <div className="d-flex justify-content-center align-items-center ">
                  <div className="post-wrap">
                   
                      <article className="main-post" >
                        <div className="entry-post-title">
                          <h2 className="post-title">
                            <Link to="#" title="">
                              What is a Demo Account?
                            </Link>
                          </h2>
                        </div>
                        <div className="featured-post">
                          <Link to="#" title="">
                            <img src="images/bank/finance.jpg" alt="financial" />
                          </Link>
                        </div>
                        <div className="entry-content">
                          <p>
                            {" "}
                            Even if you do not have any investment or trading
                            experience, you too, may want to step into Forex,
                            the world’s largest market with a daily transaction
                            volume of over 5 trillion dollars, and get your own
                            share of it. With a demo account, we offer you the
                            opportunity to test yourself beforehand so that you
                            do not risk your capital while evaluating your
                            strategies and measuring the impact of your
                            predictions. <br/><br/> Demo Account can also be seen as a
                            trial account. Although it works just like a real
                            account does, you can see the results of your
                            transactions and try your strategies without risking
                            your money as you will not be actually funding it.
                            There is no real money transactions in a demo
                            account. Trading is done only as a trial and you can
                            see possible scenarios. <br/><br/> The prices of the pairs
                            offered by the demo account are the same as the real
                            ones. At this point, investors learn about the
                            operation of the market over real price ratios
                            without taking any risks. With the Forex demo
                            account, they can grasp the basic logic of the
                            market in a short time. <br/><br/> Opening a Forex demo account
                            is very simple. After a few minutes of trading, you
                            will receive your demo account login information.
                          </p>{" "}
                          <br />
                         
                        </div>
                      </article>
                    
                  </div>
                  <div className="main-single">
                    <div id="comments" className="comments-area">
                      <div id="respond" className="comment-respond">
                        <h3 id="reply-title" className="comment-reply-title">
                          Leave A Reply{" "}
                          <small>
                            <Link
                              rel="nofollow"
                              id="cancel-comment-reply-link"
                              to=""
                            >
                              Cancel reply
                            </Link>
                          </small>
                        </h3>
                        <form
                          action=""
                          method=""
                          id="commentform"
                          className="clearfix"
                        >
                          <div className="comment-left">
                            <fieldset className="name-container">
                              <input
                                type="text"
                                id="author"
                                placeholder="Name"
                                className="tb-my-input"
                                name="author"
                                tabIndex="1"
                                size="32"
                                aria-required="true"
                              />
                            </fieldset>
                          </div>
                          <fieldset className="email-container">
                            <input
                              type="text"
                              id="email"
                              placeholder="Email"
                              className="tb-my-input"
                              name="email"
                              tabIndex="2"
                              size="32"
                              aria-required="true"
                            />
                          </fieldset>
                          <p className="comment-form-cookies-consent">
                            <input
                              id="wp-comment-cookies-consent"
                              name="wp-comment-cookies-consent"
                              type="checkbox"
                              value="yes"
                            />
                            <label htmlFor="wp-comment-cookies-consent">
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </p>
                          <div className="comment-right">
                            <fieldset className="message">
                              <textarea
                                id="comment-message"
                                placeholder="Comment"
                                name="comment"
                                rows="8"
                                tabIndex="4"
                              ></textarea>
                            </fieldset>
                          </div>
                          <p className="form-submit">
                            <input
                              name="submit"
                              type="submit"
                              id="comment-reply"
                              className="submit"
                              value="Post Comment"
                            />
                            {/* <input type="hidden" name="comment_post_ID" value="225" id="comment_post_ID" />
                                                    <input type="hidden" name="comment_parent" id="comment_parent" value="0" /> */}
                          </p>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <SidebarBlog /> */}
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Platform;
