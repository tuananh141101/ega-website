import {
  Breadcrumb,
  Col,
  Container,
  Row,
  ToastContainer,
} from "react-bootstrap";
import "./Policy.scss";
import Accordion from "react-bootstrap/Accordion";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";

const Faq = () => {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formText, setFormText] = useState("");

  //* Mới vào trang sẽ mặc định scroll lên dầu
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setFormName("");
    setFormEmail("");
    setFormPhone("");
    setFormText("");
    toast.success(
      `Cảm ơn ${formName} đã gửi câu hỏi, Chúng tôi sẽ giải đáp với bạn sớm nhất ở địa chỉ email: ${formEmail}`
    );
  };

  return (
    <>
      <section className="breadCrumb">
        <Container className="breadCrumb_container">
          <Row>
            <Col className="d-flex align-items-center">
              <Breadcrumb>
                <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item active>Chính sách đổi trả</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="faq">
        <Container className="faq_container">
          <Row>
            <Col sm={12} lg={6} className="faq_question">
              <p className="faq_question-heading">Câu hỏi thường gặp</p>

              <div className="faq_question-list">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="border-bottom">
                      1. Vì sao tôi cài đặt Better Page có phí rồi nhưng mở cấu
                      hình giao diện vẫn chưa thấy được kích hoạt?
                    </Accordion.Header>
                    <Accordion.Body>
                      - Bạn thử kiểm tra lại trong Giao Diện đã mua có phí xem
                      đã thanh toán chưa. Bình thường là qua cổng VNPay.
                      <br /> - Nếu chưa, bấm vào chấm tròn nhấp nháy để hoàn tất
                      thanh toán bằng phương thức khác là Chuyển Khoản, hệ thống
                      sẽ tự động cài đặt cho bạn ngay sau xác nhận thanh toán
                      thành công.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="border-bottom">
                      2. Trang giao diện miễn phí tôi phải làm sao để được kích
                      hoạt?
                    </Accordion.Header>
                    <Accordion.Body>
                      - Đối với các trang giao diện miễn phí, hệ thống sẽ tự
                      động cài đặt khi đặt hàng mà không cần qua bước thanh
                      toán.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="border-bottom">
                      3. Tôi đã mua Better Page có phí và thanh toán rồi nhưng
                      vào cấu hình giao diện chưa thấy được kích hoạt hoặc bị
                      lỗi. Tôi phải làm sao?
                    </Accordion.Header>
                    <Accordion.Body>
                      - Bạn liên hệ ngay support@egany.com kèm thông tin website
                      và trang bạn đã mua để được hỗ trợ ngay nhé. <br />- Nội
                      dung email ví dụ: Tôi là chủ trang domain.myharavan.com có
                      mua giao diện Football_001 nhưng cài đặt không thành công,
                      nhờ EGANY hỗ trợ.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header className="border-bottom">
                      5. Đặt mua Better Page và thanh toán thành công rồi nhưng
                      tôi chưa thấy được cài đặt, tôi phải làm sao?
                    </Accordion.Header>
                    <Accordion.Body>
                      - Thông thường Better Page sau khi thanh toán thành công
                      sẽ được tự động cài đặt trong 15 giây. Tuy nhiên, đôi lúc
                      độ trễ của hệ thống khi cài đặt vào website của bạn có thể
                      lên đến 2-5 phút. Bạn vui lòng chờ đôi chút và tải lại
                      trang để xem nhé.
                      <br /> - Nếu quá 5 phút nhưng không thấy trạng thái thanh
                      toán thay đổi và cấu hình Better Page chưa được cài đặt,
                      xin vui lòng gửi email đến support@egany.com để được hỗ
                      trợ.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>

            <Col
              sm={12}
              lg={6}
              className="faq_form d-flex justify-content-center"
            >
              <div className="faq_form-wrapper d-flex flex-column">
                <p className="heading">Gửi thắc mắc cho chúng tôi</p>

                <Form
                  className="form d-flex flex-column"
                  onSubmit={handleSubmitForm}
                >
                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Tên của bạn"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control
                      type="email"
                      placeholder="Email của bạn"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      type="text"
                      placeholder="Số điện thoại của bạn"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      rows={7}
                      placeholder="Nội dung"
                      value={formText}
                      onChange={(e) => setFormText(e.target.value)}
                    />
                  </Form.Group>

                  <button className="btn button-submit" type="submit">
                    Gửi cho chúng tôi
                  </button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

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

export default Faq;
