function Product(props) {
  return (
    <div className="product">
      <h2>
        <strong>Product Name: </strong>
        {props.name}
      </h2>
      <p>
        <strong>Price: </strong>
        {props.price}, <strong>Quantity: </strong>
        {props.quantity}
      </p>
      <p>
        <strong>Description: </strong>
        {props.desc}
      </p>
    </div>
  );
}

export default Product;
