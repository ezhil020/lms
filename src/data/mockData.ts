
import { Course, User, Assessment } from '../types/lms';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'student',
    enrolledCourses: ['1', '3'],
    completedCourses: [],
    createdAt: new Date(2023, 0, 15).toISOString(),
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'instructor',
    enrolledCourses: [],
    completedCourses: [],
    createdAt: new Date(2022, 11, 5).toISOString(),
  },
];

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Web Development',
    description: 'Learn the basics of HTML, CSS, and JavaScript to build modern websites.',
    instructor: 'Jane Smith',
    category: 'Web Development',
    level: 'beginner',
    duration: '6 weeks',
    thumbnail: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    lessons: [
      {
        id: '101',
        title: 'HTML Fundamentals',
        description: 'Learn the basic structure of HTML documents',
        duration: '45 min',
        content: 'HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.',
      },
      {
        id: '102',
        title: 'CSS Styling',
        description: 'Style your HTML with CSS',
        duration: '50 min',
        content: 'CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML.',
      },
      {
        id: '103',
        title: 'JavaScript Basics',
        description: 'Add interactivity with JavaScript',
        duration: '60 min',
        content: 'JavaScript is a programming language that enables interactive web pages and is an essential part of web applications.',
      },
    ],
    assessment: {
      id: 'a1',
      title: 'Web Development Basics Assessment',
      description: 'Test your knowledge of HTML, CSS, and JavaScript fundamentals',
      questions: [
        {
          id: 'q1',
          text: 'Which tag is used to create a hyperlink in HTML?',
          options: [
            { id: 'o1', text: '<link>', isCorrect: false },
            { id: 'o2', text: '<a>', isCorrect: true },
            { id: 'o3', text: '<href>', isCorrect: false },
            { id: 'o4', text: '<url>', isCorrect: false },
          ],
        },
        {
          id: 'q2',
          text: 'Which property is used to change the background color in CSS?',
          options: [
            { id: 'o1', text: 'color', isCorrect: false },
            { id: 'o2', text: 'bgcolor', isCorrect: false },
            { id: 'o3', text: 'background-color', isCorrect: true },
            { id: 'o4', text: 'background', isCorrect: false },
          ],
        },
        {
          id: 'q3',
          text: 'Which function is used to display output in the console in JavaScript?',
          options: [
            { id: 'o1', text: 'console.print()', isCorrect: false },
            { id: 'o2', text: 'print()', isCorrect: false },
            { id: 'o3', text: 'console.log()', isCorrect: true },
            { id: 'o4', text: 'log()', isCorrect: false },
          ],
        },
      ],
      passingScore: 70,
    },
    enrollmentCount: 1253,
    rating: 4.8,
    price: 2000,
  },
  {
    id: '2',
    title: 'Data Science Fundamentals',
    description: 'Learn the basics of data analysis, visualization, and machine learning.',
    instructor: 'Michael Brown',
    category: 'Data Science',
    level: 'intermediate',
    duration: '8 weeks',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    lessons: [
      {
        id: '201',
        title: 'Introduction to Data Science',
        description: 'Overview of data science field and applications',
        duration: '55 min',
        content: 'Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge from structured and unstructured data.',
      },
      {
        id: '202',
        title: 'Data Analysis with Python',
        description: 'Learn to analyze data using Python',
        duration: '65 min',
        content: 'Python is one of the most popular languages for data analysis, with libraries like Pandas, NumPy, and Matplotlib.',
      },
    ],
    assessment: {
      id: 'a2',
      title: 'Data Science Fundamentals Assessment',
      description: 'Test your knowledge of data analysis and visualization concepts',
      questions: [
        {
          id: 'q1',
          text: 'Which Python library is primarily used for data manipulation and analysis?',
          options: [
            { id: 'o1', text: 'NumPy', isCorrect: false },
            { id: 'o2', text: 'Matplotlib', isCorrect: false },
            { id: 'o3', text: 'Pandas', isCorrect: true },
            { id: 'o4', text: 'SciPy', isCorrect: false },
          ],
        },
        {
          id: 'q2',
          text: 'What does the acronym "API" stand for?',
          options: [
            { id: 'o1', text: 'Application Programming Interface', isCorrect: true },
            { id: 'o2', text: 'Advanced Programming Interface', isCorrect: false },
            { id: 'o3', text: 'Automated Processing Interface', isCorrect: false },
            { id: 'o4', text: 'Application Processing Integration', isCorrect: false },
          ],
        },
      ],
      passingScore: 80,
    },
    enrollmentCount: 876,
    rating: 4.5,
    price: 3000,
  },
  {
    id: '3',
    title: 'Mobile App Development with React Native',
    description: 'Build cross-platform mobile applications using React Native framework.',
    instructor: 'Sarah Johnson',
    category: 'Mobile Development',
    level: 'advanced',
    duration: '10 weeks',
    thumbnail: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    lessons: [
      {
        id: '301',
        title: 'React Native Basics',
        description: 'Introduction to React Native components',
        duration: '60 min',
        content: 'React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android.',
      },
      {
        id: '302',
        title: 'Navigation in React Native',
        description: 'Learn to implement navigation in your app',
        duration: '50 min',
        content: 'Navigation is an important aspect of mobile apps, allowing users to move between different screens.',
      },
    ],
    assessment: {
      id: 'a3',
      title: 'React Native Assessment',
      description: 'Test your knowledge of React Native fundamentals',
      questions: [
        {
          id: 'q1',
          text: 'Which component is used to create a text input field in React Native?',
          options: [
            { id: 'o1', text: '<Input />', isCorrect: false },
            { id: 'o2', text: '<TextInput />', isCorrect: true },
            { id: 'o3', text: '<TextField />', isCorrect: false },
            { id: 'o4', text: '<InputText />', isCorrect: false },
          ],
        },
        {
          id: 'q2',
          text: 'What is the command to create a new React Native project using Expo?',
          options: [
            { id: 'o1', text: 'expo create my-app', isCorrect: false },
            { id: 'o2', text: 'react-native init my-app', isCorrect: false },
            { id: 'o3', text: 'expo init my-app', isCorrect: true },
            { id: 'o4', text: 'create-expo-app my-app', isCorrect: false },
          ],
        },
      ],
      passingScore: 75,
    },
    enrollmentCount: 654,
    rating: 4.7,
    price: 4000,
  },
  {
    id: '4',
    title: 'Cloud Computing with AWS',
    description: 'Learn how to build and deploy applications on Amazon Web Services.',
    instructor: 'Robert Lee',
    category: 'Cloud Computing',
    level: 'intermediate',
    duration: '7 weeks',
    thumbnail: 'https://images.unsplash.com/photo-1603695677976-93a39e7ea9b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    lessons: [
      {
        id: '401',
        title: 'Introduction to AWS',
        description: 'Overview of AWS services',
        duration: '45 min',
        content: 'Amazon Web Services (AWS) is a comprehensive, evolving cloud computing platform provided by Amazon.',
      },
    ],
    assessment: {
      id: 'a4',
      title: 'AWS Fundamentals Assessment',
      description: 'Test your knowledge of AWS services and concepts',
      questions: [
        {
          id: 'q1',
          text: 'Which AWS service is used for object storage?',
          options: [
            { id: 'o1', text: 'EC2', isCorrect: false },
            { id: 'o2', text: 'RDS', isCorrect: false },
            { id: 'o3', text: 'S3', isCorrect: true },
            { id: 'o4', text: 'EBS', isCorrect: false },
          ],
        },
      ],
      passingScore: 70,
    },
    enrollmentCount: 489,
    rating: 4.6,
    price: 5000,
  }
];

export const categories = [
  'Web Development',
  'Mobile Development',
  'Data Science',
  'Cloud Computing',
  'UI/UX Design',
  'Machine Learning',
  'DevOps',
];
