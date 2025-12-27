export const BLOG_7_CONTENT = {
  vi: `

## 1. Giới thiệu

DOM (Document Object Model) là nền tảng cho phép JavaScript tương tác với nội dung và cấu trúc của trang web.
Thông qua DOM, lập trình viên có thể thay đổi nội dung, giao diện và phản hồi lại các hành động của người dùng theo thời gian thực.

Trong phát triển web hiện đại, DOM và xử lý sự kiện (Event Handling) đóng vai trò trung tâm trong việc xây dựng các giao diện có tính tương tác cao và thân thiện với người dùng.


## 2. DOM Tree là gì?

DOM Tree là cấu trúc dạng cây biểu diễn toàn bộ tài liệu HTML trong bộ nhớ trình duyệt.
Mỗi thẻ HTML được biểu diễn như một node trong cây DOM.

2.1. Đặc điểm của DOM Tree

a. Mỗi phần tử HTML là một node.\n
b. Có mối quan hệ cha – con – anh em giữa các node.\n
c. JavaScript có thể truy cập và thay đổi node bất kỳ trong DOM.\n
d. DOM được tạo sau khi trình duyệt parse HTML.

2.2. Truy cập DOM bằng JavaScript

~~~javascript
const title = document.querySelector("h1");
title.textContent = "DOM đã được thay đổi!";
~~~

Giải thích:
JavaScript truy cập trực tiếp vào node \`h1\` và cập nhật nội dung mà không cần tải lại trang.


## 3. Xử lý sự kiện (Event Handling)

Event là các hành động xảy ra trong quá trình người dùng tương tác với trang web như click, nhập liệu, submit form.

JavaScript cho phép lắng nghe và xử lý các sự kiện này thông qua Event Listener.

3.1. Ví dụ xử lý sự kiện click button

~~~javascript
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
  alert("Bạn vừa nhấn nút!");
});
~~~

Phân tích:

a. \`addEventListener\` giúp gắn sự kiện mà không ghi đè sự kiện khác.\n
b. Logic xử lý được tách riêng, dễ bảo trì.\n
c. Phù hợp với mô hình component hiện đại.


## 4. Ví dụ xử lý Form bằng JavaScript

Form là thành phần tương tác phổ biến nhất trong các ứng dụng web.

4.1. Ví dụ xử lý submit form

~~~javascript
const form = document.querySelector("#loginForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form đã được submit");
});
~~~

Giải thích:

a. \`event.preventDefault()\` ngăn hành vi reload trang mặc định.\n
b. Cho phép kiểm tra dữ liệu trước khi gửi lên server.\n
c. Giúp cải thiện trải nghiệm người dùng.


## 5. DOM, Event và trải nghiệm người dùng (UX)

DOM và Event Handling ảnh hưởng trực tiếp đến UX thông qua phản hồi giao diện.

5.1. Tác động tích cực đến UX

a. Phản hồi tức thì khi người dùng thao tác.\n
b. Không cần tải lại trang.\n
c. Giao diện linh hoạt, sống động.\n
d. Giảm cảm giác chờ đợi và gián đoạn.

5.2. Ví dụ cải thiện UX bằng Event

~~~javascript
button.addEventListener("click", () => {
  button.disabled = true;
  button.textContent = "Đang xử lý...";
});
~~~

Ví dụ trên giúp người dùng biết rằng hành động của họ đã được ghi nhận.


## 6. Kết luận

DOM và xử lý sự kiện là nền tảng quan trọng trong JavaScript phía client-side.
Việc hiểu rõ DOM tree, cách lắng nghe và xử lý event giúp lập trình viên xây dựng giao diện tương tác tốt hơn và tránh các lỗi UX phổ biến.

Đối với sinh viên, đây là bước bắt buộc trước khi tiếp cận các framework như React, Vue hoặc Angular – nơi mọi tương tác đều dựa trên tư duy DOM và event.
`,
  en: `A technical introduction to the DOM and event handling in JavaScript, covering DOM tree structure, event listeners, form handling, and their impact on user experience with practical examples.`
};
