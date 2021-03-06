import React, { Component } from "react";
import "../styles/owl.carousel.min.css";
import "../styles/owl.theme.default.min.css";
import "../styles/flexslider.css";

//const baseUrl = "http://localhost:3000/";
const baseUrl = process.env.PUBLIC_URL;

export class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddClass: false
    };
  }

  componentDidMount() {
    window["sliderMain"]();
    window["fullHeight"]();
  }

  render() {
    let btnClass = ["animated", "fadeInUp"];
    btnClass = btnClass.join(" ");
    return (
      <div>
        <React.Fragment>
          <section
            id="colorlib-hero"
            className="js-fullheight"
            data-section="home"
          >
            <div className="flexslider js-fullheight">
              <ul className="slides">
                <li
                  style={{
                    backgroundImage: `url(${baseUrl}/assets/images/bg_1.jpg)`
                  }}
                >
                  <div className="overlay"></div>
                  <div className="container-fluid">
                    <div className="row">
                      <div
                        className={`col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text ${
                          this.state.isAddClass ? btnClass : ""
                        }`}
                      >
                        <div className="slider-text-inner js-fullheight">
                          <div className="desc">
                            <h1>
                              Hi! <br />
                              I'm Achyuth
                            </h1>
                            <h2>
                              I am a Web Developer located in Hyderabad,
                              Telangana. I currently work as a UI Developer for
                              Wipro, located in Hyderabad. I am looking to take
                              on more work and to increase my skills as a Web
                              Developer. &nbsp;
                              <a href="/contact" target="_blank">
                                Contact Me
                              </a>
                            </h2>
                            <p>
                              <a
                                href={`${baseUrl}/assets/docs/Achyuth_Developer_React.docx`}
                                className="btn btn-primary btn-learn"
                              >
                                Download CV <i className="icon-download4"></i>
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  style={{
                    backgroundImage: `URL(${baseUrl}/assets/images/bg_2.jpg)`
                  }}
                >
                  <div className="overlay"></div>
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                        <div className="slider-text-inner">
                          <div className="desc">
                            <h1>
                              I am <br />a Developer
                            </h1>
                            <h2>click below to see my works !</h2>
                            <p>
                              <a
                                href="/work"
                                className="btn btn-primary btn-learn"
                              >
                                View Portfolio
                                <i className="icon-briefcase3"></i>
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </React.Fragment>
      </div>
    );
  }
}

export default HeaderComponent;
