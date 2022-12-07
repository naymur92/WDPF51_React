import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Shop.css';

function Shop() {
  const [products, setProducts] = useState([]);

  // Get all products
  const allProducts = async () => {
    const res = await axios.get(
      `http://localhost/wdpf51_React/organicfarm/api/products/products.php`
    );
    setProducts(res.data.products);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    allProducts();
    // console.log(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Filter Method Starts
  const [category, setCategory] = useState('');

  let filteredProducts = products;
  filteredProducts = products.filter((product) => product.category.includes(category));

  // Search Method start
  const [searchItems, setSearchItems] = useState('');
  const onSearch = (event) => {
    setSearchItems(event.target.value);
    // console.log(searchItems);
  };

  // let searchedProducts = products;
  let searchedProducts = filteredProducts;
  searchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchItems.toLocaleLowerCase())
  );

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
                    <p>
                      Showing 01 - {searchedProducts.length} of {searchedProducts.length} Results
                    </p>
                    {/* <div className="product-view-mode">
                      <a className="active" data-target="grids">
                        <i className="icofont-ghost" />
                      </a>
                      <a data-target="lists">
                        <i className="icofont-listing-box" />
                      </a>
                    </div> */}
                  </div>

                  <div className="shop-product-wrap grids row justify-content-center">
                    {/* Start Loop */}
                    {searchedProducts.map((item) => (
                      <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                        <div className="product-item">
                          <div className="product-thumb">
                            <img src={`assets/images/product/${item.thumbnail}`} alt="shope" />
                            <div className="product-action-link">
                              <Link to={`view-product/${item.id}`} data-rel="lightcase">
                                <i className="icofont-eye" />
                              </Link>
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
                              <a href="#">{item.name}</a>
                            </h6>
                            <h6>Tk. {item.price}</h6>
                          </div>
                        </div>
                        {/* <div className="product-list-item">
                          <div className="product-thumb">
                            <img src={`assets/images/product/${item.thumbnail}`} alt="shope" />
                            <div className="product-action-link">
                              <a
                                href={`assets/images/product/${item.thumbnail}`}
                                data-rel="lightcase"
                              >
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
                              <a href="#">{item.name}</a>
                            </h6>
                            <h6>Tk. {item.price}</h6>
                            <p>{item.description}</p>
                          </div>
                        </div> */}
                      </div>
                    ))}
                  </div>

                  {/* <div className="paginations">
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
                  </div> */}
                </article>
              </div>
              <div className="col-lg-3 col-md-7 col-12">
                <aside>
                  <div className="widget widget-search">
                    <div className="widget-header">
                      <h5>Search Product</h5>
                    </div>
                    <div className="search-wrapper">
                      <input
                        type="text"
                        name="search"
                        onChange={onSearch}
                        placeholder="Your Search..."
                      />
                    </div>
                  </div>

                  <div className="widget widget-category">
                    <div className="widget-header">
                      <h5>All Categories</h5>
                    </div>
                    <div className="widget-wrapper">
                      <ul className="agri-ul shop-menu">
                        <li>
                          <a className="filter-btn" onClick={() => setCategory('')}>
                            All Products
                          </a>
                        </li>
                        <li>
                          <a className="filter-btn" onClick={() => setCategory('vegetable')}>
                            Vegetables
                          </a>
                        </li>
                        <li>
                          <a className="filter-btn" onClick={() => setCategory('fruit')}>
                            Fruits
                          </a>
                        </li>
                        <li>
                          <a className="filter-btn" onClick={() => setCategory('honey')}>
                            Honey
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="widget widget-post">
                    <div className="widget-header">
                      <h5>Latests Products</h5>
                    </div>
                    <ul className="agri-ul widget-wrapper">
                      {products.slice(0, 3).map((item) => (
                        <li className="d-flex flex-wrap justify-content-between" key={item.id}>
                          <div className="post-thumb">
                            <a href="blog-single.html">
                              <img src={`assets/images/product/${item.thumbnail}`} alt="product" />
                            </a>
                          </div>
                          <div className="post-content">
                            <a href="blog-single.html">
                              <h6>{item.name}</h6>
                            </a>
                            <p>{item.creation_time}</p>
                          </div>
                        </li>
                      ))}
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
