import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaQuoteLeft } from 'react-icons/fa6';

import * as test from './styled';
import ParticlesSection from '../../components/ParticlesSection/ParticlesSection';
import testimonials from './Messages';

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
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};

export default function Testmonials({ id }) {
  return (
    <ParticlesSection>
      <test.DivTitle
        id={id}
        initial="hidden"
        variants={containerVariants}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <test.Title variants={itemVariants}>
          O que meus clientes estão dizendo?
        </test.Title>
        <test.Information variants={itemVariants}>
          Confira abaixo algumas avaliações sobre os meus serviços.
        </test.Information>
      </test.DivTitle>

      <test.DivContent>
        {testimonials.map((item) => (
          <test.CardTest key={item.id}>
            <test.ImgClient src={item.image} />
            <test.StarWrapper>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </test.StarWrapper>

            <test.ClientName>{item.name}</test.ClientName>
            <test.EventName>{item.event}</test.EventName>
            <FaQuoteLeft className="quote" />
            <test.ClientComent>{item.text}</test.ClientComent>
          </test.CardTest>
        ))}
      </test.DivContent>
    </ParticlesSection>
  );
}
