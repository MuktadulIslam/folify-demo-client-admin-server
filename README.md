# LMS Backend API

A comprehensive Learning Management System (LMS) backend API built with Node.js, Express, and TypeScript.

## Features

- ✅ **Authentication**: JWT-based authentication with secure HTTP-only cookies (12-hour validity)
- ✅ **Authorization**: All API endpoints protected with auth middleware
- ✅ **Validation**: Request validation using Zod library
- ✅ **Mock Data**: Pre-populated JSON database with 25+ records per table
- ✅ **TypeScript**: Fully typed codebase for better development experience
- ✅ **RESTful API**: Clean and organized API structure

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Validation**: Zod
- **Authentication**: JWT (jsonwebtoken)
- **Cookie Parser**: cookie-parser

## Project Structure

```
lms-backend/
├── src/
│   ├── controllers/        # Request handlers
│   │   ├── auth.controller.ts
│   │   ├── student.controller.ts
│   │   ├── admin.controller.ts
│   │   └── other.controller.ts
│   ├── data/              # Mock JSON data
│   │   ├── mockData.json
│   │   └── additionalData.json
│   ├── middleware/        # Custom middleware
│   │   ├── auth.middleware.ts
│   │   └── validation.middleware.ts
│   ├── routes/           # API routes
│   │   ├── auth.routes.ts
│   │   ├── student.routes.ts
│   │   ├── admin.routes.ts
│   │   └── api.routes.ts
│   ├── types/            # TypeScript type definitions
│   │   └── index.ts
│   ├── validators/       # Zod validation schemas
│   │   └── index.ts
│   └── server.ts         # Main application file
├── .env                  # Environment variables
├── .gitignore
├── package.json
└── tsconfig.json
```

## Installation

1. **Navigate to the project directory:**
   ```bash
   cd lms-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   
   The `.env` file is already created with default values:
   ```
   PORT=3000
   JWT_SECRET=your_super_secret_jwt_key_change_in_production
   NODE_ENV=development
   STATIC_PASSWORD=mmm
   ```

## Running the Application

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Build for Production:
```bash
npm run build
npm start
```

## API Documentation

### Base URL
```
http://localhost:3000
```

### Authentication

#### Login
- **POST** `/auth/login`
- **Body**:
  ```json
  {
    "password": "mmm"
  }
  ```
- **Response**: Sets HTTP-only cookie with JWT token (valid for 12 hours)

#### Logout
- **POST** `/auth/logout`
- **Response**: Clears authentication cookie

---

### Students API

All student endpoints require authentication (valid JWT token in cookie).

#### Get Students (with filtering & pagination)
- **GET** `/student?institute=&district=&status=&search=&page=1&limit=10&sortBy=createdAt&sortOrder=desc`

#### Create Student
- **POST** `/student/create`
- **Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+8801712345678",
    "address": "Dhaka, Bangladesh",
    "district": "Dhaka",
    "status": "Active"
  }
  ```

#### Get Student by ID
- **GET** `/student/:id`

#### Update Student
- **PUT** `/student/:id/update`
- **Body**: (any student fields to update)

#### Delete Student
- **DELETE** `/student/:id/delete`

---

### Admin API

#### Get Admins
- **GET** `/admin?search=&status=&type=&page=1&limit=10&sortBy=createdAt&sortOrder=desc`

#### Create Admin
- **POST** `/admin/create`
- **Body**:
  ```json
  {
    "name": "Admin Name",
    "type": "Admin",
    "email": "admin@lms.com",
    "username": "adminuser",
    "password": "password123",
    "status": "Active"
  }
  ```

#### Get Admin by ID
- **GET** `/admin/:id`

#### Update Admin
- **PUT** `/admin/:id/update`

#### Delete Admin
- **DELETE** `/admin/:id/delete`

---

### Course API

#### Get Courses
- **GET** `/course?isAvailableInWebsite=&courseCategory=&type=&status=&limit=10&page=1&search=`

#### Create Course
- **POST** `/course/create`
- **Body**:
  ```json
  {
    "name": "Course Name",
    "slug": "course-slug",
    "shortDescription": "Short description",
    "description": "Full description",
    "type": "Online",
    "courseCategory": "One Time Fee",
    "courseStreamId": "CS001",
    "price": 15000
  }
  ```

#### Get Course by ID
- **GET** `/course/:id`

#### Update Course
- **PUT** `/course/:id/update`

---

### Batch API

#### Get Batches for a Course
- **GET** `/course/:id/batches?branch=&search=`

#### Create Batch
- **POST** `/course/:id/batches/create`
- **Body**:
  ```json
  {
    "name": "Batch 2024-A",
    "description": "First batch",
    "branchId": "BRN001"
  }
  ```

#### Update Batch
- **PUT** `/course/:courseId/batches/:batchId/update`

#### Delete Batch
- **DELETE** `/course/:courseId/batches/:batchId/delete`

---

### Course Stream API

#### Get Course Streams
- **GET** `/course-stream?search=`

#### Create Course Stream
- **POST** `/course-stream/create`
- **Body**:
  ```json
  {
    "name": "Web Development",
    "index": 1,
    "icon": "computer"
  }
  ```

#### Update Course Stream
- **PUT** `/course-stream/:id/update`

---

### Branch API

#### Get Branches
- **GET** `/branch?search=&page=1&limit=10`

#### Create Branch
- **POST** `/branch/create`
- **Body**:
  ```json
  {
    "name": "Dhaka Main Branch",
    "slug": "dhaka-main",
    "phone": ["+8801712345678"],
    "address": "Dhaka, Bangladesh"
  }
  ```

#### Update Branch
- **PUT** `/branch/:id/update`

#### Delete Branch
- **DELETE** `/branch/:id/delete`

---

### Admission API

#### Get Admissions
- **GET** `/admission?search=&status=&course=&branch=&page=1&limit=10`

#### Create Admission
- **POST** `/admission/create`
- **Body**:
  ```json
  {
    "studentId": "STU001",
    "courseId": "CRS001",
    "branchId": "BRN001",
    "price": 15000,
    "totalAmount": 15000
  }
  ```

#### Get Admission by ID
- **GET** `/admission/:id`

#### Update Admission
- **PUT** `/admission/:id/update`

#### Delete Admission
- **DELETE** `/admission/:id/delete`

---

### Payment API

#### Get Payments
- **GET** `/payment?search=&status=&course=&page=1&limit=10`

---

### Coupon API

#### Get Coupons
- **GET** `/coupon?search=&discountType=&page=1&limit=10`

#### Create Coupon
- **POST** `/coupon/create`
- **Body**:
  ```json
  {
    "name": "SUMMER2024",
    "discountType": "Percentage",
    "discountAmount": 20,
    "issuedAt": "2024-01-01T00:00:00.000Z",
    "expiredAt": "2024-12-31T23:59:59.000Z",
    "usageLimit": {
      "globalLimit": 100,
      "userLimit": 1
    }
  }
  ```

#### Update Coupon
- **PUT** `/coupon/:id/update`

#### Delete Coupon
- **DELETE** `/coupon/:id/delete`

---

### Blog API

#### Get Blogs
- **GET** `/blog?search=&status=`

#### Create Blog
- **POST** `/blog/create`
- **Body**:
  ```json
  {
    "title": "Blog Title",
    "slug": "blog-slug",
    "description": "Blog content",
    "categoryId": "BLOGCAT001",
    "teacherId": "ADM003",
    "status": "published"
  }
  ```

#### Update Blog
- **PUT** `/blog/:id/update`

#### Delete Blog
- **DELETE** `/blog/:id/delete`

---

## Important Notes

### Mock Behavior

This is a mock API. All **CREATE**, **UPDATE**, and **DELETE** operations:
- ✅ Log the request data to console
- ✅ Validate the request using Zod
- ✅ Return success responses
- ❌ **Do NOT** modify the actual JSON files

### Authentication

- **Static Password**: `mmm`
- **Token Validity**: 12 hours
- **Storage**: HTTP-only secure cookies
- **Middleware**: All routes (except `/auth/login`) require valid JWT token

### Data Files

Mock data is stored in:
- `/src/data/mockData.json` - Contains students, admins, branches, and course streams (25+ entries each)
- `/src/data/additionalData.json` - Contains courses, batches, coupons, admissions, and blogs

## Testing with cURL

### 1. Login
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"password": "mmm"}' \
  -c cookies.txt
```

### 2. Get Students (requires authentication)
```bash
curl -X GET "http://localhost:3000/student?page=1&limit=10" \
  -b cookies.txt
```

### 3. Create Student
```bash
curl -X POST http://localhost:3000/student/create \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{
    "name": "Test Student",
    "email": "test@example.com",
    "status": "Active"
  }'
```

## Testing with Postman

1. **Login**: POST to `/auth/login` with `{"password": "mmm"}`
2. **Enable Cookie Handling**: Postman will automatically handle cookies
3. **Make Authenticated Requests**: All subsequent requests will include the auth cookie

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 3000 |
| JWT_SECRET | Secret key for JWT signing | (provided in .env) |
| NODE_ENV | Environment mode | development |
| STATIC_PASSWORD | Login password | mmm |

## Development

The project uses `ts-node-dev` for development, which provides:
- Hot reloading on file changes
- TypeScript compilation on-the-fly
- Better error messages

## License

ISC

## Support

For issues or questions, please check the code comments or console logs for debugging information.