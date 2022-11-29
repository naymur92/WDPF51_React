import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultTemplate from "./DefaultTemplate/DefaultTemplate";
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultTemplate/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
