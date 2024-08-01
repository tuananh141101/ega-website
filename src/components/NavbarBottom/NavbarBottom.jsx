import {
  FaFacebookMessenger,
  FaFire,
  FaLocationArrow,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./NavbarBottom.scss";

const NavbarBottom = () => {
  return (
    <>
      <section className="navbarBottom">
        <ul className="navbarBottom_wrapper">
          <li className="navbarBottom_item phone d-flex align-items-center justify-content-center">
            <Link className="d-flex align-items-center flex-column justify-content-center">
              <FaPhoneAlt />
              <span>Gọi điện</span>
            </Link>
          </li>

          <li className="navbarBottom_item phone d-flex align-items-center justify-content-center">
            <Link className="d-flex align-items-center flex-column justify-content-center">
              <FaFacebookMessenger />
              <span>Nhắn tin</span>
            </Link>
          </li>

          <li className="navbarBottom_item phone d-flex align-items-center justify-content-center">
            <Link className="d-flex align-items-center flex-column justify-content-center">
              <FaFire />
              <span>Ưu đãi</span>
            </Link>
          </li>

          <li className="navbarBottom_item phone d-flex align-items-center justify-content-center">
            <Link
              to="shop"
              className="d-flex align-items-center flex-column justify-content-center"
            >
              <IoGrid />
              <span>Danh mục</span>
            </Link>
          </li>

          <li className="navbarBottom_item phone d-flex align-items-center justify-content-center">
            <Link className="d-flex align-items-center flex-column justify-content-center">
              <FaLocationArrow />
              <span>Cửa hàng</span>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

export default NavbarBottom;
