
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { mockCourses, categories } from '@/data/mockData';
import PageLayout from '@/components/layout/PageLayout';
import CourseCard from '@/components/courses/CourseCard';

const HomePage = () => {
  // Get featured courses (just the first 3 from our mock data)
  const featuredCourses = mockCourses.slice(0, 3);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Learn New Skills to Advance Your Career
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Access high-quality courses taught by industry experts and transform your skills. Start learning today.
                </p>
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Link to="/courses">
                  <Button size="lg" className="px-8">Browse Courses</Button>
                </Link>
                <Link to="/register">
                  <Button size="lg" variant="outline" className="px-8">Sign Up Free</Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative hidden h-full w-full lg:block">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Students learning"
                  className="rounded-lg object-cover"
                  width={800}
                  height={600}
                />
                <div className="absolute -bottom-6 -right-6 h-24 w-48 rounded-lg bg-lms-accent p-4 shadow-lg">
                  <div className="text-center font-bold text-primary-foreground">
                    <span className="text-3xl">50+</span>
                    <p className="text-sm">Expert Instructors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Featured Courses</h2>
            <Link to="/courses" className="text-lms-primary hover:underline">
              View All
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Browse by Category</h2>
            <p className="mt-2 text-muted-foreground">Explore our wide range of courses by category</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {categories.map((category) => (
              <Link 
                key={category} 
                to={`/courses?category=${category}`}
                className="flex flex-col items-center justify-center rounded-lg bg-card p-4 transition-colors hover:bg-accent"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
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
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                </div>
                <h3 className="mt-2 text-center font-medium">{category}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-8 text-center">
              <div className="text-3xl font-bold text-lms-primary sm:text-4xl md:text-5xl">10,000+</div>
              <p className="mt-2 text-muted-foreground">Students Enrolled</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-8 text-center">
              <div className="text-3xl font-bold text-lms-primary sm:text-4xl md:text-5xl">200+</div>
              <p className="mt-2 text-muted-foreground">Quality Courses</p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-8 text-center">
              <div className="text-3xl font-bold text-lms-primary sm:text-4xl md:text-5xl">50+</div>
              <p className="mt-2 text-muted-foreground">Expert Instructors</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-primary-foreground">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Ready to Start Your Learning Journey?</h2>
            <p className="max-w-[600px] text-primary-foreground/80">
              Join thousands of students who are already advancing their careers with LearnHub
            </p>
            <Link to="/register">
              <Button variant="secondary" size="lg" className="px-8">
                Sign Up Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default HomePage;
