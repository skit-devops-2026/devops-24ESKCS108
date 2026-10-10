import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[650px] mx-auto text-center mb-14">
              <span className="inline-block text-xs font-bold tracking-wider text-primary mb-3">CONTACT US</span>
              <h1 className="text-[clamp(2rem,4vw,3rem)] leading-[1.15] mb-4 text-gray-900">
                We're here to help.
              </h1>
              <p className="text-gray-600">
                Get in touch with our support team for any questions or assistance.
              </p>
            </div>

            <div className="max-w-[600px] mx-auto bg-white p-10 rounded-lg shadow-sm">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                  <input type="text" placeholder="Your name" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                  <input type="email" placeholder="your@email.com" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                  <textarea rows="5" placeholder="How can we help?" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"></textarea>
                </div>
                <button type="submit" className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-sm transition-all duration-250">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
