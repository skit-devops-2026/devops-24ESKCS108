import React from 'react';
import { Link } from 'react-router-dom';

function Cards() {
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
            <Link to="/cards" className="text-white hover:text-accent transition">Cards</Link>
            <Link to="/transactions" className="text-white/80 hover:text-white transition">Transactions</Link>
            <Link to="/settings" className="text-white/80 hover:text-white transition">Settings</Link>
          </nav>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Cards</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-primary-dark to-primary p-8 rounded-2xl text-white shadow-md">
            <div className="mb-8">
              <p className="text-sm opacity-80 mb-1">Debit Card</p>
              <p className="text-2xl font-bold">₹1,45,000</p>
            </div>
            <p className="text-xl tracking-wider mb-6">**** **** **** 1234</p>
            <div className="flex justify-between">
              <div>
                <p className="text-xs opacity-70">Card Holder</p>
                <p className="font-semibold">JOHN DOE</p>
              </div>
              <div>
                <p className="text-xs opacity-70">Expires</p>
                <p className="font-semibold">12/28</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl text-white shadow-md">
            <div className="mb-8">
              <p className="text-sm opacity-80 mb-1">Credit Card</p>
              <p className="text-2xl font-bold">₹5,00,000</p>
            </div>
            <p className="text-xl tracking-wider mb-6">**** **** **** 5678</p>
            <div className="flex justify-between">
              <div>
                <p className="text-xs opacity-70">Card Holder</p>
                <p className="font-semibold">JOHN DOE</p>
              </div>
              <div>
                <p className="text-xs opacity-70">Expires</p>
                <p className="font-semibold">03/27</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cards;
