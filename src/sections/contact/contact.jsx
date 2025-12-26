import React from 'react';

import * as contact from './styled';
import ParticlesBlack from '../../components/ParticlesBlack/ParticlesBlack';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

export default function Contact({ id }) {
  return (
    <ParticlesBlack>
      <contact.DivTitle
        id={id}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <contact.Title variants={itemVariants}>Formas de Contato</contact.Title>
        <contact.Information variants={itemVariants}>
          Entre em contato conosco da forma que preferir.
        </contact.Information>
      </contact.DivTitle>

      <contact.Container>
        <contact.ContactContainer>
          <contact.Information className="infoContact">
            O formulário levará todas as suas dúvidas direto ao{' '}
            <span>WhatsApp</span> do fotógrafo
          </contact.Information>
        </contact.ContactContainer>
        <contact.LocationContainer />
      </contact.Container>
    </ParticlesBlack>
  );
}
