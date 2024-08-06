import {
  Breadcrumb,
  Col,
  Container,
  Row,
  ToastContainer,
} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { IoLocationSharp } from "react-icons/io5";
import { MdPhoneAndroid } from "react-icons/md";
import { MdEmail } from "react-icons/md";

import "./Contact.scss";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
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
      `Cảm ơn ${formName}, Chúng tôi sẽ liên hệ với bạn qua ${formEmail}`
    );
  };

  //* Khi mới vào trang sẽ scroll lên đầu
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <section className="breadCrumb">
        <Container className="breadCrumb_container">
          <Row>
            <Col className="d-flex align-items-center">
              <Breadcrumb>
                <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item active>Liên Hệ</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact">
        <Container className="contact_container">
          <Row>
            <Col sm={12} lg={6} className="contact_left">
              <p className="heading">Công ty TNHH EGANY</p>

              <div className="single-contact address d-flex align-items-center">
                <IoLocationSharp />
                <span>Địa chỉ: 70 Lu Gia, District 11, Ho Chi Minh City</span>
              </div>

              <div className="single-contact phone d-flex align-items-center">
                <MdPhoneAndroid />
                <div className="d-flex align-items-centger">
                  <p>Số điện thoại:</p>
                  <span>19006750</span>
                </div>
              </div>

              <div className="single-contact email d-flex align-items-center">
                <MdEmail />
                <div className="d-flex align-items-center">
                  <p>Email:</p>
                  <span>support@gmail.com</span>
                </div>
              </div>

              <div className="form-contact border-top">
                <p className="heading">Liên hệ với chúng tôi</p>

                <Form className="form" onSubmit={handleSubmitForm}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Họ tên*"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Control
                      type="email"
                      placeholder="Email*"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Số điện thoại*"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Nhập nội dung*"
                      value={formText}
                      onChange={(e) => setFormText(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <button className="button-submit" type="submit">
                    Gửi liên hệ của bạn
                  </button>
                </Form>
              </div>
            </Col>
            <Col sm={12} lg={6} className="contact_right">
              <iframe
                className="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.1712337276304!2d105.83049557463418!3d20.9857720806528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad227b0629c3%3A0x9a3efede8bbe52af!2sISOCERT!5e0!3m2!1svi!2s!4v1722411434577!5m2!1svi!2s"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
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

export default Contact;
