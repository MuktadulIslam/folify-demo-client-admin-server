# Quick Start Guide - LMS Backend

## Prerequisites
- Node.js (v16 or higher)
- npm or yarn

## Setup Instructions

### 1. Install Dependencies
```bash
cd lms-backend
npm install
```

### 2. Start the Server
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## Quick Test

### Using cURL:

1. **Login** (get authentication token):
```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"password": "mmm"}' \
  -c cookies.txt -v
```

2. **Get Students List**:
```bash
curl -X GET "http://localhost:3000/student" \
  -b cookies.txt
```

3. **Get Specific Student**:
```bash
curl -X GET "http://localhost:3000/student/STU001" \
  -b cookies.txt
```

4. **Create Student** (mock - will log to console):
```bash
curl -X POST http://localhost:3000/student/create \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{
    "name": "New Student",
    "email": "newstudent@example.com",
    "phone": "+8801712345678",
    "status": "Active"
  }'
```

### Using Postman or Thunder Client:

1. **Login Request**:
   - Method: POST
   - URL: `http://localhost:3000/auth/login`
   - Body (JSON):
     ```json
     {
       "password": "mmm"
     }
     ```
   - The response will set a cookie automatically

2. **Make Authenticated Requests**:
   - All subsequent requests will automatically include the auth cookie
   - Example: GET `http://localhost:3000/student`

## Available Endpoints

### Auth
- POST `/auth/login` - Login with password "mmm"
- POST `/auth/logout` - Logout

### Students (all require auth)
- GET `/student` - List all students (with filters)
- POST `/student/create` - Create student
- GET `/student/:id` - Get student by ID
- PUT `/student/:id/update` - Update student
- DELETE `/student/:id/delete` - Delete student

### Admins (all require auth)
- GET `/admin` - List all admins
- POST `/admin/create` - Create admin
- GET `/admin/:id` - Get admin by ID
- PUT `/admin/:id/update` - Update admin
- DELETE `/admin/:id/delete` - Delete admin

### Courses (all require auth)
- GET `/course` - List all courses
- POST `/course/create` - Create course
- GET `/course/:id` - Get course by ID
- PUT `/course/:id/update` - Update course

### More Endpoints
See README.md for complete API documentation including:
- Batches
- Course Streams
- Branches
- Admissions
- Payments
- Coupons
- Blogs

## Important Notes

1. **Authentication Required**: All API endpoints (except login) require a valid JWT token
2. **Token Validity**: 12 hours
3. **Static Password**: "mmm"
4. **Mock Operations**: CREATE, UPDATE, DELETE operations only log to console and return success messages
5. **Real Data**: GET operations return real data from JSON files

## Troubleshooting

### If you get "Authentication token required":
- Make sure you've logged in first
- Check that cookies are being sent with requests
- Token might have expired (valid for 12 hours)

### If you get validation errors:
- Check the request body matches the required schema
- See validators in `src/validators/index.ts` for exact requirements

## File Structure

```
lms-backend/
├── src/
│   ├── controllers/     # Business logic
│   ├── data/           # Mock data (25+ records per table)
│   ├── middleware/     # Auth & validation
│   ├── routes/         # API routes
│   ├── types/          # TypeScript types
│   ├── validators/     # Zod schemas
│   └── server.ts       # Main app
├── .env                # Configuration
├── package.json
├── tsconfig.json
└── README.md          # Full documentation
```

## Next Steps

1. Check `README.md` for complete API documentation
2. Review `src/data/mockData.json` to see available data
3. Test different endpoints using the examples above
4. Check console logs to see mock operations being logged

Enjoy using the LMS Backend API! 🚀