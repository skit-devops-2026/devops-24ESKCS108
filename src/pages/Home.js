import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        {/* ==================== HERO SECTION ==================== */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0F5132] to-[#1B7A4A] text-white py-24">
          {/* Decorative gradient circle */}
          <div className="absolute -top-[120px] -right-[120px] w-[420px] h-[420px] rounded-full pointer-events-none opacity-10 bg-gradient-radial from-white/20 to-transparent" />

          <div className="container max-w-[1200px] mx-auto px-6 relative">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] items-center gap-12 lg:gap-20">
              {/* Hero Content */}
              <div className="max-w-[650px]">
                <span className="inline-block px-4 py-2 mb-5 text-[0.85rem] font-semibold bg-white/12 border border-white/20 rounded-full">
                  🌱 Smarter Banking. Simpler Life.
                </span>

                <h1 className="text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 text-white">
                  Your Financial Future,{' '}
                  <span className="text-[#bbf7d0]">Simplified.</span>
                </h1>

                <p className="max-w-[580px] text-lg text-white/85 mb-9">
                  Experience a modern digital banking platform designed to make managing your money simple, secure and convenient.
                </p>

                <div className="flex gap-4 flex-wrap">
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-[#1B7A4A] rounded-lg transition-all duration-250 hover:bg-[#0F5132] hover:-translate-y-0.5 hover:shadow-[0_2px_12px_rgba(15,81,50,0.07)]"
                  >
                    Get Started
                  </Link>

                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-[#0F5132] bg-white rounded-lg transition-all duration-250 hover:bg-[#E7F5EC] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,81,50,0.14)]"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              {/* Banking App Mockup */}
              <div className="flex justify-center">
                <div className="w-[280px] h-[500px] p-2.5 bg-[#111827] rounded-[38px] shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
                  <div className="h-full bg-white text-[#10241A] rounded-[30px] overflow-hidden">
                    {/* Phone Header */}
                    <div className="bg-[#1B7A4A] text-white px-5 py-7">
                      <small className="block mb-4 opacity-80 text-sm">
                        DigitalBank
                      </small>
                      <div className="text-2xl font-semibold">
                        ₹29,950.00
                      </div>
                    </div>

                    {/* Phone Body */}
                    <div className="p-5">
                      <div className="flex justify-between items-center gap-4 py-4 border-b border-[#DDE8E1] text-[0.85rem]">
                        <span>Checking</span>
                        <strong className="text-right">₹1,45,000</strong>
                      </div>

                      <div className="flex justify-between items-center gap-4 py-4 border-b border-[#DDE8E1] text-[0.85rem]">
                        <span>Savings Growth</span>
                        <strong className="text-[#22C55E] text-right">+12.4%</strong>
                      </div>

                      <div className="flex justify-between items-center gap-4 py-4 border-b border-[#DDE8E1] text-[0.85rem]">
                        <span>Business Fund</span>
                        <strong className="text-right">₹8,20,000</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== KEY FEATURES ==================== */}
        <section className="py-24 bg-[#F6FAF8]">
          <div className="container max-w-[1200px] mx-auto px-6">
            <div className="max-w-[650px] mx-auto mb-14 text-center">
              <span className="inline-flex items-center justify-center text-xs font-semibold text-[#1B7A4A] tracking-wider uppercase mb-4">
                WHY DIGITALBANK
              </span>

              <h2 className="text-4xl lg:text-5xl leading-tight mb-4">
                Banking designed around you.
              </h2>

              <p className="text-[#56685F]">
                Everything you need for a simple and convenient digital banking experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature Card 1 */}
              <article className="bg-white p-8 rounded-[22px] shadow-[0_2px_12px_rgba(15,81,50,0.07)] transition-all duration-250 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(15,81,50,0.14)]">
                <div className="w-[50px] h-[50px] flex items-center justify-center mb-5 bg-[#E7F5EC] text-[#0F5132] rounded-[14px] text-2xl">
                  ⇄
                </div>
                <h3 className="mb-2.5 text-lg font-semibold">
                  Instant Transfers
                </h3>
                <p className="text-[#56685F] text-[0.95rem]">
                  Send money quickly and conveniently through a simple digital experience.
                </p>
              </article>

              {/* Feature Card 2 */}
              <article className="bg-white p-8 rounded-[22px] shadow-[0_2px_12px_rgba(15,81,50,0.07)] transition-all duration-250 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(15,81,50,0.14)]">
                <div className="w-[50px] h-[50px] flex items-center justify-center mb-5 bg-[#E7F5EC] text-[#0F5132] rounded-[14px] text-2xl">
                  📈
                </div>
                <h3 className="mb-2.5 text-lg font-semibold">
                  Smart Savings
                </h3>
                <p className="text-[#56685F] text-[0.95rem]">
                  Keep track of your savings goals and monitor your financial progress.
                </p>
              </article>

              {/* Feature Card 3 */}
              <article className="bg-white p-8 rounded-[22px] shadow-[0_2px_12px_rgba(15,81,50,0.07)] transition-all duration-250 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(15,81,50,0.14)]">
                <div className="w-[50px] h-[50px] flex items-center justify-center mb-5 bg-[#E7F5EC] text-[#0F5132] rounded-[14px] text-2xl">
                  🎧
                </div>
                <h3 className="mb-2.5 text-lg font-semibold">
                  24/7 Support
                </h3>
                <p className="text-[#56685F] text-[0.95rem]">
                  Get access to support whenever you need assistance.
                </p>
              </article>

              {/* Feature Card 4 */}
              <article className="bg-white p-8 rounded-[22px] shadow-[0_2px_12px_rgba(15,81,50,0.07)] transition-all duration-250 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(15,81,50,0.14)]">
                <div className="w-[50px] h-[50px] flex items-center justify-center mb-5 bg-[#E7F5EC] text-[#0F5132] rounded-[14px] text-2xl">
                  🔒
                </div>
                <h3 className="mb-2.5 text-lg font-semibold">
                  Secure Accounts
                </h3>
                <p className="text-[#56685F] text-[0.95rem]">
                  Designed with security and privacy as core parts of the banking experience.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ==================== ACCOUNTS ==================== */}
        <section className="py-24 bg-white">
          <div className="container max-w-[1200px] mx-auto px-6">
            <div className="max-w-[650px] mx-auto mb-14 text-center">
              <span className="inline-flex items-center justify-center text-xs font-semibold text-[#1B7A4A] tracking-wider uppercase mb-4">
                BANKING OPTIONS
              </span>

              <h2 className="text-4xl lg:text-5xl leading-tight mb-4">
                Choose the account that fits you.
              </h2>

              <p className="text-[#56685F]">
                Explore different account experiences designed for different financial needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Account Card 1 */}
              <article className="min-h-[300px] flex flex-col justify-between p-9 border border-[#DDE8E1] rounded-[22px] transition-all duration-250 hover:-translate-y-1 hover:border-[#1B7A4A] hover:shadow-[0_18px_40px_rgba(15,81,50,0.14)]">
                <div>
                  <span className="block mb-6 text-[#1B7A4A] font-semibold text-xl">
                    01
                  </span>
                  <h3 className="text-2xl mb-3 font-semibold">
                    Checking
                  </h3>
                  <p className="text-[#56685F] mb-6">
                    Manage your everyday spending, transfers and account activity.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[0.95rem] font-semibold text-white bg-[#1B7A4A] rounded-lg transition-all duration-250 hover:bg-[#0F5132] hover:-translate-y-0.5 hover:shadow-[0_2px_12px_rgba(15,81,50,0.07)]"
                >
                  View Details
                </Link>
              </article>

              {/* Account Card 2 */}
              <article className="min-h-[300px] flex flex-col justify-between p-9 border border-[#DDE8E1] rounded-[22px] transition-all duration-250 hover:-translate-y-1 hover:border-[#1B7A4A] hover:shadow-[0_18px_40px_rgba(15,81,50,0.14)]">
                <div>
                  <span className="block mb-6 text-[#1B7A4A] font-semibold text-xl">
                    02
                  </span>
                  <h3 className="text-2xl mb-3 font-semibold">
                    Savings
                  </h3>
                  <p className="text-[#56685F] mb-6">
                    Organize your savings and keep track of your financial goals.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[0.95rem] font-semibold text-white bg-[#1B7A4A] rounded-lg transition-all duration-250 hover:bg-[#0F5132] hover:-translate-y-0.5 hover:shadow-[0_2px_12px_rgba(15,81,50,0.07)]"
                >
                  View Details
                </Link>
              </article>

              {/* Account Card 3 */}
              <article className="min-h-[300px] flex flex-col justify-between p-9 border border-[#DDE8E1] rounded-[22px] transition-all duration-250 hover:-translate-y-1 hover:border-[#1B7A4A] hover:shadow-[0_18px_40px_rgba(15,81,50,0.14)]">
                <div>
                  <span className="block mb-6 text-[#1B7A4A] font-semibold text-xl">
                    03
                  </span>
                  <h3 className="text-2xl mb-3 font-semibold">
                    Business
                  </h3>
                  <p className="text-[#56685F] mb-6">
                    Manage business finances through a centralized digital experience.
                  </p>
                </div>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-[0.95rem] font-semibold text-white bg-[#1B7A4A] rounded-lg transition-all duration-250 hover:bg-[#0F5132] hover:-translate-y-0.5 hover:shadow-[0_2px_12px_rgba(15,81,50,0.07)]"
                >
                  View Details
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* ==================== MONEY MANAGEMENT ==================== */}
        <section className="py-24 bg-[#F6FAF8]">
          <div className="container max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24">
              {/* Manage Content */}
              <div>
                <span className="inline-flex items-center justify-center text-xs font-semibold text-[#1B7A4A] tracking-wider uppercase mb-4">
                  MONEY MANAGEMENT
                </span>

                <h2 className="text-4xl lg:text-5xl leading-tight mb-10">
                  Manage your money with confidence.
                </h2>

                {/* Manage Item 1 */}
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-[50px] h-[50px] flex-shrink-0 flex items-center justify-center bg-[#E7F5EC] text-[#0F5132] rounded-[14px] text-2xl">
                    💳
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">
                      Digital Cards
                    </h3>
                    <p className="text-[#56685F]">
                      Manage your cards and monitor spending from one place.
                    </p>
                  </div>
                </div>

                {/* Manage Item 2 */}
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-[50px] h-[50px] flex-shrink-0 flex items-center justify-center bg-[#E7F5EC] text-[#0F5132] rounded-[14px] text-2xl">
                    📊
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">
                      Financial Overview
                    </h3>
                    <p className="text-[#56685F]">
                      Get a clear overview of your transactions and financial activity.
                    </p>
                  </div>
                </div>

                {/* Manage Item 3 */}
                <div className="flex items-start gap-5 mb-8">
                  <div className="w-[50px] h-[50px] flex-shrink-0 flex items-center justify-center bg-[#E7F5EC] text-[#0F5132] rounded-[14px] text-2xl">
                    ⚙️
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">
                      Financial Tools
                    </h3>
                    <p className="text-[#56685F]">
                      Organize your finances using simple digital tools.
                    </p>
                  </div>
                </div>
              </div>

              {/* Budget Mockup */}
              <div className="flex justify-center">
                <div className="w-[280px] h-[380px] p-2.5 bg-[#111827] rounded-[38px] shadow-[0_25px_60px_rgba(0,0,0,0.35)]">
                  <div className="h-full bg-white text-[#10241A] rounded-[30px] overflow-hidden">
                    {/* Phone Header */}
                    <div className="bg-[#1B7A4A] text-white px-5 py-7">
                      <small className="block mb-4 opacity-80 text-sm">
                        Budgeting
                      </small>
                      <div className="text-2xl font-semibold">
                        On Track
                      </div>
                    </div>

                    {/* Phone Body */}
                    <div className="p-5">
                      <div className="flex justify-between items-center gap-4 py-4 border-b border-[#DDE8E1] text-[0.85rem]">
                        <span>Monthly Budget</span>
                        <strong className="text-right">75% Used</strong>
                      </div>

                      <div className="flex justify-between items-center gap-4 py-4 border-b border-[#DDE8E1] text-[0.85rem]">
                        <span>Savings Goal</span>
                        <strong className="text-right">50%</strong>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 mt-6 bg-[#DDE8E1] rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-[#1B7A4A] rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== TESTIMONIAL ==================== */}
        <section className="py-20 bg-white">
          <div className="container max-w-[1200px] mx-auto px-6">
            <div className="max-w-[800px] flex items-center gap-6 mx-auto p-9 rounded-[22px] bg-[#F6FAF8]">
              <div className="w-[60px] h-[60px] flex-shrink-0 flex items-center justify-center bg-[#1B7A4A] text-white rounded-full font-semibold">
                NM
              </div>

              <div>
                <p className="mb-2 text-lg font-semibold text-[#10241A]">
                  "A clean and simple banking experience designed around everyday financial needs."
                </p>
                <div className="text-[#f59e0b] tracking-[3px] mb-1">
                  ★★★★★
                </div>
                <small className="text-[#56685F]">
                  — Modi Ji
                </small>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== MOBILE APP ==================== */}
        <section className="py-10 pb-24 bg-white">
          <div className="container max-w-[1200px] mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 p-12 bg-[#0F5132] text-white rounded-[22px]">
              <div>
                <span className="inline-flex items-center justify-center text-xs font-semibold text-[#34D399] tracking-wider uppercase mb-4">
                  BANKING ON THE GO
                </span>

                <h2 className="text-3xl lg:text-4xl mb-2.5 text-white">
                  Digital banking, wherever you are.
                </h2>

                <p className="max-w-[600px] text-white/80">
                  Access your finances through a simple and convenient digital experience.
                </p>
              </div>

              <div className="flex gap-3 flex-shrink-0">
                <a
                  href="#"
                  className="px-5 py-3 bg-white text-[#10241A] rounded-lg font-semibold transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_2px_12px_rgba(15,81,50,0.07)]"
                >
                   App Store
                </a>
                <a
                  href="#"
                  className="px-5 py-3 bg-white text-[#10241A] rounded-lg font-semibold transition-all duration-250 hover:-translate-y-0.5 hover:shadow-[0_2px_12px_rgba(15,81,50,0.07)]"
                >
                  ▶ Google Play
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
