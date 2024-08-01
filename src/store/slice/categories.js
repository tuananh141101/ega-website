import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
