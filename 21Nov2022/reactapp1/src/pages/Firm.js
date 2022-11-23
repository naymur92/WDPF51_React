function Honey(props) {
  return <li className="alert alert-success">I am {props.brand} Honey</li>;
}

function Firm() {
  const products = [
    { id: 1, brand: "Black Seed" },
    { id: 2, brand: "Mustured" },
    { id: 3, brand: "Sundarban" },
    { id: 4, brand: "Sedan" },
  ];
  return (
    <div className="col-sm-8">
      <div className="card">
        <div className="card-header">
          <h2>Honey Page</h2>
        </div>
        <div className="card-body">
          <ul type="none">
            {products.map((item) => (
              <Honey key={item.id} brand={item.brand} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Firm;
