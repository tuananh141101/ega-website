import { FaArrowLeft } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { filterItem, removefilterItem } from "../../../store/slice/categories";

const Sidebar = (props) => {
  const { close } = props;
  const dispatch = useDispatch();

  const listFilter = useSelector((state) => state.shop.categories);
  const filterList = useSelector((state) => state.shop.filterList);
  console.log("check filter list", filterList);
  console.log("listfilter", listFilter);

  const handleChooseFilterItem = (e) => {
    if (e.target.checked === true) {
      dispatch(filterItem(e.target.value));
    } else {
      dispatch(removefilterItem(e.target.value));
    }
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
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
