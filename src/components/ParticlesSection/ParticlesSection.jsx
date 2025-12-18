import React, { useState, useEffect } from 'react';
import { SectionContainer, Grain, ContentLayer, Meteor } from './styled';

const ParticleSection = ({ children, id }) => {
  const [particles, setParticles] = useState([]);

  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const particleCount = 300;

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

    const meteorCount = 3;

    const generatedMeteors = Array.from({ length: meteorCount }).map((_, i) => {
      // Começam sempre mais ao topo/esquerda
      const startX = Math.random() * 100;
      const startY = Math.random() * 50; // Começa na metade de cima da tela

      // Ângulo fixo de 45 graus (diagonal perfeita) fica mais estético
      const angle = 220;

      // Distância curta (15vw a 30vw) - Eles não cruzam a tela toda!
      const distance = 15 + Math.random() * 15;

      // Calcula o destino baseado no ângulo de 45 graus
      // Em 45 graus, o deslocamento X é igual ao Y
      const endX = startX + distance;
      const endY = startY + distance;

      return {
        id: `meteor-${i}`,
        startX,
        startY,
        endX,
        endY,
        angle,
        // Duração MUITO rápida (Grok style é "shoosh")
        duration: 0.8 + Math.random() * 0.8,
        // Delay longo entre repetições para não virar chuva
        repeatDelay: 5 + Math.random() * 10,
        initialDelay: 5 + Math.random() * 10,
        // Tamanho aleatório da cauda
        width: 100 + Math.random() * 150,
      };
    });

    setMeteors(generatedMeteors);
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
            y: [0, -40, 0],
            x: [0, 20, -20, 0],
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

      {/* METEOROS RÁPIDOS */}
      {meteors.map((m) => (
        <Meteor
          key={m.id}
          style={{
            width: `${m.width}px`, // Largura dinâmica da cauda
            top: 0,
            left: 0,
            rotate: `${m.angle}deg`,
          }}
          initial={{
            x: `${m.startX}vw`,
            y: `${m.startY}vh`,
            opacity: 0,
          }}
          animate={{
            x: `${m.endX}vw`,
            y: `${m.endY}vh`,
            opacity: [0, 1, 0], // Aparece rápido e some rápido
          }}
          transition={{
            duration: m.duration,
            ease: 'easeIn', // Começa um pouco devagar e acelera (gravidade)
            repeat: Infinity,
            repeatDelay: m.repeatDelay,
            delay: m.initialDelay,
          }}
        />
      ))}

      <ContentLayer>{children}</ContentLayer>
    </SectionContainer>
  );
};

export default ParticleSection;
