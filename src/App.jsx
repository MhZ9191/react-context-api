import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import DefaultLayout from "./layouts/DefaultLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductDetailPage from "./pages/ProductDetailPage";
const baseUrlAPI = "https://fakestoreapi.com/";

export default function App() {
  const [getData, setGetData] = useState([]);

  const fetchData = () => {
    axios.get(baseUrlAPI + "/products").then((res) => {
      setGetData(res.data);
    });
  };

  useEffect(fetchData, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route
            path="/products"
            Component={() => <ProductPage products={getData} />}
          />
          <Route path="/products/:id" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
