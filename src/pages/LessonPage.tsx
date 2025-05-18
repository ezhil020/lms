
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { mockCourses } from '@/data/mockData';
import { Course, Lesson, User } from '@/types/lms';
import { useToast } from '@/components/ui/use-toast';

const LessonPage = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [course, setCourse] = useState<Course | undefined>();
  const [lesson, setLesson] = useState<Lesson | undefined>();
  const [user, setUser] = useState<User | null>(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(0);
  
  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('currentUser');
    if (!storedUser) {
      toast({
        title: "Access denied",
        description: "Please log in to access this lesson",
        variant: "destructive",
      });
      navigate('/login');
      return;
    }
    
    const parsedUser = JSON.parse(storedUser) as User;
    setUser(parsedUser);
    
    // Find the course
    const foundCourse = mockCourses.find(c => c.id === courseId);
    if (!foundCourse) {
      navigate('/courses');
      return;
    }
    setCourse(foundCourse);
    
    // Check if user is enrolled in this course
    if (!parsedUser.enrolledCourses?.includes(foundCourse.id)) {
      toast({
        title: "Enrollment required",
        description: "Please enroll in this course to access lessons",
        variant: "destructive",
      });
      navigate(`/courses/${courseId}`);
      return;
    }
    
    // Find the lesson
    const lessonIndex = parseInt(lessonId || '1') - 1;
    if (lessonIndex < 0 || lessonIndex >= foundCourse.lessons.length) {
      navigate(`/courses/${courseId}`);
      return;
    }
    setCurrentLessonIndex(lessonIndex);
    setLesson(foundCourse.lessons[lessonIndex]);
    
  }, [courseId, lessonId, navigate, toast]);
  
  if (!course || !lesson) {
    return (
      <PageLayout>
        <div className="container py-8">
          <p className="text-center">Loading...</p>
        </div>
      </PageLayout>
    );
  }
  
  const nextLesson = course.lessons[currentLessonIndex + 1];
  const prevLesson = course.lessons[currentLessonIndex - 1];
  
  const handleNextLesson = () => {
    if (nextLesson) {
      navigate(`/courses/${courseId}/lesson/${currentLessonIndex + 2}`);
    } else {
      // If this is the last lesson, go to assessment if available
      if (course.assessment) {
        navigate(`/courses/${courseId}/assessment`);
      } else {
        navigate(`/courses/${courseId}`);
      }
    }
  };
  
  const handlePrevLesson = () => {
    if (prevLesson) {
      navigate(`/courses/${courseId}/lesson/${currentLessonIndex}`);
    }
  };
  
  const markLessonCompleted = () => {
    toast({
      title: "Progress saved",
      description: "Lesson marked as completed",
    });
    
    handleNextLesson();
  };
  
  return (
    <PageLayout>
      <div className="container px-4 py-8 md:px-6">
        {/* Course title and breadcrumbs */}
        <div className="mb-6">
          <div className="flex text-sm text-muted-foreground">
            <Link to="/courses" className="hover:text-foreground">
              Courses
            </Link>
            <span className="mx-2">/</span>
            <Link to={`/courses/${courseId}`} className="hover:text-foreground">
              {course.title}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Lesson {currentLessonIndex + 1}</span>
          </div>
          <h1 className="mt-2 text-2xl font-bold md:text-3xl">{course.title}</h1>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Lesson content */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border bg-card">
              <div className="p-6">
                <h2 className="text-xl font-semibold md:text-2xl">{lesson.title}</h2>
                <div className="mt-2 flex items-center text-sm text-muted-foreground">
                  <span>{lesson.duration}</span>
                </div>
              </div>
              
              <Separator />
              
              <div className="p-6">
                <div className="prose max-w-none">
                  <p className="mb-4 text-muted-foreground">{lesson.description}</p>
                  <div className="my-6 whitespace-pre-wrap">{lesson.content}</div>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between p-6">
                <Button 
                  variant="outline" 
                  onClick={handlePrevLesson}
                  disabled={!prevLesson}
                >
                  Previous Lesson
                </Button>
                
                <Button onClick={markLessonCompleted}>
                  {nextLesson ? "Complete & Continue" : course.assessment ? "Finish & Take Assessment" : "Complete Course"}
                </Button>
              </div>
            </div>
          </div>
          
          {/* Lesson list */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border bg-card">
              <div className="p-4">
                <h3 className="text-lg font-medium">Course Content</h3>
                <p className="text-sm text-muted-foreground">
                  {course.lessons.length} lessons • {course.duration}
                </p>
              </div>
              
              <Separator />
              
              <div className="max-h-[500px] overflow-y-auto">
                {course.lessons.map((courseLesson, index) => (
                  <div 
                    key={courseLesson.id} 
                    className={`border-b p-4 ${currentLessonIndex === index ? 'bg-muted' : ''}`}
                  >
                    <Link to={`/courses/${courseId}/lesson/${index + 1}`}>
                      <div className="flex items-start">
                        <div className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium">{courseLesson.title}</h4>
                          <p className="text-sm text-muted-foreground">{courseLesson.duration}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
                
                {course.assessment && (
                  <div className="p-4">
                    <Link to={`/courses/${courseId}/assessment`}>
                      <div className="flex items-start">
                        <div className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lms-primary text-xs text-white">
                          A
                        </div>
                        <div>
                          <h4 className="font-medium">{course.assessment.title}</h4>
                          <p className="text-sm text-muted-foreground">Final Assessment</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LessonPage;
