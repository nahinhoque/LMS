## Full Stack Learning Management System (LMS)

#### A MERN-based Learning Management System with Clerk authentication and Stripe payments. Educators upload courses; students enroll, watch content, rate/review, and purchase access online.

### Table of Contents
- #### Purpose & Audience
- #### Project Title & Summary
- #### Installation Prerequisites
- #### Quick Start
- #### Usage Examples
- #### Configuration & Environment
- #### Features & Value
- #### Contributing
- #### License & Authorship
- #### Documentation & Further Reading
- #### Maintenance & Compatibility
- #### Contact & Support
- #### Changelog & Maintenance Notes
- #### Deployment

### Purpose & Audience
- #### A practical, end-to-end example of a full-stack LMS for developers who want to learn, extend, or contribute.
- #### Target users: educators (course creators), students, and admins.

### Project Title & Summary
#### Full Stack Learning Management System (LMS)

- MERN stack with Clerk for authentication
- Stripe sandbox for payments
- Admin/educator workflows for course creation
- Student enrollment, playback, ratings, and reviews
- Deployment-ready structure (Vercel with frontend + backend)

### Installation Prerequisites
- Node.js (LTS) and npm or pnpm
- MongoDB Atlas cluster (or local MongoDB)
- Clerk account (for authentication)
- Stripe sandbox account (for payments)
- Git for version control
- Environment variables (example names; replace with real values):

### Backend

- PORT
- MONGO_URI
- CLERK_FRONTEND_API
- CLERK_API_KEY
- CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET
- STRIPE_SECRET_KEY
- STRIPE_PUBLISHABLE_KEY
- SVIX_WEBHOOK_API_KEY
- JWT_SECRET (or use Clerk tokens)

### Frontend

- REACT_APP_BACKEND_URL
- CLERK_FRONTEND_API
- NEXT_PUBLIC_STRIPE_KEY (or your chosen prefix)

### Quick Start
#### Client (Frontend) Setup

- Create the React project (if not already):
   - npm create vite@latest
- Rename to Client
- Install dependencies:
   - cd Client
   - npm install
- Run frontend (development):
   - npm run dev
- Core packages to add (adjust as needed):
  - npm install react-router-dom
  - npm install tailwindcss postcss autoprefixer
  - npm install youtube iframe or your video package
  - npm install uniqid
  - npm install quill
  - npm install humanized-duration
  - npm install rc-progress
  - npm install react-simple-star-rating
  - Tailwind setup per docs
  - npm install humanized-duration
  - npm install rc-progress
  - npm install react-simple-star-rating
  - Tailwind setup per docs

- Server (Backend) Setup

- Initialize if needed:
  - npm init -y
- Install dependencies:
  - npm install express
  - npm install nodemon
  - npm install dotenv
  - npm install cors
  - npm install cloudinary
  - npm install mongoose
  - npm install multer
  - npm install stripe
  - npm install svix
  - npm install clerk
- Start server (development):
  - npm run server
- package.json scripts (example):
  - "server": "nodemon server.js"
  - "start": "node server.js"

### Run and test
- Ensure MongoDB Atlas connectivity via MONGO_URI
- Verify endpoints with Postman
- Use the frontend routes: /login, /courses, /courses/:id, /dashboard

### Deployment
- Deploy frontend and backend to Vercel (or your host)
- Include vercel.json and environment variables
- Configure Stripe webhooks to point to your backend

### Usage Examples
- Educator flow: create a course, upload video/content, publish
- Student flow: register, browse courses, enroll, watch videos, rate/review
- Payment flow: checkout via Stripe sandbox

#### API examples (Postman):
- GET /api/courses
- POST /api/courses (educator)
- POST /api/enroll (student)
- POST /api/payments/checkout (Stripe session)

#### Frontend routes (React Router):
- /login, /register (Clerk)
- /courses, /courses/:id
- /dashboard, /admin

### Configuration & Environment
- Backend: Express app (server.js)
- Images: stored in public or Cloudinary (as configured)
- Payments: Stripe sandbox keys + webhook handling
- Authentication: Clerk integration

### Features & Value
- End-to-end LMS: content creation, enrollment, playback, ratings
- Secure authentication via Clerk
- Scalable payments via Stripe
- Real-time progress indicators and reviews
- Tailwind-led UI with a modern stack
- Easy deployment to modern hosts (Vercel) with CI/CD

### Contact Support
- Issues: Use GitHub Issues for bugs/features
- Support: your support contact (email: abunahinibn@gmail.com)
  
