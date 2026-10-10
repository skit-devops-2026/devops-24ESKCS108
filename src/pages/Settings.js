import React from 'react';
import { Link } from 'react-router-dom';

function Settings() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary-dark text-white py-6">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2.5 font-semibold text-xl">
            <span className="flex items-center justify-center w-9 h-9 bg-white text-primary rounded-lg text-lg">🏦</span>
            <span>DigitalBank</span>
          </Link>
          <nav className="flex gap-6">
            <Link to="/profile" className="text-white/80 hover:text-white transition">Profile</Link>
            <Link to="/cards" className="text-white/80 hover:text-white transition">Cards</Link>
            <Link to="/transactions" className="text-white/80 hover:text-white transition">Transactions</Link>
            <Link to="/settings" className="text-white hover:text-accent transition">Settings</Link>
          </nav>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Account Settings</h1>

        <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
          <div className="pb-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Profile Settings</h3>
            <button className="px-6 py-2.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition">
              Edit Profile
            </button>
          </div>

          <div className="pb-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Security</h3>
            <button className="px-6 py-2.5 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition">
              Change Password
            </button>
          </div>

          <div className="pb-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 accent-primary" defaultChecked />
              <span className="text-gray-700">Email notifications</span>
            </label>
          </div>

          <div>
            <button className="px-6 py-2.5 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition">
              Log Out
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Settings;
