import React, { useState, useEffect } from 'react';
import { SectionContainer, Grain, ContentLayer } from './styled';

const ParticleSection = ({ children, id }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 100;

    const generatedParticles = Array.from({ length: particleCount }).map(
      (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      }),
    );

    //eslint-disable-next-line
    setParticles(generatedParticles);
  }, []);

  return (
    <SectionContainer id={id}>
      {particles.map((p) => (
        <Grain
          key={p.id}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.initialX}%`,
            top: `${p.initialY}%`,
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
          }}
          animate={{
            y: [0, -80],
            x: [0, 20, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: p.delay,
          }}
        />
      ))}

      <ContentLayer>{children}</ContentLayer>
    </SectionContainer>
  );
};

export default ParticleSection;
