# Videobook (Video Tutorials Platform)

Một nền tảng xem video hướng dẫn giống Gitbook, được xây dựng bằng **Next.js** và **Tailwind CSS**.

## Tính năng
- Thanh điều hướng (Sidebar) với các khóa học và bài học.
- Nút chuyển bài (Trước/Tiếp theo).
- Xem video Youtube/HTML5 dễ dàng.

## Hướng dẫn Triển khai Thủ công trên Ubuntu Server (Sử dụng Docker)

Phần này hướng dẫn bạn cách tự tạo thư mục, tự cấu hình file chạy Docker để có thể hoàn toàn kiểm soát dự án của mình thay vì dùng cấu hình làm sẵn.

### Yêu cầu
- Máy chủ Ubuntu đã cài đặt **Docker** và **Docker Compose**.
- Đã cài đặt **Git**.

### Các bước thực hiện chi tiết

**Bước 1: Tạo thư mục làm việc trên Server**
Đầu tiên, hãy tạo một thư mục riêng cho dự án và di chuyển vào đó:
```bash
mkdir -p /opt/videobook
cd /opt/videobook
```

**Bước 2: Lấy mã nguồn từ Github**
Tải mã nguồn về bên trong thư mục vừa tạo (ví dụ clone vào thư mục `app`):
```bash
git clone https://github.com/hanmn1k99/tutorials.git app
```

**Bước 3: Tự tạo cấu hình docker-compose.yml**
Tạo file `docker-compose.yml` để cấu hình port và quản lý container theo ý bạn:
```bash
nano docker-compose.yml
```
Dán nội dung sau vào file (bạn có thể thay đổi port `3000:3000` thành port khác như `8080:3000` nếu muốn đổi cổng truy cập):
```yaml
version: '3.8'
services:
  videobook-web:
    build:
      context: ./app
      dockerfile: Dockerfile
    container_name: videobook-app
    ports:
      - "3000:3000" # Sửa số 3000 đầu tiên thành port bạn muốn
    restart: unless-stopped
    environment:
      - NODE_ENV=production
```
Lưu lại (Nhấn `Ctrl+O`, `Enter`, rồi `Ctrl+X`).

**Bước 4: Khởi chạy dự án**
Chạy lệnh sau để Docker bắt đầu build mã nguồn và chạy ứng dụng:
```bash
sudo docker-compose up -d --build
```

**Bước 5: Kiểm tra kết quả**
Xem log để đảm bảo app đang chạy tốt:
```bash
sudo docker-compose logs -f
```
Bây giờ, bạn có thể truy cập `http://<IP-SERVER>:<PORT-BẠN-ĐẶT>` để xem kết quả.

**Khi có cập nhật code mới:**
Bạn chỉ cần vào thư mục `app`, kéo code mới về và build lại hệ thống:
```bash
cd /opt/videobook/app
git pull origin main
cd ..
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
