import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { filterItem } from "../../../store/slice/categories";

const Sidebar = (props) => {
  const { close } = props;
  const dispatch = useDispatch();

  const listFilter = useSelector((state) => state.shop.categories);

  const handleChooseFilterItem = (e) => {
    dispatch(filterItem(e.target.value));
  };

  return (
    <>
      <div className="aside_wrapper">
        <div
          className="aside-title--mb d-none align-items-center"
          onClick={() => close(false)}
        >
          <FaArrowLeft />
          Tìm theo
        </div>

        {/* Filter Brand */}
        {listFilter.map((item, index) => {
          const getlistOption = item.listOptions.map((item) => {
            return item;
          });
          return (
            <>
              <div className={`aside-item`} key={index}>
                <div className="aside-item_title">
                  <p>{item.title}</p>
                </div>

                <ul className="aside-item_list d-flex flex-column">
                  {getlistOption.map((item, index) => {
                    return (
                      <>
                        <li
                          className={`list-filter d-flex align-items-center`}
                          key={index}
                        >
                          <label
                            htmlFor={item.for}
                            className={`d-flex align-items-center`}
                          >
                            <input
                              type="checkbox"
                              id={item.for}
                              name={item.name}
                              value={item.name}
                              onClick={handleChooseFilterItem}
                            />
                            {item.name}
                          </label>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </>
          );
        })}
        {/* 
        <div className="aside-item filter--brand">
          <div className="aside-item_title">
            <p>Mức giá</p>
          </div>

          <ul className="aside-item_list d-flex flex-column">
            <li className="list-filter d-flex align-items-center">
              <label htmlFor="ega" className="d-flex align-items-center">
                <input type="checkbox" id="ega" name="EGA" value="EGA" />
                EGA
              </label>
            </li>

            <li className="list-filter d-flex align-items-center">
              <label
                htmlFor="yinil"
                className="d-flex align-items-center justify-content-center"
              >
                <input type="checkbox" id="yinil" name="Yinil" value="Yinil" />
                Yinil
              </label>
            </li>

            <li className="list-filter d-flex align-items-center">
              <label
                htmlFor="khac"
                className="d-flex align-items-center justify-content-center"
              >
                <input type="checkbox" id="khac" name="Khác" value="Khác" />
                Khác
              </label>
            </li>
          </ul>
        </div>

        <div className="aside-item filter--price">
          <div className="aside-item_title">
            <p>Mức giá</p>
          </div>

          <ul className="aside-item_list d-flex flex-column">
            <li className="list-filter d-flex align-items-center">
              <label
                htmlFor="filter-low-1000000"
                className="d-flex align-items-center"
              >
                <input
                  type="checkbox"
                  id="filter-low-1000000"
                  name="low-1000000"
                  value="1000000"
                />
                Giá dưới 1.000.000<span>đ</span>
              </label>
            </li>

            <li className="list-filter d-flex align-items-center">
              <label
                htmlFor="filter-100000-2000000"
                className="d-flex align-items-center justify-content-center"
              >
                <input
                  type="checkbox"
                  id="filter-100000-2000000"
                  name="100000-2000000"
                  value="1000000-200000"
                />
                1.000.000<span>đ</span> - 2.000.000<span>đ</span>
              </label>
            </li>

            <li className="list-filter d-flex align-items-center">
              <label
                htmlFor="filter-200000-3000000"
                className="d-flex align-items-center justify-content-center"
              >
                <input
                  type="checkbox"
                  id="filter-200000-3000000"
                  name="200000-3000000"
                  value="2000000-300000"
                />
                2.000.000<span>đ</span> - 3.000.000<span>đ</span>
              </label>
            </li>

            <li className="list-filter d-flex align-items-center">
              <label
                htmlFor="filter-300000-5000000"
                className="d-flex align-items-center justify-content-center"
              >
                <input
                  type="checkbox"
                  id="filter-300000-5000000"
                  name="300000-5000000"
                  value="3000000-500000"
                />
                3.000.000<span>đ</span> - 5.000.000<span>đ</span>
              </label>
            </li>

            <li className="list-filter d-flex align-items-center">
              <label
                htmlFor="filter-500000-7000000"
                className="d-flex align-items-center justify-content-center"
              >
                <input
                  type="checkbox"
                  id="filter-500000-7000000"
                  name="500000-7000000"
                  value="5000000-700000"
                />
                5.000.000<span>đ</span> - 7.000.000<span>đ</span>
              </label>
            </li>

            <li className="list-filter d-flex align-items-center">
              <label
                htmlFor="filter-700000-10000000"
                className="d-flex align-items-center justify-content-center"
              >
                <input
                  type="checkbox"
                  id="filter-700000-10000000"
                  name="700000-10000000"
                  value="5000000-700000"
                />
                7.000.000<span>đ</span> - 10.000.000<span>đ</span>
              </label>
            </li>

            <li className="list-filter d-flex align-items-center">
              <label
                htmlFor="filter-high-10000000"
                className="d-flex align-items-center justify-content-center"
              >
                <input
                  type="checkbox"
                  id="filter-high-10000000"
                  name="high-10000000"
                  value="hight-10000000"
                />
                Giá trên 10.000.000<span>đ</span>
              </label>
            </li>
          </ul>
        </div>

        <div className="aside-item filter--type">
          <div className="aside-item_title">
            <p>Loại</p>
          </div>

          <ul className="aside-item_list d-flex flex-column">
            <li className="list-filter d-flex align-items-center">
              <label
                htmlFor="filter-dotap"
                className="d-flex align-items-center justify-content-center"
                onClick={(e) => setFilterItem(e.target.value)}
              >
                <input
                  type="checkbox"
                  id="filter-dotap"
                  name="Đồ tập"
                  value="Đồ tập"
                />
                Đồ tập
              </label>
            </li>

            <li className="list-filter d-flex align-items-center">
              <label
                htmlFor="filter-khac"
                className="d-flex align-items-center justify-content-center"
              >
                <input
                  type="checkbox"
                  id="filter-khac"
                  name="khac"
                  value="khac"
                />
                Khác
              </label>
            </li>
          </ul>
        </div>

        <div className="aside-item filter--color">
          <div className="aside-item_title">
            <p>Màu sắc</p>
          </div>

          <ul className="aside-item_list d-flex flex-column">
            <li className="list-filter d-flex align-items-center">
              <label
                htmlFor="mau-den"
                className="d-flex align-items-center justify-content-center circle-checkbox-label black-color"
              >
                <input
                  type="checkbox"
                  id="mau-den"
                  name="mauden"
                  value="mauden"
                  className="circle-checkbox"
                />
                <span className="circle-checkbox-custom"></span>
                Màu đen
              </label>
            </li>

            <li className="list-filter d-flex align-items-center darkblue-color">
              <label
                htmlFor="xanh-den"
                className="d-flex align-items-center justify-content-center circle-checkbox-label darkblue-color"
              >
                <input
                  type="checkbox"
                  id="xanh-den"
                  name="xanhden"
                  value="xanhden"
                  className="circle-checkbox"
                />
                <span className="circle-checkbox-custom"></span>
                Xanh đen
              </label>
            </li>

            <li className="list-filter d-flex align-items-center darkblue-color">
              <label
                htmlFor="nau-dam"
                className="d-flex align-items-center justify-content-center circle-checkbox-label darkbrown-color"
              >
                <input
                  type="checkbox"
                  id="nau-dam"
                  name="naudam"
                  value="naudam"
                  className="circle-checkbox"
                />
                <span className="circle-checkbox-custom"></span>
                Nâu dậm
              </label>
            </li>

            <li className="list-filter d-flex align-items-center darkblue-color">
              <label
                htmlFor="nau-nhat"
                className="d-flex align-items-center justify-content-center circle-checkbox-label lightbrown-color"
              >
                <input
                  type="checkbox"
                  id="nau-nhat"
                  name="naunhat"
                  value="naunhat"
                  className="circle-checkbox"
                />
                <span className="circle-checkbox-custom"></span>
                Nâu nhạt
              </label>
            </li>
          </ul>
        </div>

        <div className="aside-item aside-item--type">
          <div className="aside-item_title">
            <p>Dịch vụ giao hàng</p>
          </div>

          <ul className="aside-item_list d-flex flex-column">
            <li className="list-filter d-flex align-items-center">
              <label
                htmlFor="filter-mienphi"
                className="d-flex align-items-center justify-content-center"
              >
                <input
                  type="checkbox"
                  id="filter-mienphi"
                  name="mienphi"
                  value="mienphi"
                />
                Miễn phí giao hàng
              </label>
            </li>

            <li className="list-filter d-flex align-items-center">
              <label
                htmlFor="filter-giaohangnhanh"
                className="d-flex align-items-center justify-content-center"
              >
                <input
                  type="checkbox"
                  id="filter-giaohangnhanh"
                  name="giaohangnhanh"
                  value="giaohangnhanh"
                />
                Giao hàng nhanh trong 4h
              </label>
            </li>

            <li className="list-filter d-flex align-items-center">
              <label
                htmlFor="filter-giaohangtietkiem"
                className="d-flex align-items-center justify-content-center"
              >
                <input
                  type="checkbox"
                  id="filter-giaohangtietkiem"
                  name="giaohangtietkiem"
                  value="giaohangtietkiem"
                />
                Giao hàng tiết kiệm
              </label>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
