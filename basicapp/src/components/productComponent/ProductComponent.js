import "./ProductComponent.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ProductComponent() {
  useEffect(() => {
    window.scrollTo(0, 0);
    allProducts();
  }, []);

  const [isproduct, setProduct] = useState([]);
  const allProducts = async (id) => {
    try {
      axios
        .get(`http://localhost/wdpf51_React/basicapp/api/products/products.php`)
        .then((res) => {
          console.log(res.data.productlist.productdata);
          setProduct(res.data.productlist.productdata);
        });
    } catch (error) {
      throw error;
    }
  };

  const delProdConfirm = (id) => {
    if (window.alert("Are You Sure?")) {
      delProd(id);
    }
  };

  const delProd = (id) => {
    axios
      .delete(
        `http://localhost/wdpf51_React/basicapp/api/products/deleteprod.php/?id=${id}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          allProducts();
          alert(res.data.msg);
        }
      });
  };

  return (
    <div className="col-sm-8">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2>Products</h2>
        </div>
        <div className="card-body">
          <div className="row">
            {/* Product component will call here */}
            {isproduct.map((item, index) => (
              <div className="col-6">
                <div className="card product">
                  <div className="card-header bg-warning">
                    <h4>{item.name}</h4>
                  </div>
                  <div className="card-body">
                    <img
                      src={`${item.image}`}
                      width="250px"
                      alt="Product Thumb"
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
                      <div className="col-4">
                        <Link
                          to={`products/buy/${item.id}`}
                          className="btn btn-info"
                        >
                          Buy
                        </Link>
                      </div>
                      <div className="col-8 text-right">
                        <button
                          onClick={() => delProdConfirm(item.id)}
                          className="delete-btn b-0 m-0"
                        >
                          <i className="fa fa-trash"></i>
                        </button>
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
