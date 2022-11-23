export default function Product(props) {
  return (
    <div className="col-6">
      <div className="card product">
        <div className="card-header bg-warning">
          <h4>{props.name}</h4>
        </div>
        <div className="card-body">
          <p>
            <strong>Price: </strong>
            {props.price}
          </p>
          <p>
            <strong>Description: </strong>
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
