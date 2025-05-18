
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Course } from '@/types/lms';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`}>
      <Card className="course-card h-full overflow-hidden">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="capitalize">
              {course.level}
            </Badge>
            <span className="text-sm text-muted-foreground">{course.duration}</span>
          </div>
          <h3 className="mt-2 text-xl font-semibold leading-tight">{course.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {course.description}
          </p>
          <div className="mt-2 flex items-center text-sm">
            <span className="text-sm font-medium">By {course.instructor}</span>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t p-4">
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
            <span>{course.rating}</span>
            <span className="mx-1 text-muted-foreground">•</span>
            <span className="text-muted-foreground">{course.enrollmentCount} students</span>
          </div>
          <div className="font-semibold text-lms-primary">₹{course.price}</div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CourseCard;
