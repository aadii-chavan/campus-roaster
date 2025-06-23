import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  glow = false 
}) => {
  return (
    <div 
      className={`
        bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-2xl
        ${hover ? 'hover:border-primary-500/50 hover:scale-[1.02] transition-all duration-300' : ''}
        ${glow ? 'shadow-lg shadow-primary-500/10' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;