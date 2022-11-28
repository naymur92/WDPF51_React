import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function ProductEdit() {
  const params = useParams();
  const navigate = useNavigate();

  const onChangeValue = (id) => {
    //
  };

  const singleProd = (id) => {
    axios.get(`http://localhost/wdpf51_React/basicapp/api/products/add_product.php`, { id });
  };

  useEffect(() => {
    singleProd(params.id);
    console.log(params.id);
  });

  const updateProduct = () => {
    //
  };

  return (
    <div className="col-sm-8">
      <div className="card">
        <div className="card-header bg-warning">
          <h2>Product Edit</h2>
        </div>
        <div className="card-body">
          <form onSubmit={updateProduct}>
            <div className="form-group my-2">
              <label htmlFor="_pname">
                <strong>Product Name:</strong>
              </label>
              <input
                type="text"
                name="name"
                id="_pname"
                placeholder="Enter product name"
                onChange={onChangeValue}
                className="form-control"
              />
            </div>
            <div className="form-group my-2">
              <label>
                <strong>Product Details:</strong>
              </label>
              <textarea
                name="details"
                placeholder="Enter product details"
                onChange={onChangeValue}
                className="form-control"
              />
            </div>
            <div className="form-group my-2">
              <label>
                <strong>Product Thumbnail:</strong>
              </label>
              <input type="file" name="image" onChange={onChangeValue} className="form-control" />
            </div>
            <div className="form-group my-2">
              <label>
                <strong>Product Price:</strong>
              </label>
              <input
                type="number"
                name="price"
                onChange={onChangeValue}
                className="form-control"
                placeholder="Enter Price"
              />
            </div>
            <input
              type="submit"
              name="submit"
              value="Add Product"
              className="btn btn-outline-success"
            />
            <Link to="/products" className="btn btn-outline-danger pull-right">
              Back
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ProductEdit;
