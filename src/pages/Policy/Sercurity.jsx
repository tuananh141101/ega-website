import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import "./Policy.scss";
import { useEffect } from "react";

const Sercurity = () => {
  //* Mới vào trang sẽ mặc định scroll lên dầu
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="breadCrumb">
        <Container className="breadCrumb_container">
          <Row>
            <Col className="d-flex align-items-center">
              <Breadcrumb>
                <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item active>Chính sách bảo mật</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="sercurity">
        <Container className="sercurity_container">
          <Row>
            <Col>
              <p className="heading">Chính sách bảo mật</p>

              <div className="content py-3">
                <p>
                  Chính sách bảo mật này nhằm giúp Quý khách hiểu về cách
                  website thu thập và sử dụng thông tin cá nhân của mình thông
                  qua việc sử dụng trang web, bao gồm mọi thông tin có thể cung
                  cấp thông qua trang web khi Quý khách đăng ký tài khoản, đăng
                  ký nhận thông tin liên lạc từ chúng tôi, hoặc khi Quý khách
                  mua sản phẩm, dịch vụ, yêu cầu thêm thông tin dịch vụ từ chúng
                  tôi..
                </p>
                <p>
                  Chúng tôi sử dụng thông tin cá nhân của Quý khách để liên lạc
                  khi cần thiết liên quan đến việc Quý khách sử dụng website của
                  chúng tôi, để trả lời các câu hỏi hoặc gửi tài liệu và thông
                  tin Quý khách yêu cầu.
                </p>
                <p>
                  Quý khách hàng vui lòng kiểm tra thường xuyên để cập nhật
                  những thay đổi của chúng tôi.
                </p>

                <p>
                  Trang web của chúng tôi coi trọng việc bảo mật thông tin và sử
                  dụng các biện pháp tốt nhất để bảo vệ thông tin cũng như việc
                  thanh toán của khách hàng.
                </p>

                <p>
                  Mọi thông tin giao dịch sẽ được bảo mật ngoại trừ trong trường
                  hợp cơ quan pháp luật yêu cầu.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Sercurity;
