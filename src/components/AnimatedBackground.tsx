import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="animated-gradient-bg"></div>
    </div>
  );
};

export default AnimatedBackground;
