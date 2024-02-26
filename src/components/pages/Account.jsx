import React, {  useEffect } from "react";

import { Header, TopBar, Footer, Loader } from "../layouts/general";
import { Link } from "react-router-dom";
import AccBlogComponent from "../layouts/blog/ListBlogComponent";

const AccComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      const url = "https://coinmill-coinmill-currency.p.rapidapi.com/frame.js";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "a1af5e514emshd6286c2311f9d6bp17b8fcjsnd972e66fd8db",
          "X-RapidAPI-Host": "coinmill-coinmill-currency.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const headers = [
    {
      id: 1,
      names: "Blog",
    },
  ];
  const titleheading = [
    {
      id: "1",
      title: "Account Types ",
    },
  ];
  const breadcrumbs = [
    {
      id: 1,
      title: "Home",
      classicon: "fa fa-angle-right",
      aria: "true",
    },
    {
      id: 2,
      title: "Account Types",
      classicon: "",
      aria: "",
    },
  ];

  return (
    <div className="bg-body">
      <div className="boxed">
        <Loader />
        <TopBar />

        {headers.map((data) => (
          <Header data={data} key={data.id} />
        ))}

        <div className="page-title backgroundColorWhite">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="page-title-heading">
                  {titleheading.map((data) => (
                    <h1 key={data.id} className="h1-title">
                      {data.title}
                    </h1>
                  ))}
                </div>
                <ul className="breadcrumbs">
                  {breadcrumbs.map((data) => (
                    <li key={data.id}>
                      <Link to="/" title="">
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
          <div className="container">
            <div className="row">
              <AccBlogComponent />
              {/* <SidebarBlog /> */}
            </div>
          </div>
        </section>
        {/* main-content */}

        <Footer />
      </div>
    </div>
  );
};

export default AccComponent;
