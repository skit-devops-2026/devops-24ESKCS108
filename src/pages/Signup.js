import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="min-h-screen bg-[#f4f8f6] flex justify-center items-center p-8">
      <div className="w-full max-w-[1100px] h-[680px] bg-white rounded-[24px] overflow-hidden flex shadow-[0_20px_60px_rgba(21,100,67,0.1)]">
        {/* Left Panel */}
        <div className="w-[42%] min-h-full relative overflow-hidden bg-[#e9f8ef] text-[#12352b] p-12 flex items-center">
          <div className="absolute w-[360px] h-[360px] rounded-full bg-[#c9f1d9] top-[-170px] right-[-150px] opacity-75"></div>
          <div className="absolute w-[280px] h-[280px] rounded-full bg-[#b8ebcf] bottom-[-150px] left-[-140px] opacity-65"></div>

          <div className="relative z-10 w-full">
            <div className="flex items-center gap-2.5 mb-12">
              <div className="w-9 h-9 rounded-[10px] bg-[#16a765] text-white flex justify-center items-center text-xl font-bold">🏦</div>
              <span className="text-2xl font-bold text-[#11633f]">Digital Bank</span>
            </div>
            <h1 className="text-[39px] leading-[1.12] text-[#12352b] mb-[18px] font-bold">
              Start your<br />banking journey.
            </h1>
            <p className="max-w-[340px] text-[13px] leading-[1.7] text-[#557267]">
              Join thousands of users experiencing simple, secure, and smart digital banking.
            </p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-[58%] bg-white flex justify-center items-center p-[60px]">
          <div className="w-full max-w-[450px]">
            <h2 className="text-[32px] font-bold text-[#12352b] mb-2">Create Account</h2>
            <p className="text-sm text-[#789087] mb-8">Sign up to get started</p>

            <form>
              <div className="mb-[22px]">
                <label className="block text-[13px] font-semibold text-[#35574b] mb-2">Full Name</label>
                <input type="text" placeholder="Enter your full name" className="w-full h-[52px] border border-[#dce9e1] rounded-xl bg-[#fbfdfc] px-[15px] text-[13px] outline-none focus:border-[#16a765]" />
              </div>

              <div className="mb-[22px]">
                <label className="block text-[13px] font-semibold text-[#35574b] mb-2">Email</label>
                <input type="email" placeholder="Enter your email" className="w-full h-[52px] border border-[#dce9e1] rounded-xl bg-[#fbfdfc] px-[15px] text-[13px] outline-none focus:border-[#16a765]" />
              </div>

              <div className="mb-[22px]">
                <label className="block text-[13px] font-semibold text-[#35574b] mb-2">Password</label>
                <input type="password" placeholder="Create a password" className="w-full h-[52px] border border-[#dce9e1] rounded-xl bg-[#fbfdfc] px-[15px] text-[13px] outline-none focus:border-[#16a765]" />
              </div>

              <button type="button" className="w-full h-[52px] rounded-xl bg-[#16a765] text-white text-sm font-semibold hover:-translate-y-px transition-all">
                Sign Up
              </button>
            </form>

            <div className="text-[#7a8d84] flex items-center justify-center mt-[25px] gap-1 text-xs">
              <span>Already have an account?</span>
              <Link to="/login" className="text-[#15945b] font-semibold hover:underline">login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
