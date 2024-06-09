import React, { useState, useEffect } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';

const ConfettiAfterSignIn = () => {
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    // Check if the user has just signed in
    const hasJustSignedIn = localStorage.getItem('hasJustSignedIn');
    if (hasJustSignedIn) {
      setIsExploding(true);
      localStorage.removeItem('hasJustSignedIn');
    }
  }, []);

  return (
    <>
      {isExploding && (
        <>
          <div style={{ position: 'fixed', top: 0, left: 0 }}>
            <ConfettiExplosion particleCount={250} />
          </div>
          <div style={{ position: 'fixed', top: 0, right: 0 }}>
            <ConfettiExplosion particleCount={250} />
          </div>
        </>
      )}
    </>
  );
};

export default ConfettiAfterSignIn;
