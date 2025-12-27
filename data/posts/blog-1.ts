export const BLOG_1_CONTENT = {
  vi: `## Giới thiệu

Cấu trúc dữ liệu là nền tảng quan trọng trong lập trình. Trong Java, Collection Framework cung cấp nhiều cấu trúc sẵn có giúp quản lý dữ liệu hiệu quả mà không cần tự cài đặt từ đầu.

Bài viết này tập trung vào các cấu trúc cơ bản: Array, ArrayList, LinkedList, Stack, Queue và khái niệm độ phức tạp thời gian.


## 1. Array và ArrayList

a. Array là cấu trúc dữ liệu cơ bản nhất:\n
- Kích thước cố định khi khởi tạo.\n
- Truy cập phần tử theo chỉ số rất nhanh (O(1)).\n
- Ví dụ:

~~~java
int[] arr = new int[10];
~~~

b. ArrayList là danh sách động trong Collection Framework:\n
- Tự động mở rộng kích thước.\n
- Truy cập phần tử O(1), thêm cuối O(1) trung bình.\n

Khi biết trước kích thước và ít thay đổi, Array là lựa chọn phù hợp. Trong hầu hết các bài toán thực tế, ArrayList linh hoạt và dễ sử dụng hơn.

~~~java
ArrayList<String> names = new ArrayList<>();
names.add("An");
names.add("Bình");
names.get(0);
~~~

## 2. LinkedList

LinkedList lưu trữ dữ liệu dưới dạng các node liên kết:\n
- Thêm và xóa ở đầu/cuối hiệu quả (O(1)).\n
- Truy cập ngẫu nhiên chậm (O(n)).\n

--> LinkedList phù hợp cho các bài toán cần thao tác chèn/xóa thường xuyên, hoặc khi dùng như Queue/Deque.

## 3. Stack và Queue



a. Stack tuân theo nguyên tắc LIFO (Last In – First Out).
Trong Java, nên sử dụng 'Deque' thay cho lớp 'Stack'.

~~~java
Deque<Integer> stack = new ArrayDeque<>();
stack.push(1);
stack.push(2);
stack.pop();
~~~


b. Queue tuân theo nguyên tắc FIFO (First In – First Out), thường được dùng trong xử lý hàng đợi và thuật toán BFS.

~~~java
Queue<String> queue = new LinkedList<>();
queue.offer("First");
queue.offer("Second");
queue.poll();
~~~

## 5. Độ phức tạp thời gian


Việc lựa chọn cấu trúc dữ liệu phù hợp quyết định trực tiếp đến tốc độ xử lý và khả năng mở rộng của chương trình. Bảng dưới đây so sánh các thao tác cơ bản thường gặp.

![So sánh cấu trúc dữ liệu](public/images/blog1.1.png)

*Ghi chú bảng: O(1) trung bình (amortized), có thể là O(n) khi cần mở rộng hoặc tái cấu trúc bộ nhớ.*


## Kết luận

Nắm vững các cấu trúc dữ liệu cơ bản trong Java giúp viết code rõ ràng, hiệu quả và dễ mở rộng. Đây là bước đệm cần thiết trước khi tiếp cận các cấu trúc nâng cao như HashMap hay TreeSet.
`
};
