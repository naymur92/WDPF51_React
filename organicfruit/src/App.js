import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminTemplate from './Admin/AdminTemplate';
import Dashboard from './Admin/Pages/Dashboard';
import FrontTemplate from './FrontEnd/FrontTemplate';
import About from './FrontEnd/Pages/About';
import Home from './FrontEnd/Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontTemplate />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="admin" element={<AdminTemplate />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
