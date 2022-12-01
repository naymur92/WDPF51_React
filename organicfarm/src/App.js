import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminTemplate from './Admin/AdminTemplate';
import AddProduct from './Admin/Pages/AddProduct';
import Dashboard from './Admin/Pages/Dashboard/Dashboard';
import Products from './Admin/Pages/Products/Products';
import FrontTemplate from './FrontEnd/FrontTemplate';
import About from './FrontEnd/Pages/About';
import Contact from './FrontEnd/Pages/Contact';
import Home from './FrontEnd/Pages/Home';
import Login from './FrontEnd/Pages/Login';
import Shop from './FrontEnd/Pages/Shop';
import ViewProduct from './FrontEnd/Pages/ViewProduct';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontTemplate />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/view-product/:id" element={<ViewProduct />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="admin" element={<AdminTemplate />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="products/addproduct" element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
