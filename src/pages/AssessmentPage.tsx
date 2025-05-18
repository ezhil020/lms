
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import AssessmentComponent from '@/components/assessment/AssessmentComponent';
import { mockCourses } from '@/data/mockData';
import { Button } from '@/components/ui/button';

const AssessmentPage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  
  const course = mockCourses.find((c) => c.id === courseId);
  
  if (!course || !course.assessment) {
    return (
      <PageLayout>
        <div className="container flex h-96 flex-col items-center justify-center px-4 py-16">
          <h1 className="text-2xl font-bold">Assessment Not Found</h1>
          <p className="mb-4 text-muted-foreground">
            The assessment you are looking for doesn't exist or has been removed.
          </p>
          <Link to="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </PageLayout>
    );
  }
  
  const handleAssessmentComplete = (score: number, passed: boolean) => {
    // In a real app, this would call an API to update the user's progress
    console.log(`Assessment completed with score: ${score}, passed: ${passed}`);
  };
  
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
          <Link to={`/courses/${courseId}`} className="hover:text-foreground">
            {course.title}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Assessment</span>
        </div>
        
        <div className="mx-auto max-w-2xl">
          <AssessmentComponent 
            assessment={course.assessment} 
            onComplete={handleAssessmentComplete} 
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default AssessmentPage;
