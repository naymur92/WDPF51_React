import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductComponent.css';

export default function ProductComponent() {
  const [isproduct, setProduct] = useState([]);
  const allProducts = async () => {
    axios.get(`http://localhost/wdpf51_React/basicapp/api/products/products.php`).then((res) => {
      // console.log(res.data.productlist.productdata);
      setProduct(res.data.productlist.productdata);
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    allProducts();
  }, []);

  const delProd = (id) => {
    // console.log(id);
    axios
      .delete(`http://localhost/wdpf51_React/basicapp/api/products/deleteprod.php/?id=${id}`)
      .then((res) => {
        if (res.data.success) {
          allProducts();
          // eslint-disable-next-line no-alert
          alert(res.data.msg);
        }
      });
  };

  const delProdConfirm = (id) => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Are You Sure?')) {
      delProd(id);
    }
  };

  // Search Method start
  const [searchItems, setSearchItems] = useState('');
  const onSearch = (event) => {
    setSearchItems(event.target.value);
    // console.log(searchItems);
  };

  let filteredProducts = isproduct;
  if (searchItems !== '') {
    filteredProducts = isproduct.filter((product) =>
      product.name.toLowerCase().includes(searchItems.toLocaleLowerCase())
    );
  } // Search method ends

  return (
    <div className="col-sm-8">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2>Products</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="row mx-2">
              <Link to="/product/insert" className="btn btn-outline-info">
                <strong>Insert New Product</strong>
              </Link>
            </div>
            <div className="row mx-2 my-2">
              <label htmlFor="_search">
                <strong>Search Product:</strong>
              </label>
              <input
                type="text"
                id="_search"
                onChange={onSearch}
                className="form-control"
                placeholder="Search Here"
              />
            </div>
            {/* Product component will call here */}
            {filteredProducts.map((item) => (
              <div className="col-6" key={item.id}>
                <div className="card product">
                  <div className="card-header bg-warning">
                    <h4>{item.name}</h4>
                  </div>
                  <div className="card-body">
                    <img
                      src={`assets/images/products/${item.image}`}
                      width="100%"
                      alt="Product Thumb"
                      className="img-thumbnail"
                    />
                    <p>
                      <strong>Description: </strong>
                      {item.details}
                    </p>
                    <p>
                      <strong>Price: </strong>
                      {item.price}
                    </p>
                    <div className="row">
                      <div className="col-5">
                        <Link to={`products/buy/${item.id}`} className="btn btn-outline-warning">
                          Buy Now
                        </Link>
                      </div>
                      <div className="col-7 d-flex flex-row-reverse mt-1">
                        <i
                          onClick={() => delProdConfirm(item.id)}
                          className="fa fa-trash action-btn text-danger mx-2"
                          role="button"
                        />
                        <Link to={`/product/edit/${item.id}`}>
                          <i className="fa fa-pencil action-btn text-primary" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
