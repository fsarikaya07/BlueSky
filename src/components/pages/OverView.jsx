import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Header, TopBar , Footer, Loader } from '../layouts/general';
import Overview from "../layouts/aboutus/Overview";
class OverView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    names: 'Pages'
                }
            ],
            dataBanner: [
                {
                    id: 1,
                    classename01: 'flat-title-page parallax parallax7 style3',
                    classename02: 'container wrap-title-page ',
                    links: '/about-us',
                    names: 'About Us'
                }
            ]
        }
    }
    render() {
        return (
            <div className="bg-body3">
                <div className="boxed">
                    <Loader />
                    <TopBar />
                    {
                        this.state.headers.map(data => (
                            <Header data={data} key={data.id}/>
                        ))
                    }

                    <div className="page-title backgroundColorWhite">
                        <div className="container">
                            <div className="row ">
                                <div className="col-md-12">
                                    <div className="page-title-heading">
                                        <h1 className="h1-title">Company Profile</h1>
                                        <h6>Blue Sky Markets team is here to provide you a service above world standards.</h6>
                                    </div>
                                    <ul className="breadcrumbs">
                                        <li><Link to="#" title="">Home<i className="fa fa-angle-right" aria-hidden="true"></i></Link></li>
                                        <li><Link to="#" title="">About</Link></li>
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Overview />
                    


                    <Footer />
                </div>
            </div>
        );
    }
}

export default OverView;