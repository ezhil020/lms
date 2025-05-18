
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import CourseCard from '@/components/courses/CourseCard';
import CourseFilters from '@/components/courses/CourseFilters';
import { mockCourses } from '@/data/mockData';
import { Course, FilterOptions } from '@/types/lms';

const CoursesPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  
  // Initialize filters from URL params
  const initialFilters: FilterOptions = {
    category: queryParams.get('category') || undefined,
    search: queryParams.get('search') || '',
    level: (queryParams.get('level') as FilterOptions['level']) || undefined,
  };
  
  const [filters, setFilters] = useState<FilterOptions>(initialFilters);
  
  const filteredCourses = mockCourses.filter((course) => {
    // Filter by search term
    if (filters.search && !course.title.toLowerCase().includes(filters.search.toLowerCase()) && 
        !course.description.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    
    // Filter by category
    if (filters.category && course.category !== filters.category) {
      return false;
    }
    
    // Filter by level
    if (filters.level && course.level !== filters.level) {
      return false;
    }
    
    return true;
  });
  
  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };
  
  return (
    <PageLayout>
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Explore Courses</h1>
          <p className="text-muted-foreground">
            Discover our range of courses to help you advance your skills and career
          </p>
        </div>
        
        <div className="mb-8">
          <CourseFilters onFilterChange={handleFilterChange} />
        </div>
        
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'} Available
          </h2>
          <select className="rounded-md border p-2">
            <option>Most Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
          </select>
        </div>
        
        {filteredCourses.length === 0 ? (
          <div className="flex h-48 flex-col items-center justify-center rounded-lg border bg-muted">
            <p className="text-lg font-medium">No courses found matching your criteria</p>
            <p className="text-muted-foreground">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default CoursesPage;
