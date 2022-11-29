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
    // console.log(e.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append('myFile', file);

    console.log(file);
    axios.post('http://localhost:80/', formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }); // I need to change this line
  };

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
              <label htmlFor="_details">
                <strong>Product Details:</strong>
              </label>
              <textarea
                name="details"
                id="_details"
                placeholder="Enter product details"
                onChange={onChangeValue}
                className="form-control"
              />
            </div>
            <div className="form-group my-2">
              <label htmlFor="_image">
                <strong>Product Thumbnail:</strong>
              </label>
              <input
                type="file"
                id="_image"
                name="image"
                onChange={onFileChange}
                className="form-control"
              />
              <img
                src={file ? URL.createObjectURL(file) : ''}
                alt=""
                width="200px"
                className="img-thumbnail my-3"
              />{' '}
              <br />
              <button type="button" onClick={onFileUpload} className="btn btn-outline-warning">
                Upload Image
              </button>
            </div>
            <div className="form-group my-2">
              <label htmlFor="_price">
                <strong>Product Price:</strong>
              </label>
              <input
                type="number"
                name="price"
                id="_price"
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

export default ProductInsert;
