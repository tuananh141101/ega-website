import "./Header.scss";
import { Link } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiSearchLine } from "react-icons/ri";
import { LuUser2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCart2Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
import { RiMenuFill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";

import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { ReactTyped } from "react-typed";

const Header = () => {
  const [showTopHeader, setShowTopHeader] = useState(true);

  //* Hiển thị offcanvas search
  const [showSeach, setShowSearch] = useState(false);
  const handleCloseSearch = () => setShowSearch(false);
  const handleShowSeach = () => {
    setShowSearch(true);
  };

  //* Hiển thị offcanvas menu mobile
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const handleCloseMenuMoble = () => setShowMenuMobile(false);
  const handleShowMenuMobile = () => setShowMenuMobile(true);

  //* Click hiện thị thêm li
  const [showMoreLi, setShowMoreLi] = useState(true);
  const handeClickShowMoreLi = () => {
    setShowMoreLi(false);
  };
  const handleClickHiddenLi = () => {
    setShowMoreLi(true);
  };

  return (
    <>
      {showTopHeader ? (
        <>
          <div className="topHeader">
            <p>Frees ship voi don hang tu 500k</p>
            <button onClick={() => setShowTopHeader(false)}>
              <MdOutlineClose />
            </button>
          </div>
        </>
      ) : (
        <></>
      )}

      <header className="header">
        <div className="header_container container">
          <div className="row">
            <div className="col d-flex align-items-center justify-content-between">
              <div className="logo d-flex align-items-center">
                <Link to="/" className="logo-wrapper">
                  <img src="../../src/assets/images/logosport.png" alt="" />
                </Link>
              </div>

              <div className="navbarMenu d-none">
                <button onClick={handleShowMenuMobile}>
                  <RiMenuFill />
                </button>
              </div>

              <div className="menu d-flex">
                <div className="menu_wrapper">
                  <ul className="menu_wrapper-list d-flex align-items-center">
                    {showMoreLi ? (
                      <>
                        <li className="list-item product">
                          <Link
                            to="shop"
                            className="d-flex align-items-center underline"
                          >
                            <span>Sản phẩm</span>
                            <RiArrowDownSLine />
                          </Link>

                          <div className="submenu">
                            <ul className="submenu_wrapper container">
                              <li className="item d-flex flex-column">
                                <span className="main">
                                  <Link to="">Áo</Link>
                                </span>
                                <span>
                                  <Link to="">Áo Thun</Link>
                                </span>
                                <span>
                                  <Link to="">Áo Bra</Link>
                                </span>
                                <span>
                                  <Link to="">Áo Croptop</Link>
                                </span>
                                <span>
                                  <Link to="">Áo Khoác</Link>
                                </span>
                                <span>
                                  <Link to="">Áo Nỉ</Link>
                                </span>
                              </li>
                              <li className="item d-flex flex-column">
                                <span className="main">
                                  <Link to="">Quần</Link>
                                </span>
                                <span>
                                  <Link to="">Quần Short & Váy</Link>
                                </span>
                                <span>
                                  <Link to="">Quần Bó & Legging</Link>
                                </span>
                                <span>
                                  <Link to="">Quần Dài</Link>
                                </span>
                                <span>
                                  <Link to="">Quần Lót Thể Thao</Link>
                                </span>
                                <span>
                                  <Link to="">Quần Jogger</Link>
                                </span>
                              </li>
                              <li className="item d-flex flex-column">
                                <span className="main">
                                  <Link to="">Giày Dép</Link>
                                </span>
                                <span>
                                  <Link to="">Giày Thể Thao</Link>
                                </span>
                                <span>
                                  <Link to="">Giày Đinh</Link>
                                </span>
                                <span>
                                  <Link to="">Xăng Đan & Dép</Link>
                                </span>
                                <span>
                                  <Link to="">Tất</Link>
                                </span>
                                <span>
                                  <Link to="">Bảo Vệ Gối</Link>
                                </span>
                              </li>
                              <li className="item d-flex flex-column">
                                <span className="main">
                                  <Link to="">Đồ Bơi</Link>
                                </span>
                                <span>
                                  <Link to="">Đồ Bơi Liền Mảnh</Link>
                                </span>
                                <span>
                                  <Link to="">Bikini</Link>
                                </span>
                                <span>
                                  <Link to="">Áo Bơi Chống Nắng</Link>
                                </span>
                                <span>
                                  <Link to="">Quần Đi Biển</Link>
                                </span>
                                <span>
                                  <Link to="">Wet Suit</Link>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="list-item collection">
                          <Link
                            to="shop"
                            className="d-flex align-items-center underline"
                          >
                            <span>Bộ sưu tầm</span>
                            <RiArrowDownSLine />
                          </Link>

                          <div className="submenu">
                            <ul className="submenu_wrapper container">
                              <li className="item d-flex flex-column">
                                <span>
                                  <Link to="">Tập Gym</Link>
                                </span>
                                <span>
                                  <Link to="">Tập Yoga</Link>
                                </span>
                                <span>
                                  <Link to="">Chạy Bộ</Link>
                                </span>
                                <span>
                                  <Link to="">Boxing</Link>
                                </span>
                                <span>
                                  <Link to="">Bơi Lội</Link>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="list-item accessory">
                          <Link
                            to="accessory"
                            className="underline d-flex align-items-center"
                          >
                            <span>Phụ kiện</span>
                            <RiArrowDownSLine />
                          </Link>

                          <div className="submenu">
                            <ul className="submenu_wrapper container">
                              <li className="item d-flex flex-column">
                                <span>
                                  <Link to="">Balo & Túi</Link>
                                </span>
                                <span>
                                  <Link to="">Thảm Tập Yoga</Link>
                                </span>
                                <span>
                                  <Link to="">Khăn</Link>
                                </span>
                                <span>
                                  <Link to="">Găng Tay</Link>
                                </span>
                                <span>
                                  <Link to="">Dây Kháng Lực</Link>
                                </span>
                                <span>
                                  <Link to="">Dây Bảo Vệ</Link>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="list-item trend">
                          <Link
                            to="blog"
                            className="underline d-flex align-items-center"
                          >
                            <span>Xu hướng</span>
                          </Link>
                        </li>
                        <li className="list-item sale">
                          <Link
                            to="sale"
                            className="d-flex align-items-center underline"
                          >
                            <span>Khuyến mãi</span>
                            <RiArrowDownSLine />
                          </Link>

                          <div className="submenu">
                            <ul className="submenu_wrapper container">
                              <li className="item d-flex flex-column">
                                <span>
                                  <Link to="">Landing Page - Flash Sale</Link>
                                </span>
                                <span>
                                  <Link to="">Landing Page - Black Friday</Link>
                                </span>
                                <span>
                                  <Link to="">Landing Page - Xmas</Link>
                                </span>
                                <span>
                                  <Link to="">Landing Page - One Page</Link>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="list-item contact">
                          <Link
                            to="contact"
                            className="d-flex align-items-center underline"
                          >
                            <span>Liên hệ</span>
                          </Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="list-item sale-2 d-none">
                          <Link
                            to="sale"
                            className="d-flex align-items-center underline"
                          >
                            <span>Khuyến mãi</span>
                            <RiArrowDownSLine />
                          </Link>

                          <div className="submenu">
                            <ul className="submenu_wrapper container">
                              <li className="item d-flex flex-column">
                                <span>
                                  <Link to="">Landing Page - Flash Sale</Link>
                                </span>
                                <span>
                                  <Link to="">Landing Page - Black Friday</Link>
                                </span>
                                <span>
                                  <Link to="">Landing Page - Xmas</Link>
                                </span>
                                <span>
                                  <Link to="">Landing Page - One Page</Link>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="list-item contact-2 d-none">
                          <Link
                            to="contact"
                            className="d-flex align-items-center underline"
                          >
                            <span>Liên hệ</span>
                          </Link>
                        </li>
                        <li className="list-item policy">
                          <Link
                            to="policy"
                            className="d-flex align-items-center underline"
                          >
                            <span>Chính Sách</span>
                          </Link>
                        </li>
                        <li className="list-item news">
                          <Link
                            to="blog"
                            className="d-flex align-items-center underline"
                          >
                            <span>Tin Tức</span>
                          </Link>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <div className="menu_arrows d-flex align-items-center">
                  <button className="btn-prev" onClick={handleClickHiddenLi}>
                    <RiArrowLeftSLine />
                  </button>

                  <div
                    className="btn-next actives-btn"
                    onClick={handeClickShowMoreLi}
                  >
                    <RiArrowRightSLine />
                  </div>
                </div>
              </div>

              <div className="logoMb d-none">
                <Link to="" className="logoMb-wrapper">
                  <img src="../src/assets/images/logosport.png" alt="" />
                </Link>
              </div>

              <div className="icon d-flex align-items-center justify-content-between">
                <span className="icon-search" onClick={handleShowSeach}>
                  <RiSearchLine />
                </span>

                <div className="icon-account">
                  <span>
                    <LuUser2 />
                  </span>
                  <div className="account-action d-flex flex-column">
                    <Link to="" title="Đăng Ký">
                      Đăng ký
                    </Link>
                    <Link to="" title="Đăng Nhập">
                      Đăng nhập
                    </Link>
                  </div>
                </div>

                <Link to="" className="icon-heart" title="Sản Phẩm Yêu Thích">
                  <FaRegHeart />
                  <span>0</span>
                </Link>

                <div className="icon-cart">
                  <p title="Giỏ Hàng">
                    <RiShoppingCart2Line />
                    <span>0</span>
                    <div className="cart-action">
                      <div className="cart-wrapper">
                        <ul className="list">
                          <li className="list-item d-flex align-items-start">
                            <div className="image">
                              <img
                                src="../../src/assets/images/cart-action-img-1.png"
                                alt=""
                              />
                            </div>

                            <div className="details d-flex flex-column">
                              <div className="details-product d-flex justify-content-between">
                                <p className="details-name">
                                  Áo crop top tập gym yoga
                                </p>

                                <MdOutlineClose className="details-remove" />
                              </div>

                              <p className="details-variant">Đen / S</p>

                              <div className="details-totalPrice d-flex align-items-center">
                                <p className="price">290, 000đ</p>
                                <p className="quantity">x 2</p>
                              </div>
                            </div>
                          </li>

                          <li className="list-item d-flex align-items-start">
                            <div className="image">
                              <img
                                src="../../src/assets/images/cart-action-img-1.png"
                                alt=""
                              />
                            </div>

                            <div className="details d-flex flex-column">
                              <div className="details-product d-flex justify-content-between">
                                <p className="details-name">
                                  Áo crop top tập gym yoga
                                </p>

                                <MdOutlineClose className="details-remove" />
                              </div>

                              <p className="details-variant">Đen / S</p>

                              <div className="details-totalPrice d-flex align-items-center">
                                <p className="price">290, 000đ</p>
                                <p className="quantity">x 2</p>
                              </div>
                            </div>
                          </li>

                          <li className="list-item d-flex align-items-start">
                            <div className="image">
                              <img
                                src="../../src/assets/images/cart-action-img-1.png"
                                alt=""
                              />
                            </div>

                            <div className="details d-flex flex-column">
                              <div className="details-product d-flex justify-content-between">
                                <p className="details-name">
                                  Áo crop top tập gym yoga
                                </p>

                                <MdOutlineClose className="details-remove" />
                              </div>

                              <p className="details-variant">Đen / S</p>

                              <div className="details-totalPrice d-flex align-items-center">
                                <p className="price">290, 000đ</p>
                                <p className="quantity">x 2</p>
                              </div>
                            </div>
                          </li>
                        </ul>

                        <ul className="button d-flex align-items-center justify-content-center flex-column">
                          <li className="total d-flex">
                            Tổng tiền tạm tính:{" "}
                            <p className="price">2, 485, 000đ</p>
                          </li>

                          <li className="checkout d-flex align-items-center justify-content-center">
                            <p>Tiến hành thanh toán</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas Search */}
      <Offcanvas
        show={showSeach}
        onHide={handleCloseSearch}
        className="customOffcanvasSearch"
        placement="top"
      >
        <Offcanvas.Body className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 logo">
                <div className="logo">
                  <img src="../../src/assets/images/logosport.png" alt="" />
                </div>
              </div>

              <div className="col-lg-8 search d-flex align-items-center flex-column justify-content-center">
                <div className="search-wrapper">
                  <form action="/search" className="search-bar d-flex">
                    <ReactTyped
                      backSpeed={50}
                      strings={["Tìm kiếm sản phẩm"]}
                      typeSpeed={50}
                    >
                      <input type="text" placeholder="Tìm kiếm..." />
                    </ReactTyped>
                    <button className="d-flex align-items-center justify-content-center">
                      <RiSearchLine />
                    </button>
                  </form>
                </div>

                <ul className="search-fastkey d-flex align-items-center justify-content-start">
                  <li>
                    <Link to="">Áo tập yoga</Link>
                  </li>

                  <li>
                    <Link to="">Quần legging</Link>
                  </li>

                  <li>
                    <Link to="">Set đồ tập</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 icon d-flex align-items-center justify-content-end">
                <div className="icon-account">
                  <span>
                    <LuUser2 />
                  </span>
                  <div className="account-action d-flex flex-column">
                    <Link to="" title="Đăng Ký">
                      Đăng ký
                    </Link>
                    <Link to="" title="Đăng Nhập">
                      Đăng nhập
                    </Link>
                  </div>
                </div>

                <Link to="" className="icon-heart" title="Sản Phẩm Yêu Thích">
                  <FaRegHeart />
                  <span>0</span>
                </Link>

                <div className="icon-cart">
                  <p title="Giỏ Hàng">
                    <RiShoppingCart2Line />
                    <span>0</span>

                    <div className="cart-action">
                      <div className="cart-wrapper">
                        <ul className="list">
                          <li className="list-item d-flex align-items-start">
                            <div className="image">
                              <img
                                src="../../src/assets/images/cart-action-img-1.png"
                                alt=""
                              />
                            </div>

                            <div className="details d-flex flex-column">
                              <div className="details-product d-flex justify-content-between">
                                <p className="details-name">
                                  Áo crop top tập gym yoga
                                </p>

                                <MdOutlineClose className="details-remove" />
                              </div>

                              <p className="details-variant">Đen / S</p>

                              <div className="details-totalPrice d-flex align-items-center">
                                <p className="price">290, 000đ</p>
                                <p className="quantity">x 2</p>
                              </div>
                            </div>
                          </li>

                          <li className="list-item d-flex align-items-start">
                            <div className="image">
                              <img
                                src="../../src/assets/images/cart-action-img-1.png"
                                alt=""
                              />
                            </div>

                            <div className="details d-flex flex-column">
                              <div className="details-product d-flex justify-content-between">
                                <p className="details-name">
                                  Áo crop top tập gym yoga
                                </p>

                                <MdOutlineClose className="details-remove" />
                              </div>

                              <p className="details-variant">Đen / S</p>

                              <div className="details-totalPrice d-flex align-items-center">
                                <p className="price">290, 000đ</p>
                                <p className="quantity">x 2</p>
                              </div>
                            </div>
                          </li>

                          <li className="list-item d-flex align-items-start">
                            <div className="image">
                              <img
                                src="../../src/assets/images/cart-action-img-1.png"
                                alt=""
                              />
                            </div>

                            <div className="details d-flex flex-column">
                              <div className="details-product d-flex justify-content-between">
                                <p className="details-name">
                                  Áo crop top tập gym yoga
                                </p>

                                <MdOutlineClose className="details-remove" />
                              </div>

                              <p className="details-variant">Đen / S</p>

                              <div className="details-totalPrice d-flex align-items-center">
                                <p className="price">290, 000đ</p>
                                <p className="quantity">x 2</p>
                              </div>
                            </div>
                          </li>
                        </ul>

                        <ul className="button d-flex align-items-center justify-content-center flex-column">
                          <li className="total d-flex">
                            Tổng tiền tạm tính:{" "}
                            <p className="price">2, 485, 000đ</p>
                          </li>

                          <li className="checkout d-flex align-items-center justify-content-center">
                            <p>Tiến hành thanh toán</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Offcanvas Menu Mobile */}
      <Offcanvas
        show={showMenuMobile}
        onHide={handleCloseMenuMoble}
        className="customOffcanvasMenuMobile"
      >
        <Offcanvas.Body className="d-flex flex-column">
          <div className="account d-flex align-items-center">
            <MdAccountCircle className="account-icon" />
            <div className="account-body d-flex flex-column">
              <Link to="" title="Tài khoản">
                Tài Khoản
              </Link>
              <Link to="" title="Đăng nhập">
                Đăng nhập
              </Link>
            </div>
          </div>

          <div className="menu">
            <nav>
              <ul className="menu-list">
                <li className="list-item">
                  <Link
                    to="shop"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span>Sản phẩm</span>
                    <RiArrowRightSLine />
                  </Link>

                  <div className="submenu">
                    <div className="submenu_wrapper d-flex align-items-center flex-coolumn">
                      <p className="title d-flex align-items-center">
                        <RiArrowLeftSLine />
                        <span>Sản Phẩm</span>
                      </p>
                    </div>
                  </div>
                </li>

                <li className="list-item">
                  <Link
                    to="shop"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span>Bộ sưu tầm</span>
                    <RiArrowRightSLine />
                  </Link>

                  <div className="submenu">
                    <div className="submenu_wrapper d-flex align-items-center flex-coolumn">
                      <p className="title d-flex align-items-center">
                        <RiArrowLeftSLine />
                        <span>Sản Phẩm</span>
                      </p>
                    </div>
                  </div>
                </li>

                <li className="list-item">
                  <Link
                    to="accessory"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span>Phụ kiện</span>
                    <RiArrowRightSLine />
                  </Link>

                  <div className="submenu">
                    <div className="submenu_wrapper d-flex align-items-center flex-coolumn">
                      <p className="title d-flex align-items-center">
                        <RiArrowLeftSLine />
                        <span>Sản Phẩm</span>
                      </p>
                    </div>
                  </div>
                </li>

                <li className="list-item">
                  <Link
                    to="blog"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span>Xu hướng</span>
                  </Link>

                  <div className="submenu">
                    <div className="submenu_wrapper d-flex align-items-center flex-coolumn">
                      <p className="title d-flex align-items-center">
                        <RiArrowLeftSLine />
                        <span>Sản Phẩm</span>
                      </p>
                    </div>
                  </div>
                </li>

                <li className="list-item">
                  <Link
                    to="sale"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span>Khuyến mãi</span>
                    <RiArrowRightSLine />
                  </Link>

                  <div className="submenu">
                    <div className="submenu_wrapper d-flex align-items-center flex-coolumn">
                      <p className="title d-flex align-items-center">
                        <RiArrowLeftSLine />
                        <span>Sản Phẩm</span>
                      </p>
                    </div>
                  </div>
                </li>

                <li className="list-item">
                  <Link
                    to="contact"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span>Liên hệ</span>
                  </Link>

                  <div className="submenu">
                    <div className="submenu_wrapper d-flex align-items-center flex-coolumn">
                      <p className="title d-flex align-items-center">
                        <RiArrowLeftSLine />
                        <span>Sản Phẩm</span>
                      </p>
                    </div>
                  </div>
                </li>

                <li className="list-item">
                  <Link
                    to=""
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span>Chính sách</span>
                  </Link>

                  <div className="submenu">
                    <div className="submenu_wrapper d-flex align-items-center flex-coolumn">
                      <p className="title d-flex align-items-center">
                        <RiArrowLeftSLine />
                        <span>Sản Phẩm</span>
                      </p>
                    </div>
                  </div>
                </li>

                <li className="list-item">
                  <Link
                    to="blog"
                    className="d-flex align-items-center justify-content-between"
                  >
                    <span>Tin tức</span>
                  </Link>

                  <div className="submenu">
                    <div className="submenu_wrapper d-flex align-items-center flex-coolumn">
                      <p className="title d-flex align-items-center">
                        <RiArrowLeftSLine />
                        <span>Sản Phẩm</span>
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>

          <div className="footer d-flex justify-content-between">
            <div className="footer-hotline">
              <Link to="" className="d-flex align-items-center">
                <span>Gọi điện</span>
                <FaPhone />
              </Link>
            </div>
            <div className="footer-messenger">
              <Link to="" className="d-flex align-items-center">
                <span>Messenger</span>
                <FaFacebookMessenger />
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
