export const BLOG_3_CONTENT = {
  vi: `

## 1. Giới thiệu

Đa luồng (Multithreading) là kỹ thuật cho phép chương trình Java thực thi nhiều luồng xử lý song song trong cùng một tiến trình.
Cách tiếp cận này thường được sử dụng trong ứng dụng server, desktop hoặc các tác vụ xử lý nền nhằm cải thiện hiệu năng và khả năng phản hồi.
Tuy nhiên, đa luồng cũng làm tăng độ phức tạp do các luồng cùng chia sẻ tài nguyên bộ nhớ.


## 2. Thread trong Java


Thread là đơn vị thực thi nhỏ nhất trong Java. Mỗi thread có luồng chạy riêng nhưng dùng chung heap memory.
Một cách tạo thread cơ bản là kế thừa trực tiếp lớp Thread.

![Thread trong Java](public/images/blog3.1.png)

*Ghi chú ảnh: Vòng đời của Thread.*

2.1. Ví dụ tạo Thread

~~~java
class MyThread extends Thread {
  @Override
  public void run() {
    System.out.println("Thread đang chạy");
  }
}

public class Main {
  public static void main(String[] args) {
    MyThread t = new MyThread();
    t.start();
  }
}
~~~


Lưu ý kỹ thuật:

a. start() tạo luồng mới và gọi run() nội bộ.\n
b. Gọi trực tiếp run() sẽ không tạo thread mớn.\n
c. Không khuyến khích kế thừa Thread trong thiết kế lớn.


## 3. Runnable – Cách tiếp cận linh hoạt hơn

Runnable là interface đại diện cho một tác vụ có thể chạy trong thread.
Cách này tách biệt logic xử lý khỏi cơ chế quản lý luồng, phù hợp với thiết kế mở rộng.


3.1. Ví dụ với Runnable

~~~java
class MyTask implements Runnable {
  @Override
  public void run() {
    System.out.println("Runnable đang chạy");
  }
}

public class Main {
  public static void main(String[] args) {
    Thread t = new Thread(new MyTask());
    t.start();
  }
}
~~~


Ưu điểm của Runnable:

a. Không bị giới hạn bởi đa kế thừa. \n
b. Dễ tái sử dụng và test. \n
c. Tương thích tốt với ExecutorService và thread pool.


## 4. Race Condition – Vấn đề phổ biến trong đa luồng

Race condition xảy ra khi nhiều thread cùng đọc và ghi lên một tài nguyên chia sẻ mà không có cơ chế đồng bộ.
Kết quả chương trình phụ thuộc vào thứ tự thực thi của các thread và không thể dự đoán chính xác.


4.1. Ví dụ race condition

~~~java
class Counter {
  int count = 0;

  void increment() {
    count++;
  }
}

public class Main {
  public static void main(String[] args) throws InterruptedException {
    Counter counter = new Counter();

    Thread t1 = new Thread(() -> {
      for (int i = 0; i < 1000; i++) counter.increment();
    });

    Thread t2 = new Thread(() -> {
      for (int i = 0; i < 1000; i++) counter.increment();
    });

    t1.start();
    t2.start();
    t1.join();
    t2.join();

    System.out.println(counter.count);
  }
}
~~~


Phân tích:

a. Toán tử ++ không phải atomic. \n
b. Hai thread có thể ghi đè kết quả của nhau.\n
c. Giá trị cuối cùng có thể nhỏ hơn 2000.


## 5. Đồng bộ hóa trong Java

Java cung cấp từ khóa synchronized để đảm bảo chỉ một thread được truy cập vùng code tại một thời điểm.


5.1. Ví dụ synchronized

~~~java
class Counter {
  int count = 0;

  synchronized void increment() {
    count++;
  }
}
~~~


Một số giải pháp nâng cao:

a. ReentrantLock. \n
b. AtomicInteger. \n
c. Các class trong java.util.concurrent.


## 6. Kết luận

Đa luồng là nền tảng quan trọng trong lập trình Java hiện đại.
Việc hiểu rõ Thread, Runnable và race condition giúp tránh lỗi logic nghiêm trọng khi xây dựng hệ thống thực tế.
Sinh viên nên thực hành với các ví dụ nhỏ và tập trung vào tư duy đồng bộ trước khi tiếp cận các mô hình concurrency nâng cao.
`,
  en: `A technical overview of Java multithreading fundamentals, structured with clear sections covering Thread, Runnable, race conditions, and synchronization, supported by concise code examples.`
};
