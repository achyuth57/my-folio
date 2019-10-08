import React from "react";
//const baseUrl = "http://localhost:3000/";
const baseUrl = process.env.PUBLIC_URL;
function ServicesComponent() {
  return (
    <React.Fragment>
      <section className="colorlib-services" data-section="services">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">What I do?</span>
              <h2 className="colorlib-heading">
                Here are some of my expertise
              </h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <i className="icon-brush"></i>
                </span>
                <div className="desc">
                  <h3>GRAPHIC DESIGN</h3>
                  <p>
                    Creating logos, brouchers, web templates and all promotional
                    meterials.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-2">
                <span className="icon">
                  <i className="icon-code"></i>
                </span>
                <div className="desc">
                  <h3>PSD to HTML Services</h3>
                  <p>
                    where mock designs are made first and then development of
                    website.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-3">
                <span className="icon">
                  <i className="icon-svg"></i>
                </span>
                <div className="desc">
                  <h3>ReactJS Development</h3>
                  <p>
                    Get speed, simplicity and scalability with UI Layer as we
                    expertise in React JS.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-4">
                <span className="icon">
                  <i className="icon-cog"></i>
                </span>
                <div className="desc">
                  <h3>Web Development</h3>
                  <p>
                    I am using latest technologies to make sure web application
                    is robust, fast loading and responsive.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <i className="icon-layers2"></i>
                </span>
                <div className="desc">
                  <h3>UI Integration</h3>
                  <p>
                    I work closely with your development team to integrate the
                    front end UI into your web application .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-6">
                <span className="icon">
                  <i className="icon-phone3"></i>
                </span>
                <div className="desc">
                  <h3> UI/UX Design Services</h3>
                  <p>
                    Using latest technologies and platforms like HTML5, CSS3 and
                    jQuery, Bootstrap, Rest API etc...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        id="colorlib-counter"
        className="colorlib-counters"
        style={{
          backgroundImage: `url(${baseUrl}/assets/images/bg_2.jpg)`
        }}
      >
        <div className="overlay"></div>
        <div className="colorlib-narrow-content">
          <div className="row"></div>
          <div className="row">
            <div className="col-md-3 text-center animate-box">
              <span
                className="colorlib-counter js-counter"
                data-from="0"
                data-to="309"
                data-speed="5000"
                data-refresh-interval="50"
              >
                6+
              </span>
              <span className="colorlib-counter-label">Experience</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span
                className="colorlib-counter js-counter"
                data-from="0"
                data-to="356"
                data-speed="5000"
                data-refresh-interval="50"
              >
                50+
              </span>
              <span className="colorlib-counter-label">Projects</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span
                className="colorlib-counter js-counter"
                data-from="0"
                data-to="30"
                data-speed="5000"
                data-refresh-interval="50"
              >
                12+
              </span>
              <span className="colorlib-counter-label">Clients</span>
            </div>
            <div className="col-md-3 text-center animate-box">
              <span
                className="colorlib-counter js-counter"
                data-from="0"
                data-to="10"
                data-speed="5000"
                data-refresh-interval="50"
              >
                7+
              </span>
              <span className="colorlib-counter-label">Partners</span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ServicesComponent;
