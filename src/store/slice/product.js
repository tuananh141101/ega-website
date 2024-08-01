import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Áo croptop tập gym yoga",
    brand: "Yinil",
    price: "315.000",
    comparePrice: "400.000",
    size: ["S", "M", "L", "XL"],
    sold: 156,
    freeship: "../../src/assets/images/bg_productlist_img.png",
    promotion: "../../src/assets/images/bg_productlist_img_2.png",
    hotdeal: "../../src/assets/images/promo_tag_hotdeal.png",
    imgList: [
      "../../src/assets/images/ImgReduxState/img_product_1.jpg",
      "../../src/assets/images/ImgReduxState/img_product_2.jpg",
      "../../src/assets/images/ImgReduxState/img_product_3.jpg",
      "../../src/assets/images/ImgReduxState/img_product_4.jpg",
      "../../src/assets/images/ImgReduxState/img_product_5.jpg",
      "../../src/assets/images/ImgReduxState/img_product_6.jpg",
      "../../src/assets/images/ImgReduxState/img_product_7.jpg",
      "../../src/assets/images/ImgReduxState/img_product_8.jpg",
    ],
  },
  {
    id: 2,
    name: "Quần legging lửng tập yoga",
    brand: "Ega",
    price: "375.000",
    comparePrice: "400.000",
    size: ["S", "M", "L", "XL"],
    sold: 156,
    hotdeal: "../../src/assets/images/promo_tag_hotdeal.png",
    imgList: [
      "../../src/assets/images/ImgReduxState/img_product_9.jpg",
      "../../src/assets/images/ImgReduxState/img_product_10.jpg",
      "../../src/assets/images/ImgReduxState/img_product_11.jpg",
      "../../src/assets/images/ImgReduxState/img_product_12.jpg",
      "../../src/assets/images/ImgReduxState/img_product_13.jpg",
      "../../src/assets/images/ImgReduxState/img_product_14.jpg",
      "../../src/assets/images/ImgReduxState/img_product_15.jpg",
    ],
  },
  {
    id: 3,
    name: "Demo coupon nhập liệu từ metafield",
    brand: "Ega",
    price: "350.000",
    comparePrice: "450.000",
    size: ["S", "M", "L", "XL"],
    sold: 156,
    imgList: [
      "../../src/assets/images/ImgReduxState/img_product_16.jpg",
      "../../src/assets/images/ImgReduxState/img_product_17.jpg",
      "../../src/assets/images/ImgReduxState/img_product_18.jpg",
      "../../src/assets/images/ImgReduxState/img_product_19.jpg",
      "../../src/assets/images/ImgReduxState/img_product_20.jpg",
      "../../src/assets/images/ImgReduxState/img_product_21.jpg",
      "../../src/assets/images/ImgReduxState/img_product_22.jpg",
    ],
  },
  {
    id: 4,
    name: "Khăn tập kháng khuẩn, thấm hút mồ hôi",
    brand: "Yinil",
    price: "195.000",
    comparePrice: "250.000",
    sold: 156,
    imgList: [
      "../../src/assets/images/ImgReduxState/img_product_23.jpg",
      "../../src/assets/images/ImgReduxState/img_product_24.jpg",
    ],
  },
  {
    id: 5,
    name: "Quần tập ống dài bo gấu",
    brand: "Yinil",
    price: "405.000",
    comparePrice: "550.000",
    sold: 100,
    imgList: [
      "../../src/assets/images/ImgReduxState/img_product_25.jpg",
      "../../src/assets/images/ImgReduxState/img_product_26.jpg",
      "../../src/assets/images/ImgReduxState/img_product_27.jpg",
      "../../src/assets/images/ImgReduxState/img_product_28.jpg",
      "../../src/assets/images/ImgReduxState/img_product_29.jpg",
    ],
  },
];

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
