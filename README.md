<div align="center">
  <img src="https://img.shields.io/badge/AAS_Academy-v2.0-blue?style=for-the-badge" alt="AAS Academy Badge" />
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" />
  
  <h1>Hệ Thống Đào Tạo Nội Bộ (Videobook)</h1>
  <p>Nền tảng xem video hướng dẫn chuyên nghiệp, cấu trúc dạng kịch bản bài học (giống Gitbook).</p>
</div>

<hr />

## 🌟 Điểm nổi bật
- **Giao diện hiện đại (Modern UI):** Thiết kế tối giản, chuyên nghiệp theo phong cách doanh nghiệp.
- **Tự do cấu hình Thương hiệu:** Dễ dàng đổi tên ứng dụng, slogan, và danh sách khóa học mà không cần đụng vào code giao diện (chỉ cần sửa file `src/data/content.json`).
- **Trải nghiệm học tập liền mạch:** Chuyển đổi giữa các bài học, xem video mượt mà không bị gián đoạn.
- **Tối ưu hóa hệ thống:** Tốc độ load cực nhanh nhờ Next.js 14, hỗ trợ Build Standalone cho Docker.

## ⚙️ Tùy Chỉnh Thương Hiệu & Dữ Liệu
Hệ thống được thiết kế để bạn tự do đổi tên thương hiệu. Hãy mở file `src/data/content.json` và sửa phần `siteConfig`:
```json
{
  "siteConfig": {
    "title": "Tên Công Ty Của Bạn",
    "versionBadge": "v2.0",
    "headerSubtitle": "Hệ thống Đào tạo Nội bộ",
    "welcomeTitle": "Chào mừng đến với hệ thống đào tạo",
    "welcomeSubtitle": "Lựa chọn khóa học bên dưới..."
  },
  "courses": [ ... ]
}
```

---

## 🚀 Hướng Dẫn Cài Đặt Lên Server Ubuntu (Môi Trường Production)

Để hệ thống hoạt động ổn định và dễ quản lý nhất, chúng ta sẽ cài đặt thủ công thông qua Docker.

### 1. Chuẩn bị Server
- Đảm bảo Server Ubuntu của bạn đã cài đặt sẵn **Docker**, **Docker Compose** và **Git**.

### 2. Tải Mã Nguồn
Tạo một thư mục chứa hệ thống và tải code từ Github về:
```bash
mkdir -p /opt/videobook
cd /opt/videobook

# Tải code vào thư mục con tên là "app"
git clone https://github.com/hanmn1k99/tutorials.git app
```

### 3. Cấu Hình Khởi Chạy (Docker Compose)
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

### 4. Bắt Đầu Khởi Chạy
Chỉ bằng 1 dòng lệnh, Docker sẽ tự động đóng gói ứng dụng và chạy ngầm:
```bash
sudo docker-compose up -d --build
```

**Thành công!** Bạn có thể truy cập hệ thống qua đường dẫn: `http://<IP-SERVER-CỦA-BẠN>:8080`

### 🔄 Cập nhật phiên bản mới
Mỗi khi bạn sửa cấu hình thương hiệu hoặc nội dung trong file `content.json`, hãy push code lên Github và chạy lệnh sau trên server để cập nhật:
```bash
cd /opt/videobook/app
git pull origin main
cd ..
sudo docker-compose up -d --build
```
