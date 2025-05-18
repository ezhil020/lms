
export type User = {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  enrolledCourses?: string[];
  completedCourses?: string[];
  createdAt: string;
};

export type Course = {
  id: string;
  title: string;
  description: string;
  instructor: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  thumbnail: string;
  lessons: Lesson[];
  assessment?: Assessment;
  enrollmentCount: number;
  rating: number;
  price: number;
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  duration: string;
  content: string;
  completed?: boolean;
};

export type Assessment = {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  passingScore: number;
};

export type Question = {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
};

export type FilterOptions = {
  category?: string;
  level?: 'beginner' | 'intermediate' | 'advanced';
  search?: string;
};
