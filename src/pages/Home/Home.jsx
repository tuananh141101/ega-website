import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Container, Tooltip, Row, Nav } from "react-bootstrap";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import { Col, Popover } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";

import "./Home.scss";
import "./HomeResponsive.scss";
import "swiper/css/effect-fade";
import Banner from "../../components/Banner/Banner";
import { useEffect, useState } from "react";
import { Couponbanner } from "../../components/Coupon/Couponbanner";
import CardItem from "../../components/CardItem/CardItem";
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [isRotated, setIsRotated] = useState(false);

  const getProduct = useSelector((state) => state.product);
  const categoriesImg = useSelector((state) => state.shop.categoriesImg);
  const policiesList = useSelector((state) => state.shop.policiesList);
  const feedbackList = useSelector((state) => state.shop.feedbackList);
  const lookbookList = useSelector((state) => state.shop.lookbookList);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mainBannerIMG = [
    {
      id: 1,
      imgURL: "../../src/assets/images/banner_1.png",
    },
    {
      id: 2,
      imgURL: "../../src/assets/images/banner_2.png",
    },
  ];

  const secondBannerIMG = [
    {
      id: 1,
      imgURL: "../../src/assets/images/banner_5.png",
    },
    {
      id: 2,
      imgURL: "../../src/assets/images/banner_6.jpg",
    },
  ];

  const video = [
    "../../src/assets/images/mostvideo_img_1.png",
    "../../src/assets/images/mostvideo_img_2.png",
    "../../src/assets/images/mostvideo_img_3.png",
    "../../src/assets/images/mostvideo_img_4.png",
  ];

  const technical = [
    "../../src/assets/images/technical_img_1.png",
    "../../src/assets/images/technical_img_2.png",
    "../../src/assets/images/technical_img_3.png",
  ];

  return (
    <>
      <section className="mainBanner">
        <Banner images={mainBannerIMG} />
      </section>

      <section className="policies">
        <Container className="policies_container">
          <Row>
            <Col>
              {policiesList.map((item, index) => {
                return (
                  <>
                    <div
                      className="policies-item d-flex flex-column"
                      key={index}
                    >
                      <div className="policies-img d-flex justify-content-center">
                        <img src={item.imgURL} alt="policies images" />
                      </div>

                      <div className="policies-info d-flex align-items-center justify-content-center flex-column">
                        <p>{item.name}</p>
                        <span>{item.title}</span>
                      </div>
                    </div>
                  </>
                );
              })}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="productcategories">
        <Container className="productcategories_container">
          <Row>
            <Col>
              {categoriesImg.map((item, index) => {
                return (
                  <>
                    <div
                      className="productcategories-item"
                      key={index}
                      onClick={() => navigate("shop")}
                    >
                      <div className="image">
                        <img src={item.imgURL} alt="Ao nguc the thao" />
                      </div>

                      <div className="info d-flex flex-column">
                        <p className="info-name">{item.name}</p>
                        <span className="info-number">{item.total}</span>
                      </div>
                    </div>
                  </>
                );
              })}
            </Col>
          </Row>
        </Container>
      </section>

      <Couponbanner />

      <section className="productlist">
        <Container className="productlist_container">
          <Row>
            <div className="col productlist_title d-flex justify-content-between">
              <Link to="shop" className="d-flex flex-column heading">
                <span>Nữ</span>
                <span>NEW ARRIVAL</span>
              </Link>

              <Link to="shop" className="seeall">
                <span>Xem tất cả</span>
              </Link>
            </div>
          </Row>

          <Row className="mt-4">
            <Col className="productlist_item">
              {getProduct.slice(0, 4).map((item, index) => {
                return (
                  <>
                    <CardItem data={item} key={index} />
                  </>
                );
              })}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="productlistFlashsale">
        <Container className="productlistFlashsale_container">
          <div className="row">
            <div className="col d-flex justify-content-between align-items-center">
              <div className="heading d-flex align-items-center">
                <span>Giảm gái sốc 50%</span>

                <img
                  src="https://bizweb.dktcdn.net/100/484/026/themes/953543/assets/flashsale-hot.png?1720746807499"
                  alt=""
                />
              </div>

              <div className="countdown d-flex align-items-center">
                <p className="countdown_title">Kết thúc sau</p>
                <div className="countdown_numb">12h 00p 33s</div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 navtab_heading">
              <Nav
                variant="underline"
                defaultActiveKey={activeTab}
                className="border-top border-bottom custom-nav"
              >
                <Nav.Item onClick={() => setActiveTab(0)}>
                  <Nav.Link href="" eventKey="0">
                    Hàng hiệu -50%
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="1" onClick={() => setActiveTab(1)}>
                    Năng động ngày hè
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="2" onClick={() => setActiveTab(2)}>
                    Chào biển nắng mới
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            <div className="col-12 navtab_content">
              <div
                className={`tab tab-1 ${activeTab === 0 ? "tab-active" : ""}`}
              >
                {getProduct.map((item, index) => {
                  return (
                    <>
                      <CardItem data={item} key={index} />
                    </>
                  );
                })}

                {getProduct.map((item, index) => {
                  return (
                    <>
                      <CardItem data={item} key={index} />
                    </>
                  );
                })}
              </div>

              <div
                className={`tab tab-2 ${activeTab === 1 ? "tab-active" : ""}`}
              >
                Coming Soon...
              </div>

              <div
                className={`tab tab-2 ${activeTab === 2 ? "tab-active" : ""}`}
              >
                Coming Soon...
              </div>
            </div>

            <div className="col-12 navtab_btnseemore d-flex align-items-center justify-content-center">
              <button className="d-flex align-items-center justify-content-center">
                <Link to="" className="d-flex align-items-center">
                  <span>Xem tất cả</span>
                  <RiArrowRightSLine />
                </Link>
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="secondBanner">
        <Container className="secondBanner_container">
          <Row>
            <Col>
              <Banner images={secondBannerIMG} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="outstandingSports">
        <Container className="outstandingSports_container">
          <div className="row">
            <div className="col-12  outstandingsport_heading">
              <p>Hoạt động thể thao nổi bật</p>
            </div>

            <div className="col-12 outstandingsport_list">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Navigation, Pagination]}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  996: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="../../src/assets/images/running_img.jpg"
                    alt=""
                    onClick={() => navigate("blog")}
                  />
                  <div className="content">
                    <p>Boxing</p>
                    <button>Khám phá ngay</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="../../src/assets/images/running_img.jpg"
                    alt=""
                    onClick={() => navigate("blog")}
                  />
                  <div className="content">
                    <p>Boxing</p>
                    <button>Khám phá ngay</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="../../src/assets/images/running_img.jpg"
                    alt=""
                    onClick={() => navigate("blog")}
                  />
                  <div className="content">
                    <p>Boxing</p>
                    <button>Khám phá ngay</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="../../src/assets/images/running_img.jpg"
                    alt=""
                    onClick={() => navigate("blog")}
                  />
                  <div className="content">
                    <p>Boxing</p>
                    <button>Khám phá ngay</button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </section>

      <section className="thirdBanner">
        <img src="../../src/assets/images/banner_3.jpg" alt="third banner" />
        <div className="content d-flex align-items-center flex-column">
          <p>Phụ kiện thể thao</p>
          <button>Xem Ngay</button>
        </div>
      </section>

      <section className="productlist productlistThird">
        <Container className="productlist_container">
          <Row className="row">
            <Col className="productlist_title d-flex justify-content-between">
              <Link to="" className="d-flex flex-column heading">
                <span>Nữ</span>
                <span>Phụ kiện thể thao</span>
              </Link>

              <Link to="shop" className="seeall">
                <span>Xem tất cả</span>
              </Link>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col className="productlist_item">
              {getProduct.slice(0, 4).map((item, index) => {
                return (
                  <>
                    <CardItem data={item} key={index} />
                  </>
                );
              })}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="secondBanner">
        <Container className="secondBanner_container">
          <div className="row">
            <div className="col">
              <Swiper
                spaceBetween={30}
                effect="fade"
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="../../src/assets/images/banner_4.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="../../src/assets/images/banner_5.png" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </Container>
      </section>

      <section className="productlist productlistForth">
        <Container className="productlist_container">
          <Row className="row">
            <Col className="productlist_title d-flex justify-content-between">
              <Link to="" className="d-flex flex-column heading">
                <span>Nữ</span>
                <span>Best sellers</span>
              </Link>

              <Link to="" className="seeall">
                <span>Xem tất cả</span>
              </Link>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col className="productlist_item">
              {getProduct.slice(0, 4).map((item, index) => {
                return (
                  <>
                    <CardItem data={item} key={index} />
                  </>
                );
              })}
            </Col>
          </Row>
        </Container>
      </section>

      <section className="feedback">
        <Container className="feedback_container">
          <div className="row">
            <div className="col">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {feedbackList.map((item, index) => {
                  return (
                    <>
                      <SwiperSlide key={index}>
                        <div className="feedback_left">
                          <div className="image_wrapper d-flex">
                            <div className="blue"></div>

                            <img src={item.img} alt="" className="img" />

                            <div className="image_wrapper-top d-flex flex-column">
                              <div className="heading d-flex align-items-center">
                                <span className="icon d-flex align-items-center justify-content-center">
                                  <AiFillLike />
                                </span>

                                <span className="text">
                                  Đánh giá về khách hàng
                                </span>
                              </div>

                              <div className="title">
                                <span>{item.title}</span>
                              </div>

                              <div className="quote">
                                <FaQuoteRight />
                              </div>
                            </div>

                            <div className="image_wrapper-bottom d-flex flex-column align-items-left">
                              <p>{item.name}</p>
                              <span>{item.position}</span>
                            </div>
                          </div>
                        </div>

                        <div className="feedback_right d-flex align-items-center flex-column justify-content-center">
                          <p>{item.text}</p>

                          <div className="star-vote d-flex align-items-center">
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                            <span>
                              <FaStar />
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>
                    </>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </Container>
      </section>

      <section className="lookbook">
        <Container className="lookbook_container">
          <div className="heading">
            <p>set đồ cho bạn</p>
          </div>

          <Row>
            {lookbookList.map((item, index) => {
              return (
                <>
                  <Col
                    className="col-lg-4 col-sm-6 col-12 lookbook_item"
                    key={index}
                  >
                    <div className="item_wrapper d-flex flex-column">
                      <div className="banner">
                        <div className="image">
                          <img src={item.imgURL} alt="" />
                        </div>

                        <OverlayTrigger
                          trigger="click"
                          key="top"
                          placement="top"
                          overlay={
                            <Popover
                              id={`popover-positioned-top`}
                              className="custom-popover"
                            >
                              <Popover.Body className="d-flex align-items-center custom-popover">
                                <div className="img">
                                  <img
                                    src={item.imgToolTip}
                                    alt=""
                                    style={{
                                      width: "43px",
                                      height: "50px",
                                      objectFit: "cover",
                                    }}
                                  />
                                </div>
                                <div
                                  className="text d-flex flex-column"
                                  style={{
                                    paddingLeft: "12px",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: "12px",
                                    }}
                                  >
                                    Áo croptop tập gym yoga
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "14px",
                                    }}
                                  >
                                    290.000đ
                                  </span>
                                </div>
                              </Popover.Body>
                            </Popover>
                          }
                        >
                          <button
                            className="seemore seemore_1 d-flex align-items-center justify-content-center"
                            id="seemoreLookbook"
                            // onClick={() => setIsRotated(!isRotated)}
                          >
                            <FaPlus
                              className={`icon ${
                                isRotated ? "icon_rotated" : ""
                              }`}
                            />
                          </button>
                        </OverlayTrigger>

                        <button className="seemore seemore_2 d-flex align-items-center justify-content-center">
                          <FaPlus clickable className="icon" />
                        </button>
                      </div>

                      <div className="info d-flex align-items-center justify-content-center flex-column mt-3">
                        <p>{item.name}</p>
                        <Link to="">Xem chi tiết</Link>
                      </div>
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className="materialintroduction">
        <Container className="materialintroduction_container">
          <Row>
            <Col className="col-xl-6 col-12 materialintroduction_desc d-flex align-items-center">
              <div className="desc_wrapper d-flex flex-column">
                <p className="heading">
                  CÔNG NGHỆ DRY_EX - THOẢI MÁI VỚI TÍNH NĂNG KHÔ SIÊU NHANH
                </p>

                <span className="title">
                  Công nghệ DRY-EX sử dụng cấu trúc đan 3 chiều đặc biệt, với
                  tính năng khô nhanh vượt trội so với thông thường. Mang đến sự
                  thoáng mát, tạm biệt cảm giác khó chịu do mồ hôi gây ra.
                </span>

                <Link className="button d-flex align-items-center justify-content-center">
                  Xem Ngay
                </Link>
              </div>
            </Col>

            <Col className="col-xl-6 col-12 materialintroduction_photo">
              <div className="image">
                <img
                  src="../../src/assets/images/material_img.png"
                  alt=""
                  className="img"
                />

                <OverlayTrigger
                  trigger="click"
                  key="top"
                  placement="top"
                  overlay={
                    <Popover
                      id={`popover-positioned-top`}
                      className="custom-popover"
                    >
                      <Popover.Body className="d-flex align-items-center flex-column">
                        <p>Thấm hút mồi hôi</p>
                        <span>
                          Kết cấu 3 chiều đặc biệt, thấm hút mồ hôi lập tức, giữ
                          da luôn khô ráo
                        </span>
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <button
                    className="seemore seemore_1 d-flex align-items-center justify-content-center"
                    // onClick={() => setIsRotated(!isRotated)}
                  >
                    <FaPlus
                      className={`icon ${isRotated ? "icon_rotated" : ""}`}
                    />
                  </button>
                </OverlayTrigger>

                <OverlayTrigger
                  trigger="click"
                  key="top"
                  placement="top"
                  overlay={
                    <Popover
                      id={`popover-positioned-top`}
                      className="custom-popover"
                    >
                      <Popover.Body className="d-flex align-items-center flex-column">
                        <p>Thấm hút mồi hôi</p>
                        <span>
                          Kết cấu 3 chiều đặc biệt, thấm hút mồ hôi lập tức, giữ
                          da luôn khô ráo
                        </span>
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <button
                    className="seemore seemore_2 d-flex align-items-center justify-content-center"
                    // onClick={() => setIsRotated(!isRotated)}
                  >
                    <FaPlus
                      className={`icon ${isRotated ? "icon_rotated" : ""}`}
                    />
                  </button>
                </OverlayTrigger>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="technical">
        <Container className="technical_container">
          <Row>
            <div className="col technical_title d-flex justify-content-between">
              <Link to="" className="d-flex flex-column heading">
                <span>Mới</span>
                <span>CÔNG NGHỆ</span>
              </Link>

              <Link to="" className="seeall">
                <span>Xem tất cả</span>
              </Link>
            </div>
          </Row>

          <Row className="mt-4">
            {technical.map((item, index) => {
              return (
                <>
                  <Col className="col-md-4 col-8 technical_img" key={index}>
                    <img src={item} alt="" />
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className="video">
        <Container className="video_container">
          <Row>
            <Col className="mt-3">
              <iframe
                width="100%"
                height="670"
                src="https://www.youtube.com/embed/rxvlmO98e5I?si=B4ccGHSTl_BHDbUk"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="aboutus">
        <Container className="aboutus_container">
          <Row>
            <Col className="col-xl-6 col-12 aboutus_photo">
              <div className="image">
                <img src="../../src/assets/images/aboutus_img.png" alt="" />
              </div>
            </Col>

            <Col className="col-xl-6 col-12 aboutus_content d-flex flex-column justify-content-between">
              <p className="heading">Về chúng tôi</p>

              <span className="title">
                EGA Sportswear là một thương hiệu thời trang thể thao chuyên
                nghiệp, mang đến cho khách hàng những sản phẩm thiết kế tinh tế
                và chất lượng cao. Với sự tập trung vào việc sáng tạo và đổi
                mới, EGA Sportswear luôn cố gắng mang đến những sản phẩm mới
                nhất và đáp ứng nhu cầu của khách hàng với phong cách thời trang
                thể thao hiện đại và tiện dụng. Những chi tiết nhỏ như đường may
                tinh tế và chất liệu thoáng khí giúp sản phẩm của EGA Sportswear
                mang đến sự thoải mái và độ bền tốt nhất cho khách hàng. Với cam
                kết mang đến sự hài lòng cho khách hàng, EGA Sportswear đã trở
                thành một trong những thương hiệu thời trang thể thao được ưa
                chuộng và tin dùng trên thị trường.
              </span>

              <Link>Xem chi tiết</Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="mostwatchvideo">
        <Container className="mostwatchvideo_container">
          <Row>
            <Col className="mostwatchvideo_heading">
              <p>Video được xem nhiều nhất</p>
            </Col>
          </Row>

          <Row>
            <Col className="mostwatchvideo_list">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Navigation, Pagination]}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  996: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
                className="mySwiper"
              >
                {video.map((item, index) => {
                  return (
                    <>
                      <SwiperSlide key={index}>
                        <img src={item} alt="" />

                        <div className="video">
                          <FaPlayCircle />
                        </div>
                      </SwiperSlide>
                    </>
                  );
                })}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="follow">
        <Container className="follow_container">
          <Row>
            <Col sm={12} className="follow_heading">
              <p>@Follow instagram</p>
            </Col>
            <Col sm={12} className="follow_list">
              <div className="follow_list-item">
                <img src="../../src/assets/images/insta_1_img5404.jpg" alt="" />
                <div className="insta-icon-wrap d-flex align-items-center justify-content-center">
                  <div className="insta-icon d-flex align-items-center justify-content-center">
                    <FaInstagram />
                  </div>
                </div>
              </div>

              <div className="follow_list-item">
                <img src="../../src/assets/images/insta_3_img5404.jpg" alt="" />
                <div className="insta-icon-wrap d-flex align-items-center justify-content-center">
                  <div className="insta-icon d-flex align-items-center justify-content-center">
                    <FaInstagram />
                  </div>
                </div>
              </div>

              <div className="follow_list-item">
                <img src="../../src/assets/images/insta_1_img5404.jpg" alt="" />
                <div className="insta-icon-wrap d-flex align-items-center justify-content-center">
                  <div className="insta-icon d-flex align-items-center justify-content-center">
                    <FaInstagram />
                  </div>
                </div>
              </div>

              <div className="follow_list-item">
                <img src="../../src/assets/images/insta_4_img5404.jpg" alt="" />
                <div className="insta-icon-wrap d-flex align-items-center justify-content-center">
                  <div className="insta-icon d-flex align-items-center justify-content-center">
                    <FaInstagram />
                  </div>
                </div>
              </div>

              <div className="follow_list-item">
                <img src="../../src/assets/images/insta_5_img5404.jpg" alt="" />
                <div className="insta-icon-wrap d-flex align-items-center justify-content-center">
                  <div className="insta-icon d-flex align-items-center justify-content-center">
                    <FaInstagram />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sporttip">
        <Container className="sporttip_container">
          <Row>
            <Col
              sm={12}
              className="sporttip_heading d-flex align-items-center justify-content-between"
            >
              <p>Lời khuyên thể thao dành cho bạn</p>
              <Link to="blog">Xem tất cả</Link>
            </Col>

            <Col sm={12} className="sporttip_list">
              <div
                className="sporttip_list-item"
                title="TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN"
              >
                <div className="image">
                  <img
                    src="../../src/assets/images/sporttip_img_1.png"
                    alt=""
                    onClick={() => navigate("blog")}
                  />
                </div>

                <div className="content">
                  <p title="TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN">
                    TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN
                  </p>
                  <Link className="button">Xem ngay</Link>
                </div>
              </div>

              <div
                className="sporttip_list-item"
                title="TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN"
              >
                <div className="image">
                  <img
                    src="../../src/assets/images/sporttip_img_2.png"
                    alt=""
                    onClick={() => navigate("blog")}
                  />
                </div>

                <div className="content">
                  <p title="TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN">
                    TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN
                  </p>
                  <Link className="button">Xem ngay</Link>
                </div>
              </div>

              <div
                className="sporttip_list-item"
                title="TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN"
              >
                <div className="image">
                  <img
                    src="../../src/assets/images/sporttip_img_3.png"
                    alt=""
                    onClick={() => navigate("blog")}
                  />
                </div>

                <div className="content">
                  <p title="TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN">
                    TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN
                  </p>
                  <Link className="button">Xem ngay</Link>
                </div>
              </div>

              <div
                className="sporttip_list-item"
                title="TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN"
              >
                <div className="image">
                  <img
                    src="../../src/assets/images/sporttip_img_1.png"
                    alt=""
                    onClick={() => navigate("blog")}
                  />
                </div>

                <div className="content">
                  <p title="TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN">
                    TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN
                  </p>
                  <Link className="button">Xem ngay</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="categories">
        <Container className="categories_container">
          <Row>
            <Col sm={12} className="categories_heading">
              <p>Danh mục sản phẩm</p>
            </Col>

            <Col sm={12} className="categories_list">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Navigation, Pagination]}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  996: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="../../src/assets/images/productlist_img_2.png"
                    alt=""
                    onClick={() => navigate("shop")}
                  />

                  <div className="content d-flex align-items-center justify-content-between">
                    <p>Áo</p>
                    <button className="seemore d-flex align-items-center justify-content-center">
                      <MdOutlineKeyboardArrowRight className="icon" />
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="../../src/assets/images/productlist_img_1.png"
                    alt=""
                    onClick={() => navigate("shop")}
                  />

                  <div className="content d-flex align-items-center justify-content-between">
                    <p>Áo</p>
                    <button className="seemore d-flex align-items-center justify-content-center">
                      <MdOutlineKeyboardArrowRight className="icon" />
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="../../src/assets/images/productlist_img_1.png"
                    alt=""
                    onClick={() => navigate("shop")}
                  />

                  <div className="content d-flex align-items-center justify-content-between">
                    <p>Áo</p>
                    <button className="seemore d-flex align-items-center justify-content-center">
                      <MdOutlineKeyboardArrowRight className="icon" />
                    </button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="../../src/assets/images/productlist_img_2.png"
                    alt=""
                    onClick={() => navigate("shop")}
                  />

                  <div className="content d-flex align-items-center justify-content-between">
                    <p>Áo</p>
                    <button className="seemore d-flex align-items-center justify-content-center">
                      <MdOutlineKeyboardArrowRight className="icon" />
                    </button>
                  </div>
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>

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

export default Home;
