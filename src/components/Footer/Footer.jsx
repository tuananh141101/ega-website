import { Col, Container, Row } from "react-bootstrap";
import "./Footer.scss";
import { Link } from "react-router-dom";

import { RiMapPinFill } from "react-icons/ri";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

const Footer = () => {
  const [emailForm, setEmailForm] = useState("");
  const [dropdownListMenu, setDropDownListMenu] = useState(false);

  //*Validate Email
  const handleInputChange = (event) => {
    setEmailForm(event.target.value);
  };
  const valitedateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!valitedateEmail.test(emailForm)) {
      toast.error(`Địa chỉ email chưa phủ hợp`);
    } else {
      console.log("Dăng ký thành công", emailForm);
      toast.success(
        `Bạn sẽ nhận được các thông báo khi có khuyễn mãi: ${emailForm}`
      );
      setEmailForm("");
    }
  };

  const handleShowListMenu = () => {
    setDropDownListMenu(!dropdownListMenu);
  };

  return (
    <>
      <section className="footer">
        <Container className="footer_container">
          <Row className="custom-row">
            <Col className="col-lg-3 col-12 footer_left d-flex flex-column">
              <Link className="mb-3">
                <img src="../../src/assets/images/logo-footer5404.png" alt="" />
              </Link>

              <div className="single-contact d-flex">
                <RiMapPinFill className="icon" />
                <div className="title">
                  <p>Địa chỉ: Lê Trọng Tấn, Thanh Xuân, Hà Nội</p>
                </div>
              </div>

              <div className="single-contact d-flex">
                <MdOutlinePhoneIphone className="icon" />
                <div className="title">
                  <p>Số điện thoại: 09123456</p>
                </div>
              </div>

              <div className="single-contact d-flex">
                <MdOutlineEmail className="icon" />
                <div className="title">
                  <p>Email: support@gmail.com</p>
                </div>
              </div>

              <div className="copyright">
                © Bản quyền thuộc về
                <Link> EGANY</Link> | Cung cấp bởi <Link>Sapo</Link>
              </div>
            </Col>

            <Col className="col-lg-9 col-12 footer_right">
              <Row>
                <div className="col-lg-4 custom-col support">
                  <p
                    className="heading d-flex align-items-center justify-content-between"
                    onClick={handleShowListMenu}
                  >
                    Hỗ trợ khác hàng
                  </p>

                  <ul className="list_menu">
                    <li className="menu-item">
                      <Link>Tìm kiếm</Link>
                    </li>
                    <li className="menu-item">
                      <Link>Giới thiệu</Link>
                    </li>
                    <li className="menu-item">
                      <Link>Liên hệ</Link>
                    </li>
                    <li className="menu-item">
                      <Link>Cửa hàng</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 custom-col policy">
                  <p className="heading d-flex align-items-center justify-content-between">
                    Chính sách
                  </p>

                  <ul className="list_menu">
                    <li className="menu-item">
                      <Link>Điều khoản dịch vụ</Link>
                    </li>

                    <li className="menu-item">
                      <Link>Chính sách bảo mật</Link>
                    </li>

                    <li className="menu-item">
                      <Link>Chính sách đổi trả</Link>
                    </li>

                    <li className="menu-item">
                      <Link>Câu hỏi thường gặp</Link>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 custom-col signup">
                  <p className="heading d-flex align-items-center">
                    Đăng ký nhận tin
                  </p>
                  <span>Bạn muốn nhận khuyến mãi đặc biệt</span>
                  <form
                    className="register d-flex mt-3"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="text"
                      placeholder="Nhập địa chỉ email"
                      value={emailForm}
                      onChange={handleInputChange}
                    />
                    <button type="submit">Đăng Ký</button>
                  </form>
                  <ul className="follow-social d-flex align-items-center mt-3">
                    <li className="icon">
                      <Link>
                        <img
                          src="../../src/assets/images/facebook5404.png"
                          alt=""
                        />
                      </Link>
                    </li>

                    <li className="icon">
                      <Link>
                        <img
                          src="../../src/assets/images/zalo5404.png"
                          alt=""
                        />
                      </Link>
                    </li>

                    <li className="icon">
                      <Link>
                        <img
                          src="../../src/assets/images/instagram5404.png"
                          alt=""
                        />
                      </Link>
                    </li>

                    <li className="icon">
                      <Link>
                        <img
                          src="../../src/assets/images/tiktok5404.png"
                          alt=""
                        />
                      </Link>
                    </li>

                    <li className="icon">
                      <Link>
                        <img
                          src="../../src/assets/images/youtube5404.png"
                          alt=""
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </Row>

              <Row className="mt-5">
                <Col className="d-flex align-items-center justify-content-center">
                  <img
                    src="../../src/assets/images/footer_trustbadge5404.png"
                    alt=""
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Footer;
