import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import "./Blog.scss";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import { useEffect, useState } from "react";

const Blog = () => {
  const [isShowDropdownSP, setIsShowDropdownSP] = useState(false);
  const [isShowDropdownBST, setIsShowDropdownBST] = useState(false);
  const [isShowDropdownPK, setIsShowDropdownPK] = useState(false);
  const [isShowDropdownKM, setIsShowDropdownKM] = useState(false);

  //* Khi mới vào trang scroll lên đầu
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="breadCrumb">
        <Container className="breadCrumb_container">
          <Row>
            <Col className="d-flex align-items-center">
              <Breadcrumb>
                <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item active>Tin tức</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="blog">
        <Container className="blog_container">
          <Row>
            <Col sm={12} className="blog_title">
              <p>Tin tức</p>
            </Col>

            <Col sm={12} className="blog_body">
              <Row>
                <Col lg={9} className="content">
                  <Row>
                    <Col sm={12} className="content_item">
                      <div className="content_item-wrapper">
                        <div className="image">
                          <img
                            src="../../src/assets/images/blog_img_1.png"
                            alt="blog image"
                            title="blog image"
                          />
                        </div>

                        <div className="content d-flex flex-column align-items-start justify-content-center">
                          <h3
                            className="title"
                            title="TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN"
                          >
                            TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN
                          </h3>

                          <div className="timestamp">
                            <ul className="timestamp-body d-flex align-items-center">
                              <li className="media-item d-flex align-items-center">
                                <SlCalender />
                                <span>Thứ Ba, 06/06/2023</span>
                              </li>

                              <li className="media-item d-flex align-items-center">
                                <FaRegClock />
                                <span>Thứ Ba, 06/06/2023</span>
                              </li>
                            </ul>
                          </div>

                          <div className="content d-flex flex-column">
                            <p>
                              Gym hiện đang là một xu hướng mới của giới trẻ.
                              Gym không chỉ là bộ môn phổ biến dành cho phái
                              mạnh mà nữ giới...
                            </p>

                            <Link>Đọc tiếp</Link>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col sm={12} className="content_item">
                      <div className="content_item-wrapper">
                        <div className="image">
                          <img
                            src="../../src/assets/images/blog_img_2.png"
                            alt="blog image"
                            title="blog image"
                          />
                        </div>

                        <div className="content d-flex flex-column align-items-start justify-content-center">
                          <h3
                            className="title"
                            title="4 CÁCH LỰA ĐỒ THỂ THAO YOGA ĐẸP KHÔNG PHẢI AI CŨNG BIẾT"
                          >
                            4 CÁCH LỰA ĐỒ THỂ THAO YOGA ĐẸP KHÔNG PHẢI AI CŨNG
                            BIẾT
                          </h3>

                          <div className="timestamp">
                            <ul className="timestamp-body d-flex align-items-center">
                              <li className="media-item d-flex align-items-center">
                                <SlCalender />
                                <span>Thứ Ba, 06/06/2023</span>
                              </li>

                              <li className="media-item d-flex align-items-center">
                                <FaRegClock />
                                <span>Thứ Ba, 06/06/2023</span>
                              </li>
                            </ul>
                          </div>

                          <div className="content d-flex flex-column">
                            <p>
                              Khi bắt đầu học Yoga điều đầu tiên mà chị em quan
                              tâm nhất là lựa chọn đồ tập Yoga sao cho đẹp và
                              hiệu quả...
                            </p>

                            <Link>Đọc tiếp</Link>
                          </div>
                        </div>
                      </div>
                    </Col>

                    <Col sm={12} className="content_item">
                      <div className="content_item-wrapper">
                        <div className="image">
                          <img
                            src="../../src/assets/images/blog_img_3.png"
                            alt="blog image"
                            title="blog image"
                          />
                        </div>

                        <div className="content d-flex flex-column align-items-start justify-content-center">
                          <h3
                            className="title"
                            title="CHỌN ĐỒ TẬP GYM NỮ ĐÚNG CÁCH CHO NGƯỜI MỚI"
                          >
                            CHỌN ĐỒ TẬP GYM NỮ ĐÚNG CÁCH CHO NGƯỜI MỚI
                          </h3>

                          <div className="timestamp">
                            <ul className="timestamp-body d-flex align-items-center">
                              <li className="media-item d-flex align-items-center">
                                <SlCalender />
                                <span>Thứ Ba, 06/06/2023</span>
                              </li>

                              <li className="media-item d-flex align-items-center">
                                <FaRegClock />
                                <span>Thứ Ba, 06/06/2023</span>
                              </li>
                            </ul>
                          </div>

                          <div className="content d-flex flex-column">
                            <p>
                              Gym hiện đang là một xu hướng mới của giới trẻ.
                              Gym không chỉ là bộ môn phổ biến dành cho phái
                              mạnh mà nữ giới...
                            </p>

                            <Link>Đọc tiếp</Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>

                <Col lg={3} className="sidebar d-flex flex-column">
                  <div className="sidebar_menu">
                    <p className="heading">Danh mục tin tức</p>

                    <ul className="list d-flex flex-column">
                      <li className="list-item d-flex justify-content-between flex-column">
                        <div className="d-flex align-items-center justify-content-between">
                          <span>Sản Phẩm</span>
                          {isShowDropdownSP ? (
                            <>
                              <MdArrowDropUp
                                onClick={() =>
                                  setIsShowDropdownSP(!isShowDropdownSP)
                                }
                              />
                            </>
                          ) : (
                            <>
                              <MdArrowDropDown
                                onClick={() =>
                                  setIsShowDropdownSP(!isShowDropdownSP)
                                }
                              />
                            </>
                          )}
                        </div>

                        <ul
                          className={`item-dropdown flex-column ${
                            isShowDropdownSP ? "d-flex" : "d-none"
                          }`}
                          id="item-dropdown"
                        >
                          <li>
                            <Link>Áo</Link>
                          </li>

                          <li>
                            <Link>Quần</Link>
                          </li>

                          <li>
                            <Link>Giày Dép</Link>
                          </li>

                          <li>
                            <Link>Đồ Bơi</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="list-item">
                        <div className="d-flex align-items-center justify-content-between">
                          <span>bộ sưu tập</span>
                          {isShowDropdownBST ? (
                            <>
                              <MdArrowDropUp
                                onClick={() =>
                                  setIsShowDropdownBST(!isShowDropdownBST)
                                }
                              />
                            </>
                          ) : (
                            <>
                              <MdArrowDropDown
                                onClick={() =>
                                  setIsShowDropdownBST(!isShowDropdownBST)
                                }
                              />
                            </>
                          )}
                        </div>

                        <ul
                          className={`item-dropdown flex-column ${
                            isShowDropdownBST ? "d-flex" : "d-none"
                          }`}
                          id="item-dropdown"
                        >
                          <li>
                            <Link>Tập Gym</Link>
                          </li>

                          <li>
                            <Link>Tập Yoga</Link>
                          </li>

                          <li>
                            <Link>Chạy Bộ</Link>
                          </li>

                          <li>
                            <Link>Boxing</Link>
                          </li>

                          <li>
                            <Link>Bơi Lội</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="list-item">
                        <div className="d-flex align-items-center justify-content-between">
                          <span>phụ kiện</span>
                          {isShowDropdownPK ? (
                            <>
                              <MdArrowDropUp
                                onClick={() =>
                                  setIsShowDropdownPK(!isShowDropdownPK)
                                }
                              />
                            </>
                          ) : (
                            <>
                              <MdArrowDropDown
                                onClick={() =>
                                  setIsShowDropdownPK(!isShowDropdownPK)
                                }
                              />
                            </>
                          )}
                        </div>

                        <ul
                          className={`item-dropdown flex-column ${
                            isShowDropdownPK ? "d-flex" : "d-none"
                          }`}
                          id="item-dropdown"
                        >
                          <li>
                            <Link>Balo Túi</Link>
                          </li>

                          <li>
                            <Link>Tập Yoga</Link>
                          </li>

                          <li>
                            <Link>Chạy Bộ</Link>
                          </li>

                          <li>
                            <Link>Boxing</Link>
                          </li>

                          <li>
                            <Link>Bơi Lội</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="list-item">
                        <div className="d-flex align-items-center justify-content-between">
                          <span>Xu hướng</span>
                        </div>
                      </li>

                      <li className="list-item">
                        <div className="d-flex align-items-center justify-content-between">
                          <span>khuyến mãi</span>
                          {isShowDropdownKM ? (
                            <>
                              <MdArrowDropUp
                                onClick={() =>
                                  setIsShowDropdownKM(!isShowDropdownKM)
                                }
                              />
                            </>
                          ) : (
                            <>
                              <MdArrowDropDown
                                onClick={() =>
                                  setIsShowDropdownKM(!isShowDropdownKM)
                                }
                              />
                            </>
                          )}
                        </div>

                        <ul
                          className={`item-dropdown flex-column ${
                            isShowDropdownKM ? "d-flex" : "d-none"
                          }`}
                          id="item-dropdown"
                        >
                          <li>
                            <Link>Landing Page - Flash Sale</Link>
                          </li>

                          <li>
                            <Link>Landing Page - Black Friday</Link>
                          </li>

                          <li>
                            <Link>Landing Page - Xmas</Link>
                          </li>

                          <li>
                            <Link>Landing Page - Onepage</Link>
                          </li>
                        </ul>
                      </li>

                      <li className="list-item">
                        <div className="d-flex align-items-center justify-content-between">
                          <span>Liên hệ</span>
                        </div>
                      </li>

                      <li className="list-item">
                        <div className="d-flex align-items-center justify-content-between">
                          <span>Chính sách</span>
                        </div>
                      </li>

                      <li className="list-item">
                        <div className="d-flex align-items-center justify-content-between">
                          <span>Tin tức</span>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="sidebar_hotnews">
                    <p className="heading">Tin nổi bật</p>

                    <div className="list d-flex flex-column">
                      <div className="listblog d-flex justify-content-between">
                        <Link className="image">
                          <img
                            src="../../src/assets/images/blog_img_1.png"
                            alt=""
                          />
                        </Link>
                        <div className="text">
                          <p title="TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN">
                            TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN
                          </p>
                        </div>
                      </div>

                      <div className="listblog d-flex justify-content-between">
                        <Link className="image">
                          <img
                            src="../../src/assets/images/blog_img_2.png"
                            alt=""
                          />
                        </Link>
                        <div className="text">
                          <p title="TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN">
                            TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN
                          </p>
                        </div>
                      </div>

                      <div className="listblog d-flex justify-content-between">
                        <Link className="image">
                          <img
                            src="../../src/assets/images/blog_img_3.png"
                            alt=""
                          />
                        </Link>
                        <div className="text">
                          <p title="TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN">
                            TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blog;
