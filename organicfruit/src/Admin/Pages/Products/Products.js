import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);

  const allProducts = async () => {
    axios
      .get(`http://localhost/wdpf51_React/organicfruit/api/products/products.php`)
      .then((res) => {
        // console.log(res.data.products);
        setProducts(res.data.products);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    allProducts();
    // console.log(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="mt-4 p-5 bg-primary text-white rounded">
            <h1 className="display-5 fw-bold text-center text-light">Products Area</h1>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header bg-primary">
              <h3 className="text-light">Left Bar</h3>
            </div>
            <div className="card-body minheight">
              <ul className="menu">
                <li>
                  <button type="button" className="left-menu btn btn-outline-primary">
                    All Products
                  </button>
                </li>
                <li>
                  <button type="button" className="left-menu btn btn-outline-primary">
                    Vegetables
                  </button>
                </li>
                <li>
                  <button type="button" className="left-menu btn btn-outline-primary">
                    Fruits
                  </button>
                </li>
                <li>
                  <button type="button" className="left-menu btn btn-outline-primary">
                    Honey
                  </button>
                </li>
                <li>
                  <button type="button" className="left-menu btn btn-outline-primary">
                    Bookings
                  </button>
                </li>
                <li>
                  <NavLink to="addproduct" className="left-menu btn btn-primary my-3">
                    Add Product
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-9">
          {/* <!-- Content Area --> */}
          <div className="">
            <div className="row">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Sl No.</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Stock</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>{item.category}</td>
                      <td>{item.status}</td>
                      <td>{item.stock}</td>
                      <td>Action</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
