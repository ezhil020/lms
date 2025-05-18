
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import UserProfileCard from '@/components/user/UserProfileCard';
import CourseCard from '@/components/courses/CourseCard';
import { User, Course } from '@/types/lms';
import { mockCourses } from '@/data/mockData';
import { Button } from '@/components/ui/button';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<Course[]>([]);
  
  useEffect(() => {
    // In a real app, we would fetch this data from an API
    const storedUser = localStorage.getItem('currentUser');
    
    if (!storedUser) {
      navigate('/login');
      return;
    }
    
    const parsedUser = JSON.parse(storedUser) as User;
    setUser(parsedUser);
    
    // Get enrolled courses from mock data
    const userCourses = mockCourses.filter(
      course => parsedUser.enrolledCourses?.includes(course.id)
    );
    setEnrolledCourses(userCourses);
  }, [navigate]);
  
  if (!user) {
    return (
      <PageLayout>
        <div className="container py-8">
          <p className="text-center">Loading...</p>
        </div>
      </PageLayout>
    );
  }
  
  return (
    <PageLayout>
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <UserProfileCard user={user} />
          </div>
          
          <div className="md:col-span-2">
            <div className="mb-4">
              <h2 className="text-2xl font-bold">My Courses</h2>
              <p className="text-muted-foreground">Continue where you left off</p>
            </div>
            
            {enrolledCourses.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {enrolledCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed p-8 text-center">
                <h3 className="text-xl font-medium">No courses yet</h3>
                <p className="mb-4 text-muted-foreground">
                  You haven't enrolled in any courses yet.
                </p>
                <Button onClick={() => navigate('/courses')}>
                  Browse Courses
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default DashboardPage;
