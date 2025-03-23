import React from 'react';

const GoldenFrame = ({ children, className }) => {
  return (
    <div className={`relative ${className}`}>
      {/* The outer container with golden gradient border */}
      <div className="relative p-1 bg-gradient-to-br from-yellow-300 via-yellow-500 to-amber-700 rounded-md">
        {/* The inner black background with inner golden line */}
        <div className="bg-black w-full h-full relative border border-yellow-500 p-px">
          {/* Additional inner golden line */}
          <div className="border border-amber-600 w-full h-full">
            {/* Content container */}
            <div className="p-4 w-full h-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Example usage component
const ExampleUsage = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-900 p-4">
      <GoldenFrame className="w-full max-w-md aspect-[9/16]">
        <div className="flex items-center justify-center h-full text-center">
          <h2 className="text-xl font-serif text-gold-400">Place your content here</h2>
        </div>
      </GoldenFrame>
    </div>
  );
};

export default ExampleUsage;