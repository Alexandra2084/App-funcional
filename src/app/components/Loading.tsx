import React from 'react';

const Loading: React.FC = () => (
  <div className="max-w-6xl mx-auto p-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-pulse"
        >
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Loading;