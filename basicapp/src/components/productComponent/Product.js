import { Link } from "react-router-dom";
import React from "react";

function Product(props) {
  return (
    <div className="col-6">
      <div className="card product">
        <div className="card-header bg-warning">
          <h4>{props.name}</h4>
        </div>
        <div className="card-body">
          <img src={`${props.image}`} width="250px" alt="Product Thumb" />
          <p>
            <strong>Description: </strong>
            {props.details}
          </p>
          <p>
            <strong>Price: </strong>
            {props.price}
          </p>
          <div className="row">
            <div className="col-4">
              <Link to={`products/buy/${props.id}`} className="btn btn-info">
                Buy
              </Link>
            </div>
            <div className="col-8 text-right">
              <button className="delete-btn b-0 m-0">
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
