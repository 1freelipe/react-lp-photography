import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import ParticlesSection from '../../components/ParticlesSection/ParticlesSection';

import * as pricing from './styled';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
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

const leftCardVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};

const rigthCardVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};

export default function Pricing() {
  return (
    <ParticlesSection>
      <pricing.DivInformation
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <pricing.Title variants={itemVariants}>Pacotes</pricing.Title>
        <pricing.Information variants={itemVariants}>
          Confira abaixo, alguns pacotes mais procurados.
        </pricing.Information>
      </pricing.DivInformation>

      <pricing.PricingDiv
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <pricing.CardPricing
          variants={rigthCardVariants}
          whileHover={{ scale: 1.05 }}
        >
          <pricing.Subtitle>Básico</pricing.Subtitle>
          <pricing.PriceTitle>A partir de</pricing.PriceTitle>
          <pricing.Price>R$ 1500,00</pricing.Price>
          <pricing.Package>Casamento</pricing.Package>
        </pricing.CardPricing>

        <pricing.CardPricing
          className="cardFloat"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <pricing.Subtitle $isPremium>
            Premium <FaStar className="star" />
          </pricing.Subtitle>

          <pricing.PriceTitle $isPremium>A partir de</pricing.PriceTitle>
          <pricing.Price $isPremium>R$ 1500,00</pricing.Price>
          <pricing.Package $isPremium>Casamento</pricing.Package>
        </pricing.CardPricing>

        <pricing.CardPricing
          variants={leftCardVariants}
          whileHover={{ scale: 1.05 }}
        >
          <pricing.Subtitle>Intermediário</pricing.Subtitle>
          <pricing.PriceTitle>A partir de</pricing.PriceTitle>
          <pricing.Price>R$ 1500,00</pricing.Price>
          <pricing.Package>Casamento</pricing.Package>
        </pricing.CardPricing>
      </pricing.PricingDiv>

      <pricing.DivArrow>
        <IoIosArrowForward className="Arrow" />
      </pricing.DivArrow>

      <pricing.DivArrow>
        <IoIosArrowBack className="Arrow1" />
      </pricing.DivArrow>
    </ParticlesSection>
  );
}
