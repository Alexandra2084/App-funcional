"use client";
import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <nav className="logo-container">
        <img src="/Notesy.png" alt="Logo" className="logo" />
      </nav>
      <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      <style jsx>{`
        .logo-container {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background-color: #231b31;
          border-bottom: 1px solid #e9ecef;
        }
        .logo {
          transition: transform 0.3s ease-in-out;
          width: 80px;
          height: auto;
        }
        .logo-container:hover .logo {
          animation: jump 0.5s ease-in-out;
        }
        @keyframes jump {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  );
};

export default MainLayout;