import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

function ProductEdit() {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const singleProd = async (id) => {
    axios
      .get(`http://localhost/wdpf51_React/basicapp/api/products/get_product.php`, {
        params: { id },
      })
      .then((res) => {
        if (res.data.success) {
          setProduct(res.data.product);
          // console.log(res.data);
        }
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    singleProd(params.id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeValue = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    // console.log(product);
  };

  const updateProduct = (event) => {
    event.preventDefault();

    axios
      .post('http://localhost/wdpf51_React/basicapp/api/products/update_product.php', {
        id: product.id,
        name: product.name,
        details: product.details,
        image: product.image,
        price: product.price,
      })
      .then((res) => {
        console.log(res.data);
      });
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
                value={product.name}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="_pdetails">
                <strong>Product Details:</strong>
              </label>
              <textarea
                name="details"
                id="_pdetails"
                placeholder="Enter product details"
                onChange={onChangeValue}
                className="form-control"
                value={product.details}
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="_pthumb">
                <strong>Product Thumbnail:</strong>
              </label>
              <input
                type="file"
                id="_pthumb"
                name="image"
                onChange={onChangeValue}
                className="form-control"
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="_pprice">
                <strong>Product Price:</strong>
              </label>
              <input
                type="number"
                id="_pprice"
                name="price"
                onChange={onChangeValue}
                className="form-control"
                placeholder="Enter Price"
                value={product.price}
              />
            </div>
            <input
              type="submit"
              name="submit"
              value="Update Product"
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
