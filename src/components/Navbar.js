import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        <nav className="flex items-center justify-between gap-6 py-[18px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 text-gray-900 font-semibold text-[1.3rem]">
            <span className="flex items-center justify-center w-[38px] h-[38px] bg-primary rounded-sm text-[1.1rem]">
              🏦
            </span>
            <span>DigitalBank</span>
          </Link>

          {/* Nav Links - Desktop */}
          <ul className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center gap-9`}>
            <li>
              <Link
                to="/"
                className={`relative py-1.5 text-[0.95rem] font-medium transition-all duration-250 ${
                  isActive('/') || isActive('/home')
                    ? 'text-primary-dark font-semibold after:w-full'
                    : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'
                } after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-primary after:rounded-sm after:transition-all after:duration-250`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`relative py-1.5 text-[0.95rem] font-medium transition-all duration-250 ${
                  isActive('/services')
                    ? 'text-primary-dark font-semibold after:w-full'
                    : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'
                } after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-primary after:rounded-sm after:transition-all after:duration-250`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`relative py-1.5 text-[0.95rem] font-medium transition-all duration-250 ${
                  isActive('/about')
                    ? 'text-primary-dark font-semibold after:w-full'
                    : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'
                } after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-primary after:rounded-sm after:transition-all after:duration-250`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`relative py-1.5 text-[0.95rem] font-medium transition-all duration-250 ${
                  isActive('/contact')
                    ? 'text-primary-dark font-semibold after:w-full'
                    : 'text-gray-600 hover:text-gray-900 after:w-0 hover:after:w-full'
                } after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:bg-primary after:rounded-sm after:transition-all after:duration-250`}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Nav Actions - Desktop */}
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center gap-3.5`}>
            <button
              type="button"
              aria-label="Search"
              className="flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:bg-primary-light hover:text-primary-dark transition-all duration-250"
            >
              🔍
            </button>

            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm text-[0.95rem] font-semibold whitespace-nowrap border-[1.5px] border-transparent bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-sm transition-all duration-250"
            >
              Open Account
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm text-[0.95rem] font-semibold whitespace-nowrap border-[1.5px] border-gray-200 bg-transparent text-gray-900 hover:border-primary hover:text-primary-dark transition-all duration-250"
            >
              Log In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-[1.4rem] text-gray-900"
          >
            ☰
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
