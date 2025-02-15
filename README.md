# Data Symphony 📖

A dynamic e-learning platform built with Next.js and Supabase, enabling seamless course creation, management, and enrollment with support for multiple content types.
[Video Demo Link](https://drive.google.com/file/d/1uFZEQ_C_X6q5i6JXKOJeLHpMYellXKia/view?usp=sharing)

## 🌟 Features

- **Course Management**
  - Create and manage courses with rich multimedia content
  - Upload and organize videos, PDFs, and presentations
  - Track course progress and completion status
  - Real-time updates on course activities

- **Dual Role System**
  - Users can be both teachers and students
  - Seamless switching between teaching and learning modes
  - Personalized dashboards for each role

- **Content Delivery**
  - High-performance video streaming with Mux
  - Secure file storage with Uploadthing
  - Support for multiple content formats
  - Progressive loading for optimal performance

- **User Authentication**
  - Secure authentication with Clerk
  - Role-based access control
  - Protected routes and API endpoints

## 🚀 Tech Stack

- **Frontend**
  - Next.js 14 with App Router
  - Tailwind CSS for styling
  - Clerk for authentication
  - Uploadthing for file handling
  - Mux for video streaming

- **Backend**
  - Node.js
  - Prisma ORM
  - PostgreSQL database
  - RESTful APIs

## 📋 Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0
- PostgreSQL >= 14.0
- Git

## ⚙️ Installation

1. Clone the repository:
```bash
git clone https://github.com/SpectacledGeek/DataSymphony.git
cd DataSymphony
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your `.env.local` with:
```env
# Database
DATABASE_URL="postgresql://..."

# Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# File Upload
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

# Video Streaming
MUX_TOKEN_ID=
MUX_TOKEN_SECRET=
```

5. Run database migrations:
```bash
npx prisma migrate dev
```

6. Start the development server:
```bash
npm run dev
```

## 🎯 Usage

1. **Creating a Course**
   - Log in to your account
   - Navigate to "Teacher Dashboard"
   - Click "Create New Course"
   - Add course details and content
   - Publish when ready

2. **Enrolling in a Course**
   - Browse available courses
   - Click "Enroll" on desired course
   - Access course content immediately
   - Track progress through dashboard

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Clerk Authentication](https://clerk.dev)
- [Prisma](https://www.prisma.io)
- [Mux](https://mux.com)
- [Uploadthing](https://uploadthing.com)

## 📧 Contact

Suryansh Singh - suryanshsingh1807@gmail.com

Project Link: [https://github.com/SpectacledGeek/DataSymphony](https://github.com/SpectacledGeek/DataSymphony)
