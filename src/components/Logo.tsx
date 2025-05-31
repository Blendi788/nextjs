import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Main circle */}
        <circle cx="20" cy="20" r="20" className="fill-purple-600" />
        
        {/* Flower petals */}
        <path
          d="M20 10 C 25 15, 25 15, 20 20 C 15 15, 15 15, 20 10"
          fill="white"
        />
        <path
          d="M30 20 C 25 25, 25 25, 20 20 C 25 15, 25 15, 30 20"
          fill="white"
        />
        <path
          d="M20 30 C 15 25, 15 25, 20 20 C 25 25, 25 25, 20 30"
          fill="white"
        />
        <path
          d="M10 20 C 15 15, 15 15, 20 20 C 15 25, 15 25, 10 20"
          fill="white"
        />
        
        {/* Center circle */}
        <circle cx="20" cy="20" r="3" fill="white" />
      </svg>
    </div>
  );
};

export default Logo; 