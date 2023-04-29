import HomePage from "../pages/HomePage";
import Cart from "./Cart";
import {Routes, Route} from "react-router-dom"
import Products from "../pages/Products";
import ResponsiveAppBar from "./AppBar";

function App() {
  return (
    <>
    <nav>
      <ResponsiveAppBar />
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/products" element={<Products />}/>
    </Routes>
    </>
  );
}

export default App;
