import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[650px] mx-auto text-center mb-14">
              <span className="inline-block text-xs font-bold tracking-wider text-primary mb-3">ABOUT US</span>
              <h1 className="text-[clamp(2rem,4vw,3rem)] leading-[1.15] mb-4 text-gray-900">
                Banking built for your future.
              </h1>
              <p className="text-gray-600">
                DigitalBank is a modern digital banking platform designed to make managing your money simple, secure, and convenient.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
