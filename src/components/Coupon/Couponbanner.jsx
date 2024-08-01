import { Col, Container, Row } from "react-bootstrap";
import "./Couponbanner.scss";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaRegCopy } from "react-icons/fa";

export const Couponbanner = () => {
  return (
    <>
      <section className="couponbanner">
        <Container className="couponbanner_container">
          <Row>
            <Col className="couponbanner_list">
              <div className="couponbanner_list-item d-flex">
                <div className="item-icon d-flex align-items-center justify-content-center">
                  <div className="image">
                    <img
                      src="../../src/assets/images/coupon_1_img.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="item-content d-flex flex-column justify-content-between">
                  <div className="content-heading">
                    <p className="title">MIỄN PHÍ VẬN CHUYỂN</p>

                    <span className="desc">Freeship cho đơn hàng từ 500k</span>

                    <div className="icon">
                      <IoIosInformationCircleOutline />

                      <div className="icon-popup">
                        <div className="head">
                          <p>Miễn phí vận chuyển</p>
                        </div>

                        <div className="body d-flex flex-column">
                          <div className="body-top d-flex align-items-center justify-content-center">
                            <span>Mã:</span>
                            <div className="d-flex align-items-center">
                              <span>EGAFREESHIP</span>
                              <FaRegCopy />
                            </div>
                          </div>

                          <div className="body-bottom d-flex align-items-center justify-content-center">
                            <span>HSD:</span>
                            <div className="d-flex align-items-center">
                              <span>30/12/2024</span>
                            </div>
                          </div>

                          <div className="body-bottom d-flex align-items-center justify-content-center">
                            <span>
                              - Mã giảm 10% cho đơn hàng có giá trị tối thiểu 2
                              triệu
                              <br />- Giảm tối đa 500k
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content-bottom">
                    <div className="body d-flex align-items-start flex-column">
                      <div className="body-code">
                        <span>Mã:</span>
                        <Link>EGAFREESHIP</Link>
                      </div>

                      <div className="body-date">HSD: 30/12/2024</div>

                      <button className="body-btn">Sao chép</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="couponbanner_list-item d-flex">
                <div className="item-icon d-flex align-items-center justify-content-center">
                  <div className="image">
                    <img
                      src="../../src/assets/images/coupon_2_img.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="item-content d-flex flex-column justify-content-between">
                  <div className="content-heading">
                    <p className="title">Giảm 50k</p>
                    <span className="desc">Áp dụng cho đơn hàng từ 600k</span>

                    <div className="icon">
                      <IoIosInformationCircleOutline />

                      <div className="icon-popup">
                        <div className="head">
                          <p>Miễn phí vận chuyển</p>
                        </div>

                        <div className="body d-flex flex-column">
                          <div className="body-top d-flex align-items-center justify-content-center">
                            <span>Mã:</span>
                            <div className="d-flex align-items-center">
                              <span>EGAFREESHIP</span>
                              <FaRegCopy />
                            </div>
                          </div>

                          <div className="body-bottom d-flex align-items-center justify-content-center">
                            <span>HSD:</span>
                            <div className="d-flex align-items-center">
                              <span>30/12/2024</span>
                            </div>
                          </div>

                          <div className="body-bottom d-flex align-items-center justify-content-center">
                            <span>
                              - Mã giảm 10% cho đơn hàng có giá trị tối thiểu 2
                              triệu
                              <br />- Giảm tối đa 500k
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content-bottom">
                    <div className="body d-flex align-items-start flex-column">
                      <div className="body-code">
                        <span>Mã:</span>
                        <Link>EGAFREESHIP</Link>
                      </div>

                      <button className="body-btn">Sao chép</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="couponbanner_list-item d-flex">
                <div className="item-icon d-flex align-items-center justify-content-center">
                  <div className="image">
                    <img
                      src="../../src/assets/images/coupon_3_img.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="item-content d-flex flex-column justify-content-between">
                  <div className="content-heading">
                    <p className="title">giảm 30%</p>
                    <span className="desc">
                      Cho các sản phẩm trong Set đồ tập
                    </span>

                    <div className="icon">
                      <IoIosInformationCircleOutline />

                      <div className="icon-popup">
                        <div className="head">
                          <p>Miễn phí vận chuyển</p>
                        </div>

                        <div className="body d-flex flex-column">
                          <div className="body-top d-flex align-items-center justify-content-center">
                            <span>Mã:</span>
                            <div className="d-flex align-items-center">
                              <span>EGAFREESHIP</span>
                              <FaRegCopy />
                            </div>
                          </div>

                          <div className="body-bottom d-flex align-items-center justify-content-center">
                            <span>HSD:</span>
                            <div className="d-flex align-items-center">
                              <span>30/12/2024</span>
                            </div>
                          </div>

                          <div className="body-bottom d-flex align-items-center justify-content-center">
                            <span>
                              - Mã giảm 10% cho đơn hàng có giá trị tối thiểu 2
                              triệu
                              <br />- Giảm tối đa 500k
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content-bottom">
                    <div className="body d-flex align-items-start flex-column">
                      <div className="body-code">
                        <span>Mã:</span>
                        <Link>GIAM30</Link>
                      </div>

                      <div className="body-date">HSD: 30/12/2024</div>

                      <img
                        src="../../src/assets/images/outdated5404.png"
                        alt=""
                        className="outdate"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="couponbanner_list-item d-flex">
                <div className="item-icon d-flex align-items-center justify-content-center">
                  <div className="image">
                    <img
                      src="../../src/assets/images/coupon_4_img.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="item-content d-flex flex-column justify-content-between">
                  <div className="content-heading">
                    <p className="title">giảm 40%</p>
                    <span className="desc">
                      Cho sản phẩm thứ 4 trong đơn hàng
                    </span>

                    <div className="icon">
                      <IoIosInformationCircleOutline />

                      <div className="icon-popup">
                        <div className="head">
                          <p>Miễn phí vận chuyển</p>
                        </div>

                        <div className="body d-flex flex-column">
                          <div className="body-top d-flex align-items-center justify-content-center">
                            <span>Mã:</span>
                            <div className="d-flex align-items-center">
                              <span>EGAFREESHIP</span>
                              <FaRegCopy />
                            </div>
                          </div>

                          <div className="body-bottom d-flex align-items-center justify-content-center">
                            <span>HSD:</span>
                            <div className="d-flex align-items-center">
                              <span>30/12/2024</span>
                            </div>
                          </div>

                          <div className="body-bottom d-flex align-items-center justify-content-center">
                            <span>
                              - Mã giảm 10% cho đơn hàng có giá trị tối thiểu 2
                              triệu
                              <br />- Giảm tối đa 500k
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="content-bottom">
                    <div className="body d-flex align-items-start flex-column">
                      <div className="body-code">
                        <span>Mã:</span>
                        <Link>GIAM30</Link>
                      </div>

                      <div className="body-date">HSD: 30/12/2024</div>

                      <img
                        src="../../src/assets/images/outdated5404.png"
                        alt=""
                        className="outdate"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
