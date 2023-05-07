import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
