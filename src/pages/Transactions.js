import React from 'react';
import { Link } from 'react-router-dom';

function Transactions() {
  const transactions = [
    { id: 1, name: 'Amazon Purchase', amount: -2499, date: '2026-10-09', type: 'debit' },
    { id: 2, name: 'Salary Credit', amount: 85000, date: '2026-10-01', type: 'credit' },
    { id: 3, name: 'Electricity Bill', amount: -1200, date: '2026-09-28', type: 'debit' },
    { id: 4, name: 'Freelance Payment', amount: 15000, date: '2026-09-25', type: 'credit' },
    { id: 5, name: 'Restaurant', amount: -850, date: '2026-09-22', type: 'debit' },
  ];

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
            <Link to="/transactions" className="text-white hover:text-accent transition">Transactions</Link>
            <Link to="/settings" className="text-white/80 hover:text-white transition">Settings</Link>
          </nav>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Transaction History</h1>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex justify-between items-center p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition">
              <div>
                <h3 className="font-semibold text-gray-900">{transaction.name}</h3>
                <p className="text-sm text-gray-600">{transaction.date}</p>
              </div>
              <p className={`text-lg font-bold ${transaction.type === 'credit' ? 'text-success' : 'text-gray-900'}`}>
                {transaction.type === 'credit' ? '+' : ''}{transaction.amount.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Transactions;
