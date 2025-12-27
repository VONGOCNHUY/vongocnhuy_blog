
import { BlogPost, Profile, Certification } from './types';
import { BLOG_1_CONTENT } from './data/posts/blog-1';
import { BLOG_2_CONTENT } from './data/posts/blog-2';
import { BLOG_3_CONTENT } from './data/posts/blog-3';
import { BLOG_4_CONTENT } from './data/posts/blog-4';
import { BLOG_5_CONTENT } from './data/posts/blog-5';
import IMAGES from './data/images';
import { BLOG_6_CONTENT } from './data/posts/blog-6';
import { BLOG_7_CONTENT } from './data/posts/blog-7';
import { BLOG_8_CONTENT } from './data/posts/blog-8';
import { BLOG_9_CONTENT } from './data/posts/blog-9';

export const PROFILE_DATA: Profile = {
  name: "Võ Ngọc Như Ý",
  role: {
    vi: "Sinh viên Công nghệ Phần mềm - Trường Đại học Công Nghệ TP. Hồ Chí Minh (HUTECH)",
    en: "Software Engineering Student - Ho Chi Minh City University of Technology (HUTECH)"
  },
  bio: {
    vi: "Mình là sinh viên năm 4 học ngành Công nghệ thông tin, chuyên ngành Công nghệ Phần mềm, mang trong mình niềm đam mê mãnh liệt với việc xây dựng những sản phẩm công nghệ không chỉ mạnh mẽ về kỹ thuật mà còn tinh tế trong trải nghiệm.\n\nTập trung chuyên sâu vào quản trị UX/UI và tư duy thiết kế hệ thống. Mình tin rằng một phần mềm thực sự thành công là sự giao thoa hoàn hảo giữa logic lập trình và sự thấu hiểu tâm lý người dùng.",
    en: "I am a fourth-year student studying Information Technology, majoring in Software Technology with a deep passion for building technology products that are both technically robust and user-experience focused.\n\nSpecializing in UX/UI Management and system design thinking, I believe successful software is the perfect intersection of programming logic and user psychology."
  },
  goal: {
    vi: "Mục tiêu của tôi là phát triển các sản phẩm phần mềm thân thiện, dễ sử dụng và mang lại giá trị bền vững cho người dùng.",
    en: "My goal is to develop user-friendly, accessible software products that deliver sustainable value to users."
  },
  avatar: IMAGES.avatar,
  skillGroups: [
    {
      title: { vi: "Kỹ năng chuyên môn", en: "Core Skills" },
      items: [
        "Phân tích và thiết kế hệ thống lấy người dùng làm trung tâm (UCD)",
        "Thiết kế trải nghiệm người dùng (UX) và giao diện (UI)",
        "Áp dụng tư duy thiết kế (Design Thinking)",
        "Xây dựng User Flow, Wireframe và Prototype",
        "Đánh giá và cải thiện khả năng sử dụng (Usability)",
        "Kết hợp logic lập trình với trải nghiệm người dùng"
      ]
    },
    {
      title: { vi: "Công nghệ & Công cụ", en: "Tech & Tools" },
      items: [
        "Ngôn ngữ: Java, JavaScript, C, C++, C#",
        "Front-end: HTML, CSS, JavaScript, React",
        "Back-end: Node.js, PHP",
        "Mobile: Flutter",
        "Design: Figma, Canva",
        "Dev tools: Git & GitHub, VS Code",
        "Database: SQL Server, MongoDB"
      ]
    },
    {
      title: { vi: "Tư duy & Phương pháp", en: "Thinking & Methodology" },
      items: [
        "Tư duy logic và giải quyết vấn đề",
        "Phân tích hành vi và nhu cầu người dùng",
        "Thích nghi nhanh với công nghệ mới",
        "Chú trọng chi tiết và trải nghiệm",
        "Làm việc độc lập và nhóm"
      ]
    },
    {
      title: { vi: "Định hướng phát triển", en: "Future Orientation" },
      items: [
        "Nghiên cứu chuyên sâu UX Research & Usability Testing",
        "Nâng cao thiết kế hệ thống quy mô vừa/nhỏ",
        "Học hỏi Front-end Frameworks (React, Vue)",
        "Hoàn thiện kỹ năng kết hợp Kỹ thuật - Trải nghiệm"
      ]
    }
  ],
  links: { 
    github: "https://github.com/VONGOCNHUY", 
    facebook: "https://facebook.com",
    email: "vongocnhuy.020904@gmail.com",
    phone: "+84 368 578 528",
    address: "Quận 9, TP. Thủ Đức, TP. Hồ Chí Minh"
  }
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-js-essentials-1",
    title: {
      vi: "JavaScript Essentials 1",
      en: "JavaScript Essentials 1"
    },
    issuer: "Cisco Networking Academy",
    date: "11/2025",
    image: "/images/cc3.jpg",
    reflection: {
      vi: "Chứng chỉ này đánh dấu bước đầu tiên của tôi khi tiếp cận JavaScript một cách bài bản. Quá trình học giúp tôi tự tin hơn với tư duy lập trình và tạo động lực để tiếp tục theo đuổi con đường phát triển web lâu dài.",
      en: "This certification marks my first structured step into JavaScript, helping me gain confidence and motivation to continue my web development journey."
    }
  },

  {
    id: "cert-js-essentials-2",
    title: {
      vi: "JavaScript Essentials 2",
      en: "JavaScript Essentials 2"
    },
    issuer: "Cisco Networking Academy",
    date: "12/2025",
    image: "/images/cc2.jpg",
    reflection: {
      vi: "Sau khi hoàn thành JavaScript Essentials 2, tôi cảm nhận rõ sự tiến bộ trong cách tư duy và tổ chức mã nguồn. Chứng chỉ này giúp tôi nhìn JavaScript không chỉ là cú pháp, mà là một công cụ để giải quyết vấn đề.",
      en: "Completing this certificate helped me think more structurally about JavaScript and view it as a problem-solving tool rather than just a programming language."
    }
  },

  {
    id: "cert-networking-basics",
    title: {
      vi: "Networking Basics",
      en: "Networking Basics"
    },
    issuer: "Cisco Networking Academy",
    date: "11/2025",
    image: "/images/cc1.jpg",
    reflection: {
      vi: "Chứng chỉ Networking Basics giúp tôi hiểu rõ hơn nền tảng hoạt động của mạng máy tính. Điều này rất hữu ích khi học lập trình, vì tôi có cái nhìn tổng thể hơn về cách ứng dụng giao tiếp và vận hành trong môi trường mạng.",
      en: "This certification gave me a clearer understanding of networking fundamentals, allowing me to better grasp how applications communicate in real-world environments."
    }
  }
];




export const BLOG_POSTS: BlogPost[] = [
  {
    id: "java-data-structures-basics",
    title: {
      vi: "Cấu trúc dữ liệu cơ bản trong Java và ứng dụng thực tế",
      en: "Basic Data Structures in Java and Practical Applications"
    },
    excerpt: {
      vi: "Giới thiệu các cấu trúc dữ liệu phổ biến trong Java như Array, ArrayList, LinkedList, Stack và Queue, kèm theo phân tích độ phức tạp và tình huống sử dụng.",
      en: "An overview of common Java data structures including Array, ArrayList, LinkedList, Stack, and Queue, with complexity analysis and usage scenarios."
    },
    date: "2024-08-01",
    category: "Java",
    readTime: { vi: "9 phút", en: "9 min" },
    image: IMAGES.blog1,
    content: BLOG_1_CONTENT
  }
    ,
  {
    id: "oop-java-role-software-design",
    title: { vi: "Lập trình hướng đối tượng trong Java và vai trò trong thiết kế phần mềm", en: "Object-Oriented Programming in Java and Its Role in Software Design" },
    excerpt: { vi: "Trình bày các khái niệm nền tảng của OOP trong Java, phân tích ảnh hưởng của các nguyên tắc OOP lên thiết kế hệ thống và minh họa bằng ví dụ mã ngắn gọn.", en: "Overview of core OOP concepts in Java, their effect on system design, with concise code examples." },
    date: "2025-08-27",
    category: "Java",
    readTime: { vi: "9 phút", en: "9 min" },
    image: IMAGES.blog2,
    content: BLOG_2_CONTENT
  },

  {
    id: "javascript-dom-manipulation-basics",
    title: {
      vi: "DOM và xử lý sự kiện trong JavaScript",
      en: "DOM and Event Handling in JavaScript"
    },
    excerpt: {
      vi: "Giới thiệu về Document Object Model (DOM), cách truy xuất, thay đổi nội dung và thuộc tính phần tử HTML bằng JavaScript.",
      en: "Introduction to the Document Object Model (DOM), how to access and modify HTML elements and attributes using JavaScript."
    },
    date: "2025-12-25",
    category: "JavaScript",
    readTime: { vi: "7 phút", en: "7 min" },
    image: IMAGES.blog7,
    content: BLOG_7_CONTENT
  },

  {
    id: "java-multithreading-common-issues",
    title: {
      vi: "Xử lý đa luồng trong Java và các vấn đề thường gặp",
      en: "Java Multithreading and Common Issues"
    },
    excerpt: {
      vi: "Giới thiệu đa luồng trong Java, cách sử dụng Thread và Runnable, phân tích race condition và giải pháp đồng bộ hóa.",
      en: "Introduction to Java multithreading, Thread vs Runnable, race condition, and synchronization techniques."
    },
    date: "2025-09-09",
    category: "Java",
    readTime: { vi: "8 phút", en: "8 min" },
    image: IMAGES.blog3,
    content: BLOG_3_CONTENT
  },

  {
    id: "java-basic-algorithms-sorting-searching",
    title: {
      vi: "Các thuật toán sắp xếp và tìm kiếm cơ bản trong Java",
      en: "Basic Sorting and Searching Algorithms in Java"
    },
    excerpt: {
      vi: "Trình bày các thuật toán sắp xếp phổ biến như Bubble Sort, Selection Sort, Quick Sort và thuật toán tìm kiếm nhị phân, kèm theo phân tích độ phức tạp Big-O.",
      en: "Overview of common sorting algorithms (Bubble, Selection, Quick Sort) and Binary Search with Big-O complexity analysis."
    },
    date: "2025-09-21",
    category: "Java",
    readTime: { vi: "9 phút", en: "9 min" },
    image: IMAGES.blog4,
    content: BLOG_4_CONTENT
  },

  {
  id: "javascript-overview-modern-web",
  title: {
    vi: "JavaScript trong phát triển web hiện đại",
    en: "JavaScript in Modern Web Development"
  },
  excerpt: {
    vi: "Tổng quan về JavaScript, vai trò trong xử lý phía client và ảnh hưởng đến trải nghiệm người dùng (UX) trong ứng dụng web.",
    en: "Overview of JavaScript, its role in client-side processing, and its impact on user experience (UX) in web applications."
  },
  date: "2025-10-02",
  category: "JavaScript",
  readTime: { vi: "8 phút", en: "8 min" },
  image: IMAGES.blog5,
  content: BLOG_5_CONTENT
  },

  {
  id: "javascript-asynchronous-programming",
  title: {
    vi: "Lập trình bất đồng bộ trong JavaScript: Callback, Promise và Async/Await",
    en: "Asynchronous Programming in JavaScript: Callback, Promise, and Async/Await"
  },
  excerpt: {
    vi: "Trình bày cơ chế bất đồng bộ trong JavaScript, bao gồm Event Loop, Callback, Promise và Async/Await, cùng với mối liên hệ đến trải nghiệm người dùng (UX).",
    en: "An overview of asynchronous programming in JavaScript, covering the event loop, callbacks, promises, async/await, and their impact on user experience."
  },
  date: "2025-10-11",
  category: "JavaScript",
  readTime: { vi: "9 phút", en: "9 min" },
  image: IMAGES.blog6,
  content: BLOG_6_CONTENT
},

{
  id: "javascript-algorithmic-thinking-loops-recursion",
  title: {
    vi: "Tư duy thuật toán: Vòng lặp và Đệ quy trong JavaScript",
    en: "Algorithmic Thinking: Loops and Recursion in JavaScript"
  },
  excerpt: {
    vi: "Khám phá nền tảng tư duy thuật toán thông qua vòng lặp và đệ quy, giúp tối ưu hóa hiệu năng code và cải thiện trải nghiệm người dùng.",
    en: "Explore the foundations of algorithmic thinking through loops and recursion to optimize code performance and enhance user experience."
  },
  date: "2025-10-30", 
  category: "JavaScript",
  readTime: { vi: "7 phút", en: "7 min" },
  image: IMAGES.blog8,
  content: BLOG_8_CONTENT
},

{
  id: "javascript-code-and-ux-impact",
  title: {
    vi: "Code & UX: Khi lập trình giao thoa với trải nghiệm người dùng",
    en: "Code & UX: Where Programming Meets User Experience"
  },
  excerpt: {
    vi: "Khám phá mối quan hệ mật thiết giữa chất lượng mã nguồn và cảm giác của người dùng: từ lỗi chặn UI trong JavaScript đến tư duy tối ưu hóa vì con người.",
    en: "Explore the close relationship between code quality and user feeling: from UI blocking in JavaScript to human-centric optimization thinking."
  },
  date: "2025-11-05",
  category: "Software Design",
  readTime: { vi: "6 phút", en: "6 min" },
  image: IMAGES.blog9,
  content: BLOG_9_CONTENT
}




];

export const UI_STRINGS = {
  navHome: { vi: "Trang Chủ", en: "Home" },
  navBlog: { vi: "Bài viết", en: "Blog" },
  navCert: { vi: "Chứng chỉ", en: "Certs" },
  navContact: { vi: "Liên Hệ", en: "Contact" },
  navSkills: { vi: "Kỹ Năng", en: "Skills" },
  latestPosts: { vi: "Bài Viết Mới", en: "New Posts" },
  viewAll: { vi: "Xem tất cả →", en: "View all →" },
  skillsHeader: { vi: "Kỹ Năng Công Nghệ", en: "Tech Skills" },
  readMore: { vi: "Xem chi tiết", en: "View details" },
  readTimeSuffix: { vi: "phút đọc", en: "min read" },
  backToBlog: { vi: "Quay lại", en: "Back" },
  postNotFound: { vi: "Không tìm thấy nội dung.", en: "Content not found." },
  blogTitle: { vi: "Nhật ký lập trình", en: "Dev Notes" },
  blogSub: { vi: "Nơi mình ghi chép lại quá trình học tập, tìm hiểu về lập trình Java, JavaScript và các thuật toán cơ bản, đồng thời chia sẻ góc nhìn cá nhân về tư duy thiết kế và trải nghiệm người dùng trong phát triển phần mềm.", en: "Documenting my learning journey in Java, JavaScript, and algorithms, with a focus on design thinking and user experience." },
  certTitle: { vi: "Chứng chỉ", en: "Certifications" },
  certSub: { vi: "Các chứng chỉ mình đã nhận được trong quá trình học tập của mình.", en: "Professional software engineering certifications." },
  contactTitle: { vi: "Hãy cùng kết nối.", en: "Let's connect." },
  contactSub: { 
    vi: "Mọi ý kiến đóng góp đều là nguồn động lực giúp tôi hoàn thiện hơn trong quá trình học tập và phát triển.", 
    en: "All contributions are the motivation that helps me improve during my learning and development process." 
  },
  authorBio: { vi: "Software Engineering Student.", en: "Software Engineering Student." },
  footerCredit: { vi: "© 2025 Võ Ngọc Như Ý.", en: "© 2025 Võ Ngọc Như Ý." }
};
