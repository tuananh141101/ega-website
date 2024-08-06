import { Link, useLocation, useNavigate } from "react-router-dom";
import "./CardItem.scss";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaCheck, FaPlus, FaRegEye } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { BsDash } from "react-icons/bs";

const CardItem = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const dataimgList = data.imgList;
  const dataSizeList = data.size;
  const [show, setShow] = useState(false);

  //* Modal Quickview
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentImg, setCurrentImg] = useState("");
  const [isChooseColorActive, setIsChooseColorActive] = useState(0);
  const [size, setSize] = useState("S");
  const [quality, setQuality] = useState(1);
  const handleClickCurrentImg = (item) => {
    setCurrentImg(item);
  };

  const hanldeNavigate = () => {
    const currentPath = location.pathname;

    if (currentPath.includes("/collections/all")) {
      // Nếu như đang ở pathname "collection/all" thi navigate xoa no di
      currentPath.replace("/collections/all", "");
    }

    navigate(`/${data.pathName}`);
  };

  //*Swiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  const handleColorClick = (index) => {
    if (mainSwiper) {
      //*slideTo(Swiper) - phương thức để chuyển đến slide hiện tại
      mainSwiper.slideTo(index);
    }
  };

  //* Incre-Decre
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
      <div className="cardItem">
        <div className="cardItem_wrapper">
          <div className="thumbnail">
            <span className="tag">Bán chạy</span>

            <Link className="image-wrapper" onClick={hanldeNavigate}>
              {data.freeship && (
                <img src={data.freeship} alt="bg-img" className="bg-img" />
              )}

              {currentImg !== "" ? (
                <>
                  <img src={currentImg} alt="" className="img_1" />
                </>
              ) : (
                <>
                  <img src={dataimgList[0]} alt="" className="img_1" />
                </>
              )}

              <img src={dataimgList[1]} alt="" className="img_2" />
            </Link>

            <div className="action">
              <div className="action-btn d-flex align-items-center justify-content-center">
                <OverlayTrigger
                  key="top"
                  placement="top"
                  className="customTooltip"
                  overlay={<Tooltip id="tooltip-top">Tùy chọn</Tooltip>}
                >
                  <Link to="" onClick={handleShow}>
                    <FaRegEye />
                  </Link>
                </OverlayTrigger>

                <OverlayTrigger
                  key="top"
                  placement="top"
                  className="customTooltip"
                  overlay={<Tooltip id="tooltip-top">Xem nhanh</Tooltip>}
                >
                  <Link to="">
                    <VscSettings />
                  </Link>
                </OverlayTrigger>
              </div>
            </div>
          </div>

          <div className="info d-flex flex-column">
            <span className="info-vendor">ega</span>

            <span className="info-name" title="Ao tap" onClick={hanldeNavigate}>
              {data.name}
            </span>

            <div className="info-pricebox">
              <span className="price">{data.price}d</span>

              <div className="compareprice d-flex align-items-center">
                <span>{data.comparePrice}d</span>
                <span>-7%</span>
              </div>
            </div>

            <div className="info-choosecolor d-flex align-items-center">
              {dataimgList.slice(0, 2).map((item, index) => {
                return (
                  <>
                    <OverlayTrigger
                      key="top"
                      placement="top"
                      className="customTooltip"
                      overlay={<Tooltip id="tooltip-top">Màu trắng</Tooltip>}
                      key={index}
                    >
                      <div
                        className={`image ${
                          isChooseColorActive === index ? "image-active" : ""
                        }`}
                        onClick={() => {
                          setIsChooseColorActive(index);
                          handleClickCurrentImg(item);
                        }}
                      >
                        <img src={item} data-img={item} alt="" />
                      </div>
                    </OverlayTrigger>
                  </>
                );
              })}

              <Link className="seemore d-flex align-items-center justify-content-center">
                <span>+{dataimgList.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="customoffcanvans_quickview"
      >
        <Modal.Body className="d-flex">
          <div className="quickview-left">
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
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 customSwiper-main"
            >
              {dataimgList.map((item, index) => {
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
              {dataimgList.map((item, index) => {
                return (
                  <>
                    <SwiperSlide key={index}>
                      <img src={item} />
                    </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
          </div>

          <div className="quickview-right">
            <div className="heading">{data.name}</div>

            <div className="groupstatus d-flex align-items-center">
              <span className="brand">
                Thương hiệu: <Link>{data.brand}</Link>
              </span>
              <span className="code">
                Mã sản phẩm: <Link>Đang cập nhập</Link>
              </span>
            </div>

            <div className="promotag d-flex align-items-center">
              <div className="promotag_first">Bán chạy</div>
              <div className="promotag_second">
                <img src={data.hotdeal} alt="" />
              </div>
            </div>

            <div className="choosecolor">
              <div className="choosecolor_header">Màu sắc</div>

              <div className="choosecolor_list d-flex">
                {data.imgList.slice(0, 5).map((item, index) => {
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
                          overlay={<Tooltip id="tooltip-top">Màu sắc</Tooltip>}
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
                {dataSizeList && dataSizeList.length > 0 ? (
                  dataSizeList.map((item, index) => {
                    console.log("check item", item);
                    return (
                      <div
                        className="size d-flex align-items-center justify-content-center"
                        key={index}
                        onClick={() => {
                          setSize(item);
                        }}
                      >
                        <span>{item}</span>
                      </div>
                    );
                  })
                ) : (
                  <div>No sizes available</div>
                )}
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
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CardItem;
