import React from 'react';

export const AdminPanel: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="text-box">
        <h1 className="text-3xl font-bold mb-4" style={{ color: '#4b0082' }}>Admin Panel</h1>
        <p style={{ color: '#4b0082' }}>Manage your app configuration, questions, and rewards from this dashboard.</p>
      </div>
    </div>
  );
};
