import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CollectionBanner = () => {
  return (
    <>
      <section className="collectionbanner">
        <Container className="collectionbanner_container">
          <Row>
            <Col>
              <Link to="">
                <img
                  src="../../src/assets/images/collection_main_banner5404.jpg"
                  alt=""
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CollectionBanner;
