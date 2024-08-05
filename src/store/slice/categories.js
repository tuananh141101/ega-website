import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesImg: [
    {
      id: 1,
      name: "Áo ngực thể thao",
      total: "12 sản phẩm",
      imgURL: "../../src/assets/images/productcategories_1.png",
    },
    {
      id: 2,
      name: "Sản phẩm nổi bật",
      total: "4 sản phẩm",
      imgURL: "../../src/assets/images/productcategories_2.png",
    },
    {
      id: 3,
      name: "Áo khoác thể thao",
      total: "1 sản phẩm",
      imgURL: "../../src/assets/images/productcategories_3.png",
    },
    {
      id: 4,
      name: "Quần legging",
      total: "10 sản phẩm",
      imgURL: "../../src/assets/images/productcategories_4.png",
    },
    {
      id: 5,
      name: "Áo thun thể thao",
      total: "12 sản phẩm",
      imgURL: "../../src/assets/images/productcategories_5.png",
    },
    {
      id: 6,
      name: "Set đồ tập",
      total: "19 sản phẩm",
      imgURL: "../../src/assets/images/productcategories_6.png",
    },
  ],
  categories: [
    {
      id: 1,
      title: "Thương hiệu",
      listOptions: [
        {
          for: "ega",
          name: "EGA",
        },
        {
          for: "yinil",
          name: "Yinil",
        },
        {
          for: "khac",
          name: "Khác",
        },
      ],
    },
    {
      id: 2,
      title: "Mức giá",
      listOptions: [
        {
          for: "filter-low-100000",
          name: "Giá dưới 1.000.000đ",
        },
        {
          for: "filter-1000000-2000000",
          name: "1.000.000đ - 2.000.000đ",
        },
        {
          for: "filter-2000000-3000000",
          name: "2.000.000đ - 3.000.000đ",
        },
        {
          for: "filter-3000000-5000000",
          name: "3.000.000đ - 5.000.000đ",
        },
        {
          for: "filter-5000000-7000000",
          name: "5.000.000đ - 7.000.000đ",
        },
        {
          for: "filter-7000000-10000000",
          name: "7.000.000đ - 10.000.000đ",
        },
        {
          for: "filter-high-10000000",
          name: "Giá trên 10.000.000đ",
        },
      ],
    },
    {
      id: 3,
      title: "Loại",
      listOptions: [
        {
          for: "do-tap",
          name: "Đồ tập",
        },
        {
          for: "khac",
          name: "Khác",
        },
      ],
    },
    {
      id: 4,
      title: "Màu Sắc",
      listOptions: [
        {
          for: "mau-den",
          name: "Màu đen",
        },
        {
          for: "xanh-den",
          name: "Xanh đen",
        },
        {
          for: "nau-dam",
          name: "Nâu đậm",
        },
        {
          for: "nau-nhat",
          name: "Nâu nhạt",
        },
      ],
    },
    {
      id: 5,
      title: "Dịch vụ giao hàng",
      listOptions: [
        {
          for: "filter-mienphi",
          name: "Miễn phí giao hàng",
        },
        {
          for: "filter-giaohangnhanh",
          name: "Giao hàng nhanh trong 4h",
        },
        {
          for: "filter-giaohangtietkiem",
          name: "Giao hàng tiết kiệm",
        },
      ],
    },
  ],
  policiesList: [
    {
      id: 1,
      name: "Miễn phí vận chuyển trong 3 ngày",
      title: "Nhận hàng trong 3 ngày",
      imgURL: "../../src/assets/images/policies_icon_1.png",
    },
    {
      id: 2,
      name: "Quà tặng hấp dẫn",
      title: "Nhận khuyễn mãi ưu đãi hot",
      imgURL: "../../src/assets/images/policies_icon_2.png",
    },
    {
      id: 3,
      name: "Bảo đảm chất lượng",
      title: "Sản phẩm đã được kiểm định",
      imgURL: "../../src/assets/images/policies_icon_3.png",
    },
    {
      id: 4,
      name: "Hotline: 19001993",
      title: "Dịch vụ hỗ trợ bạn 24/7",
      imgURL: "../../src/assets/images/policies_icon_4.png",
    },
  ],
  feedbackList: [
    {
      id: 1,
      title: "Khách hàng nói gì về chúng tôi",
      name: "Trần Mai Bích Chi",
      position: "Giám đốc kinh doanh",
      img: "../../src/assets/images/feedback_img_1.png",
      text: "Sản phẩm chất lượng, chất vải mềm mát mặc vào rất thoải mái và ôm sát người giúp khoe được điểm mạnh của tôi. Giá cả hợp lý, giao hàng nhanh chóng. Shipper cũng dễ thương, nhân viên tư vấn thì nhiệt tình. Sẽ ủng hộ shop dài dài. Cảm ơn shop!",
    },
    {
      id: 2,
      title: "Khách hàng nói gì về chúng tôi",
      name: "Trần Ngọc Gia Hân",
      position: "Nhân viên văn phòng",
      img: "../../src/assets/images/feedback_img_2.jpg",
      text: "Tôi rất thích kiểu dáng và màu sắc của sản phẩm. Nó rất phù hợp với thể hình của tôi và tạo cảm giác tự tin khi tập luyện. Tôi đã nhận được nhiều lời khen về trang phục của mình.",
    },
    {
      id: 3,
      title: "Khách hàng nói gì về chúng tôi",
      name: "Lê Thu Hằng",
      position: "Sinh viên",
      img: "../../src/assets/images/feedback_img_3.jpg",
      text: "Sản phẩm rất vừa vặn và thoải mái. Tôi đã tập luyện trong sản phẩm này trong một giờ đồng hồ mà không thấy bất kỳ rắc rối nào. Điều này giúp tôi tập trung hoàn toàn vào bài tập mà không phải suy nghĩ về việc chỉnh sửa trang phục.",
    },
  ],
  lookbookList: [
    {
      id: 1,
      name: "Set đồ tập yoga",
      imgURL: "../../src/assets/images/lookbook_img_1.png",
      imgToolTip: "../../src/assets/images/img_tooltip_1.jpg",
    },
    {
      id: 2,
      name: "Set đồ tập gym",
      imgURL: "../../src/assets/images/lookbook_img_2.png",
      imgToolTip: "../../src/assets/images/img_tooltip_2.jpg",
    },
    {
      id: 3,
      name: "Set đồ tập Aerobic",
      imgURL: "../../src/assets/images/lookbook_img_3.png",
      imgToolTip: "../../src/assets/images/img_tooltip_2.jpg",
    },
  ],
  filterList: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    filterItem(state, action) {
      const newFilterList = [...state.filterList, action.payload];
      const uniqueFilters = [...new Set(newFilterList)]; //Set - Gia tri duy nhat
      state.filterList = uniqueFilters;
    },

    removefilterItem(state, action) {
      state.filterList = state.filterList.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export const { filterItem, removefilterItem } = shopSlice.actions;
export default shopSlice.reducer;
