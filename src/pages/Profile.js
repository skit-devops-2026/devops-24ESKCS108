import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary-dark text-white py-6">
        <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2.5 font-semibold text-xl">
            <span className="flex items-center justify-center w-9 h-9 bg-white text-primary rounded-lg text-lg">🏦</span>
            <span>DigitalBank</span>
          </Link>
          <nav className="flex gap-6">
            <Link to="/profile" className="text-white hover:text-accent transition">Profile</Link>
            <Link to="/cards" className="text-white/80 hover:text-white transition">Cards</Link>
            <Link to="/transactions" className="text-white/80 hover:text-white transition">Transactions</Link>
            <Link to="/settings" className="text-white/80 hover:text-white transition">Settings</Link>
          </nav>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm text-gray-600 mb-1">Checking Balance</h3>
            <p className="text-2xl font-bold text-gray-900">₹1,45,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm text-gray-600 mb-1">Savings Balance</h3>
            <p className="text-2xl font-bold text-gray-900">₹8,20,000</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm text-gray-600 mb-1">Total Balance</h3>
            <p className="text-2xl font-bold text-primary">₹9,65,000</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Account Information</h2>
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Account Holder</span>
              <span className="font-semibold text-gray-900">John Doe</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Account Number</span>
              <span className="font-semibold text-gray-900">**** **** 1234</span>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-200">
              <span className="text-gray-600">Email</span>
              <span className="font-semibold text-gray-900">john.doe@email.com</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
