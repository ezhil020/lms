
import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';
import UserRegistrationForm from '@/components/forms/UserRegistrationForm';

const UserRegistrationPage = () => {
  return (
    <PageLayout>
      <div className="container flex min-h-screen-content flex-col items-center justify-center px-4 py-12">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">Join LearnHub</h1>
          <p className="mt-2 text-muted-foreground">
            Create an account to start your learning journey
          </p>
        </div>
        <div className="w-full max-w-md">
          <UserRegistrationForm />
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          By signing up, you agree to our{' '}
          <Link to="/" className="font-medium text-lms-primary underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link to="/" className="font-medium text-lms-primary underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </PageLayout>
  );
};

export default UserRegistrationPage;
