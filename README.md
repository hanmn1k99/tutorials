<div align="center">
  <img src="https://img.shields.io/badge/AAS_Academy-v2.0-blue?style=for-the-badge" alt="AAS Academy Badge" />
  <h1>Hệ Thống Đào Tạo Nội Bộ AAS (Videobook)</h1>
  <p>Nền tảng xem video hướng dẫn chuyên nghiệp, cấu trúc dạng kịch bản bài học (giống Gitbook).</p>
</div>

<hr />

## 🌟 Điểm nổi bật
- **Giao diện hiện đại (Modern UI):** Thiết kế tối giản, chuyên nghiệp theo phong cách doanh nghiệp (Zalo, AAS).
- **Trải nghiệm học tập liền mạch:** Chuyển đổi giữa các bài học, xem video mượt mà không bị gián đoạn.
- **Dữ liệu linh hoạt:** Dễ dàng thay đổi kịch bản, thêm khóa học chỉ bằng cách sửa duy nhất file `content.json`.
- **Tối ưu hóa hệ thống:** Tốc độ load cực nhanh nhờ Next.js 14, hỗ trợ Build Standalone cho Docker.

---

## 🚀 Hướng Dẫn Cài Đặt Lên Server Ubuntu (Môi Trường Production)

Để hệ thống hoạt động ổn định và dễ quản lý nhất, chúng ta sẽ cài đặt thủ công thông qua Docker.

### 1. Chuẩn bị Server
- Đảm bảo Server Ubuntu của bạn đã cài đặt sẵn **Docker**, **Docker Compose** và **Git**.

### 2. Tải Mã Nguồn
Tạo một thư mục chứa hệ thống và tải code từ Github về:
```bash
mkdir -p /opt/aas-academy
cd /opt/aas-academy

# Tải code vào thư mục con tên là "app"
git clone https://github.com/hanmn1k99/tutorials.git app
```

### 3. Cấu Hình Khởi Chạy (Docker Compose)
Tại thư mục gốc `/opt/aas-academy`, tạo file quản lý tiến trình `docker-compose.yml`:
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
    container_name: aas-academy-app
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
Mỗi khi bạn sửa dữ liệu khóa học hoặc update code, chỉ cần chạy cụm lệnh sau để cập nhật lại hệ thống mà không làm chết Server:
```bash
cd /opt/aas-academy/app
git pull origin main
cd ..
sudo docker-compose up -d --build
```

---

## 🛠 Hướng Dẫn Dành Cho Lập Trình Viên (Local Development)

Nếu bạn muốn mở source code trên máy tính cá nhân để tự chỉnh sửa:
```bash
# 1. Tải thư viện
npm install

# 2. Chạy server mô phỏng
npm run dev
```
Trang web sẽ chạy tại `http://localhost:3000`.

---
*Phát triển bởi Đội ngũ IT - Phiên bản 2.0*
