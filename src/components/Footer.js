import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-12 mb-12">
          {/* Footer Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 text-gray-900 font-semibold text-[1.3rem] mb-4">
              <span className="flex items-center justify-center w-[38px] h-[38px] bg-primary rounded-sm text-[1.1rem]">
                🏦
              </span>
              <span>DigitalBank</span>
            </Link>
            <p className="text-gray-600 text-[0.95rem]">
              Simple. Secure. Smart banking.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
              <div className="flex flex-col gap-3">
                <Link to="/about" className="text-gray-600 text-[0.95rem] hover:text-primary transition-colors duration-250">
                  About Us
                </Link>
                <Link to="/services" className="text-gray-600 text-[0.95rem] hover:text-primary transition-colors duration-250">
                  Services
                </Link>
                <Link to="/contact" className="text-gray-600 text-[0.95rem] hover:text-primary transition-colors duration-250">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Account</h4>
              <div className="flex flex-col gap-3">
                <Link to="/login" className="text-gray-600 text-[0.95rem] hover:text-primary transition-colors duration-250">
                  Log In
                </Link>
                <Link to="/signup" className="text-gray-600 text-[0.95rem] hover:text-primary transition-colors duration-250">
                  Open Account
                </Link>
                <Link to="/profile" className="text-gray-600 text-[0.95rem] hover:text-primary transition-colors duration-250">
                  Dashboard
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Support</h4>
              <div className="flex flex-col gap-3">
                <Link to="/contact" className="text-gray-600 text-[0.95rem] hover:text-primary transition-colors duration-250">
                  Help Center
                </Link>
                <Link to="/contact" className="text-gray-600 text-[0.95rem] hover:text-primary transition-colors duration-250">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            &copy; 2026 DigitalBank. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 text-sm hover:text-primary transition-colors duration-250">
              Privacy
            </a>
            <a href="#" className="text-gray-600 text-sm hover:text-primary transition-colors duration-250">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
