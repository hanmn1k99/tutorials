# Videobook (Video Tutorials Platform)

Một nền tảng xem video hướng dẫn giống Gitbook, được xây dựng bằng **Next.js** và **Tailwind CSS**.

## Tính năng
- Thanh điều hướng (Sidebar) với các khóa học và bài học.
- Nút chuyển bài (Trước/Tiếp theo).
- Xem video Youtube/HTML5 dễ dàng.

## Hướng dẫn Triển khai trên Ubuntu Server (Sử dụng Docker)

Dự án này đã được cấu hình sẵn `Dockerfile` và `docker-compose.yml` để bạn dễ dàng triển khai.

### Yêu cầu
- Máy chủ Ubuntu đã cài đặt **Docker** và **Docker Compose**.
- Đã cài đặt **Git**.

### Các bước thực hiện

1. **Clone mã nguồn từ Github về server của bạn:**
   ```bash
   git clone https://github.com/hanmn1k99/tutorials.git
   cd tutorials
   ```

2. **Chạy ứng dụng với Docker Compose:**
   ```bash
   sudo docker-compose up -d --build
   ```

3. **Kiểm tra trạng thái:**
   ```bash
   sudo docker-compose ps
   ```
   Ứng dụng sẽ chạy ở cổng `3000`. Bạn có thể truy cập bằng địa chỉ IP server của bạn: `http://<IP-SERVER>:3000`.

4. **Nếu muốn cập nhật khi có code mới:**
   ```bash
   git pull origin main
   sudo docker-compose up -d --build
   ```

---

## Hướng dẫn Phát triển ở Local (Môi trường máy cá nhân)

1. Cài đặt các gói phụ thuộc:
   ```bash
   npm install
   ```
2. Chạy server ở chế độ phát triển:
   ```bash
   npm run dev
   ```
3. Truy cập `http://localhost:3000`.
