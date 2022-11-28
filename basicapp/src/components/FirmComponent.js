function HoneyItems(props) {
  return <li className="alert alert-success">We have {props.name} honey.</li>;
}

export default function FirmComponent() {
  const products = [
    { id: 1, name: 'Black Seed' },
    { id: 2, name: 'Mustered Flower' },
    { id: 3, name: 'Sundarban' },
    { id: 4, name: 'Lichi Flower' },
    { id: 5, name: 'Sunflower' },
  ];
  return (
    <div className="col-sm-8">
      <div className="card">
        <div className="card-header">
          <h2>Bee Firm</h2>
        </div>
        <div className="card-body">
          <ul type="none">
            {products.map((item) => (
              <HoneyItems key={item.id} name={item.name} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
