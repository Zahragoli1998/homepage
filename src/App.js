import React from 'react';
import './App.css';
import HomePage from './component/HomePage';
import { Routes,Route } from "react-router-dom";
import AboutPage from "./component/AboutPage";
import CategoriesPage from "./component/CategoriesPage";
import ContactPage from "./component/ContactPage";
import DashboardPage from "./component/DashboardPage";
import FactorControl from "./component/Factorcontrol";
import ProductPage from "./component/ProductControl";
import StoreConrtrol from "./component/Storecontrol";
import UserControl from "./component/UserControl";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
          <Route path="about" element={<AboutPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="dashboard" element={<DashboardPage />}>
          <Route path="user" element={<UserControl/>}></Route>
          <Route path="product" element={<ProductPage/>}></Route>
          <Route path="factor" element={<FactorControl/>}></Route>
          <Route path="store" element={<StoreConrtrol/>}></Route>
      </Route>
   </Routes>
  );
}

export default App;
