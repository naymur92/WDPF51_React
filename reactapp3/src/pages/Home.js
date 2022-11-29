import AboutComponent from '../components/AboutComponent';
import ContactComponent from '../components/ContactComponent';
import BannerComponent from '../components/Home/BannerComponent';
import ServiceComponent from '../components/ServiceComponent';
import ShopComponent from '../components/ShopComponent';

function Home() {
  return (
    <>
      <BannerComponent />
      <ServiceComponent />

      <AboutComponent />
      <ShopComponent />
      {/* <!-- who section start --> */}
      <div className="who_section layout_padding">
        <div className="container">
          <h1 className="who_taital">who we are ?</h1>
          <h4 className="designer_text">DESIGNERS & INNOVATORS</h4>
          <p className="lorem_ipsum_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi utLorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </p>
        </div>
        <div className="get_bt_main">
          <div className="get_bt">
            <a href="http://">Get A Quote</a>
          </div>
        </div>
      </div>
      {/* <!-- who section end --> */}
      {/* <!-- projects section start --> */}
      <div className="projects_section layout_padding">
        <div className="container">
          <h1 className="our_text">Our projects</h1>
          <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
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
                            style={{ width: '100%' }}
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
                            style={{ width: '100%' }}
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
                            style={{ width: '100%' }}
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
                            style={{ width: '100%' }}
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
                            style={{ width: '100%' }}
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
                            style={{ width: '100%' }}
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
                            style={{ width: '100%' }}
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
                            style={{ width: '100%' }}
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
                            style={{ width: '100%' }}
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
              <i className="fa fa-angle-left" />
            </a>
            <a
              className="carousel-control-next"
              href="#main_slider"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-angle-right" />
            </a>
          </div>
        </div>
      </div>
      {/* <!-- projects section end --> */}
      {/* <!-- client section start --> */}
      <div className="clients_section layout_padding">
        <div className="container">
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
              <li data-target="#carouselExampleIndicators" data-slide-to="3" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h1 className="client_text">what is says our clients</h1>
                <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
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
                          ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis
                          nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate
                          velit
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
                          ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis
                          nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate
                          velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <h1 className="client_text">what is says our clients</h1>
                <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
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
                          ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis
                          nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate
                          velit
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
                          ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis
                          nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate
                          velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <h1 className="client_text">what is says our clients</h1>
                <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
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
                          ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis
                          nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate
                          velit
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
                          ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis
                          nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate
                          velit
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <h1 className="client_text">what is says our clients</h1>
                <p className="ipsum_text">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
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
                          ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis
                          nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate
                          velit
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
                          ipsum dolor sit amet, consectetur adipiscing elit, sed veniam, quis
                          nostrud exercitation ullamco laboris nisi ut reprehenderit in voluptate
                          velit
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
      {/* <!-- client section end --> */}
      <ContactComponent />
    </>
  );
}

export default Home;
