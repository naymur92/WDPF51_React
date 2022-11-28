import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ProductInsert() {
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState({
    name: '',
    details: '',
    image: '',
    price: '',
  });

  const onChangeValue = (event) => {
    setProductInfo({ ...productInfo, [event.target.name]: event.target.value });
    console.log(productInfo);
  };

  const [file, setFile] = useState();

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
    // console.log(e.target.files);
    // console.log(e.target.files[0]);
  };

  // const formData = new FormData();

  const submitProduct = async (event) => {
    event.preventDefault();

    let thumb = '';
    if (productInfo.image !== '') {
      const thumbArray = productInfo.image.split('\\');
      thumb = thumbArray[thumbArray.length - 1];
    }
    // console.log(productInfo);
    // console.log(thumb);

    axios
      .post(`http://localhost/wdpf51_React/basicapp/api/products/add_product.php`, {
        name: productInfo.name,
        details: productInfo.details,
        image: thumb,
        price: productInfo.price,
      })
      .then((res) => {
        if (res.data.success) {
          // eslint-disable-next-line no-alert
          alert(res.data.msg);
          navigate(`/products`);
        }
      });
  };

  return (
    <div className="col-sm-8">
      <div className="card">
        <div className="card-header bg-warning">
          <h2>Product Insert</h2>
        </div>
        <div className="card-body">
          <form onSubmit={submitProduct}>
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
                <textarea
                  name="details"
                  placeholder="Enter product details"
                  onChange={onChangeValue}
                  className="form-control"
                />
              </label>
            </div>
            <div className="form-group my-2">
              <label>
                <strong>Product Thumbnail:</strong>
                <input type="file" name="image" onChange={onChangeValue} className="form-control" />
              </label>
            </div>
            <div className="form-group my-2">
              <label>
                <strong>Product Price:</strong>
                <input
                  type="number"
                  name="price"
                  onChange={onChangeValue}
                  className="form-control"
                  placeholder="Enter Price"
                />
              </label>
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

export default ProductInsert;
