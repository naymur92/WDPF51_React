import BannerComponent from "../components/Home/BannerComponent";
import ServiceComponent from "../components/Home/ServiceComponent";

function Home() {
  return (
    <>
      <BannerComponent />
      <ServiceComponent />

      {/*<!-- about section start --> */}
      <div className="about_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="about_text">About Us</h1>
              <p className="lorem_text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believableThere are many variations of passages of
                Lorem Ipsum available, but the majority have able
              </p>
              <div className="read_bt1">
                <a href="#">Read More</a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image_1">
                <img src="assets/images/img-1.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- about section end --> */}
      {/*<!-- furnitures section start --> */}
      <div className="furnitures_section layout_padding">
        <div className="container">
          <h1 className="our_text">OUR furnitures</h1>
          <p className="ipsum_text">
            There are many variations of passages of Lorem Ipsum{" "}
          </p>
          <div className="furnitures_section2 layout_padding">
            <div className="row">
              <div className="col-md-6">
                <div className="container_main">
                  <img
                    src="assets/images/img-2.png"
                    alt="Avatar"
                    className="image"
                  />
                  <div className="overlay">
                    <a href="#" className="icon" title="User Profile">
                      <i className="fa fa-search"></i>
                    </a>
                  </div>
                </div>
                <h3 className="temper_text">
                  Tempor incididunt ut labore et dolore
                </h3>
                <p className="dololr_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi{" "}
                </p>
              </div>
              <div className="col-md-6">
                <div className="container_main">
                  <img
                    src="assets/images/img-3.png"
                    alt="Avatar"
                    className="image"
                  />
                  <div className="overlay">
                    <a href="#" className="icon" title="User Profile">
                      <i className="fa fa-search"></i>
                    </a>
                  </div>
                </div>
                <h3 className="temper_text">
                  Tempor incididunt ut labore et dolore
                </h3>
                <p className="dololr_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- furnitures section end --> */}
      {/*<!-- who section start --> */}
      <div className="who_section layout_padding">
        <div className="container">
          <h1 className="who_taital">who we are ?</h1>
          <h4 className="designer_text">DESIGNERS & INNOVATORS</h4>
          <p className="lorem_ipsum_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
        <div className="get_bt_main">
          <div className="get_bt">
            <a href="#">Get A Quote</a>
          </div>
        </div>
      </div>
      {/*<!-- who section end --> */}
      {/*<!-- projects section start --> */}
      <div className="projects_section layout_padding">
        <div className="container">
          <h1 className="our_text">Our projects</h1>
          <p className="ipsum_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <div id="main_slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="projects_section2">
                  <div className="container_main2">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="container_main1">
                          <img
                            src="assets/images/img-4.png"
                            alt="Avatar"
                            className="image"
                            style={{ width: "100%" }}
                          />
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="container_main1">
                          <img
                            src="assets/images/img-5.png"
                            alt="Avatar"
                            className="image"
                            style={{ width: "100%" }}
                          />
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="container_main1">
                          <img
                            src="assets/images/img-6.png"
                            alt="Avatar"
                            className="image"
                            style={{ width: "100%" }}
                          />
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="projects_section2">
                  <div className="container_main1">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="container_main1">
                          <img
                            src="assets/images/img-4.png"
                            alt="Avatar"
                            className="image"
                            style={{ width: "100%" }}
                          />
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="container_main1">
                          <img
                            src="assets/images/img-5.png"
                            alt="Avatar"
                            className="image"
                            style={{ width: "100%" }}
                          />
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="container_main1">
                          <img
                            src="assets/images/img-6.png"
                            alt="Avatar"
                            className="image"
                            style={{ width: "100%" }}
                          />
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="projects_section2">
                  <div className="container_main1">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="container_main1">
                          <img
                            src="assets/images/img-4.png"
                            alt="Avatar"
                            className="image"
                            style={{ width: "100%" }}
                          />
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="container_main1">
                          <img
                            src="assets/images/img-5.png"
                            alt="Avatar"
                            className="image"
                            style={{ width: "100%" }}
                          />
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="container_main1">
                          <img
                            src="assets/images/img-6.png"
                            alt="Avatar"
                            className="image"
                            style={{ width: "100%" }}
                          />
                          <h1 className="modern_text">Modern home designe</h1>
                          <div className="middle">
                            <div className="text">VIEW MORE</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#main_slider"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-angle-left"></i>
            </a>
            <a
              className="carousel-control-next"
              href="#main_slider"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
      {/*<!-- projects section end --> */}
      {/*<!-- client section start --> */}
      <div className="clients_section layout_padding">
        <div className="container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h1 className="client_text">what is says our clients</h1>
                <p className="ipsum_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <div className="clients_section2 layout_padding">
                  <div className="client_1">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7">
                          <img src="assets/images/img-7.png" />
                        </div>
                        <div className="quote_icon">
                          <img src="assets/images/quote-icon.png" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">loksans</h1>
                        <p className="dolor_ipsum_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="client_2">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7">
                          <img src="assets/images/img-8.png" />
                        </div>
                        <div className="quote_icon">
                          <img src="assets/images/quote-icon.png" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">loksans</h1>
                        <p className="dolor_ipsum_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <h1 className="client_text">what is says our clients</h1>
                <p className="ipsum_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <div className="clients_section2 layout_padding">
                  <div className="client_1">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7">
                          <img src="assets/images/img-7.png" />
                        </div>
                        <div className="quote_icon">
                          <img src="assets/images/quote-icon.png" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">loksans</h1>
                        <p className="dolor_ipsum_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="client_2">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7">
                          <img src="assets/images/img-8.png" />
                        </div>
                        <div className="quote_icon">
                          <img src="assets/images/quote-icon.png" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">loksans</h1>
                        <p className="dolor_ipsum_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <h1 className="client_text">what is says our clients</h1>
                <p className="ipsum_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <div className="clients_section2 layout_padding">
                  <div className="client_1">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7">
                          <img src="assets/images/img-7.png" />
                        </div>
                        <div className="quote_icon">
                          <img src="assets/images/quote-icon.png" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">loksans</h1>
                        <p className="dolor_ipsum_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="client_2">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7">
                          <img src="assets/images/img-8.png" />
                        </div>
                        <div className="quote_icon">
                          <img src="assets/images/quote-icon.png" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">loksans</h1>
                        <p className="dolor_ipsum_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <h1 className="client_text">what is says our clients</h1>
                <p className="ipsum_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                </p>
                <div className="clients_section2 layout_padding">
                  <div className="client_1">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7">
                          <img src="assets/images/img-7.png" />
                        </div>
                        <div className="quote_icon">
                          <img src="assets/images/quote-icon.png" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">loksans</h1>
                        <p className="dolor_ipsum_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="client_2">
                    <div className="row">
                      <div className="col-sm-3">
                        <div className="image_7">
                          <img src="assets/images/img-8.png" />
                        </div>
                        <div className="quote_icon">
                          <img src="assets/images/quote-icon.png" />
                        </div>
                      </div>
                      <div className="col-sm-9">
                        <h1 className="loksans_text">loksans</h1>
                        <p className="dolor_ipsum_text">
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          veniam, quis nostrud exercitation ullamco laboris nisi
                          ut reprehenderit in voluptate velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- client section end --> */}
      {/*<!-- contact section start --> */}
      <div className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="contact_text">CONTACT US</h1>
              <div className="mail_sectin">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Name"
                  name="Name"
                />
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Email"
                  name="Name"
                />
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Phone Number"
                  name="Name"
                />
                <textarea
                  className="massage-bt"
                  placeholder="Massage"
                  rows="5"
                  id="comment"
                  name="Massage"
                ></textarea>
                <div className="send_bt">
                  <a href="#">SEND</a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="image_9">
                <img src="assets/images/img-9.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!-- contact section end --> */}
    </>
  );
}

export default Home;
