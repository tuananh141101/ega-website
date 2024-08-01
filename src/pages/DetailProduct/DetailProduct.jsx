import {
  Breadcrumb,
  Col,
  Container,
  Offcanvas,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import "./DetailProduct.scss";
import CardItem from "../../components/CardItem/CardItem";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { BsDash } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdLocalShipping } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { IoCardOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Couponbanner } from "../../components/Coupon/Couponbanner";
import Nav from "react-bootstrap/Nav";

const DetailProduct = () => {
  const getProduct = useSelector((state) => state.product);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);
  const [isChooseColorActive, setIsChooseColorActive] = useState(0);
  const [isActiveTabProduct, setIsAcitveTabProduct] = useState(0);
  const [isChooseSize, setIsChooseSize] = useState(0);
  const [size, setSize] = useState("S");
  const [quality, setQuality] = useState(1);

  //* Show Coupon
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDecrement = () => {
    if (quality > 1) {
      setQuality(quality - 1);
    }
  };

  const handleIncrement = () => {
    setQuality(quality + 1);
  };

  return (
    <>
      <section className="breadCrumb">
        <Container className="breadCrumb_container">
          <Row>
            <Col className="d-flex align-items-center">
              <Breadcrumb>
                <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item active>Chi tiết sản phẩm</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="detailproduct">
        <Container className="detailproduct_container">
          <Row>
            <Col sm={12} lg={6} className="detailproduct_image">
              <div className="detailproduct_image-wrapper">
                <Swiper
                  onSwiper={setMainSwiper}
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2 customSwiper-main"
                >
                  {getProduct[0].imgList.map((item, index) => {
                    return (
                      <>
                        <SwiperSlide key={index}>
                          <img src={item} />
                        </SwiperSlide>
                      </>
                    );
                  })}
                </Swiper>

                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper customSwiper-second"
                >
                  {getProduct[0].imgList.map((item, index) => {
                    return (
                      <>
                        <SwiperSlide key={index}>
                          <img src={item} />
                        </SwiperSlide>
                      </>
                    );
                  })}
                </Swiper>

                <div className="socail-media d-flex align-items-center justify-content-center">
                  Chia sẻ: <FaFacebook className="facebook-icon" />
                  <FaPinterest className="pinterest-icon" />
                  <AiFillTwitterCircle className="twitter-icon" />
                </div>
              </div>
            </Col>

            <Col sm={12} lg={6} className="detailproduct_info">
              <div className="heading">Áo tập croptop dây</div>

              <div className="groupstatus d-flex align-items-center">
                <span className="brand">
                  Thương hiệu: <Link>Yinil</Link>
                </span>
                <span className="code">
                  Mã sản phẩm: <Link>Đang cập nhập</Link>
                </span>
              </div>

              <div className="flashsale">
                <div className="flashsale_header d-flex align-items-center justify-content-between">
                  <span className="title">Giảm sốc 50%</span>

                  <div className="countdown">
                    Kết thúc sau: <span className="hour">13</span> :{" "}
                    <span className="minute">39</span> :{" "}
                    <span className="second">27</span>
                  </div>
                </div>
                <div className="flashsale_bottom d-flex flex-column">
                  <div className="title d-flex align-items-center">
                    <img
                      src="https://bizweb.dktcdn.net/100/484/026/themes/953543/assets/flashsale-hot.png?1720746807499"
                      alt=""
                    />
                    Sắp cháy hàng
                  </div>

                  <div className="progressbar">
                    <div className="progressbar-percent"></div>
                  </div>
                </div>
              </div>

              <div className="pricebox d-flex align-items-start flex-column">
                <div className="pricebox_header d-flex align-items-center">
                  <span className="specialprice">290.000đ</span>
                  <span className="oldprice">
                    <del>350.000đ</del>
                  </span>
                  -18%
                </div>
                <div className="pricebox_bottom">
                  <span className="saveprice">(Tiết kiệm 60.000)</span>
                </div>
              </div>

              <div className="promotag d-flex align-items-center">
                <div className="promotag_first">Bán chạy</div>
                <div className="promotag_second">
                  <img
                    src="../../src/assets/images/promo_tag_hotdeal.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="concessionary">
                <div className="concessionary_header d-flex align-items-center">
                  <img
                    src="../../src/assets/images/icon-product-promotion5404.png"
                    alt=""
                  />
                  <span>Khuyễn mãi - ưu đãi</span>
                </div>

                <ul className="concessionary_list">
                  <li>
                    Nhập mã EGANY thêm 5% đơn hàng{" "}
                    <span style={{ color: "#f33828" }}>Sao chép</span>
                  </li>
                  <li>Hỗ trợ 10.000 phí Ship cho đơn hàng từ 200.000đ</li>
                  <li>Miễn phí Ship cho đơn hàng từ 300.000đ</li>
                  <li>Đổi trả trong 30 ngày nếu sản phẩm lỗi bất kì</li>
                </ul>
              </div>

              <div className="coupon" onClick={handleShow}>
                <div className="coupon_header">
                  <span>Mã giảm giá</span>
                </div>

                <div className="coupon_list d-flex align-items-center">
                  <div className="coupon-item">
                    <div className="item-wrapper">FREESHIP</div>
                  </div>
                  <div className="coupon-item">
                    <div className="item-wrapper">GIAM50</div>
                  </div>
                  <div className="coupon-item">
                    <div className="item-wrapper">GIAM30</div>
                  </div>
                  <div className="coupon-item">
                    <div className="item-wrapper">GIAM40</div>
                  </div>
                </div>
              </div>

              <div className="choosecolor">
                <div className="choosecolor_header">Màu sắc</div>

                <div className="choosecolor_list d-flex">
                  {getProduct[0].imgList.slice(0, 5).map((item, index) => {
                    return (
                      <>
                        <div
                          className={`image ${
                            isChooseColorActive === index ? "image-active" : ""
                          }`}
                          key={index}
                          onClick={() => {
                            setIsChooseColorActive(index);
                          }}
                        >
                          <OverlayTrigger
                            key="top"
                            placement="top"
                            className="customTooltip"
                            overlay={
                              <Tooltip id="tooltip-top">Màu sắc</Tooltip>
                            }
                          >
                            <img src={item} alt="img choose color" />
                          </OverlayTrigger>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>

              <div className="choosesize">
                <div className="choosesize_header">Kích thước: {size}</div>

                <div className="choosesize_list d-flex align-items-center">
                  {getProduct[0].size.map((item, index) => {
                    return (
                      <>
                        <div
                          className={`size d-flex align-items-center justify-content-center`}
                          key={index}
                          onClick={() => {
                            setSize(item);
                          }}
                        >
                          <span>{item}</span>
                          <FaCheck className="icon-check" />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>

              <div className="formaddcart">
                <div className="formaddcart_header d-flex align-items-center">
                  <div className="input-number">
                    <button className="decre" onClick={handleDecrement}>
                      <BsDash />
                    </button>
                    <input type="number" value={quality} />
                    <button className="incre" onClick={handleIncrement}>
                      <FaPlus />
                    </button>
                  </div>

                  <div className="btn-addtocart d-flex align-items-center justify-content-center">
                    <span>Thêm vào giỏ hàng</span>
                  </div>
                </div>
                <div className="formaddcart_bottom">
                  <div className="btn-buynow d-flex align-items-center justify-content-center">
                    <span>Mua Ngay</span>
                  </div>
                </div>
              </div>

              <div className="hotline">
                <span>
                  Gọi đặt mua{" "}
                  <span style={{ fontWeight: "bold" }}>1800.0000</span> (7:30 -
                  22:00)
                </span>
              </div>

              <div className="policies d-flex algin-items-center justify-content-center">
                <div className="policies_wrapper d-flex align-items-center">
                  <div className="media d-flex align-items-center">
                    <MdLocalShipping />
                    <span>Giao hàng toàn quốc</span>
                  </div>

                  <div className="media d-flex align-items-center">
                    <GiReceiveMoney />
                    <span>Giao hàng toàn quốc</span>
                  </div>

                  <div className="media d-flex align-items-center">
                    <IoCardOutline />
                    <span>Giao hàng toàn quốc</span>
                  </div>
                </div>
              </div>

              <div className="addtofav d-flex align-items-center">
                <span className="icon-heart">
                  <FaHeart />
                </span>
                <Link className="d-flex align-items-center justify-content-center">
                  Thêm vào yêu thích
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="navtabProduct">
        <Container className="navtabProduct_container">
          <Row>
            <Col
              sm={12}
              className="navtab_menu d-flex align-items-center justify-content-center border-bottom"
            >
              <Nav variant="underline" defaultActiveKey={isActiveTabProduct}>
                <Nav.Item>
                  <Nav.Link eventKey={0}>Mô tả sản phẩm</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={1}>Chính sách giao hàng</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={2}>Chính sách đổi trả</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={12} className="navtab_content">
              <div className="tabcontent tabcontent_1 active">
                <p>
                  ​​​​​Áo khoác thể thao là một sản phẩm không thể thiếu trong
                  bộ trang phục của những người đam mê tập luyện, đặc biệt là
                  trong các hoạt động thể thao ngoài trời. Với thiết kế đơn
                  giản, chất liệu thoáng khí và chống thấm tốt, áo khoác thể
                  thao mang lại sự thoải mái và bảo vệ cho người dùng trong quá
                  trình tập luyện.
                </p>
                <p>
                  Về kiểu dáng, áo khoác thể thao thường có thiết kế rộng rãi,
                  không quá ôm sát cơ thể để người dùng có thể di chuyển dễ dàng
                  trong các động tác tập luyện. Thiết kế áo có thể được chọn với
                  cổ cao, cổ tròn hoặc cổ chữ V, tay dài hoặc tay ngắn tùy vào
                  sở thích của người dùng. Tùy thuộc vào mục đích sử dụng, áo
                  khoác thể thao có thể được thiết kế với các chi tiết như túi
                  đựng điện thoại, khóa kéo hay các đường may chắc chắn để đảm
                  bảo sự tiện dụng và bền đẹp.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Offcanvas coupon */}
      <Offcanvas
        className="customCouponOffcanvas"
        show={show}
        onHide={handleClose}
        placement="end"
        name="end"
      >
        <Offcanvas.Header
          className="d-flex align-items-center justify-content-center border-bottom"
          onClick={() => handleClose}
        >
          <FaArrowLeftLong className="coupon-icon" />

          <Offcanvas.Title className="coupon-header">
            Mã giảm giá
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Couponbanner />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default DetailProduct;
