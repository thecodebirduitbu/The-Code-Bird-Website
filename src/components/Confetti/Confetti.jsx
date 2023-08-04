import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import './Confetti.css'; // Import the CSS file

const ConfettiComponent = () => {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`confetti-container ${showConfetti ? 'show' : 'hide'}`}>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={200}
      />
    </div>
  );
};

export default ConfettiComponent;
