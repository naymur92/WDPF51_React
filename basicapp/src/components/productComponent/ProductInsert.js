import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const ProductInsert = () => {
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = useState({
    name: "",
    details: "",
    image: "",
    price: "",
  });

  const onChangeValue = (event) => {
    setProductInfo({ ...productInfo, [event.target.name]: event.target.value });
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
    try {
      var thumb = "";
      if (productInfo.image !== "") {
        let thumbArray = productInfo.image.split("\\");
        thumb = thumbArray[thumbArray.length - 1];
      }
      console.log(productInfo);
      // console.log(thumb);

      axios
        .post(
          `http://localhost/wdpf51_React/basicapp/api/products/add_product.php`,
          {
            name: productInfo.name,
            details: productInfo.details,
            image: thumb,
            price: productInfo.price,
          }
        )
        .then((res) => {
          if (res.data.success) {
            alert(res.data.msg);
            navigate(`/products`);
            return;
          }
        });
    } catch (error) {}
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
              <label>
                <strong>Product Name:</strong>
              </label>
              <input
                type="text"
                name="name"
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
              ></textarea>
            </div>
            <div className="form-group my-2">
              <label>
                <strong>Product Thumbnail:</strong>
              </label>
              <input
                type="file"
                name="image"
                onChange={onFileChange}
                className="form-control"
              />
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
};

export default ProductInsert;
