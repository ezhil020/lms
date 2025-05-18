
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import CourseLessonList from '@/components/courses/CourseLessonList';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import EnrollmentButton from '@/components/courses/EnrollmentButton';
import { mockCourses } from '@/data/mockData';
import { User } from '@/types/lms';

const CourseDetailPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [user, setUser] = useState<User | null>(null);
  
  const course = mockCourses.find((c) => c.id === courseId);
  
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  if (!course) {
    return (
      <PageLayout>
        <div className="container flex h-96 flex-col items-center justify-center px-4 py-16">
          <h1 className="text-2xl font-bold">Course Not Found</h1>
          <p className="mb-4 text-muted-foreground">
            The course you are looking for doesn't exist or has been removed.
          </p>
          <Link to="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </PageLayout>
    );
  }
  
  const isEnrolled = user?.enrolledCourses?.includes(course.id);
  
  return (
    <PageLayout>
      <div className="container px-4 py-8 md:px-6 md:py-12">
        {/* Breadcrumb */}
        <div className="mb-6 flex text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/courses" className="hover:text-foreground">
            Courses
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{course.title}</span>
        </div>
        
        {/* Course Header */}
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold md:text-4xl">{course.title}</h1>
            <p className="mt-2 text-muted-foreground">{course.description}</p>
            
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <Badge variant="outline" className="capitalize">
                {course.level}
              </Badge>
              <span className="text-muted-foreground">•</span>
              <span>{course.duration}</span>
              <span className="text-muted-foreground">•</span>
              <span>{course.enrollmentCount} students enrolled</span>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 h-4 w-4 text-yellow-500"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span>{course.rating}/5</span>
              </div>
            </div>
            
            <div className="mt-4 flex items-center">
              <p>
                Taught by{" "}
                <span className="font-medium">{course.instructor}</span>
              </p>
            </div>
          </div>
          
          {/* Course Card */}
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="aspect-video w-full overflow-hidden rounded-md">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4">
              <div className="mb-4 text-3xl font-bold">₹{course.price}</div>
              <EnrollmentButton courseId={course.id} price={course.price} />
              <Button variant="outline" className="w-full">
                Add to Wishlist
              </Button>
              
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                  {course.lessons.length} lessons
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {course.duration} total duration
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                  </svg>
                  Full lifetime access
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <rect width="20" height="14" x="2" y="3" rx="2" />
                    <line x1="8" x2="16" y1="21" y2="21" />
                    <line x1="12" x2="12" y1="17" y2="21" />
                  </svg>
                  Access on all devices
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Content */}
        <div className="mt-12">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              {/* Course Description */}
              <h2 className="mb-4 text-2xl font-semibold">About This Course</h2>
              <p className="mb-6">
                {course.description} This comprehensive course will take you from beginner to advanced level in {course.category}, providing you with practical skills that you can immediately apply in your projects.
              </p>
              
              {/* Course Content */}
              <CourseLessonList lessons={course.lessons} />
              
              {/* Assessment Section */}
              {course.assessment && (
                <div className="mt-8 rounded-lg border bg-muted p-6">
                  <h3 className="mb-2 text-xl font-semibold">Course Assessment</h3>
                  <p className="mb-4 text-muted-foreground">
                    {course.assessment.description}
                  </p>
                  {isEnrolled ? (
                    <Link to={`/courses/${course.id}/assessment`}>
                      <Button>Take Assessment</Button>
                    </Link>
                  ) : (
                    <p className="text-sm italic text-muted-foreground">
                      Enroll in the course to access the assessment
                    </p>
                  )}
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold">What You'll Learn</h3>
                <ul className="space-y-2">
                  {course.lessons.map((lesson) => (
                    <li key={lesson.id} className="flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-5 w-5 text-lms-primary"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                      <span>{lesson.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-semibold">Requirements</h3>
                <ul className="space-y-2">
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-lms-primary"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span>Basic understanding of {course.category.toLowerCase()}</span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-lms-primary"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span>Computer with internet connection</span>
                  </li>
                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-5 w-5 text-lms-primary"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span>Willingness to learn</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CourseDetailPage;
