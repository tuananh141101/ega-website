import {
  Breadcrumb,
  Col,
  Container,
  Offcanvas,
  OverlayTrigger,
  Row,
  ToastContainer,
  Tooltip,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./DetailProduct.scss";
import CardItem from "../../components/CardItem/CardItem";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { useEffect, useState } from "react";
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
import { Link, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Couponbanner } from "../../components/Coupon/Couponbanner";
import Nav from "react-bootstrap/Nav";
import { toast } from "react-toastify";
import { addToFav } from "../../store/slice/favourite";

const DetailProduct = () => {
  //*get data from state
  const dispatch = useDispatch();
  const getProduct = useSelector((state) => state.product);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  const [isChooseColorActive, setIsChooseColorActive] = useState(0);
  const [seeMoreDetail, isSeeMoreDetail] = useState(false);
  const [isActiveTabProduct, setIsAcitveTabProduct] = useState(0);
  const [size, setSize] = useState("S");
  const [quality, setQuality] = useState(1);
  const [qualitySecond, setQualitySecond] = useState(1);

  const [currentProduct, setCurrentProduct] = useState([]);
  const params = useParams();
  const getParams = params.slug;
  console.log("getParams", getParams);

  useEffect(() => {
    if (getProduct && getProduct.length > 0) {
      window.scroll(0, 0);
      const getCurrentProduct = getProduct.filter(
        (item) => item.pathName === getParams
      );

      setCurrentProduct(getCurrentProduct);
      console.log("getCurrentProduct", getCurrentProduct);
    }
  }, [getParams, getProduct]);

  //* Show Coupon
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //* Incre-Decre
  const handleDecrement = () => {
    if (quality > 1) {
      setQuality(quality - 1);
    }
  };
  const handleIncrement = () => {
    setQuality(quality + 1);
  };

  //* Đổi ảnh chính khi click chooseColor
  const handleColorClick = (index) => {
    if (mainSwiper) {
      //*slideTo(Swiper) - phương thức để chuyển đến slide hiện tại
      mainSwiper.slideTo(index);
    }
  };

  //* Thêm sản phẩm vào yêu thích
  const handleAddToFav = () => {
    dispatch(addToFav(getProduct[0]));
    toast.success(`Thêm sản phẩm ${getProduct[0].name} vào yêu thích!`);
    console.log("click add fav");
  };

  return (
    <>
      <section className="breadCrumb">
        <Container className="breadCrumb_container">
          <Row>
            <Col className="d-flex align-items-center">
              <Breadcrumb>
                <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item active>
                  {currentProduct[0] && currentProduct[0].length > 0
                    ? `${currentProduct[0].name}`
                    : `Chi tiet san pham`}
                </Breadcrumb.Item>
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
              <div className="heading">{getProduct[0].name}</div>

              <div className="groupstatus d-flex align-items-center">
                <span className="brand">
                  Thương hiệu: <Link>{getProduct[0].brand}</Link>
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
                  <span className="specialprice">{getProduct[0].price}đ</span>
                  <span className="oldprice">
                    <del> {getProduct[0].comparePrice}đ</del>
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
                  <img src={getProduct[0].hotdeal} alt="" />
                </div>
              </div>

              <div className="concessionary">
                <div className="concessionary_header d-flex align-items-center">
                  <img
                    src="/public/assets/images/icon-product-promotion5404.png"
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
                            handleColorClick(index);
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

              <div
                className="addtofav d-flex align-items-center"
                onClick={handleAddToFav}
              >
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

      <section className="navtabproduct">
        <Container className="navtabproduct_container">
          <Row>
            <Col
              sm={12}
              className="navtab_menu d-flex align-items-center justify-content-center border-bottom"
            >
              <Nav variant="underline" defaultActiveKey={isActiveTabProduct}>
                <Nav.Item>
                  <Nav.Link
                    eventKey={0}
                    onClick={() => setIsAcitveTabProduct(0)}
                  >
                    Mô tả sản phẩm
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey={1}
                    onClick={() => setIsAcitveTabProduct(1)}
                  >
                    Chính sách giao hàng
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey={2}>Chính sách đổi trả</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col sm={12} className="navtab_content">
              <div
                className={`tabcontent tabcontent_0 flex-column ${
                  isActiveTabProduct === 0 ? "tabcontent-active" : ""
                }`}
              >
                <div
                  className="content-wrapper d-flex align-items-center flex-column"
                  style={{
                    height: seeMoreDetail ? "auto" : "300px",
                  }}
                >
                  <p>
                    ​​​​​Áo khoác thể thao là một sản phẩm không thể thiếu trong
                    bộ trang phục của những người đam mê tập luyện, đặc biệt là
                    trong các hoạt động thể thao ngoài trời. Với thiết kế đơn
                    giản, chất liệu thoáng khí và chống thấm tốt, áo khoác thể
                    thao mang lại sự thoải mái và bảo vệ cho người dùng trong
                    quá trình tập luyện.
                  </p>
                  <p>
                    Về kiểu dáng, áo khoác thể thao thường có thiết kế rộng rãi,
                    không quá ôm sát cơ thể để người dùng có thể di chuyển dễ
                    dàng trong các động tác tập luyện. Thiết kế áo có thể được
                    chọn với cổ cao, cổ tròn hoặc cổ chữ V, tay dài hoặc tay
                    ngắn tùy vào sở thích của người dùng. Tùy thuộc vào mục đích
                    sử dụng, áo khoác thể thao có thể được thiết kế với các chi
                    tiết như túi đựng điện thoại, khóa kéo hay các đường may
                    chắc chắn để đảm bảo sự tiện dụng và bền đẹp.
                  </p>
                  <div className="image">
                    {getProduct[0].imgList.slice(0, 1).map((item, index) => {
                      return (
                        <>
                          <img src={item} alt="" />
                        </>
                      );
                    })}
                  </div>
                  <p className="pt-3">
                    Chất liệu của áo khoác thể thao cũng rất đa dạng, tùy vào
                    mục đích sử dụng và sở thích của người dùng. Thông thường,
                    áo khoác thể thao được làm từ chất liệu polyester, nylon
                    hoặc vải softshell, có khả năng chống thấm và thoáng khí
                    tốt, giúp người dùng luôn cảm thấy khô ráo và thoải mái
                    trong quá trình tập luyện. Ngoài ra, một số sản phẩm còn
                    được làm từ chất liệu cao cấp như Gore-Tex, giúp tăng độ
                    chống thấm và bảo vệ cho người dùng trong môi trường thời
                    tiết khắc nghiệt.
                  </p>
                  <p>
                    Màu sắc của áo khoác thể thao cũng rất đa dạng và phong phú,
                    từ màu sắc trung tính như đen, xám, trắng đến các màu sắc
                    sáng tươi như vàng, xanh lá, hồng. Điều này giúp người dùng
                    có thể lựa chọn sản phẩm phù hợp với sở thích cá nhân và tạo
                    nét riêng cho bản thân khi tập luyện.
                  </p>
                  <div className="image">
                    {getProduct[0].imgList.slice(1, 4).map((item, index) => {
                      return (
                        <>
                          <img src={item} alt="" />
                        </>
                      );
                    })}
                  </div>
                  <p className="pt-3">
                    Độ thoải mái của áo khoác thể thao là một yếu tố quan trọng
                    được đánh giá cao bởi người dùng. Với chất liệu mềm mại và
                    co giãn tốt, áo khoác thể thao giúp người dùng tập trung vào
                    việc thở đều và tập trung vào các động tác tập luyện. Điều
                    này giúp đạt được hiệu quả tập luyện tốt hơn và giảm thiểu
                    các chấn thương, đau nhức cơ thể.
                  </p>
                </div>

                <div
                  className="btn-seemoredetail d-flex align-items-center justify-content-center"
                  onClick={() => {
                    isSeeMoreDetail(!seeMoreDetail);
                  }}
                >
                  <Link>Xem thêm</Link>
                </div>
              </div>

              <div
                className={`tabcontent tabcontent_1 flex-column ${
                  isActiveTabProduct === 1 ? "tabcontent-active" : ""
                }`}
              >
                <p>
                  EGA Sportswear có dịch vụ giao hàng tận nơi trên toàn quốc, áp
                  dụng cho khách mua hàng trên website, fanpage và gọi điện
                  thoại, không áp dụng cho khách mua trực tiếp tại cửa hàng.
                </p>
                <p>
                  Đơn hàng sẽ được chuyển phát đến tận địa chỉ khách hàng cung
                  cấp thông qua công ty vận chuyển trung gian.
                </p>
                <p style={{ fontWeight: "bold" }}>1. Thời gian giao hàng:</p>
                <ul>
                  <li>
                    <p>Đơn hàng nội và ngoại thành TP.HCM:</p>
                    <ul>
                      <p>Thời gian giao hàng là 1-2 ngày sau khi đặt hàng.</p>
                      <p>
                        Đơn hang trước 11h30 trưa thì sẽ giao trong buổi chiều
                        cùng ngày.
                      </p>
                      <p>
                        Đơn hàng sau 11h30 sẽ giao trong buổi tối và sáng hôm
                        sau.
                      </p>
                      d
                    </ul>
                  </li>
                  <li>
                    <p>Đơn hàng ở các tỉnh thành khác:</p>
                    <ul>
                      <p>
                        Thời gian là 2-3 ngày đối với khu vực trung tâm tỉnh
                        thành phố, 3-7 ngày đối với khu vực ngoại thành, huyện,
                        xã, thị trấn…
                      </p>
                      <p>Không tính thứ bảy, chủ nhật hay các ngày lễ tết</p>
                      <p>
                        KThời gian xử lý đơn hàng sẽ được tính từ khi nhận được
                        thanh toán hoàn tất của quý khách.
                      </p>
                    </ul>
                  </li>
                </ul>
                <p style={{ fontWeight: "bold" }}>2. Phí giao hàng:</p>
                <ul>
                  <li>
                    <p>Phí ship cố định là 30,000đ áp dụng cho mọi khu vực</p>
                  </li>
                </ul>
              </div>

              <div
                className={`tabcontent tabcontent_2 flex-column align-items-center ${
                  isActiveTabProduct === 2 ? "tabcontent-active" : ""
                }`}
              >
                <p>
                  EGA Sportswear có dịch vụ giao hàng tận nơi trên toàn quốc, áp
                  dụng cho khách mua hàng trên website, fanpage và gọi điện
                  thoại, không áp dụng cho khách mua trực tiếp tại cửa hàng.
                </p>
                <p>
                  Đơn hàng sẽ được chuyển phát đến tận địa chỉ khách hàng cung
                  cấp thông qua công ty vận chuyển trung gian.
                </p>
                <p style={{ fontWeight: "bold" }}>1. Thời gian giao hàng:</p>
                <ul>
                  <li>
                    <p>Đơn hàng nội và ngoại thành TP.HCM:</p>
                    <ul>
                      <p>Thời gian giao hàng là 1-2 ngày sau khi đặt hàng.</p>
                      <p>
                        Đơn hang trước 11h30 trưa thì sẽ giao trong buổi chiều
                        cùng ngày.
                      </p>
                      <p>
                        Đơn hàng sau 11h30 sẽ giao trong buổi tối và sáng hôm
                        sau.
                      </p>
                      d
                    </ul>
                  </li>
                  <li>
                    <p>Đơn hàng ở các tỉnh thành khác:</p>
                    <ul>
                      <p>
                        Thời gian là 2-3 ngày đối với khu vực trung tâm tỉnh
                        thành phố, 3-7 ngày đối với khu vực ngoại thành, huyện,
                        xã, thị trấn…
                      </p>
                      <p>Không tính thứ bảy, chủ nhật hay các ngày lễ tết</p>
                      <p>
                        KThời gian xử lý đơn hàng sẽ được tính từ khi nhận được
                        thanh toán hoàn tất của quý khách.
                      </p>
                    </ul>
                  </li>
                </ul>
                <p style={{ fontWeight: "bold" }}>2. Phí giao hàng:</p>
                <ul>
                  <li>
                    <p>Phí ship cố định là 30,000đ áp dụng cho mọi khu vực</p>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cartproduct">
        <Container className="cartproduct_container">
          <Row>
            <Col>
              <div className="cartproduct_wrapper d-flex align-items-center">
                <div className="image">
                  <img
                    src="../../src/assets/images/ImgReduxState/img_product_21.jpg"
                    alt=""
                  />
                </div>

                <div className="info d-flex flex-column">
                  <p className="info_name">
                    Demo coupon nhập liệu từ metafield
                  </p>

                  <div className="info_pricebox">
                    <div className="pricebox-top d-flex">
                      <span className="specialprice">350.000đ</span>
                      <span className="oldprice">
                        <del>450.000đ</del>
                      </span>
                      <span className="sale">-23%</span>
                    </div>

                    <div className="pricebox-bottom">(Tiết kiệm 100.000đ)</div>
                  </div>
                </div>

                <div className="button d-flex algin-items-center">
                  <div className="button_selected d-flex align-items-center">
                    <div className="selected-color">
                      <select name="colors" id="colors">
                        <option value="Cam">Cam</option>
                        <option value="Hồng">Hồng</option>
                        <option value="Đen">Đen</option>
                        <option value="Xanh Đen">Xanh Đen</option>
                      </select>
                    </div>

                    <div className="selected-size">
                      <select name="sizes" id="sizes">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                      </select>
                    </div>
                  </div>

                  <div className="button_addtocart d-flex align-items-center">
                    <div className="addtocart-left d-flex align-items-center">
                      <span>Số lượng: </span>

                      <div className="input-number">
                        <button
                          className="decre"
                          onClick={() => {
                            if (qualitySecond > 1) {
                              setQualitySecond(qualitySecond - 1);
                            }
                          }}
                        >
                          <BsDash />
                        </button>
                        <input type="number" value={qualitySecond} />
                        <button
                          className="incre"
                          onClick={() => setQualitySecond(qualitySecond + 1)}
                        >
                          <FaPlus />
                        </button>
                      </div>
                    </div>

                    <div className="addtocart-right d-flex align-items-center">
                      Thêm vào giỏ
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="samepriceproduct">
        <Container className="samepriceproduct_container">
          <Row>
            <Col className="samepriceproduct_title">
              <p>Sản phẩm cùng giá tiền</p>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col className="samepriceproduct_list">
              {getProduct.map((item, index) => {
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

      <section className="sametypeproduct">
        <Container className="sametypeproduct_container">
          <Row>
            <Col className="sametypeproduct_title">
              <p>Sản phẩm cùng loại</p>
            </Col>
          </Row>

          <Row>
            <Col className="sametypeproduct_list">
              <span>Không có sản phẩm cùng loại</span>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="seenproduct">
        <Container className="seenproduct_container">
          <Row>
            <Col className="seenproduct_title d-flex justify-content-between">
              <p>Sản phẩm cùng phân khúc</p>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="seenproduct_list">
              {getProduct.map((item, index) => {
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

export default DetailProduct;
