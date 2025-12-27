export const BLOG_6_CONTENT = {
  vi: `

## 1. Giới thiệu

Trong JavaScript, các tác vụ như gọi API, đọc dữ liệu, xử lý sự kiện người dùng
không thể thực hiện theo cách đồng bộ truyền thống.
Lập trình bất đồng bộ (Asynchronous Programming) giúp JavaScript xử lý các tác vụ
mất thời gian mà không làm “đóng băng” giao diện người dùng.


## 2. Event Loop – Nền tảng của bất đồng bộ

JavaScript là ngôn ngữ **single-thread**, nhưng vẫn xử lý được nhiều tác vụ cùng lúc
nhờ cơ chế Event Loop.

Event Loop chịu trách nhiệm:
a. Theo dõi Call Stack.\n
b. Đưa các callback từ Task Queue / Microtask Queue vào Stack khi rảnh.\n
c. Giữ cho UI luôn phản hồi.

Ví dụ đơn giản:

~~~javascript
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
~~~

Kết quả:
A → C → B  
(do callback được đưa vào queue sau khi stack rỗng)


## 3. Callback – Cách tiếp cận ban đầu

Callback là hàm được truyền vào hàm khác và được gọi sau khi tác vụ hoàn thành.

3.1. Ví dụ callback

~~~javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Dữ liệu đã tải xong");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
~~~

Nhược điểm của callback:

a. Khó đọc khi lồng nhiều callback (callback hell).\n
b. Khó xử lý lỗi.\n
c. Khó bảo trì trong dự án lớn.


## 4. Promise – Giải pháp cải tiến

Promise đại diện cho một giá trị **sẽ có trong tương lai** hoặc **bị lỗi**.

4.1. Trạng thái của Promise

a. Pending – đang xử lý.\n
b. Fulfilled – thành công.\n
c. Rejected – thất bại.

4.2. Ví dụ Promise

~~~javascript
const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Dữ liệu từ server");
  }, 1000);
});

fetchData
  .then(data => console.log(data))
  .catch(error => console.error(error));
~~~

Ưu điểm:

a. Code rõ ràng hơn callback.\n
b. Dễ xử lý lỗi.\n
c. Có thể chain nhiều tác vụ.


## 5. Async / Await – Cách viết hiện đại nhất

Async/Await là cú pháp giúp viết code bất đồng bộ **giống như đồng bộ**.

5.1. Ví dụ async/await

~~~javascript
async function loadData() {
  try {
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

loadData();
~~~

Ưu điểm:

a. Dễ đọc, dễ hiểu.\n
b. Debug thuận tiện.\n
c. Rất phù hợp cho ứng dụng thực tế.


## 6. Liên hệ UX – Vì sao bất đồng bộ quan trọng?

Bất đồng bộ ảnh hưởng trực tiếp đến trải nghiệm người dùng (UX):

a. Giao diện không bị đơ khi tải dữ liệu.\n
b. Có thể hiển thị loading, skeleton.\n
c. Phản hồi tức thì khi người dùng thao tác.\n
d. Tránh cảm giác “web chậm”.

Ví dụ UX tốt:

~~~javascript
button.addEventListener("click", async () => {
  button.disabled = true;
  button.textContent = "Đang tải...";

  await loadData();

  button.textContent = "Hoàn tất";
});
~~~


## 7. Kết luận

Lập trình bất đồng bộ là kỹ năng cốt lõi trong JavaScript hiện đại.
Hiểu rõ Event Loop, Promise và Async/Await giúp lập trình viên
xây dựng ứng dụng mượt mà, hiệu quả và thân thiện với người dùng.
Đây là nền tảng quan trọng trước khi tiếp cận React, Vue hoặc Node.js.
`,
  en: `An introduction to asynchronous programming in JavaScript, covering the event loop, callbacks, promises, async/await syntax, and their impact on user experience.`
};
