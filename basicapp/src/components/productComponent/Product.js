import React from 'react';
import { Link } from 'react-router-dom';

function Product(props) {
  const [id, name, details, image, price] = props;

  return (
    <div className="col-6">
      <div className="card product">
        <div className="card-header bg-warning">
          <h4>{name}</h4>
        </div>
        <div className="card-body">
          <img src={`${image}`} width="250px" alt="Product Thumb" />
          <p>
            <strong>Description: </strong>
            {details}
          </p>
          <p>
            <strong>Price: </strong>
            {price}
          </p>
          <div className="row">
            <div className="col-4">
              <Link to={`products/buy/${id}`} className="btn btn-info">
                Buy
              </Link>
            </div>
            <div className="col-8 text-right">
              <button type="button" className="delete-btn b-0 m-0">
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
