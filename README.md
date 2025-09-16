# 🚀 SAKDEE Project

โปรเจกต์นี้ประกอบไปด้วย 2 ส่วนหลัก:
- **Admin (Frontend)**: React + Vite + Tailwind + React Router
- **Backend (API Server)**: Node.js + Express + Prisma (PostgreSQL)

---

## 📦 โครงสร้างโปรเจกต์
SAKDEE/
├── Admin/ # React (Vite) Frontend
│ ├── src/ # Source code React
│ ├── public/ # Static files
│ └── .env # Frontend environment variables
│
├── Backend/ # Node.js Backend
│ ├── prisma/ # Prisma schema + migrations
│ ├── Controllers/ # Business logic
│ ├── Routers/ # API routes
│ ├── Server/ # Express app entry
│ └── .env # Backend environment variables

yaml
คัดลอกโค้ด

---

## ⚙️ เทคโนโลยีที่ใช้
### 🔹 Frontend (Admin)
- React 19 + Vite
- TailwindCSS
- React Router v7
- dotenv

### 🔹 Backend
- Express.js
- Prisma ORM
- PostgreSQL
- JWT (jsonwebtoken)
- Bcrypt
- Multer (อัปโหลดไฟล์)
- Cloudinary (เก็บไฟล์รูปภาพ)
- Nodemailer
- Zod (validate ข้อมูล)

---

## 🚀 วิธีติดตั้งและใช้งาน

### 1. Clone โปรเจกต์
```bash
git clone https://github.com/<your-username>/SAKDEE.git
cd SAKDEE
2. ติดตั้ง Frontend (Admin)
bash
คัดลอกโค้ด
cd Admin
npm install
สร้างไฟล์ .env:

env
คัดลอกโค้ด
VITE_API_BASE_URL=http://localhost:3000
VITE_API_TOKEN=Bearer <your-jwt-token>
รันเซิร์ฟเวอร์:

bash
คัดลอกโค้ด
npm run dev
Frontend จะรันที่ 👉 http://localhost:5173

3. ติดตั้ง Backend
bash
คัดลอกโค้ด
cd ../Backend
npm install
สร้างไฟล์ .env:

env
คัดลอกโค้ด
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/sakdee"
JWT_SECRET="your-secret-key"
CLOUDINARY_CLOUD_NAME="xxx"
CLOUDINARY_API_KEY="xxx"
CLOUDINARY_API_SECRET="xxx"
EMAIL_USER="xxx"
EMAIL_PASS="xxx"
รัน Prisma migration:

bash
คัดลอกโค้ด
npx prisma migrate dev
รัน Backend:

bash
คัดลอกโค้ด
npm run dev
Backend จะรันที่ 👉 http://localhost:3000

📡 API Endpoints (ตัวอย่าง)
POST /api/users → สมัครสมาชิก

POST /api/users/login → ล็อกอิน

GET /api/climate?city=Bangkok → ข้อมูลสภาพอากาศ

POST /api/news → เพิ่มข่าว

POST /api/tips → เพิ่มคำแนะนำ

POST /api/shops → เพิ่มร้านซักอบรีด

DELETE /api/users/:id → ลบผู้ใช้

🗄 Prisma Schema (สรุป)
User → เก็บข้อมูลผู้ใช้ (มีความสัมพันธ์กับ Climate)

Climate → เก็บข้อมูลสภาพอากาศ

News → ข่าว

Tips → เคล็ดลับ/คำแนะนำ

LaundryShop → ร้านซักอบรีด

Machine → เครื่องซัก/อบ

Image → เก็บรูปภาพ (เชื่อมกับ News และ Tips)

👨‍💻 Developer
Author: คุณ

Database: PostgreSQL

Backend: Node.js + Express + Prisma

Frontend: React + Vite + Tailwind
