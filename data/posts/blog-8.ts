export const BLOG_8_CONTENT = {
  vi: `

## 1. Giới thiệu

Thuật toán là cách tư duy để giải quyết một bài toán một cách có hệ thống.
Trong JavaScript, việc nắm vững tư duy thuật toán giúp lập trình viên viết code rõ ràng, tối ưu và dễ bảo trì hơn.

Đối với sinh viên và người mới học web, thuật toán với JavaScript là bước chuyển quan trọng từ "viết code chạy được" sang "viết code đúng và hiệu quả".


## 2. Vòng lặp (Loop) trong JavaScript

Vòng lặp cho phép thực hiện một khối lệnh lặp đi lặp lại dựa trên điều kiện xác định.
JavaScript hỗ trợ nhiều loại loop khác nhau.

2.1. Các loại loop phổ biến

a. for – dùng khi biết trước số lần lặp.\n
b. while – lặp khi điều kiện còn đúng.\n
c. do...while – luôn chạy ít nhất một lần.\n
d. for...of – duyệt qua phần tử của mảng.\n
e. for...in – duyệt qua key của object.

2.2. Ví dụ vòng lặp for

~~~javascript
for (let i = 1; i <= 5; i++) {
  console.log("Giá trị i:", i);
}
~~~

Giải thích:
Vòng lặp trên in ra các số từ 1 đến 5 theo thứ tự tăng dần.


## 3. Đệ quy (Recursion)

Đệ quy là kỹ thuật trong đó hàm tự gọi lại chính nó để giải quyết bài toán nhỏ hơn.
Recursion thường được dùng cho các bài toán có cấu trúc lặp lại như cây, chia để trị.

3.1. Thành phần của một hàm đệ quy

a. Điều kiện dừng (base case).\n
b. Bước gọi đệ quy với bài toán nhỏ hơn.

3.2. Ví dụ hàm đệ quy tính giai thừa

~~~javascript
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
~~~

Phân tích:

a. Base case: n === 1.\n
b. Mỗi lần gọi hàm, bài toán được giảm kích thước.\n
c. Nếu thiếu base case, chương trình sẽ gây lỗi stack overflow.


## 4. So sánh Loop và Recursion

![So sánh Loop và Recursion](public/images/blog8.1.png)

Loop thường được ưu tiên trong JavaScript do hiệu năng và độ an toàn bộ nhớ.


## 5. Một số bài toán mẫu với JavaScript

5.1. Tính tổng các số trong mảng

~~~javascript
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
~~~

5.2. Kiểm tra số chẵn / lẻ

~~~javascript
function isEven(n) {
  return n % 2 === 0;
}
~~~

5.3. Tìm số lớn nhất trong mảng

~~~javascript
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}
~~~

Các bài toán trên giúp luyện tập tư duy lặp, điều kiện và xử lý dữ liệu cơ bản.


## 6. Thuật toán và trải nghiệm người dùng (UX)

Thuật toán ảnh hưởng gián tiếp nhưng rất mạnh đến UX.

6.1. Liên hệ với UX

a. Thuật toán tối ưu giúp giao diện phản hồi nhanh hơn.\n
b. Giảm thời gian chờ khi xử lý dữ liệu lớn.\n
c. Tránh treo giao diện do vòng lặp hoặc đệ quy không kiểm soát.\n
d. Cải thiện cảm nhận mượt mà của ứng dụng.


## 7. Kết luận

Tư duy thuật toán là kỹ năng nền tảng đối với mọi lập trình viên JavaScript.
Việc nắm vững loop, recursion và các bài toán cơ bản giúp xây dựng nền tảng vững chắc trước khi tiếp cận các cấu trúc dữ liệu, thuật toán nâng cao và framework hiện đại.

Sinh viên nên luyện tập thường xuyên bằng các bài toán nhỏ để hình thành tư duy giải quyết vấn đề một cách có hệ thống.
`,
  en: `An introduction to algorithmic thinking in JavaScript, covering loops, recursion, and practical problem-solving examples, with a focus on performance and user experience considerations.`
};
