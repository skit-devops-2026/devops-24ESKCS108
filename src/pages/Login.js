import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-[#f4f8f6] flex justify-center items-center p-8">
      <div className="w-full max-w-[1100px] h-[680px] bg-white rounded-[24px] overflow-hidden flex shadow-[0_20px_60px_rgba(21,100,67,0.1)]">

        {/* Left Panel */}
        <div className="w-[42%] min-h-full relative overflow-hidden bg-[#e9f8ef] text-[#12352b] p-12 flex items-center">
          {/* Background circles */}
          <div className="absolute w-[360px] h-[360px] rounded-full bg-[#c9f1d9] top-[-170px] right-[-150px] opacity-75"></div>
          <div className="absolute w-[280px] h-[280px] rounded-full bg-[#b8ebcf] bottom-[-150px] left-[-140px] opacity-65"></div>

          <div className="relative z-10 w-full h-full flex flex-col">
            {/* Brand */}
            <div className="flex items-center gap-2.5 mb-12">
              <div className="w-9 h-9 rounded-[10px] bg-[#16a765] text-white flex justify-center items-center text-xl font-bold shadow-[0_6px_15px_rgba(22,167,101,0.2)]">
                🏦
              </div>
              <span className="text-2xl font-bold text-[#11633f] tracking-tight">Digital Bank</span>
            </div>

            {/* Hero Content */}
            <div className="relative z-10">
              <p className="text-[10px] tracking-[1.6px] font-bold text-[#15945b] mb-3">SMART BANKING</p>

              <h1 className="text-[39px] leading-[1.12] text-[#12352b] mb-[18px] font-bold">
                Banking that<br />
                works for you.
              </h1>

              <p className="max-w-[340px] text-[13px] leading-[1.7] text-[#557267] mb-7">
                Experience seamless digital banking. Simple, secure and designed around your financial future.
              </p>

              {/* Features */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex-shrink-0 rounded-[10px] bg-[#d1f2df] text-[#13985b] flex justify-center items-center text-sm">
                    🛡️
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#164738] mb-0.5">Secure Accounts</h3>
                    <p className="text-[10px] text-[#6a8278]">Your money stays protected.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex-shrink-0 rounded-[10px] bg-[#d1f2df] text-[#13985b] flex justify-center items-center text-sm">
                    ⇄
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#164738] mb-0.5">Instant Transfers</h3>
                    <p className="text-[10px] text-[#6a8278]">Move money whenever you need.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex-shrink-0 rounded-[10px] bg-[#d1f2df] text-[#13985b] flex justify-center items-center text-sm">
                    🎧
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#164738] mb-0.5">24/7 Support</h3>
                    <p className="text-[10px] text-[#6a8278]">We're here whenever you need us.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-[58%] bg-white flex justify-center items-center p-[60px] relative">
          <div className="w-full max-w-[450px]">
            <h2 className="text-[32px] font-bold text-[#12352b] mb-2">Welcome Back</h2>
            <p className="text-sm text-[#789087] mb-8">Login to continue</p>

            <form className="w-full">
              {/* Email Input */}
              <div className="mb-[22px]">
                <label className="block text-[13px] font-semibold text-[#35574b] mb-2">Email</label>
                <div className="w-full h-[52px] flex items-center border border-[#dce9e1] rounded-xl bg-[#fbfdfc] px-[15px] transition-all duration-200">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full h-full border-none outline-none bg-transparent text-[13px] text-[#12352b]"
                  />
                </div>
                <small className="block min-h-[16px] mt-1 text-[11px] text-[#d95353]">{emailError}</small>
              </div>

              {/* Password Input */}
              <div className="mb-[22px]">
                <label className="block text-[13px] font-semibold text-[#35574b] mb-2">Password</label>
                <div className="w-full h-[52px] flex items-center border border-[#dce9e1] rounded-xl bg-[#fbfdfc] px-[15px] transition-all duration-200">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full h-full border-none outline-none bg-transparent text-[13px] text-[#12352b]"
                  />
                  <span
                    onClick={togglePassword}
                    className="text-[#8ba097] text-sm cursor-pointer p-1 hover:text-[#16a765] transition-colors duration-200"
                  >
                    {showPassword ? '👁️' : '👁️'}
                  </span>
                </div>
                <small className="block min-h-[16px] mt-1 text-[11px] text-[#d95353]">{passwordError}</small>
              </div>

              {/* Options */}
              <div className="w-full flex justify-between items-center -mt-1 mb-[26px] text-xs">
                <label className="flex items-center gap-[7px] text-[#657a71] cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-[14px] h-[14px] accent-[#16a765] cursor-pointer"
                  />
                  Remember me?
                </label>
                <a href="#" className="text-[#15945b] font-semibold hover:text-[#0d7044] hover:underline transition-colors duration-200">
                  Forgot Password
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="w-full h-[52px] border-none rounded-xl bg-[#16a765] text-white text-sm font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-px active:bg-[#1d8958]"
              >
                Login
              </button>
            </form>

            {/* Signup Link */}
            <div className="text-[#7a8d84] flex items-center justify-center mt-[25px] gap-1 text-xs">
              <span>Don't have an account?</span>
              <Link to="/signup" className="text-[#15945b] font-semibold hover:underline">
                signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
