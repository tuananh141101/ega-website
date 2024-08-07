import { useEffect } from "react";
import "./Fav.scss";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";

const Fav = () => {
  //* Khi mới vào trang sẽ scroll lên đầu
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  //* Lấy state fav
  const favList = useSelector((state) => state.favourite.favourite);
  console.log("check favlist", favList);

  return (
    <>
      <section className="breadCrumb">
        <Container className="breadCrumb_container">
          <Row>
            <Col className="d-flex align-items-center">
              <Breadcrumb>
                <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                <Breadcrumb.Item active>
                  {/* {currentProduct[0].name} */}
                  Sản phẩm yêu thích
                </Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="favourite">
        <Container className="favourite_container">
          <Row>
            <Col>
              <Table striped bordered hover className="favourite_table">
                <thead>
                  <tr>
                    <th>Ảnh</th>
                    <th>Sản Phẩm</th>
                    <th>Giá</th>
                    <th>Hành Động</th>
                    <th>Xóa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Fav;
