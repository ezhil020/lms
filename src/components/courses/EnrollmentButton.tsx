
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { User } from '@/types/lms';

interface EnrollmentButtonProps {
  courseId: string;
  price: number;
}

const EnrollmentButton: React.FC<EnrollmentButtonProps> = ({ courseId, price }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser) as User;
      setUser(parsedUser);
      
      // Check if user is enrolled in this course
      if (parsedUser.enrolledCourses?.includes(courseId)) {
        setIsEnrolled(true);
      }
    }
  }, [courseId]);
  
  const handleEnroll = async () => {
    if (!user) {
      // Redirect to login if not logged in
      navigate('/login');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Update user's enrolled courses
      const updatedUser = {
        ...user,
        enrolledCourses: [...(user.enrolledCourses || []), courseId]
      };
      
      // In a real app, this would be an API call
      localStorage.setItem('currentUser', JSON.stringify(updatedUser));
      setUser(updatedUser);
      setIsEnrolled(true);
      
      toast({
        title: "Enrollment Successful",
        description: "You have successfully enrolled in this course",
      });
    } catch (error) {
      toast({
        title: "Enrollment Failed",
        description: "There was a problem enrolling in this course",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleContinue = () => {
    navigate(`/courses/${courseId}/lesson/1`);
  };
  
  if (isEnrolled) {
    return (
      <Button className="w-full" onClick={handleContinue}>
        Continue Learning
      </Button>
    );
  }
  
  return (
    <Button className="mb-3 w-full" onClick={handleEnroll} disabled={isLoading}>
      {isLoading ? "Processing..." : `Enroll Now - ₹${price}`}
    </Button>
  );
};

export default EnrollmentButton;
