# LearnHub - Learning Management System

LearnHub is a comprehensive online learning platform built with modern web technologies. It enables users to browse courses, enroll, access lesson content, complete assessments, and track their learning progress.

## Features

- **User Authentication:** Register, login, and manage user profiles
- **Course Catalog:** Browse and filter courses by category, difficulty level, and keywords
- **Course Details:** View detailed information about courses, lessons, and instructors
- **Enrollment System:** Enroll in courses and track learning progress
- **Lesson Viewer:** Access course content with a structured lesson interface
- **Assessment System:** Complete quizzes and assessments with immediate feedback
- **User Dashboard:** Track enrolled and completed courses

## Technology Stack

- **Frontend Framework:** React with TypeScript
- **Mock Data:** Simulated backend with localStorage persistence

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/learnhub.git
    cd learnhub
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Start the development server**
    ```bash
    npm run dev
    ```

4. **Open your browser and navigate to** [http://localhost:8080](http://localhost:8080)

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── assessment/    # Assessment-related components
│   ├── courses/       # Course-related components
│   ├── forms/         # Form components
│   ├── layout/        # Layout components
│   ├── ui/            # UI components from shadcn/ui
│   └── user/          # User-related components
├── data/              # Mock data
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── pages/             # Page components
└── types/             # TypeScript type definitions
```

## Key Workflows

### User Registration and Authentication

The application implements a mock authentication system with localStorage persistence:

- Register with name, email, and password
- Login with credentials
- View and manage user profile

### Course Discovery

Users can:

- Browse all available courses
- Filter courses by category, difficulty level, and search keywords
- View detailed information about each course

### Course Enrollment and Learning

Users can:

- Enroll in courses
- Access course lessons
- Complete assessments
- Track learning progress

## Development

### Adding New Features

1. Create new components in the appropriate directories
2. Update types in `src/types` if needed
3. Add routes in `src/App.tsx` if needed
4. Update mock data in `src/data/mockData.ts` if needed

### Styling

This project uses Tailwind CSS for styling and shadcn/ui for UI components. Follow these guidelines:

- Use Tailwind utility classes for styling
- Use shadcn/ui components for consistent UI
- Custom styles should be added to component files

## Future Enhancements

- Backend API integration
- Real database storage
- User progress tracking
- Course creation and management for instructors
- Payment integration for premium courses
- Social features like reviews and discussions

---
Happy Learning! 🚀
