import { Link, useLocation, useNavigate } from "react-router-dom";
import "./CardItem.scss";
import { Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaRegEye } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import { useState } from "react";

const CardItem = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const dataimgList = data.imgList;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentImg, setCurrentImg] = useState("");

  const [isChooseColorActive, setIsChooseColorActive] = useState(0);

  const handleClickCurrentImg = (item) => {
    setCurrentImg(item);
  };

  const hanldeNavigate = () => {
    const currentPath = location.pathname;

    if (currentPath.includes("/collections/all")) {
      // Nếu như đang ở pathname "collection/all" thi navigate xoa no di
      currentPath.replace("/collections/all", "");
    }

    navigate(`/${data.pathName}`);
  };

  return (
    <>
      <div className="cardItem">
        <div className="cardItem_wrapper">
          <div className="thumbnail" onClick={hanldeNavigate}>
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

            <span className="info-name" title="Ao tap">
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
        className="customoffcanvans_quickview"
      >
        <Modal.Body>Quick view item</Modal.Body>
      </Modal>
    </>
  );
};

export default CardItem;
