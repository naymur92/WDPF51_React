import Product from './Product';
import './ProductComponent.css';

export default function ProductComponent() {
  return (
    <div className="col-sm-8">
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h2>Products</h2>
        </div>
        <div className="card-body">
          <div className="row">
            <Product name="Mustured Flower Honey" price="Tk. 500" desc="Natural Honey" />
            <Product name="Black Seed Honey" price="Tk. 1500" desc="Natural Honey" />
            <Product name="Sundarban Honey" price="Tk. 800" desc="Natural Honey" />
            <Product name="Lichi Flower Honey" price="Tk. 600" desc="Natural Honey" />
          </div>
        </div>
      </div>
    </div>
  );
}
