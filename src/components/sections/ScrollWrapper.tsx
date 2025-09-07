import React from 'react';

interface ScrollWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollWrapper({ children, className = '' }: ScrollWrapperProps) {
  return (
    <div className={`scroll-wrapper ${className}`}>
      {children}
    </div>
  );
}
