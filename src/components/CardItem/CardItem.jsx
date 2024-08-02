import { Link, useLocation, useNavigate } from "react-router-dom";
import "./CardItem.scss";
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaRegEye } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { useState } from "react";

const CardItem = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);
  const { data } = props;
  const dataimgList = data.imgList;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentImg, setCurrentImg] = useState("");

  const [isChooseColorActive, setIsChooseColorActive] = useState(0);

  const handleClickCurrentImg = (item) => {
    setCurrentImg(item);
  };

  return (
    <>
      <div className="cardItem">
        <div className="cardItem_wrapper">
          <div className="thumbnail">
            <span className="tag">Bán chạy</span>

            <Link className="image-wrapper">
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

            <span
              className="info-name"
              title="Ao tap"
              // onClick={() => handleClickToDetailPage}
              onClick={() => {
                const currentPath = location.pathname;
                if (currentPath.includes("/shop")) {
                  navigate("detailproduct"); //neu nhu path hien tai co /shop
                } else {
                  navigate("/shop/detailproduct"); // nguoc lai
                }
              }}
            >
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
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CardItem;
