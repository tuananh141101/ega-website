import { Breadcrumb, Col, Container, Offcanvas, Row } from "react-bootstrap";
import "./Shop.scss";
import { Couponbanner } from "../../components/Coupon/Couponbanner";
import Sidebar from "./Sidebar/Sidebar";
import Sideitem from "./Sidebar/Sideitem";
import { FaFilter } from "react-icons/fa";
import { useEffect, useState } from "react";
import CardItem from "../../components/CardItem/CardItem";
import CollectionBanner from "../../components/Banner/CollectionBanner";
import { useSelector } from "react-redux";

const Shop = () => {
  const productList = [
    {
      id: 1,
      name: "Áo croptop tập gym yoga",
      price: "390.000",
      comparePrice: "350.000",
      videoIcon: "../../src/assets/images/icon-button-play.png",
      hotdeal: "../../src/assets/images/promo_tag_hotdeal.png",
      bgProductIMG: "../../src/assets/images/bg_productlist_img_2.png",
      imgURLFirst: "../../src/assets/images/productlist_img_1.png",
      imgURLSecond: "../../src/assets/images/productlist_img_2.png",
      imgList: [
        "../../src/assets/images/productlist_img_1.png",
        "../../src/assets/images/productlist_img_2.png",
      ],
    },
    {
      id: 2,
      name: "Áo croptop tập gym yoga",
      price: "390.000",
      comparePrice: "350.000",
      videoIcon: "../../src/assets/images/icon-button-play.png",
      hotdeal: "../../src/assets/images/promo_tag_hotdeal.png",
      bgProductIMG: "../../src/assets/images/bg_productlist_img.png",
      imgURLFirst: "../../src/assets/images/productlist_img_1.png",
      imgURLSecond: "../../src/assets/images/productlist_img_2.png",
      imgList: [
        "../../src/assets/images/productlist_img_1.png",
        "../../src/assets/images/productlist_img_2.png",
      ],
    },
    {
      id: 3,
      name: "Áo croptop tập gym yoga",
      price: "390.000",
      comparePrice: "350.000",
      videoIcon: "../../src/assets/images/icon-button-play.png",
      hotdeal: "../../src/assets/images/promo_tag_hotdeal.png",
      imgURLFirst: "../../src/assets/images/productlist_img_1.png",
      imgURLSecond: "../../src/assets/images/productlist_img_2.png",
      imgList: [
        "../../src/assets/images/productlist_img_1.png",
        "../../src/assets/images/productlist_img_2.png",
      ],
    },
    {
      id: 4,
      name: "Áo croptop tập gym yoga",
      price: "390.000",
      comparePrice: "350.000",
      videoIcon: "../../src/assets/images/icon-button-play.png",
      hotdeal: "../../src/assets/images/promo_tag_hotdeal.png",
      imgURLFirst: "../../src/assets/images/productlist_img_1.png",
      imgURLSecond: "../../src/assets/images/productlist_img_2.png",
      imgList: [
        "../../src/assets/images/productlist_img_1.png",
        "../../src/assets/images/productlist_img_2.png",
      ],
    },
  ];

  const getProduct = useSelector((state) => state.product);

  //* Mới vào trang sẽ mặc định scroll lên dầu
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="breadCrumb">
        <Container className="breadCrumb_container">
          <Row>
            <Col className="d-flex align-items-center">
              <Breadcrumb>
                <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item active>Tất cả sản phẩm</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="collectionShopBanner">
        <CollectionBanner />
      </div>

      <div className="couponShopBanner">
        <Couponbanner />
      </div>

      <section className="shop">
        <Container className="shop_container">
          <Row>
            <Col
              sm={12}
              className="shop_heading d-flex algin-items-center justify-content-between"
            >
              <div className="title d-flex align-items-center">
                <p>Tất cả sản phẩm</p>
              </div>

              <div className="sort d-flex align-items-center">
                <div className="sortPaginBar d-flex align-items-center">
                  <label htmlFor="">
                    <span>Sắp xếp:</span>
                  </label>

                  <select className="select-custom">
                    <option value="alpha-asc">Tên A - Z</option>
                    <option value="alpha-desc">Tên Z - A</option>
                    <option value="price_min">Giá giảm dần</option>
                    <option value="price_max">Giá tăng dần</option>
                    <option value="new">Hàng mới</option>
                  </select>
                </div>

                <div
                  className="btnFilterMb d-none align-items-center"
                  onClick={handleShow}
                >
                  <FaFilter />
                  <span>Lọc</span>
                </div>
              </div>
            </Col>

            <Col className="shop_main">
              <Row>
                <Col lg={3} sm={12} className="shop_main-filter">
                  <Sidebar />
                </Col>

                <Col lg={9} sm={12} className="shop_main-item">
                  <Sideitem />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col sm={12} className="seen_heading">
              <p>Sản phẩm đã xem</p>
            </Col>

            <Col sm={12} className="seen_product">
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

      <Offcanvas
        show={show}
        onHide={handleClose}
        key="end"
        placement="end"
        name="end"
        className="custom-filterMb"
      >
        <Offcanvas.Body>
          <Sidebar close={setShow} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Shop;
