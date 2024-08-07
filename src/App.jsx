import "./assets/styles/main.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import Accessory from "./pages/Accessory/Accessory";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Policy from "./pages/Policy/Policy";
import Conditions from "./pages/Policy/Conditions";
import Sercurity from "./pages/Policy/Sercurity";
import Faq from "./pages/Policy/Faq";
import Fav from "./pages/Fav/Fav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="collections/all" element={<Shop />} />

            {/* Detail Product */}
            <Route path=":slug" element={<DetailProduct />} />

            <Route path="accessory" element={<Accessory />} />

            <Route path="sale" element={<Accessory />} />

            <Route path="blog" element={<Blog />} />

            <Route path="contact" element={<Contact />} />

            <Route path="policy" element={<Policy />} />

            <Route path="service-conditions" element={<Conditions />} />

            <Route path="policy-sercurity" element={<Sercurity />} />

            <Route path="faq" element={<Faq />} />

            {/* Fav */}
            <Route path="favourite" element={<Fav />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
