import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listBlog: [
    {
      id: 1,
      img: "/public/assets/images/blog_img_1.png",
      name: "TẬP GYM LÀ GÌ? CHỌN MẶC QUẦN ÁO GYM ĐÚNG CHUẨN",
      date: "Thứ Ba, 06/06/2023",
      timeRead: "13 phút đọc",
      content:
        "Gym hiện đang là một xu hướng mới của giới trẻ. Gym không chỉ là bộ môn phổ biến dành cho phái mạnh mà nữ giới...",
    },
    {
      id: 2,
      img: "/public/assets/images/blog_img_2.png",
      name: "4 CÁCH LỰA ĐỒ THỂ THAO YOGA ĐẸP KHÔNG PHẢI AI CŨNG BIẾT",
      date: "Thứ Ba, 06/06/2023",
      timeRead: "6 phút đọc",
      content:
        "Các hoạt động thể thao luôn đòi hỏi con người phải vận động nhiều nên việc lựa chọn những bộ quần áo mang lại sự thoải...",
    },
    {
      id: 3,
      img: "/public/assets/images/blog_img_3.png",
      name: "CHỌN ĐỒ TẬP GYM NỮ ĐÚNG CÁCH CHO NGƯỜI MỚI",
      date: "Thứ Ba, 06/06/2023",
      timeRead: "6 phút đọc",
      content:
        "Mỗi ngày có hàng ngàn gymer quan tâm đến câu hỏi ‘Chọn đồ tập gym nữ như thế nào là đúng cách?’, nhưng bạn có thật...",
    },
    {
      id: 4,
      img: "/public/assets/images/blog_img_4.png",
      name: "4 CÁCH LỰA ĐỒ THỂ THAO YOGA ĐẸP KHÔNG PHẢI AI CŨNG BIẾT",
      date: "Thứ Ba, 06/06/2023",
      timeRead: "4 phút đọc",
      content:
        "Khi bắt đầu học Yoga điều đầu tiên mà chị em quan tâm nhất là lựa chọn đồ tập Yoga sao cho đẹp và hiệu quả...",
    },
    {
      id: 5,
      img: "/public/assets/images/blog_img_5.png",
      name: "DÁNG NGƯỜI CỦA BẠN MẶC ĐỒ TẬP GYM NHƯ THẾ NÀO LÀ ĐẸP NHẤT?",
      date: "Thứ Ba, 06/06/2023",
      timeRead: "4 phút đọc",
      content:
        "Ngoài tập gym để giảm cân, duy trì vóc dáng, còn có một mối quan tâm khác mà chị em rất hay tìm hiểu đó chính...",
    },
  ],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
});

export default blogSlice.reducer;
