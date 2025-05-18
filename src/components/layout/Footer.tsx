
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">Learn</span>
              <span className="text-2xl font-bold text-lms-accent">Hub</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Empowering learners worldwide with quality education and practical skills for success.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/courses" className="text-muted-foreground transition-colors hover:text-white">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground transition-colors hover:text-white">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground transition-colors hover:text-white">
                  Data Science
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-muted-foreground transition-colors hover:text-white">
                  Mobile Development
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">support@learnhub.com</li>
              <li className="text-muted-foreground">+1 (555) 123-4567</li>
              <li className="text-muted-foreground">123 Education St, Learning City, ED 12345</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LearnHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
