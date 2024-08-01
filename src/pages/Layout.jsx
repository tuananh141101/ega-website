import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import NavbarBottom from "../components/NavbarBottom/NavbarBottom";

const Layout = () => {
  const [visible, setVisible] = useState(false);

  //*Kho scroll xuống sẽ hiện btn scrollToTop
  const toggleVisibale = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisibale);

  return (
    <>
      <Header />
      <Outlet />
      <div
        className={`scrollToTop d-flex align-items-center justify-content-center ${
          visible ? "scrollToTop-active" : ""
        }`}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0 });
        }}
      >
        <IoIosArrowUp />
      </div>
      <NavbarBottom />
      <Footer />
    </>
  );
};

export default Layout;
