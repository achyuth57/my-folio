import React from "react";
function AboutComponent() {
  return (
    <div>
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>
                      <strong>Hi I'm Achyuth Kumar Vaddi,</strong> having 6+
                      years of IT experience which includes 1 year of Extensive
                      experience as a React JS Developer and 4 years of
                      Experience as a UI/UX Developer and 2 years of Experience
                      as UI/UX designer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="services color-1">
                    <span className="icon2">
                      <i className="icon-bulb"></i>
                    </span>
                    <h3>Graphic Design</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div className="services color-2">
                    <span className="icon2">
                      <i className="icon-globe-outline"></i>
                    </span>
                    <h3>Web Design</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInTop"
                >
                  <div className="services color-3">
                    <span className="icon2">
                      <i className="icon-data"></i>
                    </span>
                    <h3>Software</h3>
                  </div>
                </div>
                <div
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInBottom"
                >
                  <div className="services color-4">
                    <span className="icon2">
                      <i className="icon-phone3"></i>
                    </span>
                    <h3>Application</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-md-12 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="hire">
                    <h2>
                      I am happy to know you <br />
                      that 70+ projects done sucessfully!
                    </h2>
                    <a href="#" className="btn-hire">
                      Hire me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutComponent;
