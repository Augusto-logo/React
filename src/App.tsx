import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Index";
import ProductPreview from "./pages/ui-challenges/productPreview/Index";
import QrCode from "./pages/ui-challenges/qr-code/Index";
import TicTacToe from "./pages/Tic-Tac-Toe/Index";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/ui-challenges/product-preview"
        element={<ProductPreview />}
      />
      <Route path="/ui-challenges/qr-code" element={<QrCode />} />
      <Route path="/tic-tac-toe" element={<TicTacToe />} />
    </Routes>
  );
}
