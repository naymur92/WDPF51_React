import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { flowers, grettings, inputElement, myInfo, person, x } from './message';
import Product from './Product';
import Student from './Student';

function App() {
  return (
    <div className="App">
      {myInfo}
      <p>{x}</p>
      <p>{flowers}</p>
      <h5>{grettings}</h5>
      <p>
        Name: {person.name}, Address: {person.address}
      </p>
      {inputElement}
      <div className="product_container">
        <h1>Products Area</h1>

        <Product name="Shirt" price="1500" quantity="12" desc="New Shirt" />
        <Product name="Pant" price="2500" quantity="10" desc="New Jeans" />
        <Product name="Panjabi" price="3000" quantity="5" desc="New Panjabi" />
      </div>
      <div className="student_container bg-primary text-white">
        <h1>Students Area</h1>
        <Student name="Naymur Rahman" subject="WDPF" />
        <Student name="Abu Naser Dipu" subject="C#" />
        <Student name="Amjad Hossain" subject="DDD" />
      </div>
    </div>
  );
}

export default App;
