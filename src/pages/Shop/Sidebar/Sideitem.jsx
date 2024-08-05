import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import CardItem from "../../../components/CardItem/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { removefilterItem } from "../../../store/slice/categories";

const Sideitem = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const chooseItemFilter = useSelector((state) => state.shop.filterList);
  const getProduct = useSelector((state) => state.product);

  const handleRemoveFilterItem = (e) => {
    dispatch(removefilterItem(e.currentTarget.getAttribute("data-item")));
  };

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <div className="category_wrapper">
        <Row>
          <Col
            sm={12}
            className="category_filter d-flex align-items-center flex-wrap"
          >
            {chooseItemFilter.map((item, index) => {
              return (
                <>
                  <div
                    className="filter-selected d-flex align-items-center justify-content-center"
                    data-item={item}
                    onClick={handleRemoveFilterItem}
                    key={index}
                  >
                    {item}
                    <IoClose />
                  </div>
                </>
              );
            })}
          </Col>

          <Col sm={12} className="category_list">
            {getProduct.map((item, index) => {
              return (
                <>
                  <CardItem data={item} key={index} />
                </>
              );
            })}

            {getProduct.map((item, index) => {
              return (
                <>
                  <CardItem data={item} key={index} />
                </>
              );
            })}
          </Col>
        </Row>

        <Row>
          <Col className="pagination d-flex justify-content-end">
            <div className="pagination_wrapper">
              <ul className="d-flex align-items-center">
                <li
                  className={`prev ${currentPage === 1 ? "d-none" : ""}`}
                  onClick={() => setCurrentPage(1)}
                >
                  <MdOutlineKeyboardArrowLeft />
                </li>
                <li
                  className={`page_1 ${currentPage === 1 ? "page-active" : ""}`}
                  onClick={() => setCurrentPage(1)}
                >
                  1
                </li>
                <li
                  className={`page_2 ${currentPage === 2 ? "page-active" : ""}`}
                  onClick={() => setCurrentPage(2)}
                >
                  2
                </li>
                <li
                  className={`next ${currentPage === 2 ? "d-none" : ""}`}
                  onClick={() => setCurrentPage(2)}
                >
                  <MdOutlineKeyboardArrowRight />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Sideitem;
