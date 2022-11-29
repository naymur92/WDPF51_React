import React from 'react';

function AboutComponent() {
  return (
    <div className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="about_text">About Us</h1>
            <p className="lorem_text">
              There are many variations of passages of Lorem Ipsum available, but the majority have
              suffered alteration in some form, by injected humour, or randomised words which
              don&quot;t look even slightly believableThere are many variations of passages of Lorem
              Ipsum available, but the majority have able
            </p>
            <div className="read_bt1">
              <a href="http://">Read More</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image_1">
              <img src="assets/images/img-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
