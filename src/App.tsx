import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Index";
import ProductPreview from "./pages/staticPages/productPreview/Index";

export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/static/productPreview" element={<ProductPreview />} />
    </Routes>
  );
}
