# Cấu trúc thư mục dự án

Dưới đây là mô tả chi tiết về cấu trúc các thư mục và file trong dự án:

```
.
├── App.tsx                # Thành phần React chính, định tuyến và layout toàn bộ app
├── constants.tsx          # Dữ liệu tĩnh: profile, blog, chứng chỉ, chuỗi giao diện...
├── index.css              # File CSS gốc, cấu hình style toàn cục
├── index.html             # File HTML gốc, mount ứng dụng React
├── index.tsx              # Entry point khởi tạo React app
├── metadata.json          # Metadata cho dự án (nếu có)
├── package.json           # Quản lý dependencies, script npm
├── README.md              # Tài liệu mô tả dự án
├── tsconfig.json          # Cấu hình TypeScript
├── types.ts               # Định nghĩa các kiểu dữ liệu TypeScript
├── vite.config.ts         # Cấu hình Vite (dev server, build)
├── data/                  # Dữ liệu tĩnh
│   ├── images.ts          # Đường dẫn các ảnh sử dụng trong app
│   └── posts/             # Thư mục chứa từng bài viết blog (dạng file TypeScript)
│       ├── blog-1.ts
│       ├── blog-2.ts
│       ├── ...
│       └── blog-9.ts
├── public/                # Tài nguyên tĩnh (ảnh, favicon...)
│   └── images/            # Ảnh sử dụng trong blog, portfolio
│       ├── blog3.1
│       └── README.md
```

**Giải thích:**
- Thư mục gốc chứa các file cấu hình, entry point, và các file chính của app React.
- `data/`: Chứa dữ liệu tĩnh như hình ảnh, bài viết blog (mỗi bài là một file riêng).
- `public/`: Chứa tài nguyên tĩnh, ảnh, favicon, các file không qua xử lý bởi Vite.
- `types.ts`: Định nghĩa các kiểu dữ liệu giúp code an toàn, rõ ràng hơn.
- `constants.tsx`: Tập trung các dữ liệu tĩnh, giúp dễ quản lý và mở rộng.
- `App.tsx`: Thành phần React gốc, quản lý định tuyến và layout tổng thể.

> Dự án sử dụng React + TypeScript + Vite, tổ chức rõ ràng, dễ mở rộng và bảo trì.
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/temp/1

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
