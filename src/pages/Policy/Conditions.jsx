import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import "./Policy.scss";
import { useEffect } from "react";

const Conditions = () => {
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
                <Breadcrumb.Item active>Điều khoản dịch vụ</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="conditions">
        <Container className="conditions_container">
          <Row>
            <Col>
              <p className="heading">Chính sách đổi trả</p>

              <div className="content py-3">
                <p>
                  <strong>1. Giới thiệu</strong>
                </p>

                <p>Chào mừng quý khách hàng đến với website chúng tôi.</p>
                <p>
                  Khi quý khách hàng truy cập vào trang website của chúng tôi có
                  nghĩa là quý khách đồng ý với các điều khoản này. Trang web có
                  quyền thay đổi, chỉnh sửa, thêm hoặc lược bỏ bất kỳ phần nào
                  trong Điều khoản mua bán hàng hóa này, vào bất cứ lúc nào. Các
                  thay đổi có hiệu lực ngay khi được đăng trên trang web mà
                  không cần thông báo trước. Và khi quý khách tiếp tục sử dụng
                  trang web, sau khi các thay đổi về Điều khoản này được đăng
                  tải, có nghĩa là quý khách chấp nhận với những thay đổi đó.
                </p>
                <p>
                  Quý khách hàng vui lòng kiểm tra thường xuyên để cập nhật
                  những thay đổi của chúng tôi.
                </p>

                <p>
                  <strong>2. Hướng dẫn sử dụng website</strong>
                </p>

                <p>
                  Khi vào web của chúng tôi, khách hàng phải đảm bảo đủ 18 tuổi,
                  hoặc truy cập dưới sự giám sát của cha mẹ hay người giám hộ
                  hợp pháp. Khách hàng đảm bảo có đầy đủ hành vi dân sự để thực
                  hiện các giao dịch mua bán hàng hóa theo quy định hiện hành
                  của pháp luật Việt Nam.
                </p>
                <p>
                  Trong suốt quá trình đăng ký, quý khách đồng ý nhận email
                  quảng cáo từ website. Nếu không muốn tiếp tục nhận mail, quý
                  khách có thể từ chối bằng cách nhấp vào đường link ở dưới cùng
                  trong mọi email quảng cáo.
                </p>

                <p>
                  <strong>2. Thanh toán và tiện lợi</strong>
                </p>

                <p>
                  Người mua có thể tham khảo các phương thức thanh toán sau đây
                  và lựa chọn áp dụng phương thức phù hợp:
                </p>

                <ul>
                  <li>
                    <strong>Cách 1:</strong>
                    Thanh toán trực tiếp (người mua nhận hàng tại địa chỉ người
                    bán)
                  </li>
                  <li>
                    <strong>Cách 2:</strong>
                    Thanh toán sau (COD – giao hàng và thu tiền tận nơi)
                  </li>
                  <li>
                    <strong>Cách 3:</strong>
                    Thanh toán online qua thẻ tín dụng, chuyển khoản
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Conditions;
