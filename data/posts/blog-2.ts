export const BLOG_2_CONTENT = {
  vi: `## Giới thiệu: 

Lập trình hướng đối tượng (Object-Oriented Programming — OOP) là phương pháp tổ chức phần mềm bằng cách mô tả hệ thống dưới dạng các đối tượng có trạng thái và hành vi. Đối với sinh viên năm cuối ngành Kỹ thuật Phần mềm, hiểu rõ OOP giúp thiết kế các mô-đun có trách nhiệm rõ ràng, cải thiện khả năng bảo trì và giảm rủi ro khi mở rộng chức năng.

Vấn đề thường gặp khi bắt tay vào dự án là: lớp bị phình to (god class), phụ thuộc chặt (tight coupling), và khó kiểm thử đơn vị. Bài viết này trình bày khái niệm cơ bản, phân tích kỹ thuật ảnh hưởng của OOP lên thiết kế hệ thống, và minh họa bằng ví dụ Java nhỏ gọn để bạn thực tập và tự đánh giá thiết kế.

## A. Khái niệm nền tảng và lý thuyết

- Lớp và đối tượng (class, object): lớp là khuôn mẫu; đối tượng là thể hiện cụ thể với trạng thái (fields) và hành vi (methods).\n
- Đóng gói (encapsulation): che giấu dữ liệu nội bộ bằng từ khóa truy cập ('private', 'protected', 'public') để bảo vệ invariants.\n
- Kế thừa (inheritance): tái sử dụng định nghĩa từ lớp cha; thích hợp cho quan hệ "is-a".\n
- Đa hình (polymorphism): cho phép gọi phương thức thông qua giao diện chung bất kể kiểu cụ thể.\n
- Trừu tượng (abstraction): tách giao diện khỏi cài đặt để giảm sự phụ thuộc vào chi tiết nội bộ.

![OOP diagram](/images/blog2.1.png)

*Ảnh mô tả hệ thống lập trình hướng đối tượng trong Java. đây là chú thích của ảnh bạn để giúp tôi ở dưới nằm giữa ảnh in nghiêng đi hen*


Nguyên tắc thiết kế liên quan:

- Giảm coupling và tăng cohesion: mỗi lớp nên đảm nhiệm một trách nhiệm rõ ràng; phụ thuộc giữa các lớp cần được giảm tới mức cần thiết.\n
- Composition over Inheritance: ưu tiên ghép đối tượng để đạt tính linh hoạt hơn kế thừa sâu.

## B. Phân tích kỹ thuật và diễn giải

1. Encapsulation và invariants

Đóng gói giúp kiểm soát trạng thái nội bộ. Ví dụ quản lý số lượng, ta đảm bảo invariant không âm bằng các phương thức public kiểm tra giá trị trước khi thay đổi.

2. Kế thừa vs Composition

Kế thừa tạo mối liên kết chặt: lớp con phụ thuộc cấu trúc và hành vi của lớp cha. Composition (chứa một thành phần khác) cho phép thay đổi hành vi bằng cách thay thế thành phần đó tại runtime, thuận lợi cho việc thử nghiệm và mở rộng.

3. Polymorphism và mở rộng hệ thống

Polymorphism giảm các khối điều kiện phân nhánh (if/else) trong code và cho phép thêm tính năng bằng cách thêm lớp mới triển khai giao diện hiện có.

4. Tác động lên phân tích thuật toán

OOP không thay đổi bản chất độ phức tạp của thuật toán bên trong phương thức; nhưng thiết kế tốt giúp tách rời thuật toán thành các thành phần dễ hiểu và tối ưu hóa độc lập.

## C. Ví dụ mã (Java)

1) Lớp đơn giản và đóng gói
~~~java
public class Counter {
  private int count = 0;

  public void increment() {
    count++;
  }

  public void decrement() {
    if (count == 0) throw new IllegalStateException("count cannot be negative");
    count--;
  }

  public int getCount() {
    return count;
  }
}
~~~

Giải thích: 'Counter' giữ trạng thái nội bộ 'count' là 'private'. Các phương thức công khai đảm bảo invariant: giá trị không âm.

2) Interface và đa hình (Shape)
~~~java
public interface Shape {
  double area();
}

public class Circle implements Shape {
  private final double radius;
  public Circle(double radius) { this.radius = radius; }
  public double area() { return Math.PI * radius * radius; }
}

public class Rectangle implements Shape {
  private final double width, height;
  public Rectangle(double width, double height) { this.width = width; this.height = height; }
  public double area() { return width * height; }
}
~~~

Giải thích: sử dụng 'Shape' cho phép xử lý đồng nhất nhiều loại hình khác nhau thông qua gọi 'area()'.

3) Strategy pattern cơ bản (tính thuế)
~~~java
public interface TaxStrategy {
  double calculate(double amount);
}

public class FlatTax implements TaxStrategy {
  private final double rate;
  public FlatTax(double rate) { this.rate = rate; }
  public double calculate(double amount) { return amount * rate; }
}

public class ProgressiveTax implements TaxStrategy {
  public double calculate(double amount) {
    if (amount <= 1000) return amount * 0.05;
    return 1000 * 0.05 + (amount - 1000) * 0.1;
  }
}

public class Invoice {
  private final TaxStrategy taxStrategy;
  public Invoice(TaxStrategy taxStrategy) { this.taxStrategy = taxStrategy; }
  public double total(double net) { return net + taxStrategy.calculate(net); }
}
~~~

Giải thích: 'Invoice' sử dụng composition để ủy quyền việc tính thuế cho 'TaxStrategy'. Thay đổi phương pháp tính thuế không cần sửa 'Invoice'.

Gợi ý sơ đồ và minh họa

- UML class diagram: minh họa 'Shape' và các lớp triển khai.
- Sequence diagram: luồng gọi khi 'Invoice.total()' được gọi, thể hiện ủy quyền tới 'TaxStrategy'.
- So sánh inheritance vs composition: biểu đồ phụ thuộc để thấy mức coupling.
- Screenshot debugger: breakpoint trong 'Invoice.total()' để minh họa runtime flow.

--> Kết luận: tóm tắt kỹ thuật và bài học cá nhân

OOP cung cấp công cụ ngôn ngữ để tổ chức mã theo hướng mô-đun, rõ ràng về trách nhiệm. Đóng gói, đa hình và composition là các cơ chế giúp giảm phức tạp và tăng tính mở rộng. Tuy nhiên, cần cân bằng: quá nhiều lớp nhỏ có thể gây overhead quản lý; lạm dụng kế thừa dễ dẫn đến coupling cao.

`,
  en: `A technical article summarizing core Java OOP concepts (encapsulation, inheritance, polymorphism, composition), their implications for software design, and concise Java examples demonstrating encapsulation, polymorphism, and the Strategy pattern. Suitable for senior students and technical reviewers.`
};
