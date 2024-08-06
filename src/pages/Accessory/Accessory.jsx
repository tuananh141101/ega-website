import { Col, Container, Row } from "react-bootstrap";
import "./Accessory.scss";
import CardItem from "../../components/CardItem/CardItem";
import CollectionBanner from "../../components/Banner/CollectionBanner";
import { Couponbanner } from "../../components/Coupon/Couponbanner";
import Flashsale from "../../components/Flashsale/Flashsale";
import { useEffect } from "react";

const Accessory = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <>
      <div className="collectionAccessoryBanner">
        <CollectionBanner />

        <Container className="coudownFlashSale">
          <Row>
            <Col>
              <Flashsale />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="couponAccessoryBanner">
        <Couponbanner />
      </div>

      <section className="accessory" style={{ backgroundColor: "#fcf4eb" }}>
        <Container className="accessory_container">
          <Row>
            <Col className="accessory_list">
              {productList.map((item, index) => {
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

      <section className="seenProduct">
        <Container className="seenProduct_container">
          <Row>
            <Col sm={12} className="seenProduct_head">
              <p>Sản phẩm đã xem</p>
            </Col>

            <Col sm={12} className="seenProduct_list">
              {productList.map((item, index) => {
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
    </>
  );
};

export default Accessory;
