import React from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  return (
    <>
      {/* <!-- Page Header Section Start Here --> */}
      <section className="page-header bg_img padding-tb">
        <div className="overlay" />
        <div className="container">
          <div className="page-header-content-area">
            <h4 className="ph-title">Products Page</h4>
            <ul className="agri-ul">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="shop">Products</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Page Header Section Ending Here --> */}

      {/* <!-- shop page Section Start Here --> */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="section-wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-12">
                <article>
                  <div className="shop-title d-flex flex-wrap justify-content-between">
                    <p>Showing 01 - 12 of 139 Results</p>
                    <div className="product-view-mode">
                      <a className="active" data-target="grids">
                        <i className="icofont-ghost" />
                      </a>
                      <a data-target="lists">
                        <i className="icofont-listing-box" />
                      </a>
                    </div>
                  </div>

                  <div className="shop-product-wrap grids row justify-content-center">
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="product-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/10.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/10.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Text Here</a>
                          </h6>
                          <h6>$200</h6>
                        </div>
                      </div>
                      <div className="product-list-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/10.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/10.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Title Here</a>
                          </h6>
                          <h6>$200</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="product-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/11.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/11.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Text Here</a>
                          </h6>
                          <h6>$200</h6>
                        </div>
                      </div>
                      <div className="product-list-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/11.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/11.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Title Here</a>
                          </h6>
                          <h6>$200</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="product-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/12.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/12.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Text Here</a>
                          </h6>
                          <h6>$200</h6>
                        </div>
                      </div>
                      <div className="product-list-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/12.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/12.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Title Here</a>
                          </h6>
                          <h6>$200</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="product-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/13.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/13.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Text Here</a>
                          </h6>
                          <h6>$200</h6>
                        </div>
                      </div>
                      <div className="product-list-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/13.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/13.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Title Here</a>
                          </h6>
                          <h6>$200</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="product-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/14.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/14.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Text Here</a>
                          </h6>
                          <h6>$200</h6>
                        </div>
                      </div>
                      <div className="product-list-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/14.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/14.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Title Here</a>
                          </h6>
                          <h6>$200</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="product-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/15.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/15.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Text Here</a>
                          </h6>
                          <h6>$200</h6>
                        </div>
                      </div>
                      <div className="product-list-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/15.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/15.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Title Here</a>
                          </h6>
                          <h6>$200</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="product-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/16.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/16.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Text Here</a>
                          </h6>
                          <h6>$200</h6>
                        </div>
                      </div>
                      <div className="product-list-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/16.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/16.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Title Here</a>
                          </h6>
                          <h6>$200</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="product-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/17.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/17.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Text Here</a>
                          </h6>
                          <h6>$200</h6>
                        </div>
                      </div>
                      <div className="product-list-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/17.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/17.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Title Here</a>
                          </h6>
                          <h6>$200</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="product-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/10.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/10.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Text Here</a>
                          </h6>
                          <h6>$200</h6>
                        </div>
                      </div>
                      <div className="product-list-item">
                        <div className="product-thumb">
                          <img src="assets/images/product/10.jpg" alt="shope" />
                          <div className="product-action-link">
                            <a href="assets/images/product/10.jpg" data-rel="lightcase">
                              <i className="icofont-eye" />
                            </a>
                            <a href="#">
                              <i className="icofont-heart-alt" />
                            </a>
                            <a href="#">
                              <i className="icofont-cart-alt" />
                            </a>
                          </div>
                        </div>
                        <div className="product-content">
                          <h6>
                            <a href="#">Product Title Here</a>
                          </h6>
                          <h6>$200</h6>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="paginations">
                    <ul className="agri-ul d-flex flex-wrap justify-content-center">
                      <li>
                        <a href="#">1</a>
                      </li>
                      <li className="d-none d-sm-block">
                        <a href="#">2</a>
                      </li>
                      <li className="d-none d-sm-block">
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a className="dot">...</a>
                      </li>
                      <li className="d-none d-sm-block">
                        <a href="#">9</a>
                      </li>
                      <li className="d-none d-sm-block">
                        <a href="#">10</a>
                      </li>
                      <li>
                        <a href="#">11</a>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
              <div className="col-lg-3 col-md-7 col-12">
                <aside>
                  <div className="widget widget-search">
                    <div className="widget-header">
                      <h5>Search keywords</h5>
                    </div>
                    <form action="/" className="search-wrapper">
                      <input type="text" name="s" placeholder="Your Search..." />
                      <button type="submit">
                        <i className="icofont-search-2" />
                      </button>
                    </form>
                  </div>

                  <div className="widget widget-category">
                    <div className="widget-header">
                      <h5>All Categories</h5>
                    </div>
                    <div className="widget-wrapper">
                      <ul className="agri-ul shop-menu">
                        <li>
                          <a href="#0">Apple</a>
                          <ul className="agri-ul shop-submenu">
                            <li>
                              <a href="#">Apple 1</a>
                            </li>
                            <li>
                              <a href="#">Apple 2</a>
                            </li>
                            <li>
                              <a href="#">Apple 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#0">Orange</a>
                          <ul className="agri-ul shop-submenu">
                            <li>
                              <a href="#">Orange 1</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#0">Tomato</a>
                          <ul className="agri-ul shop-submenu">
                            <li>
                              <a href="#">Tomato 1</a>
                            </li>
                            <li>
                              <a href="#">Tomato 2</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#0">Honey</a>
                          <ul className="agri-ul shop-submenu">
                            <li>
                              <a href="#">Honey 1</a>
                            </li>
                            <li>
                              <a href="#">Honey 2</a>
                            </li>
                            <li>
                              <a href="#">Honey 3</a>
                            </li>
                            <li>
                              <a href="#">Honey 4</a>
                            </li>
                            <li>
                              <a href="#">Honey 5</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#0">Banana</a>
                          <ul className="agri-ul shop-submenu">
                            <li>
                              <a href="#">Banana 1</a>
                            </li>
                            <li>
                              <a href="#">Banana 2</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#0">Blueberry</a>
                          <ul className="agri-ul shop-submenu">
                            <li>
                              <a href="#">Blueberry 1</a>
                            </li>
                            <li>
                              <a href="#">Blueberry 2</a>
                            </li>
                            <li>
                              <a href="#">Blueberry 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#0">Lettuce</a>
                          <ul className="agri-ul shop-submenu">
                            <li>
                              <a href="#">Lettuce 1</a>
                            </li>
                            <li>
                              <a href="#">Lettuce 2</a>
                            </li>
                            <li>
                              <a href="#">Lettuce 3</a>
                            </li>
                            <li>
                              <a href="#">Lettuce 4</a>
                            </li>
                            <li>
                              <a href="#">Lettuce 5</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="widget widget-post">
                    <div className="widget-header">
                      <h5>Latests Products</h5>
                    </div>
                    <ul className="agri-ul widget-wrapper">
                      <li className="d-flex flex-wrap justify-content-between">
                        <div className="post-thumb">
                          <a href="blog-single.html">
                            <img src="assets/images/product/10.jpg" alt="product" />
                          </a>
                        </div>
                        <div className="post-content">
                          <a href="blog-single.html">
                            <h6>Conveniently utilize premier metho.</h6>
                          </a>
                          <p>04 February 2021</p>
                        </div>
                      </li>
                      <li className="d-flex flex-wrap justify-content-between">
                        <div className="post-thumb">
                          <a href="blog-single.html">
                            <img src="assets/images/product/11.jpg" alt="product" />
                          </a>
                        </div>
                        <div className="post-content">
                          <a href="blog-single.html">
                            <h6>Seamlessly fashion customiz before.</h6>
                          </a>
                          <p>04 February 2021</p>
                        </div>
                      </li>
                      <li className="d-flex flex-wrap justify-content-between">
                        <div className="post-thumb">
                          <a href="blog-single.html">
                            <img src="assets/images/product/12.jpg" alt="product" />
                          </a>
                        </div>
                        <div className="post-content">
                          <a href="blog-single.html">
                            <h6>Conveniently utilize premier metho.</h6>
                          </a>
                          <p>04 February 2021</p>
                        </div>
                      </li>
                      <li className="d-flex flex-wrap justify-content-between">
                        <div className="post-thumb">
                          <a href="blog-single.html">
                            <img src="assets/images/product/13.jpg" alt="product" />
                          </a>
                        </div>
                        <div className="post-content">
                          <a href="blog-single.html">
                            <h6>Seamlessly fashion customiz before.</h6>
                          </a>
                          <p>04 February 2021</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- shop page Section ENding Here --> */}

      {/* <!-- newsletters section start here --> */}
      <div className="newsletter-section">
        <div className="container">
          <div className="row justify-content-lg-between justify-content-center align-items-center">
            <div className="col-lg-6 col-12">
              <div className="newsletter-title">
                <h4>Subscribe Our Newsletter</h4>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="newsletter-form">
                <form className="d-flex flex-wrap">
                  <input type="text" placeholder="Enter Your Email" className="input-email" />
                  <input type="submit" value="Subscribe" className="subscribe-btn" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- newsletters section ending here --> */}
    </>
  );
}

export default Shop;
