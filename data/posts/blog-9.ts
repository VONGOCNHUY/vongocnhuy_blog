export const BLOG_9_CONTENT = {
  vi: `
## 1. Giới thiệu: Khi dòng code không chỉ là logic

Nhiều lập trình viên mới thường nghĩ: "Code chạy đúng là được". Nhưng thực tế, người dùng không nhìn thấy code, họ chỉ cảm nhận kết quả của nó. 

Mối quan hệ giữa Code và UX (User Experience) là mối quan hệ giữa "động cơ" và "cảm giác lái". Một động cơ mạnh nhưng giật cục sẽ khiến hành khách khó chịu.

## 2. JavaScript và vấn đề 'Block UI'

JavaScript là ngôn ngữ Single-threaded (đơn luồng). Điều này có nghĩa là tại một thời điểm, nó chỉ có thể làm một việc.

Hiện tượng 'Đơ' giao diện
Khi bạn thực hiện một thuật toán quá nặng hoặc một vòng lặp vô tận, trình duyệt sẽ bị "treo". Người dùng không thể click, không thể cuộn trang. Đây là thảm họa về UX.

~~~javascript
// Ví dụ về code gây block UI
function heavyTask() {
  for (let i = 0; i < 1000000000; i++) {
    // Tính toán quá nặng khiến trình duyệt đứng hình
  }
  console.log("Xong!");
}
~~~

Giải pháp: Chia nhỏ tác vụ (Task Splitting) hoặc sử dụng Web Workers để xử lý các tác vụ nặng ở một luồng riêng biệt, giữ cho giao diện luôn mượt mà.



## 3. Code ảnh hưởng đến UX như thế nào?

a. Tốc độ phản hồi (Latency)
Code tối ưu giúp giảm thời gian xử lý. Một nút bấm phản hồi sau 100ms mang lại cảm giác "tức thì", nhưng sau 500ms sẽ khiến người dùng tự hỏi "Mình đã bấm chưa?".

b. Xử lý trạng thái chờ (Loading states)
Thay vì để màn hình trắng xóa khi đợi gọi API, một lập trình viên có tư duy UX sẽ thêm Skeleton Screen hoặc Spinner.

c. Xử lý lỗi tinh tế
Thay vì hiện lỗi 'Uncaught TypeError' lên màn hình, hãy hiển thị một thông báo thân thiện: "Rất tiếc, đã có lỗi xảy ra. Vui lòng thử lại sau".

## 4. Bảng so sánh: Tư duy Code thuần vs Tư duy UX

![So sánh Tư duy Code thuần vs Tư duy UX](public/images/blog9.1.png)

## 5. Góc nhìn cá nhân: Lập trình viên là 'người phục vụ'

Theo quan điểm của mình, code giỏi không chỉ là viết được những thuật toán phức tạp, mà là biết cách giấu đi sự phức tạp đó để mang lại sự đơn giản cho người dùng. 

Khi bạn viết một hàm, hãy tự hỏi: 
1. Hàm này có làm trình duyệt bị chậm không?
2. Nếu mạng yếu, người dùng sẽ thấy gì?
3. Input này có dễ gây lỗi cho người dùng không?

## 6. Kết luận

UX không chỉ là việc của Designer. Mỗi dòng code JavaScript bạn viết ra đều có thể làm tăng hoặc giảm niềm tin của người dùng vào sản phẩm. Hãy học cách viết code bằng cách luôn đặt mình vào vị trí của người dùng.
`,
  en: `An exploration of how JavaScript code quality directly impacts User Experience (UX), covering UI blocking, performance optimization, and the mindset shift from developer-centric to user-centric coding.`
};