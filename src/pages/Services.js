import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Services() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <section className="py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-[650px] mx-auto text-center mb-14">
              <span className="inline-block text-xs font-bold tracking-wider text-primary mb-3">OUR SERVICES</span>
              <h1 className="text-[clamp(2rem,4vw,3rem)] leading-[1.15] mb-4 text-gray-900">
                Banking services designed for you.
              </h1>
              <p className="text-gray-600">
                Explore our comprehensive suite of digital banking services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {['Checking Accounts', 'Savings Accounts', 'Business Accounts', 'Digital Cards', 'Instant Transfers', 'Financial Tools'].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:-translate-y-1.5 hover:shadow-md transition-all duration-250">
                  <div className="w-12 h-12 flex items-center justify-center mb-5 bg-primary-light text-primary-dark rounded-md text-2xl">
                    {index === 0 ? '💳' : index === 1 ? '💰' : index === 2 ? '🏢' : index === 3 ? '💳' : index === 4 ? '⇄' : '⚙️'}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service}</h3>
                  <p className="text-gray-600 text-[0.95rem]">
                    Comprehensive {service.toLowerCase()} to meet your financial needs.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Services;
