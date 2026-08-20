<div align="center">
  <img src="https://img.shields.io/badge/AAS_Academy-Next.js_App-blue?style=for-the-badge" alt="AAS Academy Badge" />
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  
  <h1>Hệ Thống Đào Tạo Nội Bộ (Videobook)</h1>
  <p>Nền tảng xem video hướng dẫn chuyên nghiệp, cấu trúc dạng kịch bản bài học (giống Gitbook).</p>
</div>

<hr />

## 🌟 Điểm nổi bật
- **Giao diện hiện đại (Modern UI):** Thiết kế tối giản, chuyên nghiệp theo phong cách doanh nghiệp.
- **Dữ liệu tách biệt hoàn toàn:** Cấu hình Thương hiệu và Dữ liệu Khóa học được tách riêng biệt ở thư mục gốc giúp bạn dễ dàng quản lý mà không sợ chạm vào Code.
- **Trải nghiệm học tập liền mạch:** Chuyển đổi giữa các bài học, xem video mượt mà không bị gián đoạn.
- **Tối ưu hóa hệ thống:** Tốc độ load cực nhanh nhờ Next.js 14, hỗ trợ Build Standalone cho Docker.

---

## ⚙️ Tùy Chỉnh Hệ Thống

Hệ thống được thiết kế để bạn tự do đổi tên thương hiệu và thêm bớt khóa học. Tất cả những gì bạn cần quan tâm là 2 file nằm ở **thư mục gốc**:

### 1. File `config.json` (Cấu hình Thương Hiệu)
Mở file `config.json` ra để đổi Tên công ty, Slogan và Logo.
```json
{
  "siteName": "Tên Công Ty Của Bạn",
  "logoUrl": "/logo-cong-ty.png", 
  "versionBadge": "",
  "headerSubtitle": "Hệ thống Đào tạo Nội bộ",
  "welcomeTitle": "Chương trình Hướng dẫn & Đào tạo",
  "welcomeSubtitle": "Lựa chọn các khóa học bên dưới để bắt đầu."
}
```
**Cách đổi Logo:** 
- Đưa file hình ảnh logo của bạn (ví dụ `logo.png`) vào trong thư mục `public`.
- Đổi `"logoUrl": "/logo.png"` (chú ý luôn có dấu `/` ở đầu). Nếu để trống `""`, logo sẽ được ẩn đi.

### 2. File `content.json` (Dữ Liệu Khóa Học)
Mở file `content.json` để thêm khóa học mới, sửa video hoặc tạo các lộ trình học khác nhau. Cấu trúc chuẩn:
```json
{
  "courses": [
    {
      "id": "ma-khoa-hoc",
      "title": "Tên Khóa Học",
      "description": "Mô tả khóa học hiển thị ở trang chủ",
      "modules": [
        {
          "id": "chuong-1",
          "title": "Tên Chương",
          "lessons": [
            {
              "id": "bai-1",
              "title": "Tên Bài Học",
              "videoId": "ID_VIDEO_YOUTUBE",
              "description": "Nội dung tóm tắt dưới Video."
            }
          ]
        }
      ]
    }
  ]
}
```
*(**Mẹo lấy ID Youtube:** Trong link `youtube.com/watch?v=dQw4w9WgXcQ`, thì `dQw4w9WgXcQ` chính là `videoId`)*.

---

## 🚀 Hướng Dẫn Cài Đặt Lên Server Ubuntu (Môi Trường Production)

### Bước 1: Chuẩn bị Server
- Đảm bảo Server Ubuntu của bạn đã cài đặt sẵn **Docker**, **Docker Compose** và **Git**.

### Bước 2: Tải Mã Nguồn
Tạo một thư mục chứa hệ thống và tải code từ Github về:
```bash
mkdir -p /opt/videobook
cd /opt/videobook

# Tải code vào thư mục con tên là "app"
git clone https://github.com/hanmn1k99/tutorials.git app
```

### Bước 3: Cấu Hình Khởi Chạy (Docker Compose)
Tại thư mục gốc `/opt/videobook`, tạo file quản lý tiến trình `docker-compose.yml`:
```bash
nano docker-compose.yml
```
Dán cấu hình sau vào. Bạn có thể thay đổi cổng truy cập (ở đây là `8080`) thành cổng bạn mong muốn:
```yaml
version: '3.8'
services:
  web:
    build:
      context: ./app
      dockerfile: Dockerfile
    container_name: videobook-app
    ports:
      - "8080:3000" # Đổi 8080 thành Port Server bạn muốn mở ra ngoài
    restart: unless-stopped
    environment:
      - NODE_ENV=production
```
*(Nhấn `Ctrl+O` > `Enter` để lưu, sau đó `Ctrl+X` để thoát).*

### Bước 4: Khởi Chạy
Chỉ bằng 1 dòng lệnh, Docker sẽ tự động đóng gói ứng dụng và chạy ngầm:
```bash
sudo docker-compose up -d --build
```

**Hoàn tất!** Bạn có thể truy cập hệ thống qua đường dẫn: `http://<IP-SERVER-CỦA-BẠN>:8080`

### 🔄 Cách Cập Nhật Khi Có Chỉnh Sửa
Mỗi khi bạn đổi tên công ty ở `config.json` hay thêm khóa học mới vào `content.json`, hãy push code lên Github rồi chạy lệnh sau trên server để làm mới:
```bash
cd /opt/videobook/app
git pull origin main
cd ..
sudo docker-compose up -d --build
```

---

## 🛠 Hướng Dẫn Dành Cho Máy Tính Cá Nhân (Local Development)

Nếu bạn muốn chạy thử website trên máy tính của mình trước khi đưa lên Server:
```bash
# 1. Cài đặt thư viện
npm install

# 2. Chạy server mô phỏng
npm run dev
```
Trang web sẽ chạy tại địa chỉ: `http://localhost:3000`.

---
*Bản quyền 2026 - Phát triển trên nền tảng Next.js.*
