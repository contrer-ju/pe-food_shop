import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralProvider from "./providers/GeneralProvider";
import SideBar from "./routes/SideBar";
import NavBar from "./routes/NavBar";
import Home from "./routes/Home";
import Menu from "./routes/Menu";
import Category from "./routes/Category";
import Product from "./routes/Product"
import ShoppingCart from "./routes/ShoppingCart";
import NotFound from "./routes/NotFound";
import "./Styles.css";

function App() {
  return (
    <GeneralProvider>
      <BrowserRouter>
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="desserts" element={<Category />} />
          <Route path="desserts/:identification" element={<Product />} />
          <Route path="salads" element={<Category />} />
          <Route path="salads/:identification" element={<Product />} />
          <Route path="sandwichs" element={<Category />} />
          <Route path="sandwichs/:identification" element={<Product />} />
          <Route path="burgers" element={<Category />} />
          <Route path="burgers/:identification" element={<Product />} />
          <Route path="breakfasts" element={<Category />} />
          <Route path="breakfasts/:identification" element={<Product />} />
          <Route path="juices" element={<Category />} />
          <Route path="juices/:identification" element={<Product />} />
          <Route path="shopping" element={<ShoppingCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GeneralProvider>
  );
}

export default App;
