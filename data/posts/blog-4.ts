export const BLOG_4_CONTENT = {
  vi: `

## 1. Giới thiệu\n
Thuật toán sắp xếp và tìm kiếm là nền tảng của khoa học máy tính và xuất hiện thường xuyên trong học tập, phỏng vấn cũng như các hệ thống thực tế.\n
Trong Java, việc hiểu rõ bản chất từng thuật toán giúp lập trình viên lựa chọn giải pháp phù hợp về hiệu năng và độ phức tạp.\n


## 2. Các thuật toán sắp xếp cơ bản\n

 2.1. Bubble Sort\n
Bubble Sort hoạt động bằng cách so sánh các cặp phần tử liền kề và hoán đổi nếu sai thứ tự.\n
Thuật toán đơn giản nhưng hiệu năng kém với dữ liệu lớn.\n

~~~java
void bubbleSort(int[] arr) {
  for (int i = 0; i < arr.length - 1; i++) {
    for (int j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        int temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}
~~~

Đặc điểm:\n
a. Dễ hiểu, dễ cài đặt\n
b. Độ phức tạp O(n²)\n
c. Không phù hợp cho tập dữ liệu lớn\n


 2.2. Selection Sort\n
Selection Sort chia mảng thành hai phần: đã sắp xếp và chưa sắp xếp.\n
Mỗi vòng lặp chọn phần tử nhỏ nhất trong phần chưa sắp xếp.\n

~~~java
void selectionSort(int[] arr) {
  for (int i = 0; i < arr.length - 1; i++) {
    int minIndex = i;
    for (int j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    int temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
}
~~~

Đặc điểm:\n
a. Số lần hoán đổi ít\n
b. Độ phức tạp O(n²)\n
c. Không ổn định (unstable sort)\n


 2.3. Quick Sort\n
Quick Sort là thuật toán chia để trị (divide and conquer).\n
Chọn một pivot, phân hoạch mảng và sắp xếp đệ quy.\n

~~~java
int partition(int[] arr, int low, int high) {
  int pivot = arr[high];
  int i = low - 1;
  for (int j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      int temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  int temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;
}

void quickSort(int[] arr, int low, int high) {
  if (low < high) {
    int pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}
~~~

Đặc điểm:\n
a. Hiệu năng tốt trong thực tế\n
b. Trung bình O(n log n)\n
c. Worst case O(n²) nếu chọn pivot kém\n


## 3. Thuật toán tìm kiếm – Binary Search\n
Binary Search hoạt động trên tập dữ liệu đã được sắp xếp.\n
Mỗi lần so sánh loại bỏ một nửa không gian tìm kiếm.\n

~~~java
int binarySearch(int[] arr, int target) {
  int left = 0;
  int right = arr.length - 1;

  while (left <= right) {
    int mid = left + (right - left) / 2;

    if (arr[mid] == target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
~~~

Đặc điểm:\n
a. Độ phức tạp O(log n)\n
b. Phù hợp với dữ liệu lớn\n
c. Yêu cầu mảng đã sắp xếp\n


## 4. Big-O – Độ phức tạp thuật toán\n

Big-O được dùng để mô tả mức độ tăng của thời gian hoặc bộ nhớ khi kích thước dữ liệu đầu vào tăng.\n
Việc hiểu Big-O giúp đánh giá khả năng mở rộng và hiệu năng của thuật toán.\n

4.1. Bảng so sánh độ phức tạp thời gian\n

![So sánh độ phức tạp thời gian](public/images/blog4.1.png)


4.2. Nhận xét tổng quát\n
a. Các thuật toán O(n²) chỉ phù hợp với tập dữ liệu nhỏ.\n
b. Quick Sort có hiệu năng tốt trong đa số trường hợp thực tế.\n
c. Binary Search cực kỳ hiệu quả nhưng cần dữ liệu đầu vào có thứ tự.\n

## 5. Kết luận\n
Hiểu rõ thuật toán sắp xếp và tìm kiếm giúp lập trình viên:\n
a. Viết code hiệu quả hơn\n
b. Tránh bottleneck hiệu năng\n
c. Chuẩn bị tốt cho phỏng vấn và hệ thống lớn\n

Trong thực tế, Java thường sử dụng các thuật toán tối ưu sẵn trong Collections và Arrays,\n
nhưng việc nắm vững nền tảng vẫn là yêu cầu bắt buộc đối với kỹ sư phần mềm.\n
`,
  en: `An overview of fundamental sorting and searching algorithms in Java, including Bubble Sort, Selection Sort, Quick Sort, Binary Search, and Big-O analysis, supported by concise code examples.`
};
